import Image from 'next/image'
import React from 'react'
import Nav from '../components/Nav'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


function Landing() {
  return (
    <>
        <Nav />
        <div style={{
                width:'100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                lineHeight: .2,
                overflow: 'hidden', 
            }}>
                <h1>Find And Book </h1>
                <h1>A Great Experience</h1>
            <div style={{
                marginTop:20,
                height:300,
                width:'90%',
                backgroundImage:'url("/sky.jpg")',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                borderRadius:500,
                position:'relative',
            }}>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: 150,
                borderRadius:25,
                marginTop:20,
                border:'2px solid #f4f4f4',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: 50,
                    paddingTop:5,
                    paddingBottom:5,
                    width:'40%',
                    borderRadius:20,
                    backgroundColor: '#f1f5f6',
                }}>
                    <div><p>Economy</p></div>
                    <div style={{backgroundColor: '#3f5cb8',borderRadius:20,color:'white',paddingLeft:20,paddingRight:20}}><p>Business Class</p></div>
                    <div><p>Fast Class</p></div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height:50,
                        paddingTop: 10,
                    }}>
                        <div style={{marginTop:15,backgroundColor: '#f1f5f6',borderRadius:20,height:'100%',width:30,display: 'flex',alignItems: 'center',justifyContent: 'center'}}> <LocationOnOutlinedIcon /> </div>
                        <div style={{marginLeft:10,}}>
                            <h4>Location</h4>
                            <p style={{fontSize:9}}>Where are you going?</p>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height:50,
                        paddingTop: 10,
                    }}>
                        <div style={{marginTop:15,backgroundColor: '#f1f5f6',borderRadius:20,height:'100%',width:30,display: 'flex',alignItems: 'center',justifyContent: 'center'}}> <Person2OutlinedIcon /> </div>
                        <div style={{marginLeft:10,}}>
                            <h4>Travellers</h4>
                            <p style={{fontSize:9}}>Add guests</p>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height:50,
                        paddingTop: 10,
                    }}>
                        <div style={{marginTop:15,backgroundColor: '#f1f5f6',borderRadius:20,height:'100%',width:30,display: 'flex',alignItems: 'center',justifyContent: 'center'}}> <CalendarMonthOutlinedIcon /> </div>
                        <div style={{marginLeft:10,}}>
                            <h4>Check in</h4>
                            <p style={{fontSize:9}}>Add date</p>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height:50,
                        paddingTop: 10,
                    }}>
                        <div style={{marginTop:15,backgroundColor: '#f1f5f6',borderRadius:20,height:'100%',width:30,display: 'flex',alignItems: 'center',justifyContent: 'center'}}> <CalendarMonthOutlinedIcon /> </div>
                        <div style={{marginLeft:10,}}>
                            <h4>Check out</h4>
                            <p style={{fontSize:9}}>Add date</p>
                        </div>
                    </div>
                    <div style={{marginTop:15,backgroundColor: '#3f5cb8',color:'white',borderRadius:20,height:'120%',width:50,display: 'flex',alignItems: 'center',justifyContent: 'center'}}> <SearchOutlinedIcon /> </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing