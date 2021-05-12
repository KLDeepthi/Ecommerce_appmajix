import React from 'react';
import {Button} from '@material-ui/core';
import image1 from './assets/image1.jpg';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div style={{paddingTop:'10vh'}}>

    <img src={image1} style={{height:'600px',width:'100%',paddingLeft:'200px'}}/>
    <div><Button style={{fontSize:'20px',background:'blue',marginLeft:'50%',marginTop:'40px'}}><Link className="nav-link js-scroll-trigger" to={"/products"} style={{color:'white'}}>Start shopping</Link></Button></div>
    </div>
  );
};

export default home;