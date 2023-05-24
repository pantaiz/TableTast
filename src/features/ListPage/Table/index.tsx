import {DatasType} from "../ListType";
import * as React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';


type PageListPropsType = {
    data: Array<DatasType>
}
const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width:350 },
    { field: 'amount', headerName: 'Amount', width: 350 },
];
export const PageList = (props: PageListPropsType) => {

    const rows=props.data.map(item=>{
        return({
            id:item._id,
            name:item.name.first+' '+item.name.last,
            amount:item.amount})
    })

    return <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[5, 10,15,20]}
            checkboxSelection
        />
    </div>
}

