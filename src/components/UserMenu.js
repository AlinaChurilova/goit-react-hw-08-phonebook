import { ImUserTie } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import  authOperations  from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
 

  return (
    <div style={styles.container}>
      <span>
            <ImUserTie style={{marginRight: 8}} />
            </span>
          <span style={styles.name}>Welcome { name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.LogOut())}>
        Log out
      </button>
    </div>
  );
}