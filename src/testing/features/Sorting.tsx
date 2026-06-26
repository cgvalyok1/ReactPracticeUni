import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import List from '@mui/material/List';
import SortableItem from '../components/SortableItem';
import { RootState } from '../../store';
import { setAnswer } from './quizSlice';
import { SortQuestion } from '../quizData';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

interface Props {
  question: SortQuestion;
}

function Sorting({ question }: Props) {
  const dispatch = useDispatch();
  const saved = useSelector((state: RootState) => state.quiz.answers[question.id]);
  const initial = saved && saved.length ? saved : shuffle(question.items);
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
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <List>
          {items.map(item => <SortableItem key={item} item={item} />)}
        </List>
      </SortableContext>
    </DndContext>
  );
}

export default Sorting;