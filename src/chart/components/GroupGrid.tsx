import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tGroup } from '../../data/groupdata';

interface Props {
  data: tGroup;
}

function GroupGrid({ data }: Props) {
  if (!data.length) return null;
  const columns: GridColDef[] = Object.keys(data[0]).map(field => ({
    field,
    headerName: field,
    flex: 1,
  }));
  const rows = data.map((row, idx) => ({ ...row, id: row.id || idx + 1 }));
  return (
    <div style={{ height: 400, width: '100%', marginTop: 20 }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10, 25]} />
    </div>
  );
}

export default GroupGrid;