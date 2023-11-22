import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <div style={{backgroundColor:'rgb(145, 52, 145)'}}>
       <Container>
        <br /><br />
           <div className='d-flex'>
            <Grid>
                <h5 className='text-warning'>COURSES</h5>
                <div className='text-light'>
                    <h6>CBSE</h6>
                    <h6>ICSE</h6>
                    <h6>CAT</h6>
                    <h6>IAS</h6>
                    <h6>NEET</h6>
                    <h6>JEE Advanced</h6>
                </div>
            </Grid>
            <Grid style={{marginLeft:'50px'}}>
                <h5 className='text-warning'>EXAMS</h5>
                <div className='text-light'>
                    <h6>CAT exam </h6>
                    <h6>GATE exam</h6>
                    <h6>CAT 2023</h6>
                    <h6>IAS exam</h6>
                    <h6>Bank Exam</h6>
                    <h6>Education News</h6>
                </div>
            </Grid>
            <Grid style={{marginLeft:'50px'}}>
                <h5 className='text-warning'>CLASSES</h5>
                <div className='text-light'>
                    <h6>Kids Learning </h6>
                    <h6>class 1st - 3rd</h6>
                    <h6>BYJU's Tution Centre</h6>
                </div>
            </Grid>
            <Grid style={{marginLeft:'50px'}}>
                <h5 className='text-warning'>EXAM PREPARATION</h5>
                <div className='text-light'>
                    <h6>free CAT Prep </h6>
                    <h6>free IAS Prep </h6>
                    <h6>Maths</h6>
                </div>
            </Grid>
            <Grid style={{marginLeft:'50px'}}>
                <h5 className='text-warning'>COMPANY</h5>
                <div className='text-light'>
                    <h6>About Us</h6>
                    <h6>Contact Us</h6>
                    <h6>Careers</h6>
                </div>
            </Grid>
            <Grid style={{marginLeft:'50px'}}>
                <h5 className='text-warning'>STATE BOARDS</h5>
                <div className='text-light'>
                    <h6>Maharashtra</h6>
                    <h6>Gujarat</h6>
                    <h6>Kerala</h6>
                </div>
            </Grid>
            <Grid style={{marginLeft:'50px'}}>
                <h5 className='text-warning'>FOLLOW US</h5>
                <div className='text-light  d-flex' style={{marginLeft:'30px'}}>
                    <h6><i class="fa-brands fa-facebook me-2"></i></h6>
                    <h6><i class="fa-brands fa-linkedin"></i></h6>
                </div>
            </Grid>
           </div>

           {/* -------------------------------------------- */}
           
           
       </Container>
    </div>
  )
}

export default Footer