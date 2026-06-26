import React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { universities } from '../../data/universities';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Название', flex: 1.5 },
  { field: 'country', headerName: 'Страна', flex: 0.8 },
  { field: 'continent', headerName: 'Континент', flex: 0.8 },
  { field: 'founded', headerName: 'Год основания', width: 120 },
  { field: 'enrollment', headerName: 'Число студентов', type: 'number', width: 130 },
  { 
    field: 'studyTypes', 
    headerName: 'Тип обучения', 
    flex: 0.8, 
    valueGetter: (params: any) => {
      const value = params.value;
      return Array.isArray(value) ? value.join(', ') : '';
    }
  },
];

function UniversityGrid() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={universities}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 25, 50]}
      />
    </div>
  );
}

export default UniversityGrid;