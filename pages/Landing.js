import Image from 'next/image'
import React from 'react'
import Nav from '../components/Nav'

function Landing() {
  return (
    <>
        <Nav />
        <div style={{
            height:300,
            width:'100%',
            backgroundImage:'url("/sky.jpg")',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            borderRadius:500,
            position:'relative',
        }}>
        </div>
    </>
  )
}

export default Landing