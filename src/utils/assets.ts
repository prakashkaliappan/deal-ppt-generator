// Map logical asset keys from LLM/API to actual image imports.
// Add or modify mappings as you add files under src/assets.

import logoFund from '../assets/react.svg';

const assetMap: Record<string, string> = {
  fund_logo: logoFund,
};

export function resolveAssetPath(key?: string | null): string | undefined {
  if (!key) return;
  return assetMap[key];
}

