import React, { useState } from 'react';
import { Grid, Typography, Paper, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Card {
  id: string;
  title: string;
  description: string;
  label: string;
}

interface Lane {
  id: string;
  title: string;
  cards: Card[];
}

const TaskTracerKanbanComponent: React.FC = () => {
  const [lanes, setLanes] = useState<Lane[]>([
    {
      id: 'lane1',
      title: 'Planned Tasks',
      cards: [
        { id: 'card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
        { id: 'card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins' }
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      cards: []
    }
  ]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedLanes = [...lanes];
    const sourceLaneIndex = updatedLanes.findIndex(lane => lane.id === result.source.droppableId);
    const destinationLaneIndex = updatedLanes.findIndex(lane => lane.id === result.destination.droppableId);
    const [removed] = updatedLanes[sourceLaneIndex].cards.splice(result.source.index, 1);
    updatedLanes[destinationLaneIndex].cards.splice(result.destination.index, 0, removed);

    setLanes(updatedLanes);
  };

  const handleDeleteCard = (laneId: string, cardId: string) => {
    const updatedLanes = lanes.map(lane =>
      lane.id === laneId ? { ...lane, cards: lane.cards.filter(card => card.id !== cardId) } : lane
    );
    setLanes(updatedLanes);
  };

  const handleAddCard = (laneId: string) => {
    const newCard: Card = { id: `card${Date.now()}`, title: 'New Task', description: '', label: '' };
    const updatedLanes = lanes.map(lane =>
      lane.id === laneId ? { ...lane, cards: [...lane.cards, newCard] } : lane
    );
    setLanes(updatedLanes);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={2}>
        {lanes.map((lane, index) => (
          <Grid item key={lane.id} xs={12} sm={6} md={4} lg={3}>
            <Paper>
              <Typography variant="h6">{lane.title}</Typography>
              <Droppable droppableId={lane.id}>
                {(provided: any) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {lane.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided: any) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Typography variant="subtitle1">{card.title}</Typography>
                            <Typography variant="body2">{card.description}</Typography>
                            <Typography variant="caption">{card.label}</Typography>
                            <IconButton onClick={() => handleDeleteCard(lane.id, card.id)}>
                              <Delete />
                            </IconButton>
                          </Paper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <IconButton onClick={() => handleAddCard(lane.id)}>
                <Add />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
};

export default TaskTracerKanbanComponent;
