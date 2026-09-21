/**
 * Deterministic placeholder illustrations (Picsum) for lesson/unit content
 * that doesn't yet have a matching asset in `assets/images`. The same seed
 * always resolves to the same photo, so a given lesson/unit keeps a stable
 * "respective image" across app sessions.
 */
export function placeholderImage(seed: string, width = 800, height = 500): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
