import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { universities } from '../../data/universities';

function ContentGrid() {
  const featured = universities.slice(4, 11);

  const renderUniversityInfo = (university: typeof featured[number]) => (
    <>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Страна: {university.country}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1 }}>
        Континент: {university.continent}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1 }}>
        Основан: {university.founded}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        Студентов: {university.enrollment.toLocaleString()}
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(14, 1fr)',
        gap: 2,
      }}
    >
      {/* Карточка 1 */}
      <Box
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '1 / 5',
          },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {featured[0].name}
        </Typography>

        {renderUniversityInfo(featured[0])}

        <Button
          variant="contained"
          component={Link}
          to={`/university/${featured[0].id}`}
          sx={{ mt: 'auto', alignSelf: 'flex-end' }}
        >
          Подробнее
        </Button>
      </Box>

      {/* Карточка 2 */}
      <Card
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '5 / 11',
          },
          bgcolor: '#c3b4ab',
          borderRadius: 4,
          minHeight: 180,
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '25%'}}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 'auto',
            }}
          >
            {featured[1].name}
          </Typography>
        </Box>
        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', }}>
          
          {renderUniversityInfo(featured[1])}

          <Button
            component={Link}
            to={`/university/${featured[1].id}`}
            sx={{ mt: 'auto', alignSelf: 'flex-end' }}
          >
            Подробнее
          </Button>
        </Box>

        <CardMedia
          component="img"
          image={`/images/${featured[1].id}.jpg`}
          alt={featured[1].name}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            alignSelf: 'center',
          }}
        />
      </Card>

      {/* Карточка 3 */}
      <Card
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '1 / 5',
          },
          bgcolor: '#b4c0c8',
          borderRadius: 4,
          p: 3,
          minHeight: 360,
          display: 'flex', 
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {featured[2].name}
        </Typography>

        {renderUniversityInfo(featured[2])}

        <CardMedia
          component="img"
          image={`/images/${featured[2].id}.jpg`}
          alt={featured[2].name}
          sx={{
            mt: 3,
            height: 120,
            borderRadius: 4,
            objectFit: 'cover',
          }}
        />

        <Button
          component={Link}
          to={`/university/${featured[2].id}`}
          sx={{ mt: 'auto', alignSelf: 'flex-end', }}
        >
          Подробнее
        </Button>
      </Card>

      {/* Карточка 4 */}
      <Card
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '6 / 10',
          },
          bgcolor: '#b4c0c8',
          borderRadius: 4,
          p: 3,
          minHeight: 360,
        }}
      >
        <CardMedia
          component="img"
          image={`/images/${featured[3].id}.jpg`}
          alt={featured[3].name}
          sx={{
            height: 120,
            borderRadius: 4,
            objectFit: 'cover',
            mb: 3,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {featured[3].name}
        </Typography>

        {renderUniversityInfo(featured[3])}

        <Button
          component={Link}
          to={`/university/${featured[3].id}`}
          sx={{ mt: 'auto' }}
        >
          Подробнее
        </Button>
      </Card>

      {/* Карточка 5 */}
      <Card
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '11 / -1',
          },
          bgcolor: '#b4c0c8',
          borderRadius: 4,
          p: 3,
          minHeight: 360,
          display: 'flex', 
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {featured[4].name}
        </Typography>

        {renderUniversityInfo(featured[4])}

        <CardMedia
          component="img"
          image={`/images/${featured[4].id}.jpg`}
          alt={featured[4].name}
          sx={{
            mt: 3,
            height: 120,
            borderRadius: 4,
            objectFit: 'cover',
          }}
        />

        <Button
          component={Link}
          to={`/university/${featured[4].id}`}
          sx={{ mt: 'auto', alignSelf:'flex-end', }}
        >
          Подробнее
        </Button>
      </Card>

      {/* Карточка 6 */}
      <Card
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '5 / 11',
          },
          bgcolor: '#c3b4ab',
          borderRadius: 4,
          minHeight: 180,
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <CardMedia
          component="img"
          image={`/images/${featured[5].id}.jpg`}
          alt={featured[5].name}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

        <Box sx={{ width: '100%' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            {featured[5].name}
          </Typography>

          {renderUniversityInfo(featured[5])}

          <Button
            component={Link}
            to={`/university/${featured[5].id}`}
            sx={{ mt: 'auto' }}
          >
            Подробнее
          </Button>
        </Box>
      </Card>

      {/* Карточка 7 */}
      <Box
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '11 / -1',
          },
          display: 'flex', 
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {featured[6].name}
        </Typography>

        {renderUniversityInfo(featured[6])}

        <Button
          variant="contained"
          component={Link}
          to={`/university/${featured[6].id}`}
          sx={{ mt: 'auto', alignSelf:'flex-end', }}
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
}

export default ContentGrid;