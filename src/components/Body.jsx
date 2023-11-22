import React from 'react'
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './Body.css'
import { Row } from 'react-bootstrap';
function Body() {
  return (
    <div>
      
  <Grid container spacing={2}  style={{backgroundColor:'rgb(145, 52, 145)'}}>
  <Grid item xs={6}>
    <img src="https://cdn1.byjus.com/wp-content/uploads/2023/10/Homepage_1stFold_Banner.webp" alt="" />
  </Grid>
  <Grid  xs={6} >
    <br /><br />
    <div className='bg-light justify-content-center align-items-center  text-center rounded' style={{height:'600px',width:'70%',marginLeft:'120px'}}>
        <br />
        <h2 >Book your Free Session</h2>
        <p >Learn from India's best teachers</p>
      <b >Select the Session Mode</b>
      <div className="d-flex justify-content-center align-items-center  text-center mt-3">
      <Button style={{width:'150px',height:'50px'}} variant="outlined">online</Button>
      <Button style={{width:'150px',height:'50px'}} className='ms-2' variant="outlined">offline</Button>
      </div>
      <h4 className='text-center mt-3'>Enter Your Details</h4>
      <TextField id="outlined-basic"  style={{height:'40px',width:'450px'}} label="Enter name of your Child" variant="outlined"/>
      <br />
      <TextField id="outlined-basic" className='mt-4' style={{height:'20px',width:'330px'}} label="Enter your Mobile number" variant="outlined" />
      <Button className=' mt-4 ms-2' style={{height:'55px',backgroundColor:'#5C72FF'}} variant="contained">Send OTP</Button>
      <br />
      <TextField id="outlined-basic" className='mt-3' style={{height:'40px',width:'450px'}} label="Email Address" variant="outlined"/>
      <br /><br />
      <select name="" id=""  placeholder='state' className=' rounded ' style={{height:'40px',width:'450px'}}>
        <option value="State" className='ms-3'>State</option>
        <option value="">Kerala</option>
        <option value="">Tamil Nadu</option>
      </select>
      <Button className='rt mt-2' style={{width:'450px',height:'45px'}} variant="contained"><b>Continue to Schedule</b></Button>
    </div>
   
   
  </Grid>
  
</Grid>
<div>
    <h3 className='text-center mt-5 mb-5'>Comprehensive learning programs <br />
& classes for all students</h3>
<p className='text-center'>Become lifelong learners with India's best teachers, <br />
engaging video lessons and personalised learning journeys</p>
<Container>


    <div className='shadow d-flex' style={{backgroundColor:'  rgba(128, 128, 128, 0.142)',height:'400px'}} >
      
        <Grid xs={3}>
            <img  src="https://cdn1.byjus.com/wp-content/uploads/2022/04/btla.png" style={{width:'250px',marginTop:'100px'}} alt="" />
        </Grid>
        <Grid xs={2}>
        <img className='ms-5' src="https://logos-world.net/wp-content/uploads/2021/08/Byjus-Logo.png" style={{width:'200px',marginTop:'100px'}} alt="" />
        <h5 className='ms-5'>Personalised learning app <br />
        to learn anytime, anywhere</h5>
        <h6  className='text-center'>Know More <i class="fa-solid fa-angles-right"></i></h6>
        </Grid>
<Grid xs={2}>
          <button className='cls btn align-items-center d-flex justify-content-center'>classes 4-10</button>
          <button className='rt btn align-items-center d-flex justify-content-center' style={{marginTop:'310px'}}>Book a FREE class</button>
  
</Grid>

       <Grid xs={3} >
         <div className='d-flex'>
            <img className='ms-3' src="https://cdn1.byjus.com/wp-content/uploads/2022/04/byjus-classes-tutor-img.png" style={{width:'250px',marginTop:'100px'}} alt="" />
           <Grid xs={2}> <img className=' ms-4' src="https://cdn1.byjus.com/byjusweb/img/home/image/byjus_classes_2_line_logo.png" style={{width:'200px',marginTop:'100px'}} alt="" />
           <h5 className=' mt-5'>Personalised learning app <br />
        to learn anytime, anywhere</h5>
        <h6  className='text-center'>Know More <i class="fa-solid fa-angles-right"></i></h6>
         </Grid>
         </div>
        
          
       </Grid>
       
        
    </div>

    {/* ..................... */}
    <br /><br /><br />

    <div className='shadow d-flex' style={{backgroundColor:'  rgba(128, 128, 128, 0.142)',height:'450px'}} >

      <Grid xs={4}>
          <img  className='ms-5' src="https://cdn1.byjus.com/wp-content/uploads/2022/04/jeeTeaching.png" style={{width:'400px',marginTop:'100px'}} alt="" />
          <h6 className='text-center'>Comprehensive learning program for JEE preparation</h6>
          <button className='rt btn align-items-center d-flex justify-content-center' style={{marginLeft:'180px'}}>Explore JEE</button>
      </Grid>
    <Grid xs={4}>
        <button style={{marginLeft:'130px'}} className='cls btn align-items-center d-flex justify-content-center'>classes 4-10</button>
        <img src="https://cdn1.byjus.com/byjusweb/img/home/image/Akash.png" className='mt-4' style={{height:'100px',marginLeft:'120px'}} alt="" />
        

    </Grid>

     <Grid xs={4} >
       <div className='d-flex'>
          <img  src="https://cdn1.byjus.com/wp-content/uploads/2022/04/neet_teaching_web.png" style={{width:'400px',marginTop:'100px',marginLeft:'90px'}} alt="" />
         {/* <Grid xs={2}> <img className=' ms-4' src="https://cdn1.byjus.com/byjusweb/img/home/image/byjus_classes_2_line_logo.png" style={{width:'200px',marginTop:'100px'}} alt="" />
         <h5 className=' mt-5'>Personalised learning app <br />
      to learn anytime, anywhere</h5>
      <h6  className='text-center'>Know More <i class="fa-solid fa-angles-right"></i></h6>
       </Grid> */}
       </div>
       <h6 className='text-center ms-5'>Comprehensive learning program for NEET preparation</h6>
       <button className='rt btn align-items-center d-flex justify-content-center' style={{marginLeft:'180px'}}>Explore NEET</button>
      
        
     </Grid>
     
      
  </div>
</Container>
  </div>
<Container className='mt-5'>
  
   <div className='d-flex ' style={{marginLeft:'60px'}}>
    
      <div className='shadow ms-5 d-flex' style={{backgroundColor:'  rgba(128, 128, 128, 0.142)',height:'300px'}}>
      
         <Grid xs={3}>
         <button style={{marginLeft:'170px'}} className='cls btn align-items-center d-flex justify-content-center'>classes LKG-3</button>
            <img className='mt-5 ms-5' src="https://cdn1.byjus.com/wp-content/uploads/2022/04/dbel.png" style={{height:'200px',width:'200px'}} alt="" />
             
         </Grid>
         <Grid xs={3}>
         <img className='mt-5 ms-5' src="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_disney_logo.svg" style={{width:'150px'}} alt="" />   
         <h5 className='mt-3 ms-5'> Specially crafted <br />
        early learning program <br />
        for young minds</h5>
<button className='rt btn align-items-center d-flex justify-content-center' style={{marginLeft:'80px'}}>Explore </button>
         </Grid>
             
         
      </div>
      <div className='shadow d-flex ms-5' style={{backgroundColor:'  rgba(128, 128, 128, 0.142)',height:'300px'}}>
         <Grid xs={3}>
         <button style={{marginLeft:'170px'}} className='cls btn align-items-center d-flex justify-content-center'>IAS</button>
            <img className=' ms-5' src="https://cdn1.byjus.com/wp-content/uploads/2022/04/IAS.png" style={{height:'200px',width:'200px',marginTop:'30px'}} alt="" />
             
         </Grid>
         <Grid xs={3}>
         <img className='mt-5 ms-5' src="https://cdn1.byjus.com/byjusweb/img/home/svg/bj-ias-icon.svg" style={{width:'150px'}} alt="" />   
         <h5 className='mt-3 ms-5'> Personalised <br /> learning program <br />
          for the <br /> leaders of tomorrow</h5>
<button className='rt btn align-items-center d-flex justify-content-center' style={{marginLeft:'80px'}}>Explore </button>
         </Grid>
             
         
      </div>
   </div>
</Container>

<h3 className='text-center mt-5 mb-5'>Get the BYJU'S advantage</h3>

<Container>

      <div className='d-flex ms-5'>
        <Grid xs={4} className='ms-5'>
            <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png" style={{height:'300px' ,width:'300px'}} alt="" />
            <h3 className='text-center'>Conceptual clarity <br />
            through visualisation</h3>
        </Grid>
        <Grid xs={4} className='ms-5'>
            <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png" style={{height:'300px' ,width:'300px'}} alt="" />
            <h3 className='text-center'>Personalised learning <br />
            programs</h3>
        </Grid>
        <Grid xs={4} className='ms-5'>
            <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png" style={{height:'300px' ,width:'300px'}} alt="" />
            <h3 className='text-center'>Unmatched individual <br />
            attention</h3>
        </Grid>
  
      </div>


      <h3 className='text-center mt-5 mb-5'>Our students and parents love us</h3>

      <div className='d-flex ms-5 align-items-center d-flex justify-content-center'>
        <Grid xs={3} className='ms-5'>
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic_downloads.svg" style={{height:'50px' ,width:'50px',marginLeft:'40px'}} alt="" />
            <h3 className='text-center' style={{color:'rgb(145, 52, 145)'}}>150+ Million</h3>
            <h4 className='text-center'>downloads</h4>
        </Grid>
        <Grid xs={3} className='ms-5'>
            <img  src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-app%20rating.svg" style={{height:'50px' ,width:'50px',marginLeft:'45px'}} alt="" />
            <h3 className='text-center'>4.7+ Star</h3>
            <h4 className='text-center'>app rating</h4>
        </Grid>
        <Grid xs={3} className='ms-5'>
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-cities.svg" style={{height:'50px' ,width:'50px'}} alt="" />
            <h3 className='text-center'>1701+ Cities</h3>
            <h4 className='text-center'>worldwide</h4>
        </Grid>
        <Grid xs={3} className='ms-5'>
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-time.svg" style={{height:'50px' ,width:'50px'}} alt="" />
            <h3 className='text-center'>71 mins avg.</h3>
            <h4 className='text-center'>time spent daily</h4>
        </Grid>  
      </div>
      
        

</Container>



<Container  className='mt-5'>
  <Carousel data-bs-theme="dark" className='mb-5'>
        <Carousel.Item>
        <Row style={{marginLeft:'138px'}}>
          {/* <div className='col-md-1 ' style={{marginLeft:'100px'}}></div> */}
          <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/06/14114147/feature-image-for-science-experiments-for-kids-how-to-make-raisins-dance.jpg" style={{height:'250px'}} />
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Early Learn</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            Simple Science Experiments for Kids: Dancing Raisins
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>
        <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/06/22122949/Ada_Lovelace_portrait-scaled.jpg" style={{height:'250px'}}/>
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Visual Stories</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            8 Historical women Who Changed The World
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>
        <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2022/01/10194126/nature-wildlife-quiz-logo.png" style={{height:'250px'}} />
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Quiz Corner</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            Nature and Widlife Quiz
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>
        <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/06/21210753/pexels-pixabay-262786.jpg" style={{height:'250px'}} />
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Visual Stories</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            10 Of the Oldest Countries in the Word
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>

        {/* <div className='col-md-1'></div> */}
        
        </Row>
          
        </Carousel.Item>
        <Carousel.Item>
        <Row style={{marginLeft:'138px'}}>
          {/* <div className='col-md-1 ' style={{marginLeft:'100px'}}></div> */}
          <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/06/14114147/feature-image-for-science-experiments-for-kids-how-to-make-raisins-dance.jpg" style={{height:'250px'}} />
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Early Learn</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            Simple Science Experiments for Kids: Dancing Raisins
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>
        <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/06/22122949/Ada_Lovelace_portrait-scaled.jpg" style={{height:'250px'}}/>
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Visual Stories</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            8 Historical women Who Changed The World
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>
        <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2022/01/10194126/nature-wildlife-quiz-logo.png" style={{height:'250px'}} />
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Quiz Corner</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            Nature and Widlife Quiz
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>
        <Card className='col-md-3 shadow me-5' style={{ width: '14rem',backgroundColor:'rgba(128, 128, 128, 0.142)' }}>
          <Card.Img variant="top" className='mt-2' src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/06/21210753/pexels-pixabay-262786.jpg" style={{height:'250px'}} />
          <Card.Body>
            <Card.Title style={{color:'rgb(145, 52, 145)'}}>Visual Stories</Card.Title>
            <Card.Text className='text-dark fw-bold'>
            10 Of the Oldest Countries in the Word
            </Card.Text>
             <u style={{color:'rgb(145, 52, 145)'}}><b>Read More</b></u>
          </Card.Body>
        </Card>

        {/* <div className='col-md-1'></div> */}
        
        </Row>
        </Carousel.Item>
      </Carousel>

      <button className='rt btn align-items-center d-flex justify-content-center mt-5 mb-5' style={{marginLeft:'620px',width:'190px'}}>Explore All</button>
      <img className='mb-5' src="https://www.kidsafeseal.com/sealimage/1356666662988262259/byjus_india_svg_darktm.svg" style={{marginLeft:'620px',width:'190px'}} alt="" />
  
</Container>








</div>
  
)}


export default Body