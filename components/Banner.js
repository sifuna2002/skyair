import Container from '@mui/material/Container';
import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
function Banner() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f5f6',
        width: '100%',
        height:40,
        color:'gray',
    }}>
        <Container maxWidth="lg" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
            <AppsIcon />
            <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginLeft: '40%',
    }}>
                <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
                    <a style={{marginRight:20}} href="#" onClick={() =>{}}>Support</a>
                    <LanguageIcon fontSize='30' style={{marginTop:3}} />
                    <a style={{marginLeft:10}} href="#" onClick={() =>{}}>Language</a>
                </div>
                <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
                    <a href="#" onClick={() =>{}}>Sign In</a>
                    <a style={{marginLeft:20}} href="#" onClick={() =>{}}>Sign Up</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner