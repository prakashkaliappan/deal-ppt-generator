import {
  Chart,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartDefinition } from '../types/dealPpt';

Chart.register(ArcElement, BarElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend);

interface RenderOptions {
  width: number;
  height: number;
}

export async function renderChartToDataUrl(
  chart: ChartDefinition,
  options: RenderOptions,
): Promise<string | null> {
  if (typeof document === 'undefined') return null;

  const canvas = document.createElement('canvas');
  canvas.width = options.width;
  canvas.height = options.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const labels = chart.data.map((d) => d.label);
  const values = chart.data.map((d) => d.value);

  switch (chart.type) {
    case 'semi_donut':
      await createSemiDonut(ctx, labels, values, chart.title);
      break;
    case 'density':
      await createDensityPlot(ctx, labels, values, chart.title);
      break;
    case 'geo_map':
      await createGeoMap(ctx, chart);
      break;
    case 'graph':
      await createGraphChart(ctx, chart);
      break;
    default:
      await createBasicBar(ctx, labels, values, chart.title);
  }

  return canvas.toDataURL('image/png');
}

async function createSemiDonut(
  ctx: CanvasRenderingContext2D,
  labels: string[],
  values: number[],
  title: string,
) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
        },
      ],
    },
    options: {
      rotation: -Math.PI,
      circumference: Math.PI,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: title },
      },
    },
  });
  await waitForChartRender();
}

async function createDensityPlot(
  ctx: CanvasRenderingContext2D,
  labels: string[],
  values: number[],
  title: string,
) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Density',
          data: values,
          borderColor: '#58508d',
          backgroundColor: 'rgba(88,80,141,0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        title: { display: true, text: title },
      },
    },
  });
  await waitForChartRender();
}

async function createGeoMap(ctx: CanvasRenderingContext2D, chart: ChartDefinition) {
  const { width, height } = ctx.canvas;
  ctx.fillStyle = '#f0f4ff';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#003366';
  ctx.font = '16px sans-serif';
  ctx.fillText(chart.title || 'Geo Map', 20, 30);

  chart.data.forEach((point) => {
    const x = ((point.lng ?? 0) + 180) * (width / 360);
    const y = ((-1 * (point.lat ?? 0)) + 90) * (height / 180);
    const base = Math.max(...chart.data.map((p) => p.value), 1);
    const radius = Math.max(4, Math.min(20, (point.value / base) * 18));

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255,99,97,0.75)';
    ctx.fill();
  });
}

async function createGraphChart(ctx: CanvasRenderingContext2D, chart: ChartDefinition) {
  const { width, height } = ctx.canvas;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#003366';
  ctx.font = '16px sans-serif';
  ctx.fillText(chart.title || 'Graph', 20, 30);

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;

  const uniqueNodes = Array.from(
    new Set(chart.data.flatMap((d) => [d.fromLabel, d.toLabel].filter(Boolean) as string[])),
  );
  if (uniqueNodes.length === 0) return;

  const positions = new Map<string, { x: number; y: number }>();
  uniqueNodes.forEach((node, idx) => {
    const angle = (2 * Math.PI * idx) / uniqueNodes.length;
    positions.set(node, {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  });

  ctx.strokeStyle = '#c7c7c7';
  chart.data.forEach((d) => {
    const from = d.fromLabel && positions.get(d.fromLabel);
    const to = d.toLabel && positions.get(d.toLabel);
    if (!from || !to) return;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  });

  uniqueNodes.forEach((node) => {
    const pos = positions.get(node)!;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#58508d';
    ctx.fill();

    ctx.fillStyle = '#111111';
    ctx.font = '11px sans-serif';
    ctx.fillText(node, pos.x + 12, pos.y + 4);
  });
}

async function createBasicBar(
  ctx: CanvasRenderingContext2D,
  labels: string[],
  values: number[],
  title: string,
) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: title,
          data: values,
          backgroundColor: 'rgba(0,63,92,0.8)',
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        title: { display: true, text: title },
      },
    },
  });
  await waitForChartRender();
}

function waitForChartRender(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 50));
}

