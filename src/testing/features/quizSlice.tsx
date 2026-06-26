import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  answers: Record<number, any[]>; // теперь может хранить и строки, и булевы массивы
}

const initialState: QuizState = {
  answers: {},
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ id: number; value: any[] }>) => {
      state.answers[action.payload.id] = action.payload.value;
    },
    resetAll: (state) => {
      state.answers = {};
    },
  },
});

export const { setAnswer, resetAll } = quizSlice.actions;
export default quizSlice.reducer;