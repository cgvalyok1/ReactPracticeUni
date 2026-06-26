import { universities } from './universities';

type AggEntry = {
  id: number;
  name: string;
  avg_enrollment: number;
  max_enrollment: number;
  min_enrollment: number;
};

function computeAgg(items: any[], groupKey: string, valueKey: string): AggEntry[] {
  const map = new Map<string, { sum: number; count: number; max: number; min: number }>();
  items.forEach(item => {
    const key = String(item[groupKey]);
    const val = Number(item[valueKey]);
    if (!map.has(key)) {
      map.set(key, { sum: 0, count: 0, max: -Infinity, min: Infinity });
    }
    const entry = map.get(key)!;
    entry.sum += val;
    entry.count++;
    if (val > entry.max) entry.max = val;
    if (val < entry.min) entry.min = val;
  });
  return Array.from(map.entries()).map(([name, stats], idx) => ({
    id: idx + 1,
    name,
    avg_enrollment: Math.round(stats.sum / stats.count),
    max_enrollment: stats.max,
    min_enrollment: stats.min,
  }));
}

export const continentStats = computeAgg(universities, 'continent', 'enrollment');
export const countryStats = computeAgg(universities, 'country', 'enrollment');

// Для типов обучения разворачиваем
const studyTypeEntries = universities.flatMap(u => u.studyTypes.map(st => ({ ...u, studyType: st })));
export const studyTypeStats = computeAgg(studyTypeEntries, 'studyType', 'enrollment');

export type tGroup = AggEntry[];