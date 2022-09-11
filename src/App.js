import React, { useState, useEffect } from 'react'
import { Button, Snackbar } from '@mui/material';
import axios from 'axios'
import './App.css';

import Car from './Car.jsx'
//import { datap1, datap2, datap3 } from './datap'

import data from './dataO.jsx'

//const piclink = "https://picsum.photos/v2/list";
const piclink = `https://testnets-api.opensea.io/api/v1/assets?owner=0xc839eC222F6EC940980227B39B2ef0715EEF1718&order_direction=desc&limit=30&include_orders=false`


function App() {
  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);
  const [post3, setPost3] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    axios.get(`${piclink}&offset=${0}`).then((response) => {
      setPost1(response.data)
    });
    axios.get(`${piclink}&offset=${20}`).then((response) => {
      setPost2(response.data)
    });
    axios.get(`${piclink}&offset=${40}`).then((response) => {
      setPost3(response.data)
    });
  }, [])

  if (post1 === null){
    setPost1(data)
  }
  if (post1 === null){
    setPost2(data)
  }
  if (post1 === null){
    setPost3(data)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div class="head-center">
        <h1>Find your ART!</h1>
        <h3>
          Parse through uncharted waters and unadvertized NFT arts.<br></br> 
          Take off the tinted glasses! Find the art you truly like!
          </h3>
      </div>
      <div class="obj-center">
        <Button variant='contained' onClick={refreshPage} >REFRESH PAGE</Button>
      </div>
      <div class="row">
        <div class="column"><Car images={post1} /></div>
        <div class="column"><Car images={post2} /></div>
        <div class="column"><Car images={post3} /></div>
      </div> 
      <Snackbar 
        message="Page will be refreshed after 60 seconds."
        open={open}
        autoHideDuration={10000}
        onClose={()=>{
          setOpen(false);
        }}
        //anchorOrigin={'top', 'left'}
      />
    </div>

  );
}

export default App;
