import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navigation from '../../components/navigation/Navigation.jsx';
import Logo from '../../components/logo/Logo.jsx';
import ImageLinkForm from '../../components/image-link-form/ImageLinkForm.jsx';
import Rank from '../../components/rank/Rank.jsx';
import FaceRecognition from '../../components/face-recognition/FaceRecognition.jsx';
import ParticlesBg from 'particles-bg';

const MainPage = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('null');
    const [box, setBox] = useState({});

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const createBox = (data) => {
        const img = document.getElementById('input-image');
        const width = Number(img.width);
        const height = Number(img.height);
        const faceBounds = data.outputs[0].data.regions[0].region_info.bounding_box;
        
        setBox({
            topRow: faceBounds.top_row * height,
            rightCol: faceBounds.right_col * width,
            bottomRow: faceBounds.bottom_row * height,
            leftCol: faceBounds.left_col * width
        });
    }

    const submitURL = async () => {
        try {
            setImageURL(input);
            const res = await fetch('https://face-recognition-backend-pz0b.onrender.com/api/clarifai', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    inputUrl: input
                })
            });
            const data = await res.json();
            createBox(data);

            const res2 = await fetch('https://face-recognition-backend-pz0b.onrender.com/image', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: user.id
                })
            });
            const data2 = await res2.json();
            setUser(prev => ({
                ...prev,
                entries: data2
            }))
            console.log(data2);
        } catch (err) {
            console.log("Failed to upload image! ", err);
            setBox({});
        }
    };

    const signOut = () => {
        navigate('/signin');
    };

    return (
        <div>
            <Navigation signOut={signOut} />
            <Logo /> 
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm 
                onInputChange={onInputChange} 
                onSubmit={submitURL}
            />
            <FaceRecognition imageURL={imageURL} box={box} />
            <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        </div>
    );
}

export default MainPage;