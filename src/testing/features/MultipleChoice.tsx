import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ChoiceQuestion } from '../quizData';
import { RootState } from '../../store';
import { setAnswer } from './quizSlice';

interface Props {
  question: ChoiceQuestion;
}

function MultipleChoice({ question }: Props) {
  const dispatch = useDispatch();
  const saved = useSelector((state: RootState) => state.quiz.answers[question.id]) || 
                question.options.map(() => false);

  const handleChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = saved.map((v, i) => i === idx ? e.target.checked : v);
    dispatch(setAnswer({ id: question.id, value: newVal }));
  };

  return (
    <FormGroup>
      {question.options.map((opt, idx) => (
        <FormControlLabel
          key={opt}
          control={
            <Checkbox
              checked={saved[idx] || false}
              onChange={handleChange(idx)}
            />
          }
          label={opt}
        />
      ))}
    </FormGroup>
  );
}

export default MultipleChoice;