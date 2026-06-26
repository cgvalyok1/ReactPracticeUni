import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

type SeriesState = {
  avg_enrollment: boolean;
  max_enrollment: boolean;
  min_enrollment: boolean;
};

interface Props {
  series: SeriesState;
  setSeries: React.Dispatch<React.SetStateAction<SeriesState>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
}

function SettingChart({ series, setSeries, isBar, setIsBar }: Props) {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({ ...series, [e.target.name]: e.target.checked });
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(e.target.value === 'bar');
  };

  return (
    <Stack
      direction="row"
      spacing={3}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ justifyContent: 'center', flexWrap: 'wrap', my: 2 }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Тип диаграммы:</FormLabel>
        <RadioGroup value={isBar ? 'bar' : 'line'} onChange={handleRadio}>
          <FormControlLabel value="bar" control={<Radio />} label="Гистограмма" />
          <FormControlLabel value="line" control={<Radio />} label="Линейная" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">На диаграмме показать:</FormLabel>
        <FormControlLabel
          control={<Checkbox checked={series.avg_enrollment} onChange={handleCheckbox} name="avg_enrollment" />}
          label="среднее"
        />
        <FormControlLabel
          control={<Checkbox checked={series.max_enrollment} onChange={handleCheckbox} name="max_enrollment" />}
          label="максимум"
        />
        <FormControlLabel
          control={<Checkbox checked={series.min_enrollment} onChange={handleCheckbox} name="min_enrollment" />}
          label="минимум"
        />
      </FormControl>
    </Stack>
  );
}

export default SettingChart;