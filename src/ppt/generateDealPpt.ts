import PptxGenJS from 'pptxgenjs';
import type {
  DealPptPayload,
  SlideContent,
  ChartDefinition,
  ImageDefinition,
  TableDefinition,
} from '../types/dealPpt';
import { renderChartToDataUrl } from '../utils/chartImageRenderer.ts';
import { resolveAssetPath } from '../utils/assets';

export async function generateDealPpt(payload: DealPptPayload) {
  const pptx = new PptxGenJS();

  pptx.defineSlideMaster({
    title: 'MASTER',
    background: { color: 'FFFFFF' },
    objects: [
      // pptxgenjs types are quite strict; keep shapes compatible with runtime.
      { line: { x: 0, y: 6.9, w: 10, h: 0, line: { color: 'D9D9D9', width: 1 } } } as any,
      {
        text: {
          text: `${payload.fundName} | ${payload.sponsorName}`,
          options: {
            x: 0.3,
            y: 7.0,
            fontSize: 8,
            color: '777777',
          },
        },
      },
      {
        text: {
          text: `Confidential – ${payload.dealName}`,
          options: {
            x: 6.5,
            y: 7.0,
            fontSize: 8,
            color: '777777',
            align: 'right',
            w: 3.2,
          },
        },
      },
    ],
    slideNumber: { x: 0.1, y: 6.9, color: '777777', fontSize: 8 },
  });

  const cover = pptx.addSlide({ masterName: 'MASTER' });
  cover.addText(payload.dealName, {
    x: 0.7,
    y: 1.8,
    fontSize: 32,
    bold: true,
    color: '003366',
  });
  cover.addText('Investment Committee Pitch Deck', {
    x: 0.7,
    y: 2.6,
    fontSize: 18,
    color: '666666',
  });
  if (payload.logoAssetKey) {
    const logoPath = resolveAssetPath(payload.logoAssetKey);
    if (logoPath) {
      cover.addImage({ path: logoPath, x: 7.0, y: 0.6, w: 2.0 });
    }
  }

  for (const slideContent of payload.slides) {
    const slide = pptx.addSlide({ masterName: 'MASTER' });
    await addSlideContent(slide, slideContent);
  }

  await pptx.writeFile({
    fileName: `${payload.dealName.replace(/[^\w]+/g, '_')}_IC_Deck.pptx`,
  });
}

async function addSlideContent(slide: PptxGenJS.Slide, content: SlideContent) {
  slide.addText(content.title, {
    x: 0.5,
    y: 0.4,
    fontSize: 24,
    bold: true,
    color: '003366',
  });

  slide.addText(content.summary, {
    x: 0.5,
    y: 1.0,
    w: 9.0,
    fontSize: 12,
    color: '444444',
  });

  const isToc = content.meta?.section === 'Table of Contents';
  const bottomY = 6.8;

  if (isToc) {
    const table = content.tables?.[0];
    if (table) {
      const rows = buildTableRows(table);
      const h = bottomY - 1.8;

      slide.addTable(rows as any, {
        x: 0.5,
        y: 1.8,
        w: 9.0,
        h,
        fontSize: 10,
      });
    } else if (content.bulletPoints?.length) {
      slide.addText(
        content.bulletPoints.map((b) => `• ${b}`).join('\n'),
        {
          x: 0.5,
          y: 1.8,
          w: 9.0,
          fontSize: 11,
          color: '333333',
          bullet: true,
        },
      );
    }
    return;
  }

  if (content.bulletPoints?.length) {
    const maxBullets = 8;
    const bullets =
      content.bulletPoints.length > maxBullets
        ? [...content.bulletPoints.slice(0, maxBullets), '…']
        : content.bulletPoints;

    slide.addText(
      bullets.map((b) => `• ${b}`).join('\n'),
      {
        x: 0.5,
        y: 1.8,
        w: 4.5,
        fontSize: 11,
        color: '333333',
        bullet: true,
      },
    );
  }

  let rightY = 1.8;

  if (content.charts?.length) {
    for (const chart of content.charts) {
      const available = bottomY - rightY;
      if (available < 1.6) break;
      rightY = await addChart(slide, chart, rightY, available);
      if (rightY > bottomY) break;
    }
  }

  if (content.tables?.length) {
    for (const table of content.tables) {
      const available = bottomY - rightY;
      if (available < 1.6) break;

      const rows = buildTableRows(table);
      const h = available;

      slide.addTable(rows as any, {
        x: 5.2,
        y: rightY,
        w: 4.0,
        h,
        fontSize: 9,
      });

      rightY += h + 0.2;
      if (rightY > bottomY) break;
    }
  }

  if (content.images?.length) {
    for (const img of content.images) {
      const available = bottomY - rightY;
      if (available < 1.4) break;
      rightY = await addImage(slide, img, rightY, available);
      if (rightY > bottomY) break;
    }
  }
}

