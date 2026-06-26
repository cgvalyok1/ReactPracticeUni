import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GroupChart from '../chart/components/GroupChart';
import GroupGrid from '../chart/components/GroupGrid';
import { continentStats, countryStats, studyTypeStats, tGroup } from '../data/groupdata';

type GroupKey = 'continent' | 'country' | 'studyType';

function Chart() {
  const [group, setGroup] = useState<GroupKey>('continent');
  const [groupData, setGroupData] = useState<tGroup>(continentStats);

  const handleChange = (e: SelectChangeEvent) => {
    const val = e.target.value as GroupKey;
    setGroup(val);
    if (val === 'continent') setGroupData(continentStats);
    else if (val === 'country') setGroupData(countryStats);
    else setGroupData(studyTypeStats);
  };

  return (
    <>
      <Navbar active="3"/>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Box sx={{ width: { xs: '100%', sm: 300 }, mx: 'auto', mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Группировать по</InputLabel>
            <Select value={group} label="Группировать по" onChange={handleChange}>
              <MenuItem value="continent">Континенту</MenuItem>
              <MenuItem value="country">Стране</MenuItem>
              <MenuItem value="studyType">Типу обучения</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <GroupChart data={groupData} groupKey={group} />
        <GroupGrid data={groupData} />
      </Container>
      <Footer />
    </>
  );
}

export default Chart;