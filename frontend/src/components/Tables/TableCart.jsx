import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Dialog, DialogActions, DialogContent } from '@mui/material';
import { Button } from 'antd';
import { DataGrid } from '@mui/x-data-grid';

export const TableCart = ({ table }) => {

  const orders = [
    {
      "orderId": 1,
      "itemName": "Pizza",
      "quantity": 2,
      "notes": "Extra cheese"
    },
    {
      "orderId": 2,
      "itemName": "Pasta",
      "quantity": 1,
      "notes": "No onions"
    },
    {
      "orderId": 3,
      "itemName": "Salad",
      "quantity": 1,
      "notes": "Dressing on the side"
    }
  ]
  const columns = [
    { field: 'orderId', headerName: 'Siparis No', width: 70 },
    { field: 'itemName', headerName: 'Siparis Adı', width: 130 },
    { field: 'quantity', headerName: 'Adet', width: 90 },
    { field: 'notes', headerName: 'Not', width: 160 },
  ]

  const rows = orders.map((order, index) => ({
    id: index,
    orderId: order.orderId,
    itemName: order.itemName,
    quantity: order.quantity,
    notes: order.notes
  }));

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card >
      <CardActionArea onClick={handleOpen}>
        <CardContent sx={{ maxWidth: 250, maxHeight: 200, height: 200, width: 250, background: (table.status === 'Boş' ? 'white' : table.status === 'Dolu' ? 'green' : 'red') }}>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" glutterBottom>{table.status}</Typography>
          <Typography variant='h5' component="div" >{table.name}</Typography>
        </CardContent>
      </CardActionArea>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DataGrid
            sx={{ height: 400 }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Odendi</Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}
