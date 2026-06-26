export type QuestionType = 'match' | 'sort' | 'single' | 'multiple';

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  title: string;
}

export interface MatchQuestion extends BaseQuestion {
  type: 'match';
  pairs: { left: string; right: string }[];
}

export interface SortQuestion extends BaseQuestion {
  type: 'sort';
  items: string[];
  correctOrder: string[];
}

export interface ChoiceQuestion extends BaseQuestion {
  type: 'single' | 'multiple';
  options: string[];
  correctAnswers: boolean[];
}

export type Question = MatchQuestion | SortQuestion | ChoiceQuestion;

export const quizData: Question[] = [
  {
    id: 1,
    type: 'match',
    title: 'Сопоставьте университет и страну',
    pairs: [
      { left: 'Indira Gandhi National Open University', right: 'India' },
      { left: 'University of South Africa', right: 'South Africa' },
      { left: 'University of California system', right: 'United States' },
    ],
  },
  {
    id: 2,
    type: 'match',
    title: 'Сопоставьте университет и число студентов (приблизительно)',
    pairs: [
      { left: 'Indira Gandhi National Open University', right: '7 140 000' },
      { left: 'California Community Colleges System', right: '2 133 846' },
      { left: 'Islamic Azad University', right: '1 000 000' },
    ],
  },
  {
    id: 3,
    type: 'sort',
    title: 'Расставьте университеты по году основания (от самого старого к новому)',
    items: ['University of Mumbai', 'University of California system', 'California State University system', 'Anadolu University'],
    correctOrder: ['University of Mumbai', 'University of California system', 'California State University system', 'Anadolu University'],
  },
  {
    id: 4,
    type: 'single',
    title: 'На каком континенте находится больше всего университетов с дистанционным обучением?',
    options: ['Asia', 'North America', 'Europe', 'Africa'],
    correctAnswers: [true, false, false, false],
  },
  {
    id: 5,
    type: 'multiple',
    title: 'Выберите все университеты, основанные до 1950 года',
    options: ['University of Mumbai', 'California State University system', 'Anadolu University', 'Indira Gandhi National Open University'],
    correctAnswers: [true, true, true, false],
  },
  {
    id: 6,
    type: 'multiple',
    title: 'Какие из перечисленных университетов имеют тип обучения "distance"?',
    options: ['Indira Gandhi National Open University', 'University of South Africa', 'California Community Colleges System', 'National Open University of Nigeria'],
    correctAnswers: [true, true, false, true],
  },
];