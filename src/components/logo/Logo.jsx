import Tilt from 'react-parallax-tilt';
import brain from '../../assets/Logo.png';

const Logo = () => {
    return (
        <div className="flex m-4 mt-0">
            <Tilt className="rounded-lg shadow-lg bg-white h-24 w-24 p-1">
                <img src={brain} alt="logo" />
            </Tilt>        
        </div>
    )
}

export default Logo;