async function addChart(
  slide: PptxGenJS.Slide,
  chart: ChartDefinition,
  y: number,
  maxHeight: number,
): Promise<number> {
  const x = 5.2;
  const w = 4.0;
  const h = Math.min(2.0, Math.max(1.4, maxHeight - 0.3));

  const simpleTypes: ChartDefinition['type'][] = ['pie', 'bar', 'line', 'area', 'stacked_bar', 'donut'];

  if (simpleTypes.includes(chart.type)) {
    const pptData = [
      {
        name: chart.title,
        labels: chart.data.map((d) => d.label),
        values: chart.data.map((d) => d.value),
      },
    ];

    let pptType = 'bar';

    switch (chart.type) {
      case 'pie':
        pptType = 'pie';
        break;
      case 'donut':
        pptType = 'doughnut';
        break;
      case 'line':
        pptType = 'line';
        break;
      case 'area':
        pptType = 'area';
        break;
      case 'stacked_bar':
        pptType = 'bar';
        break;
      default:
        pptType = 'bar';
    }

    slide.addChart(pptType as any, pptData as any, {
      x,
      y,
      w,
      h,
      showLegend: true,
      barGrouping: chart.type === 'stacked_bar' ? 'stacked' : 'clustered',
      dataLabelPosition: 'bestFit',
    });

    slide.addText(chart.title, {
      x,
      y: y - 0.2,
      fontSize: 10,
      color: '555555',
    });

    return y + h + 0.3;
  }

  const dataUrl = await renderChartToDataUrl(chart, { width: 800, height: 400 });
  if (dataUrl) {
    slide.addImage({ data: dataUrl, x, y, w, h });
    slide.addText(chart.title, {
      x,
      y: y - 0.2,
      fontSize: 10,
      color: '555555',
    });
    return y + h + 0.3;
  }

  return y;
}

async function addImage(
  slide: PptxGenJS.Slide,
  img: ImageDefinition,
  y: number,
  maxHeight: number,
): Promise<number> {
  const x = 5.2;
  const w = 4.0;
  const h = Math.min(1.8, Math.max(1.2, maxHeight - 0.2));

  let path: string | undefined;

  if (img.assetKey) {
    path = resolveAssetPath(img.assetKey);
  } else if (img.url) {
    path = img.url;
  }

  if (path) {
    slide.addImage({ path, x, y, w, h });
  }

  if (img.title) {
    slide.addText(img.title, {
      x,
      y: y - 0.2,
      fontSize: 10,
      color: '555555',
    });
  }

  return y + h + 0.3;
}

function buildTableRows(table: TableDefinition): any[] {
  const headerRow = table.headers.map((text) => ({
    text,
    options: {
      fill: 'F2F2F2',
      bold: true,
      color: '333333',
    },
  }));

  const bodyRows = table.rows.map((r) =>
    r.cells.map((c) => ({
      text: c.text,
      options: {
        fill: 'FFFFFF',
        color: '222222',
      },
    })),
  );

  return [headerRow, ...bodyRows];
}

