import type { DealPptPayload } from '../types/dealPpt';

export const sampleDealData: DealPptPayload = {
  dealId: 'DL-2026-0007',
  dealName: 'Acquisition of ABC Mall (Mumbai)',
  createdAt: '2026-03-19T10:00:00Z',
  sponsorName: 'D-Learning Capital',
  fundName: 'D-Learning Real Assets Fund I',
  slides: [
    {
      title: 'Table of Contents',
      summary:
        'This deck summarizes the investment thesis, market context, asset details, diligence findings, and underwriting case for the proposed acquisition.',
      bulletPoints: [
        '1. Executive Summary',
        '2. Investment Prospectus',
        '3. Market Opportunity & Context',
        '4. Asset Overview & Property Details',
        '5. Due Diligence Summary',
        '6. Financial Returns Analysis',
        '7. Financial Underwriting',
        '8. Sensitivity & Scenario Analysis',
        '9. ESG & Sustainability',
        '10. Risk Assessment & Mitigation',
        '11. Fund Structure & Terms',
        '12. Exit Strategy',
        '13. Implementation Timeline',
        '14. Investment Recommendation & Next Steps',
      ],
      tables: [
        {
          id: 'toc_table',
          title: 'Contents',
          headers: ['#', 'Section'],
          rows: [
            { cells: [{ text: '1' }, { text: 'Executive Summary' }] },
            { cells: [{ text: '2' }, { text: 'Investment Prospectus' }] },
            { cells: [{ text: '3' }, { text: 'Market Opportunity & Context' }] },
            { cells: [{ text: '4' }, { text: 'Asset Overview & Property Details' }] },
            { cells: [{ text: '5' }, { text: 'Due Diligence Summary' }] },
            { cells: [{ text: '6' }, { text: 'Financial Returns Analysis' }] },
            { cells: [{ text: '7' }, { text: 'Financial Underwriting' }] },
            { cells: [{ text: '8' }, { text: 'Sensitivity & Scenario Analysis' }] },
            { cells: [{ text: '9' }, { text: 'ESG & Sustainability' }] },
            { cells: [{ text: '10' }, { text: 'Risk Assessment & Mitigation' }] },
            { cells: [{ text: '11' }, { text: 'Fund Structure & Terms' }] },
            { cells: [{ text: '12' }, { text: 'Exit Strategy' }] },
            { cells: [{ text: '13' }, { text: 'Implementation Timeline' }] },
            { cells: [{ text: '14' }, { text: 'Investment Recommendation & Next Steps' }] },
          ],
        },
      ],
      meta: { section: 'Table of Contents' },
    },

    // Executive Summary (slide 1)
    {
      title: 'Executive Summary',
      summary:
        'Proposed acquisition of a stabilized, institution-grade retail asset with embedded value-add levers. The deal targets resilient cash flows with upside from leasing optimization and selective capex.',
      bulletPoints: [
        'Asset type: Regional Mall',
        'Location: Mumbai, India',
        'Acquisition price: INR 1,200 Cr',
        'Target fund size: INR 5,000 Cr',
        'Capital required (equity): INR 420 Cr',
      ],
      charts: [
        {
          id: 'cap_stack',
          title: 'Capital Stack',
          type: 'donut',
          data: [
            { label: 'Equity', value: 35 },
            { label: 'Senior Debt', value: 55 },
            { label: 'Pref Equity', value: 10 },
          ],
          unit: '%',
        },
      ],
      
      meta: { section: 'Executive Summary', page: 1 },
    },
    // Executive Summary (slide 2)
    {
      title: 'Executive Summary (Highlights)',
      summary:
        'The investment provides downside protection through diversified tenants and a strong micro-market. Upside is driven by re-leasing spreads and NOI expansion over a 36–48 month business plan.',
      bulletPoints: [
        'Stabilized occupancy with near-term rollover opportunities',
        'Strong catchment demographics and transport connectivity',
        'Defined capex program focused on revenue uplift',
        'Clear exit optionality through sale/refi',
      ],
      charts: [
        {
          id: 'returns_snapshot',
          title: 'Returns Snapshot',
          type: 'bar',
          data: [
            { label: 'Levered IRR', value: 17.2 },
            { label: 'Unlevered IRR', value: 11.8 },
            { label: 'Equity Multiple', value: 1.9 },
          ],
        },
      ],
      meta: { section: 'Executive Summary', page: 2 },
    },

    // Investment Prospectus (slides 2-3)
    {
      title: 'Investment Prospectus',
      summary:
        'Pursue this opportunity to acquire a prime retail asset at an attractive basis with multiple, actionable value-add initiatives over the hold period.',
      bulletPoints: [
        'Aligned with portfolio strategy: Core+ income',
        'De-risked demand: diversified tenant mix',
        'Operational uplift: leasing and marketing',
      ],
      charts: [
        {
          id: 'value_add',
          title: 'Value-Add Opportunities (sample)',
          type: 'pie',
          data: [
            { label: 'Re-leasing spreads', value: 35 },
            { label: 'Opex optimization', value: 20 },
            { label: 'Capex ROI projects', value: 25 },
            { label: 'Ancillary income', value: 20 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Investment Prospectus', page: 1 },
    },
    {
      title: 'Investment Prospectus (Value Add)',
      summary:
        'Value-add program focuses on high-impact levers with disciplined execution and measurable NOI contribution.',
      bulletPoints: [
        'Leasing: Anchor remix',
        'Leasing: Inline re-pricing',
        'Revenue: Parking + signage',
        'Ops: Energy savings',
        'Capex: Food court refresh',
      ],
      tables: [
        {
          id: 'icons_box',
          title: 'Value Add (2–3 words each)',
          headers: ['Category', 'Initiative'],
          rows: [
            { cells: [{ text: 'Leasing' }, { text: 'Anchor remix' }] },
            { cells: [{ text: 'Leasing' }, { text: 'Inline repricing' }] },
            { cells: [{ text: 'Revenue' }, { text: 'Ancillary income' }] },
            { cells: [{ text: 'Ops' }, { text: 'Energy savings' }] },
            { cells: [{ text: 'Capex' }, { text: 'Amenity upgrade' }] },
          ],
        },
      ],
      meta: { section: 'Investment Prospectus', page: 2 },
    },

    // Market Opportunity & Context (slides 2-3)
    {
      title: 'Market Opportunity & Context',
      summary:
        'Macro tailwinds and improving consumer spend support retail demand. The micro-market benefits from strong population growth, infrastructure investment, and limited new competitive supply.',
      bulletPoints: [
        'Macro: rising discretionary spend',
        'Geography: transit-led development',
        'PESTLE: stable policy environment',
        'Economic: improving employment',
      ],
      charts: [
        {
          id: 'pestle',
          title: 'Macro Drivers (PESTLE – sample weights)',
          type: 'donut',
          data: [
            { label: 'Political', value: 10 },
            { label: 'Economic', value: 25 },
            { label: 'Social', value: 20 },
            { label: 'Tech', value: 15 },
            { label: 'Legal', value: 10 },
            { label: 'Env', value: 20 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Market Opportunity & Context', page: 1 },
    },
    {
      title: 'Market Opportunity & Context (Competition)',
      summary:
        'The competitive landscape is rational with differentiated positioning. Barriers to entry include land scarcity, entitlement timelines, and capital intensity.',
      bulletPoints: [
        'Competitive set concentrated within 12–15 km',
        'High entry barriers: land + approvals',
        'Advantages: connectivity and brand tenant cluster',
      ],
      charts: [
        {
          id: 'comp_landscape',
          title: 'Competitive Landscape (Sales Index)',
          type: 'bar',
          data: [
            { label: 'ABC Mall (target)', value: 100 },
            { label: 'Comp A', value: 92 },
            { label: 'Comp B', value: 87 },
            { label: 'Comp C', value: 78 },
          ],
        },
      ],
      meta: { section: 'Market Opportunity & Context', page: 2 },
    },

    // Asset Overview & Property Details (slides 2-3)
    {
      title: 'Asset Overview & Property Details',
      summary:
        'The asset is a modern retail complex with strong accessibility and multiple transit linkages. Physical configuration supports tenant mix optimization and experiential retail upgrades.',
      bulletPoints: [
        'Accessibility: highway + metro linkage',
        'Asset size: 1.2M sq ft GLA',
        'Configuration: 4 levels + parking',
        'Building condition: good (sample)',
      ],
      charts: [
        {
          id: 'geo_bubbles',
          title: 'Catchment Reach (sample geo bubbles)',
          type: 'geo_map',
          data: [
            { label: 'Mumbai', value: 100, lat: 19.076, lng: 72.878 },
            { label: 'Navi Mumbai', value: 70, lat: 19.033, lng: 73.029 },
            { label: 'Thane', value: 55, lat: 19.218, lng: 72.978 },
          ],
        },
      ],
      meta: { section: 'Asset Overview & Property Details', page: 1 },
    },
    {
      title: 'Asset Overview (Occupancy & Lease Expiry)',
      summary:
        'Current occupancy is stabilized with an attractive tenant profile. Near-term rollover creates scope for re-leasing spreads; tenant quality remains strong.',
      bulletPoints: [
        'Occupancy: 94% (sample)',
        'Top 10 tenants: 48% of rent',
        'Lease rollover: Y2–Y3 concentrated',
      ],
      charts: [
        {
          id: 'occupancy',
          title: 'Occupancy Trend (sample)',
          type: 'line',
          data: [
            { label: 'Q1', value: 91 },
            { label: 'Q2', value: 92 },
            { label: 'Q3', value: 93 },
            { label: 'Q4', value: 94 },
          ],
          unit: '%',
        },
        {
          id: 'lease_expiry',
          title: 'Lease Expiry Heat (proxy)',
          type: 'stacked_bar',
          data: [
            { label: 'Y1', value: 12 },
            { label: 'Y2', value: 28 },
            { label: 'Y3', value: 34 },
            { label: 'Y4', value: 18 },
            { label: 'Y5+', value: 8 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Asset Overview & Property Details', page: 2 },
    },

    // Due Diligence Summary (slides 2-3)
    {
      title: 'Due Diligence Summary',
      summary:
        'Diligence indicates the asset is compliant with key legal and regulatory requirements, with manageable technical items identified for remediation as part of the capex plan.',
      bulletPoints: [
        'Legal: title and encumbrance checks cleared (sample)',
        'Technical: minor MEP upgrades identified',
        'Planning: permits and occupancy certificates verified',
      ],
      tables: [
        {
          id: 'dd_table',
          title: 'Diligence Findings (sample)',
          headers: ['Workstream', 'Status', 'Key Note'],
          rows: [
            { cells: [{ text: 'Legal' }, { text: 'Green' }, { text: 'No material issues' }] },
            { cells: [{ text: 'Technical' }, { text: 'Amber' }, { text: 'MEP preventive capex' }] },
            { cells: [{ text: 'Regulatory' }, { text: 'Green' }, { text: 'Compliant filings' }] },
            { cells: [{ text: 'Lease Audit' }, { text: 'Amber' }, { text: 'Rollover in Y2–Y3' }] },
          ],
        },
      ],
      meta: { section: 'Due Diligence Summary', page: 1 },
    },
    {
      title: 'Due Diligence (Risks & Mitigations)',
      summary:
        'Key risks are concentrated around leasing execution and capex delivery, mitigated through phased rollout, tenant engagement, and conservative underwriting buffers.',
      bulletPoints: [
        'Risk: leasing delays → phased renewals',
        'Risk: capex overrun → GMP contracting',
        'Risk: compliance drift → quarterly audits',
      ],
      charts: [
        {
          id: 'risk_mix',
          title: 'Risk Mix (sample)',
          type: 'semi_donut',
          data: [
            { label: 'Market', value: 25 },
            { label: 'Asset', value: 20 },
            { label: 'Financial', value: 25 },
            { label: 'Execution', value: 30 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Due Diligence Summary', page: 2 },
    },

    // Financial Returns Analysis (slides 2-3)
    {
      title: 'Financial Returns Analysis',
      summary:
        'The transaction delivers attractive levered returns supported by stable NOI growth and moderate leverage. Return attribution is balanced between income and appreciation.',
      bulletPoints: [
        'Levered IRR: 17.2% (base case)',
        'Unlevered IRR: 11.8% (base case)',
        'Equity multiple: 1.9x (base case)',
      ],
      charts: [
        {
          id: 'irr_scenarios',
          title: 'IRR by Scenario',
          type: 'bar',
          data: [
            { label: 'Downside', value: 14.1 },
            { label: 'Base', value: 17.2 },
            { label: 'Upside', value: 19.5 },
          ],
          unit: '%',
        },
        {
          id: 'return_attr',
          title: 'Return Attribution',
          type: 'donut',
          data: [
            { label: 'Income', value: 60 },
            { label: 'Appreciation', value: 40 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Financial Returns Analysis', page: 1 },
    },
    {
      title: 'Financial Returns (Cash Flows & NOI Bridge)',
      summary:
        'Cash-on-cash yields increase as leasing and revenue initiatives ramp. NOI bridge illustrates drivers of NOI growth from pricing, occupancy and opex savings.',
      bulletPoints: [
        'CoC yield ramps from 5.5% to 8.0% (Y1–Y5)',
        'NOI growth driven by leasing spreads and opex savings',
      ],
      charts: [
        {
          id: 'coc',
          title: 'Cash-on-Cash Yield by Year',
          type: 'line',
          data: [
            { label: 'Y1', value: 5.5 },
            { label: 'Y2', value: 6.2 },
            { label: 'Y3', value: 7.0 },
            { label: 'Y4', value: 7.4 },
            { label: 'Y5', value: 8.0 },
          ],
          unit: '%',
        },
        {
          id: 'noi_bridge',
          title: 'NOI Bridge (sample drivers)',
          type: 'bar',
          data: [
            { label: 'Base NOI', value: 100 },
            { label: '+ Leasing', value: 18 },
            { label: '+ Ancillary', value: 7 },
            { label: '- Opex', value: -6 },
            { label: 'Pro-forma NOI', value: 119 },
          ],
        },
      ],
      meta: { section: 'Financial Returns Analysis', page: 2 },
    },

    // Financial Underwriting (slides 2-3)
    {
      title: 'Financial Underwriting',
      summary:
        'Underwriting reflects conservative assumptions for rent growth, occupancy and exit cap rates. Sources & uses and capital structure are designed to balance returns and resilience.',
      bulletPoints: [
        'Sources: debt, equity, pref equity',
        'Uses: purchase, costs, capex, reserves',
        'NPV positive under base case',
      ],
      charts: [
        {
          id: 'sources_uses',
          title: 'Sources & Uses (sample)',
          type: 'stacked_bar',
          data: [
            { label: 'Debt', value: 660 },
            { label: 'Equity', value: 420 },
            { label: 'Pref', value: 120 },
          ],
          unit: 'INR Cr',
        },
      ],
      tables: [
        {
          id: 'assumptions',
          title: 'Key Underwriting Assumptions (sample)',
          headers: ['Assumption', 'Base'],
          rows: [
            { cells: [{ text: 'Rent Growth' }, { text: '4.0% p.a.' }] },
            { cells: [{ text: 'Stabilized Occupancy' }, { text: '96%' }] },
            { cells: [{ text: 'Exit Cap Rate' }, { text: '7.25%' }] },
            { cells: [{ text: 'Opex Inflation' }, { text: '5.0% p.a.' }] },
          ],
        },
      ],
      meta: { section: 'Financial Underwriting', page: 1 },
    },
    {
      title: 'Financial Underwriting (10Y Projection)',
      summary:
        'Projected cash flows reflect ramp-up during execution followed by stabilized income. The profile supports refinance optionality as NOI increases.',
      bulletPoints: [
        'Stabilization in 24–30 months',
        'Refinance possible post NOI expansion',
        'Exit driven by NOI and cap rate discipline',
      ],
      charts: [
        {
          id: 'area_cf',
          title: 'Projected Net Cash Flow (sample)',
          type: 'area',
          data: [
            { label: 'Y1', value: 8 },
            { label: 'Y2', value: 16 },
            { label: 'Y3', value: 28 },
            { label: 'Y4', value: 34 },
            { label: 'Y5', value: 38 },
            { label: 'Y6', value: 40 },
          ],
          unit: 'INR Cr',
        },
        {
          id: 'npv_density_proxy',
          title: 'NPV Distribution (proxy density)',
          type: 'density',
          data: [
            { label: '-1σ', value: 12 },
            { label: '-0.5σ', value: 25 },
            { label: 'Mean', value: 48 },
            { label: '+0.5σ', value: 30 },
            { label: '+1σ', value: 15 },
          ],
          unit: 'INR Cr',
        },
      ],
      meta: { section: 'Financial Underwriting', page: 2 },
    },

    // Sensitivity & Scenario Analysis (slides 2)
    {
      title: 'Sensitivity & Scenario Analysis',
      summary:
        'Upside/downside sensitivities show returns remain acceptable under moderate stress. Key break-even points are linked to rent shortfall, leasing delays and interest rate changes.',
      bulletPoints: [
        'Rent shortfall sensitivity (±5–10%)',
        'Leasing delays (0–12 months)',
        'Interest rates (±150 bps)',
        'Break-even occupancy and rent',
      ],
      charts: [
        {
          id: 'sens_rent',
          title: 'IRR Sensitivity to Rent Shortfall',
          type: 'line',
          data: [
            { label: '-10%', value: 14.6 },
            { label: '-5%', value: 15.9 },
            { label: 'Base', value: 17.2 },
            { label: '+5%', value: 18.3 },
            { label: '+10%', value: 19.1 },
          ],
          unit: '%',
        },
        {
          id: 'sens_rates',
          title: 'IRR Sensitivity to Interest Rates',
          type: 'bar',
          data: [
            { label: '+150 bps', value: 15.1 },
            { label: '+75 bps', value: 16.1 },
            { label: 'Base', value: 17.2 },
            { label: '-75 bps', value: 18.1 },
            { label: '-150 bps', value: 18.8 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Sensitivity & Scenario Analysis', page: 1 },
    },
    {
      title: 'Sensitivity (Break-Even Points)',
      summary:
        'Break-even analysis highlights thresholds for key variables, providing clear guardrails for execution monitoring and reporting to IC.',
      bulletPoints: [
        'Break-even occupancy: 89% (sample)',
        'Break-even rent growth: 2.0% p.a. (sample)',
        'Break-even leasing delay: 9 months (sample)',
      ],
      tables: [
        {
          id: 'breakeven',
          title: 'Break-Even Summary (sample)',
          headers: ['Variable', 'Break-even', 'Notes'],
          rows: [
            { cells: [{ text: 'Occupancy' }, { text: '89%' }, { text: 'Below this, IRR < 15%' }] },
            { cells: [{ text: 'Rent Growth' }, { text: '2.0% p.a.' }, { text: 'Below this, NPV ~ 0' }] },
            { cells: [{ text: 'Leasing Delay' }, { text: '9 months' }, { text: 'Execution risk threshold' }] },
          ],
        },
      ],
      meta: { section: 'Sensitivity & Scenario Analysis', page: 2 },
    },

    // ESG & Sustainability (slides 2)
    {
      title: 'ESG & Sustainability',
      summary:
        'ESG plan targets measurable efficiency gains and certification outcomes while improving tenant and customer experience. Climate risks are assessed with adaptation measures.',
      bulletPoints: [
        'Certification target: IGBC/LEED (sample)',
        'Energy: HVAC optimization + LED retrofit',
        'Water: reuse and smart metering',
        'Waste: segregation and vendor SLAs',
      ],
      charts: [
        {
          id: 'carbon',
          title: 'Carbon Reduction Roadmap (sample)',
          type: 'line',
          data: [
            { label: 'Baseline', value: 100 },
            { label: 'Y1', value: 92 },
            { label: 'Y2', value: 86 },
            { label: 'Y3', value: 80 },
            { label: 'Y4', value: 76 },
          ],
          unit: 'Index',
        },
      ],
      meta: { section: 'ESG & Sustainability', page: 1 },
    },
    {
      title: 'ESG (Climate Risk & Resilience)',
      summary:
        'Climate risk assessment focuses on heat stress and flooding with mitigation through engineering controls and operational preparedness.',
      bulletPoints: [
        'Risk: heat stress → cooling efficiency program',
        'Risk: flooding → drainage upgrades + SOPs',
        'Resilience: backup power and safety drills',
      ],
      charts: [
        {
          id: 'esg_mix',
          title: 'ESG Focus Areas (sample)',
          type: 'semi_donut',
          data: [
            { label: 'Energy', value: 45 },
            { label: 'Water', value: 20 },
            { label: 'Waste', value: 15 },
            { label: 'Safety', value: 20 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'ESG & Sustainability', page: 2 },
    },

    // Risk Assessment & Mitigation (slides 2)
    {
      title: 'Risk Assessment & Mitigation',
      summary:
        'Primary risks include market cycle exposure, asset-specific leasing execution, financing terms, and regulatory requirements. Mitigation actions are embedded in the business plan and governance cadence.',
      bulletPoints: [
        'Market: demand softening → conservative leasing assumptions',
        'Asset: rollover concentration → early renewals',
        'Financial: rate risk → hedging policy',
        'Execution: capex timeline → PMO + controls',
      ],
      charts: [
        {
          id: 'risk_categories',
          title: 'Risk Categories (sample)',
          type: 'donut',
          data: [
            { label: 'Market', value: 25 },
            { label: 'Asset', value: 20 },
            { label: 'Financial', value: 25 },
            { label: 'Execution', value: 20 },
            { label: 'Reg/Env', value: 10 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Risk Assessment & Mitigation', page: 1 },
    },
    {
      title: 'Risk Mitigation Plan (Actions)',
      summary:
        'Mitigation plan assigns owners and timelines to each risk workstream to ensure accountability and measurable outcomes.',
      bulletPoints: [
        'Monthly leasing committee and KPI dashboard',
        'Capex gating with vendor milestone payments',
        'Quarterly compliance and ESG reporting',
      ],
      tables: [
        {
          id: 'mitigation_table',
          title: 'Mitigation Actions (sample)',
          headers: ['Risk', 'Mitigation', 'Owner'],
          rows: [
            { cells: [{ text: 'Leasing delays' }, { text: 'Pre-negotiate renewals' }, { text: 'Asset Mgmt' }] },
            { cells: [{ text: 'Rate volatility' }, { text: 'Interest rate hedge' }, { text: 'Treasury' }] },
            { cells: [{ text: 'Capex overrun' }, { text: 'GMP / competitive bids' }, { text: 'PMO' }] },
          ],
        },
      ],
      meta: { section: 'Risk Assessment & Mitigation', page: 2 },
    },

    // Fund Structure & Terms (slides 2-3)
    {
      title: 'Fund Structure & Terms',
      summary:
        'The investment will be held through the Fund’s acquisition vehicle with standard governance, reporting and decision rights aligned to LP expectations.',
      bulletPoints: [
        'Vehicle: SPV under Fund I (sample)',
        'Investment period: 3 years',
        'Fund life: 7+1+1 years',
        'Reporting: quarterly + annual audits',
      ],
      charts: [
        {
          id: 'fund_terms',
          title: 'Term Overview (sample)',
          type: 'bar',
          data: [
            { label: 'Investment Period (yrs)', value: 3 },
            { label: 'Fund Life (yrs)', value: 7 },
            { label: 'Extensions (yrs)', value: 2 },
          ],
        },
      ],
      meta: { section: 'Fund Structure & Terms', page: 1 },
    },
    {
      title: 'Fund Structure (Governance & Reporting)',
      summary:
        'Governance framework includes IC approvals, defined reporting cadence, and risk/ESG disclosures. Decision rights are aligned to the fund documents.',
      bulletPoints: [
        'IC approval gates for capex and major leases',
        'Monthly operating report with KPIs',
        'Quarterly valuation and covenant review',
      ],
      charts: [
        {
          id: 'governance_graph',
          title: 'Governance Flow (sample graph)',
          type: 'graph',
          data: [
            { label: '1', value: 1, fromLabel: 'Asset', toLabel: 'PMO' },
            { label: '2', value: 1, fromLabel: 'PMO', toLabel: 'IC' },
            { label: '3', value: 1, fromLabel: 'IC', toLabel: 'LPs' },
            { label: '4', value: 1, fromLabel: 'Asset', toLabel: 'Lenders' },
          ],
        },
      ],
      meta: { section: 'Fund Structure & Terms', page: 2 },
    },

    // Exit Strategy (slide 1)
    {
      title: 'Exit Strategy',
      summary:
        'Exit strategy targets value realization after stabilization through either sale to a core buyer or refinancing, depending on market conditions and capital markets liquidity.',
      bulletPoints: [
        'Exit routes: sale or refinancing',
        'Timeline: year 4–5 (sample)',
        'Exit cap rate: 7.25% (sample)',
        'Milestones: NOI expansion + tenant upgrades',
      ],
      charts: [
        {
          id: 'exit_options',
          title: 'Exit Route Preference (sample)',
          type: 'pie',
          data: [
            { label: 'Sale', value: 65 },
            { label: 'Refinance', value: 35 },
          ],
          unit: '%',
        },
      ],
      meta: { section: 'Exit Strategy' },
    },

    // Implementation Timeline (slide 1)
    {
      title: 'Implementation Timeline',
      summary:
        'Implementation plan spans acquisition close through stabilization, with clear decision gates and critical path activities to manage leasing and capex execution.',
      bulletPoints: [
        'Close + onboarding: Month 0–2',
        'Capex execution: Month 3–18',
        'Leasing ramp: Month 3–24',
        'Stabilization: Month 24–30',
        'IC gate: capex release + major leases',
      ],
      charts: [
        {
          id: 'timeline',
          title: 'Milestones (sample)',
          type: 'bar',
          data: [
            { label: 'Close', value: 2 },
            { label: 'Capex', value: 15 },
            { label: 'Leasing', value: 22 },
            { label: 'Stabilize', value: 30 },
          ],
          unit: 'Months',
        },
      ],
      meta: { section: 'Implementation Timeline' },
    },

    // Investment Recommendation & Next Steps (slide 1)
    {
      title: 'Investment Recommendation & Next Steps',
      summary:
        'Request IC approval to proceed with acquisition under the base case assumptions, subject to final lender term sheet and completion of remaining closing conditions.',
      bulletPoints: [
        'IC approval requested: proceed to sign & close',
        'Capital sought: INR 420 Cr equity',
        'Decision timeline: 2 weeks (sample)',
        'Next steps: finalize debt, complete closing checklist',
      ],
      tables: [
        {
          id: 'next_steps',
          title: 'Next Steps (sample)',
          headers: ['Action', 'Owner', 'Timing'],
          rows: [
            { cells: [{ text: 'Finalize lender term sheet' }, { text: 'Treasury' }, { text: 'Week 1' }] },
            { cells: [{ text: 'Complete closing diligence items' }, { text: 'Legal/PMO' }, { text: 'Week 1–2' }] },
            { cells: [{ text: 'IC vote and approval memo' }, { text: 'Deal Team' }, { text: 'Week 2' }] },
          ],
        },
      ],
      meta: { section: 'Investment Recommendation & Next Steps' },
    },
  ],
};

