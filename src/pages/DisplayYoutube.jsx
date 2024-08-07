import YouTube from 'react-youtube';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import { useEffect } from 'react';

const DisplayYoutube = () => {
    const {id} = useParams()

    const url = `https://www.youtube.com/watch?v=${id}`
    
    useEffect(() => {
        api.tambahNilai({ url });
    }, [url]);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div>
            <Navbar/>
            <div className='flex justify-center items-center mt-12'>
                <YouTube videoId={`${id}`} opts={opts} onReady={onReady} />
            </div>
            <Footer/>
        </div>
    );
}

export default DisplayYoutube;
