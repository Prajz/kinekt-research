import { allItems, type LibraryItem } from './library';

export function getAllSlugs(): string[] {
  return allItems.map((item) => item.slug);
}

export function getItemMeta(slug: string): LibraryItem | undefined {
  return allItems.find((item) => item.slug === slug);
}
