import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface Props {
  item: string;
}

function SortableItem({ item }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <ListItem ref={setNodeRef} style={style} {...attributes} {...listeners} disablePadding>
      <ListItemButton sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 1 }}>
        <ListItemIcon><DragIndicatorIcon /></ListItemIcon>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
}

export default SortableItem;