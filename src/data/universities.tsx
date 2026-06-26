export interface University {
  id: number;
  name: string;
  founded: string;
  enrollment: number;
  country: string;
  continent: string;
  studyTypes: ('distance' | 'in-person')[];
}

export const universities: University[] = [
  { id: 1, name: 'Indira Gandhi National Open University', founded: '1985', enrollment: 7140000, country: 'India', continent: 'Asia', studyTypes: ['distance', 'in-person'] },
  { id: 2, name: 'California Community Colleges System', founded: '1967', enrollment: 2133846, country: 'United States', continent: 'North America', studyTypes: ['in-person'] },
  { id: 3, name: 'National University, Bangladesh', founded: '1992', enrollment: 2097182, country: 'Bangladesh', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 4, name: 'Anadolu University', founded: '1958', enrollment: 1974343, country: 'Turkey', continent: 'Asia', studyTypes: ['distance', 'in-person'] },
  { id: 5, name: 'Allama Iqbal Open University', founded: '1974', enrollment: 1027000, country: 'Pakistan', continent: 'Asia', studyTypes: ['distance', 'in-person'] },
  { id: 6, name: 'Islamic Azad University', founded: '1982', enrollment: 1000000, country: 'Iran', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 7, name: 'Laureate Education, Inc.', founded: '1999', enrollment: 875000, country: 'International', continent: 'Global', studyTypes: ['distance', 'in-person'] },
  { id: 8, name: 'Bangladesh Open University', founded: '1992', enrollment: 650000, country: 'Bangladesh', continent: 'Asia', studyTypes: ['distance'] },
  { id: 9, name: 'Universitas Terbuka', founded: '1984', enrollment: 646467, country: 'Indonesia', continent: 'Asia', studyTypes: ['distance'] },
  { id: 10, name: 'National Technological Institute of Mexico', founded: '1948 and 2014', enrollment: 620000, country: 'Mexico', continent: 'North America', studyTypes: ['in-person'] },
  { id: 11, name: 'State University of New York system', founded: '1948', enrollment: 606232, country: 'United States', continent: 'North America', studyTypes: ['in-person'] },
  { id: 12, name: 'Tribhuvan University', founded: '1959', enrollment: 604437, country: 'Nepal', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 13, name: 'Savitribai Phule Pune University', founded: '1948', enrollment: 665000, country: 'India', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 14, name: 'Chaudhary Charan Singh University', founded: '1965', enrollment: 560000, country: 'India', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 15, name: 'University of Mumbai', founded: '1857', enrollment: 549432, country: 'India', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 16, name: 'Ramkhamhaeng University', founded: '1971', enrollment: 525000, country: 'Thailand', continent: 'Asia', studyTypes: ['in-person'] },
  { id: 17, name: 'National Open University of Nigeria', founded: '2002', enrollment: 515000, country: 'Nigeria', continent: 'Africa', studyTypes: ['distance'] },
  { id: 18, name: 'California State University system', founded: '1857', enrollment: 479000, country: 'United States', continent: 'North America', studyTypes: ['in-person'] },
  { id: 19, name: 'University System of Ohio', founded: '2007', enrollment: 478000, country: 'United States', continent: 'North America', studyTypes: ['in-person'] },
  { id: 20, name: 'University of the Punjab', founded: '1882', enrollment: 450000, country: 'Pakistan', continent: 'Asia', studyTypes: ['in-person'] },
  
];
