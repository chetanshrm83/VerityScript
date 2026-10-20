import { describe, expect, it } from 'vitest';
import { emptySavedStudy, loadSavedData, toggleSavedValue } from './storage';

describe('local study storage', () => {
  it('starts with empty collections when storage has no value', () => {
    expect(loadSavedData(null)).toEqual(emptySavedStudy);
  });
  it('loads known string collections and ignores malformed values', () => {
    expect(loadSavedData('{"bookmarks":["John 1",4],"notes":"bad"}')).toEqual({ bookmarks: ['John 1'], highlights: [], notes: [], plans: [] });
  });
  it('toggles a saved reference without mutating the original', () => {
    const original = { ...emptySavedStudy, bookmarks: ['John 1'] };
    expect(toggleSavedValue(original, 'bookmarks', 'John 1').bookmarks).toEqual([]);
    expect(toggleSavedValue(original, 'bookmarks', 'Psalm 23').bookmarks).toEqual(['John 1', 'Psalm 23']);
    expect(original.bookmarks).toEqual(['John 1']);
  });
});
