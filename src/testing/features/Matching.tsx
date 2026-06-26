import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import SortableItem from '../components/SortableItem';
import { RootState } from '../../store';
import { setAnswer } from './quizSlice';
import { MatchQuestion } from '../quizData';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

interface Props {
  question: MatchQuestion;
}

function Matching({ question }: Props) {
  const dispatch = useDispatch();
  const saved = useSelector((state: RootState) => state.quiz.answers[question.id]);
  const initial = saved && saved.length ? saved : shuffle(question.pairs.map(p => p.right));
  const [items, setItems] = useState<string[]>(initial);

  useEffect(() => {
    dispatch(setAnswer({ id: question.id, value: items }));
  }, [items, dispatch, question.id]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIdx = items.indexOf(active.id);
      const newIdx = items.indexOf(over.id);
      setItems(arrayMove(items, oldIdx, newIdx));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <List>
          {question.pairs.map((p, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 1 }}>
                <ListItemText primary={p.left} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <List>
              {items.map(item => <SortableItem key={item} item={item} />)}
            </List>
          </SortableContext>
        </DndContext>
      </Grid>
    </Grid>
  );
}

export default Matching;