export type SavedStudy = { bookmarks: string[]; highlights: string[]; notes: string[]; plans: string[] };
export const emptySavedStudy: SavedStudy = { bookmarks: [], highlights: [], notes: [], plans: [] };

export function loadSavedData(raw: string | null): SavedStudy {
  if (!raw) return { ...emptySavedStudy };
  const parsed: unknown = JSON.parse(raw);
  if (!parsed || typeof parsed !== 'object') return { ...emptySavedStudy };
  const value = parsed as Record<string, unknown>;
  return {
    bookmarks: Array.isArray(value.bookmarks) ? value.bookmarks.filter((x): x is string => typeof x === 'string') : [],
    highlights: Array.isArray(value.highlights) ? value.highlights.filter((x): x is string => typeof x === 'string') : [],
    notes: Array.isArray(value.notes) ? value.notes.filter((x): x is string => typeof x === 'string') : [],
    plans: Array.isArray(value.plans) ? value.plans.filter((x): x is string => typeof x === 'string') : [],
  };
}

export function toggleSavedValue(data: SavedStudy, key: 'bookmarks' | 'highlights', value: string): SavedStudy {
  return { ...data, [key]: data[key].includes(value) ? data[key].filter(item => item !== value) : [...data[key], value] };
}
