import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Form, useStyles, TextArea } from './StyledComponent';
import { addItem } from '../../redux/todos/todos-operation';

export function ToDoCreateForm() {
  const { control, handleSubmit, reset } = useForm();
  const classes = useStyles();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addItem(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            className={classes.inputText}
            onChange={onChange}
            value={value}
            label="title"
            variant="outlined"
            required
          />
        )}
      />
      <Controller
        name="subTitle"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            className={classes.inputText}
            onChange={onChange}
            value={value}
            label="sub-title"
            variant="outlined"
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextArea
            onChange={onChange}
            placeholder="message"
            value={value}
            label="Outlined"
            variant="outlined"
            required
          />
        )}
      />
      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Create
      </Button>
    </Form>
  );
}
