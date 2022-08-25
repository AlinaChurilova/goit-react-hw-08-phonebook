import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import '../index.css'
import { ImWink } from 'react-icons/im';

const styles = {
  form: {
    width: 200,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const style = {
  FormControl: {
    display: 'flex',
    marginBottom: '20px',
    },
    Button: {
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className='Container'>
          <h1>Welcome! Please log in!
                <ImWink style={{ marginLeft: 4, display: 'inline-block', padding: 20  }} />
          </h1>
          <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
              <FormControl style={style.FormControl}>
                  <InputLabel>E-mail</InputLabel>
                  <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                  />
              </FormControl>  
              
              <FormControl style={style.FormControl}>
                  <InputLabel>Password</InputLabel>
                  <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                  />
              </FormControl>   
              <Button style={style.Button}
                        type="submit"
                        variant="outlined"
                        color="primary"
              >
                  Log in   
              </Button>
      </form>

    </div>
  );
}