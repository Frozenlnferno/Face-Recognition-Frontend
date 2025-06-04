import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    return (
        <div className='center ma-4'>
            <div className='relative inline-block'>
                <img id='input-image' src={imageURL} width='500px' height='auto'/>  
                {box.topRow && <div className='bounding-box' 
                    style={{top: box.topRow,
                            left: box.leftCol,
                            width: box.rightCol - box.leftCol,
                            height: box.bottomRow - box.topRow
                    }}>
                </div>} 
            </div> 
        </div>
    )
}

export default FaceRecognition;