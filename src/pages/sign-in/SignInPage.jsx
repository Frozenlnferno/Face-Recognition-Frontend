import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../../components/sign-in/SignIn.jsx';
import Logo from '../../components/logo/Logo.jsx';
import ParticlesBg from 'particles-bg';

const SignInPage = ({ setUser }) => {
    const navigate = useNavigate();
    const [incorrectLogin, setIncorrectLogin] = useState(false);

    const handleLogin = async (inputEmail, inputPassword) => {
        try {
            const res = await fetch('http://localhost:3001/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: inputEmail,
                    password: inputPassword
                })
            })

            const data = await res.json();

            if (data.id) {
                setUser(data);
                navigate('/main');
            } else {
                console.error('Login failed:', data);
                setIncorrectLogin(true);
            }
        } catch (err) { 
            console.error('Login failed:', err);
            setIncorrectLogin(true);
        }
    }

    const goToRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <Logo /> 
            <SignIn handleLogin={handleLogin} goToRegister={goToRegister} incorrectLogin={incorrectLogin} />
            <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        </div>
    )
}

export default SignInPage;