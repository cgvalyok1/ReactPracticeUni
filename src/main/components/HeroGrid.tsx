import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { universities } from '../../data/universities';

const heroUniversities = universities.slice(0, 4);

function HeroGrid() {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
    objectPosition: 'center',
  };

  return (
    //<Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
          mb: 2,
          //height: 400,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gap: 1,
          }}
        >
          <Paper sx={{ overflow: 'hidden', }}>
            <Link to={`/university/${heroUniversities[0].id}`}>
              <img
                src={`/images/${heroUniversities[0].id}.jpg`}
                alt={heroUniversities[0].name}
                style={imageStyle}
              />
            </Link>
          </Paper>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
            }}
          >
            <Paper sx={{ overflow: 'hidden' }}>
              <Link to={`/university/${heroUniversities[1].id}`}>
                <img
                  src={`/images/${heroUniversities[1].id}.jpg`}
                  alt={heroUniversities[1].name}
                  style={imageStyle}
                />
              </Link>
            </Paper>

            <Paper sx={{ overflow: 'hidden' }}>
              <Link to={`/university/${heroUniversities[2].id}`}>
                <img
                  src={`/images/${heroUniversities[2].id}.jpg`}
                  alt={heroUniversities[2].name}
                  style={imageStyle}
                />
              </Link>
            </Paper>
          </Box>
        </Box>

        <Paper sx={{ overflow: 'hidden' }}>
          <Link to={`/university/${heroUniversities[3].id}`}>
            <img
              src={`/images/${heroUniversities[3].id}.jpg`}
              alt={heroUniversities[3].name}
              style={imageStyle}
            />
          </Link>
        </Paper>
      </Box>
    //</Box>
  );
}

export default HeroGrid;