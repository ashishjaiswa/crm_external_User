import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {  TextField } from '@mui/material';
import SelectInputs from './SelectInputs';
import PopupFrom from './PopupFrom';
import studentData from '../data/StudentData';
const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'S.No.',
        width:10,

    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,

    },
    {
        field: 'dateObFirth',
        headerName: 'Date of Birth',
        type:'Date',
        width: 150,

    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 100,

    },
    {
        field: 'contact_1',
        headerName: 'Contact 1',
        type:'number',
        sortable:false,
        width: 150,

    },
    {
        field: 'contact_2',
        headerName: 'Contact 2',
        type:'number',
        sortable:false,
        width: 150,

    },
    {
        field: 'aadhar',
        headerName: 'Aadhar Number',
        type:'number',
        width: 150,

    },
    {
        field: 'address',
        headerName: 'Address',
        width: 150,

    },
    {
        field: 'class',
        headerName: 'Class',
        width: 50,

    },
    {
        field: 'previousMarks',
        headerName: 'Previous marks',
        type:'number',
        width: 50,

    },
    {
        field: 'country',
        headerName: 'Country',
        width: 150,

    },
    {
        field: 'state',
        headerName: 'State',
        width: 150,

    },
    {
        field: 'city',
        headerName: 'City',
        width: 150,

    },
    {
        field: 'zipCode',
        headerName: 'Zip code',
        width: 100,

    },
    
];

const rows = [
    { id: 1, lastName: 'Snow', Name: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', Name: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', Name: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', Name: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', Name: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', Name: null, age: 150 },
    { id: 7, lastName: 'Clifford', Name: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', Name: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', Name: 'Harvey', age: 65 },
];
function DataSoure() {
    return (
        <div style={{height:"400",width:"300"}}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>students</h3>
                <div style={{ display: 'flex', justifyContent: "space-between", width: "30vw", alignItems: 'center' }}>

                    <TextField size={"small"} id="outlined-basic" label="Search" variant="outlined" />

                    <SelectInputs selectName={"Status"} />
                    <SelectInputs selectName={"Stage"} />
                </div>

            </div>
            <Box >
                <DataGrid
                    rows={studentData}
                    columns={columns}
                    columnHeaderHeight={30}
                    autoHeight={true}
                    density={"compact"}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}

                    disableRowSelectionOnClick
                />
            </Box>
            <div style={{ display: 'flex', justifyContent: "end", marginTop: '60px' }} >
                
                <PopupFrom/>
            </div>

        </div>
    )
}

export default DataSoure