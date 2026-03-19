import type { DealPptPayload } from '../types/dealPpt';

const API_BASE = 'https://your-backend.example.com';

export async function fetchDealPptData(query: string): Promise<DealPptPayload> {
  const res = await fetch(`${API_BASE}/api/deal-ppt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  const data = (await res.json()) as DealPptPayload;
  return data;
}

