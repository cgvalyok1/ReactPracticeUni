import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { quizData, Question, ChoiceQuestion } from '../quizData';
import Matching from './Matching';
import Sorting from './Sorting';
import SingleChoice from './SingleChoice';
import MultipleChoice from './MultipleChoice';
import { RootState } from '../../store';
import { resetAll } from './quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.quiz.answers);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<number[]>([]);

  const handleCheck = () => {
  const newResults = quizData.map((q) => {
    const user = answers[q.id] || [];
    let correctCount = 0;

    if (q.type === 'match' || q.type === 'sort') {
      const correctArr = q.type === 'match' ? q.pairs.map(p => p.right) : q.correctOrder;
      for (let i = 0; i < correctArr.length; i++) {
        if (user[i] === correctArr[i]) correctCount++;
      }
      return correctCount;
    } else {
      const correctAnswers = (q as ChoiceQuestion).correctAnswers;
      const fullUser = correctAnswers.map((_, i) => user[i] || false);
      for (let i = 0; i < correctAnswers.length; i++) {
        if (fullUser[i] === true && correctAnswers[i] === true) {
          correctCount++;
        }
      }
      return correctCount;
    }
  });
  setResults(newResults);
  setShowResults(true);
};

  const handleReset = () => {
    dispatch(resetAll());
    setShowResults(false);
    setResults([]);
  };

  const renderQuestion = (q: Question) => {
    switch (q.type) {
      case 'match': return <Matching question={q} />;
      case 'sort': return <Sorting question={q} />;
      case 'single': return <SingleChoice question={q} />;
      case 'multiple': return <MultipleChoice question={q} />;
      default: return null;
    }
  };

  const countCorrect = (q: Question) => {
    if (q.type === 'match') return q.pairs.length;
    if (q.type === 'sort') return q.items.length;
    return (q as ChoiceQuestion).correctAnswers.filter(Boolean).length;
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      {quizData.map((q, idx) => (
        <Box key={q.id} sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
          <Typography variant="h6">{idx + 1}. {q.title}</Typography>
          {renderQuestion(q)}
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
        <Button variant="contained" onClick={handleCheck}>Проверить</Button>
        <Button variant="outlined" onClick={handleReset}>Начать снова</Button>
      </Box>
      {showResults && (
        <Box sx={{ mt: 4, p: 2, bgcolor: '#e3f2fd', borderRadius: 2 }}>
          <Typography variant="h6">Результаты</Typography>
          {quizData.map((q, idx) => (
            <Typography key={q.id}>
              Задание {idx + 1}: верных {results[idx] ?? 0} из {countCorrect(q)}
            </Typography>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Quiz;