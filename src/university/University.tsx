import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { universities } from '../data/universities';

function University() {
  const { id } = useParams<{ id: string }>();
  const uni = universities.find(u => u.id === Number(id));
  if (!uni) return <Navigate to="/" />;

  return (
    <>
      <Navbar active="1"/>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#0eb711' }}>Главная</Link>
          <Typography>/</Typography>
          <Typography>{uni.name}</Typography>
        </Box>
        <Typography variant="h4" align="center" gutterBottom>{uni.name}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <img src={`/images/${uni.id}.jpg`} alt={uni.name} style={{ maxWidth: '40%', height: 'auto', borderRadius: 2 }} />
        </Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="subtitle1"><strong>Страна:</strong> {uni.country}</Typography>
              <Typography variant="subtitle1"><strong>Континент:</strong> {uni.continent}</Typography>
              <Typography variant="subtitle1"><strong>Год основания:</strong> {uni.founded}</Typography>
              <Typography variant="subtitle1"><strong>Число студентов:</strong> {uni.enrollment.toLocaleString()}</Typography>
              <Typography variant="subtitle1"><strong>Тип обучения:</strong> {uni.studyTypes.join(', ')}</Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body1">
                {uni.name} — один из крупнейших университетов мира. Расположен в {uni.country}, на континенте {uni.continent}.
                Основан в {uni.founded} году. Предлагает обучение по формам: {uni.studyTypes.join(', ')}.
                Общее число студентов превышает {uni.enrollment.toLocaleString()} человек.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default University;