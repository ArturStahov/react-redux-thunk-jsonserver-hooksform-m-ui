import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  inputText: {
    width: '80%',
    marginBottom: 20,
    fontSize: '1.7rem',
  },
  formButton: {
    height: '40px',
    width: '80%',
    fontSize: '1.7rem',
    marginBottom: 10,
  },
});

const CardList = styled.ul`
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const CardItem = styled.li`
  position: relative;
  width: 400px;
  margin-bottom: 30px;
  &:not(:last-child) {
    margin-right: 40px;
  }
  transition: 0.3s ease-in;
  transition-property: box-shadow transform;
  &:hover {
    box-shadow: 19px 18px 10px -1px rgba(125, 86, 249, 0.7);
    transform: translate(5px, 5px);
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  resize: none;
  margin-bottom: 20px;
  font-size: 1.6rem;
  outline: none;
  border: solid 2px #000000;
  border-radius: 5px;
  padding: 10px;
  :focus {
    border-color: blueviolet;
  }
`;

const Form = styled.form`
  padding: 20px 0px 20px;
  position: absolute;
  bottom: -45px;
  background-color: #aac3c3;
  border: none;
  width: 400px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
export { useStyles, CardItem, CardList, Form, TextArea };
