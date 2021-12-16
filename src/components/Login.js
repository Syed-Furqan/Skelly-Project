import { useHistory } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const history  = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="Login">
            <h1>E-Shop</h1>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button onClick={handleClick} type='submit'>Login</button>
        </div>
    );
}

export default Login;