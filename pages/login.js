import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
export default function Login() {

    
  return (
        <Container>
            <LoginContainer>
                <div style={{color: 'white',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start'}}>
                    <KeyboardArrowLeftOutlinedIcon />
                    <h4>back to booking</h4>
                </div>
                <FormContainer>
                    <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',padding:20}}>
                        <div style={{color: 'white',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',backgroundColor: '#27428a',height:30,padding:10,}}>
                            <FlightOutlinedIcon style={{marginRight:10,transform: "rotate(90deg)"}} />
                            <h3>skyair</h3>
                        </div>
                        <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: 'whitesmoke',height:30,padding:10,width:300}}>
                            <h3>checkin</h3>
                        </div>
                    </div>
                    <InputContainer style={{marginTop: 20}}>
                        <label >Your Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required />
                    </InputContainer>
                    <InputContainer style={{marginTop: 20}}>
                        <label style={{marginRight: 20}} >Password</label>
                        <VisibilityIcon style={{position: 'absolute',alignSelf: 'center',marginLeft: 270,marginTop:5,color: 'gray'}} />
                        <input type="passwoed" name="name" placeholder="Enter your Password" required />
                        
                    </InputContainer>
                    <Button>
                        SIGN IN
                    </Button>
                    <div style={{backgroundColor: '#7b93af',opacity:0.8,width: '100%',height:80,marginTop:20}}>
                        <div style={{color: 'white',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',height:30,padding:10}}>
                            <FormatColorFillIcon style={{marginRight:10}} />
                            <p>Bonus program included</p>
                        </div>
                        <div style={{color: 'white',display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',height:30,padding:10,}}>
                            <InfoIcon style={{marginRight:10}} />
                            <p>You are always welcomed</p>
                        </div>
                    </div>
                </FormContainer>
            </LoginContainer>
            <Fligh>
                <h1>Fligh high.</h1> <br />
                <h1>above the sky.</h1>
                <div style={{color: 'white',display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                    <h3 style={{marginRight:10}}>comfortable. secure. your way.</h3>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
            </Fligh>
            <Footer>
                <span><p style={{cursor: 'pointer'}}>legal notice | &copy; 2022 skyair</p></span>
            </Footer>
        </Container>
  )
}
const Container=styled.div`
    height:100vh;
    width:100%;
    background-image: url('/img/plane.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    font-family: sans-serif;
    
`
const LoginContainer=styled.div`
    height:400px;
    width:450px;
    margin-top:10%;
    margin-left:15%;
`
const FormContainer=styled.div`
    position: relative;
    ::before{
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: #bfd5ea;
        opacity: .1
    }

`
const InputContainer=styled.div`
    margin-left:36px;
    label{
        color:white;
        margin-right:10px;
    }
    input{
        height:35px;
        border:none;
        width:302px;    
    }
    input:focus{
        outline:none;
    }

`
const Button =styled.button`
    border-radius:30px;
    width:200px;
    height:40px;
    background-color:#0074ff;
    cursor:pointer;
    border:none;
    margin-top:20px;
    margin-left:170px;
    color:white;
    font-size:18px;
`
const Fligh=styled.div`
    color:white;
    top:15%;
    right:7%;
    line-height:0;
    position: absolute;
    h1{
        font-size:50px;
        color:#27428a;
    }
   
`
const Footer=styled.div`
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    ::before{
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: #bfd5ea;
        opacity: .1
    }    
`