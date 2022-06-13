import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Item, lightTheme, ThemeProvider } from './styleMUI.js';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './Todos.css';

export default function TodosMap({
  list,
  editBtn,
  dell,
  chek
}) {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      width="auto"
      /* backgroundColor= "black" */
    >
      <Grid item xs={6}>
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'table-row-group',
            }}
          >
            {list.map((item) => (
              <Item className=" mt-2" key={item.id} elevation={12}>
               <div>
                <Checkbox
                   checked={item.tc ? true : false}
                   onClick={(e) => chek(item.id, !item.tc, item.todo)}
                   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                 />

                 <span className="lead">
                   {item.tc ? <s> {item.todo}</s> : item.todo}
                 </span>
                 {'       '}
               </div>
                <div className="d-flex flex-end">
                  <Button
                  className='editBtn'
                   variant="outlined"
                    size="small"
                    onClick={(e) => editBtn(item)}
                  >
                    <EditIcon/>
                  </Button>
                  <Button
                    onClick={(e) => dell(item.id)}
                    variant="contained"
                    size="small"
                    color='secondary'
                  >
                    <DeleteIcon/>
                  </Button>
                </div>

              </Item>
            ))}
          </Box>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}
