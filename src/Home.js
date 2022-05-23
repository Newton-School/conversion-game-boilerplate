import React from 'react';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





function Home() {

  

  return (
    
      <div className='home'>
          <h1 className="font-normal my-4 text-center text-xl">Choose your category</h1>
          <div id='home-bt' style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <a href='./length'>
            <Button className='bt' variant='primary' style={{width:'200px','background-color':'purple', margin:'20px'}} id='bt1'>Length </Button>
            </a>
            <a href='./mass'>
            <Button className='bt' variant='primary' style={{width:'200px','background-color':'purple', margin:'20px'}}>Mass   </Button>
            </a>
            <a href='./volume'>
            <Button className='bt' variant='primary' style={{width:'200px','background-color':'purple', margin:'20px' }}>Volume </Button>
            </a>
            <a href='./time'>
            <Button className='bt' variant='primary' style={{width:'200px','background-color':'purple', margin:'20px' ,marginBottom:'400px'}}>Time   </Button>
            </a>
           
          </div>
      </div>
      
  );
}

export default Home;

