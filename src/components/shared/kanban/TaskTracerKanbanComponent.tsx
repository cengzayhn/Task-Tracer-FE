import React, { useState } from 'react';
import { Grid, Typography, Paper, IconButton, Box } from '@mui/material';
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
    },
    {
      id: 'lane3',
      title: 'Planned Tasks',
      cards: [
        { id: 'card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
        { id: 'card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins' }
      ]
    },
    {
      id: 'lane1',
      title: 'Planned Tasks',
      cards: [
        { id: 'card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
        { id: 'card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins' }
      ]
    },
    
  ]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const sourceLaneId = result.source.droppableId;
    const destinationLaneId = result.destination.droppableId;

    if (sourceLaneId !== destinationLaneId) {
      const updatedLanes = [...lanes];
      const sourceLaneIndex = updatedLanes.findIndex(lane => lane.id === sourceLaneId);
      const destinationLaneIndex = updatedLanes.findIndex(lane => lane.id === destinationLaneId);
      const [movedCard] = updatedLanes[sourceLaneIndex].cards.splice(result.source.index, 1);
      updatedLanes[destinationLaneIndex].cards.splice(result.destination.index, 0, movedCard);
      
      setLanes(updatedLanes);
    }
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
            <Paper style={{ maxHeight: '75vh', overflowY: 'auto', padding: '10px' }}>
              <Typography variant="h6">{lane.title}</Typography>
              <Droppable droppableId={lane.id}>
                {(provided: any) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} style={{ minHeight: '60px' }}>
                    {lane.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided: any) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ margin: '8px', padding: '10px', cursor: 'grab' }}
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
              <Box textAlign="center" mt={1}>
                <IconButton onClick={() => handleAddCard(lane.id)}>
                  <Add />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
};

export default TaskTracerKanbanComponent;
