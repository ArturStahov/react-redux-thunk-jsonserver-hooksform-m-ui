import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

import { allTodos } from './todos-selector';
import { useStyles, CardItem, CardList, Form } from './StyledComponent';
import bg_header from '../../image/cardHeader.jpg';
import { deleteItem, editItem } from '../../redux/todos/todos-operation';

export function ToDoList() {
  const items = useSelector(allTodos);
  const classes = useStyles();
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm();

  let [isOpenEditor, setIsOpenEditor] = useState(false);
  let [itemsOnEdit, setItemsOnEdit] = useState(null);

  const handlerEditItem = item => {
    setIsOpenEditor(true);
    setItemsOnEdit(item);
  };

  const onSubmit = data => {
    if (!editItem) {
      return;
    }
    data.id = itemsOnEdit.id;
    console.log(data);
    dispatch(editItem(data));
    setIsOpenEditor(false);
  };

  return (
    <CardList>
      {items.map(item => (
        <CardItem key={item.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={item.avatar ? item.avatar : bg_header}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.first_name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.last_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.email}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(deleteItem(item))}
              >
                Delete
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => handlerEditItem(item)}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
          {isOpenEditor && item.id === itemsOnEdit.id && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="first_name"
                control={control}
                defaultValue={item.first_name}
                render={({ onChange, value }) => (
                  <TextField
                    className={classes.inputText}
                    onChange={onChange}
                    value={value}
                    label="first name"
                    variant="outlined"
                    required
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                defaultValue={item.last_name}
                render={({ onChange, value }) => (
                  <TextField
                    className={classes.inputText}
                    onChange={onChange}
                    value={value}
                    label="last name"
                    variant="outlined"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue={item.email}
                render={({ onChange, value }) => (
                  <TextField
                    className={classes.inputText}
                    onChange={onChange}
                    value={value}
                    label="email"
                    variant="outlined"
                  />
                )}
              />
              <Button
                className={classes.formButton}
                type="submit"
                variant="contained"
                color="primary"
              >
                Save
              </Button>
              <Button
                onClick={() => setIsOpenEditor(false)}
                className={classes.formButton}
                variant="contained"
              >
                Cancel
              </Button>
            </Form>
          )}
        </CardItem>
      ))}
    </CardList>
  );
}
