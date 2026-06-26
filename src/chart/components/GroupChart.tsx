import React, { useState } from 'react';
import { BarChart, LineChart } from '@mui/x-charts';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SettingChart from './SettingChart';
import { tGroup } from '../../data/groupdata';

interface Props {
  data: tGroup;
  groupKey: string;
}

type SeriesState = {
  avg_enrollment: boolean;
  max_enrollment: boolean;
  min_enrollment: boolean;
};

function GroupChart({ data, groupKey }: Props) {
  const [series, setSeries] = useState<SeriesState>({
    avg_enrollment: true,
    max_enrollment: false,
    min_enrollment: false,
  });
  const [isBar, setIsBar] = useState(true);

  if (!data.length) return null;

  // Определяем ключ группировки (не 'id' и не показатели)
  const sample = data[0];
  const exclude = ['id', 'avg_enrollment', 'max_enrollment', 'min_enrollment'];
  const groupName = Object.keys(sample).find(k => !exclude.includes(k)) || 'name';

  const activeCount = Object.values(series).filter(v => v).length;

  // Формируем series с barLabel только для гистограммы и одного ряда
  const seriesY = Object.entries(series)
    .filter(([, vis]) => vis)
    .map(([key]) => {
      const base = { dataKey: key, label: key };
      if (isBar && activeCount === 1) {
        return { ...base, barLabel: 'value' as const };
      }
      return base;
    });

  const commonProps = {
    dataset: data,
    xAxis: [{ scaleType: 'band' as const, dataKey: groupName }],
    series: seriesY,
    slotProps: {
      legend: { position: { vertical: 'bottom' as const, horizontal: 'center' as const } },
    },
    height: 400,
    yAxis: [{ label: 'Число студентов' }],
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
      <Box sx={{ mt: 2 }}>
        {isBar ? <BarChart {...commonProps} /> : <LineChart {...commonProps} />}
      </Box>
    </Container>
  );
}

export default GroupChart;