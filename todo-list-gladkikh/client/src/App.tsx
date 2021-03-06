import { useContext, useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from "@material-ui/core";

import { Context } from '.';
import LoginForm from './components/LoginForm';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './App.css';
import TodosMap from './components/Todos/TodosMap';
import HeaderTodo from './components/Todos/HeaderTodo';

const KEY = 'todoApp.todos';

function App() {
  const { store } = useContext(Context);
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState([]);
  const [boleanTodo, setBoleanTodo] = useState(false);
  const [todoId, setTodoId] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodoList(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (e) => {
    console.log(todoList);
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setTodoList([...todoList, { id: Date.now(), todo, tc: false }]);
    setTodo('');
  };

  const dellTodo = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);

    setTodoList(newTodos);
  };

  const btnEditTodo = (item) => {
    setBoleanTodo(true);
    setTodoId(item.id);

    setTodo(item.todo);
  };

  const editTodo = (e) => {
    e.preventDefault();

    if (todo === '') {
      return;
    }

    const newTodos = todoList.map((item) =>
      item.id === todoId ? { id: Date.now(), todo, tc: false } : item
    );

    setTodoList(newTodos);
    setBoleanTodo(false);
    setTodoId('');
    setTodo('');
  };

  const cheked = (id, tc, todo) => {
    console.log(id, tc, todo);

    const newTodos = todoList.map((item) =>
      item.id === id ? { id: Date.now(), todo, tc } : item
    );
    setTodoList(newTodos);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
    fetch('https://sfedu-document-service.herokuapp.com/document-service')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        <TodosMap
        list={data}
      />
      });
  }, []);

  if (store.isLoading){
    return (
      <div>...Loading</div>
    )
  }

  if (!store.isAuth) {
    return (
      <LoginForm />
    )
  }

  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography  variant="subtitle1" color={ store.user.isActivated ? 'primary' : 'error' }>
          { store.user.isActivated ? '?????????????? ??????????????????????' : '?????????????? ???? ??????????????????????' }
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
         { `???? ?????????? ?????? ${ store.user.email  }` }
        </Typography>
        <Button variant="outlined" size="small" onClick={ () => store.logout() }>
          <ExitToAppIcon/>
          ?????????? ???? ????????????????
        </Button>
      </Toolbar>
      <HeaderTodo
        add={addTodo}
        todo={todo} // setTodo
        input={setTodo}
        bolean={boleanTodo}
        setBtnToEdit={editTodo}
      />
      <TodosMap
        list={todoList}
        editBtn={btnEditTodo}
        dell={dellTodo}
        chek={cheked}
      />
    </div>
  );
}

export default observer(App);
