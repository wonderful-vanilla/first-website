import React from 'react';
import { Link } from 'react-router-dom';


function SliderButton({ path }) {
    return <Link to={path}><button>Explore Now</button></Link>

}

export default SliderButton