import React from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../../components/register/Register.jsx';
import Logo from '../../components/logo/Logo.jsx';
import ParticlesBg from 'particles-bg';

const RegisterPage = ({ setUser }) => {
    const nagivate = useNavigate();

    const handleRegister = async (regData) => {
        try {
            const res = await fetch('https://face-recognition-backend-pz0b.onrender.com/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: regData.name,
                    email: regData.email, 
                    password: regData.password
                })
            });
            const data = await res.json();

            setUser(data);
            nagivate('/main');
        } catch (err) {
            console.log("Error registering!", err);
        }
    }

    const goToSignIn = () => {
        nagivate('/signin');
    }

    return (
        <div>
            <Logo /> 
            <Register handleRegister={handleRegister} goToSignIn={goToSignIn} />
            <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        </div>
    )
}

export default RegisterPage;