import React from 'react'
import Button from '@mui/material/Button';

function Nav() {
  return (
    <div>
         <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
            <div style={{
                lineHeight:.2
    }}>
                <h1>SkyAir</h1>
                <span><p style={{fontSize:9,color: 'gray'}}>Flight Booking Agency</p></span>
            </div>
            <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginLeft: '20%',
    }}>
                <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'gray',
    }}>
                    <a style={{marginRight:20, color: 'black',borderBottom:'4px dotted'}} href="#" onClick={() =>{}}>Home</a>
                    <a style={{marginRight:20}} href="#" onClick={() =>{}}>About</a>
                    <a style={{marginRight:20}} href="#" onClick={() =>{}}>Offers</a>
                    <a style={{marginRight:20}} href="#" onClick={() =>{}}>Seats</a>
                    <a style={{}} href="#" onClick={() =>{}}>Destinations</a>
                </div>
                <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
                    <Button variant="contained" style={{borderRadius:20,textTransform:'capitalize'}}>Contact</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav