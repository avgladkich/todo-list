import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import CreateIcon from '@mui/icons-material/Create';
import { Input } from '@mui/material';
import './HeaderTodo.css';


export default function HeaderTodo({ add, todo, input, bolean, setBtnToEdit }) {
  return (
    <div className='container'>
      <Input
          placeholder="Создать задачу"
          inputProps={{
            "aria-label": "Description"
          }}
          onChange={(e) => input(e.target.value)}
        value={todo}
          style={{ width: "50%", margin: 20}}
        />
            <IconButton
              //type="submit"
              onClick={bolean ? setBtnToEdit : add}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              {bolean ? <CreateIcon /> : <AddIcon />}
            </IconButton>
    </div>
  );
}
