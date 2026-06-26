import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { ChoiceQuestion } from '../quizData';
import { RootState } from '../../store';
import { setAnswer } from './quizSlice';

interface Props {
  question: ChoiceQuestion;
}

function SingleChoice({ question }: Props) {
  const dispatch = useDispatch();
  const saved = useSelector((state: RootState) => state.quiz.answers[question.id]) || 
                question.options.map(() => false);
  const selectedIndex = saved.findIndex(v => v === true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = Number(e.target.value);
    const newVal = question.options.map((_, i) => i === idx);
    dispatch(setAnswer({ id: question.id, value: newVal }));
  };

  return (
    <RadioGroup value={selectedIndex >= 0 ? String(selectedIndex) : ''} onChange={handleChange}>
      {question.options.map((opt, idx) => (
        <FormControlLabel key={opt} value={String(idx)} control={<Radio />} label={opt} />
      ))}
    </RadioGroup>
  );
}

export default SingleChoice;