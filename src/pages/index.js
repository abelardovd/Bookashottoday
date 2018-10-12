import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {FaPhone,FaFacebook,FaInstagram,FaEnvelope} from 'react-icons/fa'



import imgWeddings from '../images/imgWeddings.jpg'
import imgEngagements from '../images/imgEngagements.jpg'
import imgPortraits from '../images/imgPortraits.jpg'
import imglogo from '../images/logo.png'

const Content = styled.div`

  background-color:  rgba(215, 214, 214, 0.988);
  
  display: flex;
  align-items: center;
  justify-content: space-around;  
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  
`
const Title1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: absolute;
    left: 600px;
    top: 700px;
`
const Title2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: absolute;
    left: 600px;
    top: 1600px;
`
const Title3 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: absolute;
    left: 600px;
    top: 2800px;
`
const Imagelogo = styled.img`
 background-color: transparent;

display: block;
    margin-left: auto;
    margin-right: auto;
    width: 7%;
    height: 7%;
  `
const Image1 = styled.img`

display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 80%;   
`
const Image2 = styled.img`

display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 80%;
   
    
`
const Image3 = styled.img`

display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 80%;
    
   `
   const Social = styled.div`
   position: absolute;
   display: flex;
  align-items: center;
  justify-content: space-around; 

     font-size: 2.5em;
     
   `


  

  



const IndexPage = () => (

  <Layout>
    <Imagelogo src={imglogo} alt='something here'/>
    <Title>Book A Shoot Today</Title>
    <Content>
    
    <Image1 src={imgWeddings} alt='something here'/>
    <Title1>Weddings Capture your big moment</Title1>
    
    </Content>
    <Content>
    <Image2  src={imgEngagements} alt='something here' />
    <Title2>Every Detail For ever Engagements</Title2>
    
    </Content>

    <Content>
    <Image3 src={imgPortraits} alt='something here'/> 
    <Title3>Portraits A Photographic Story</Title3>
    </Content>
    
    
    <Social>
      <FaPhone/>
      <FaFacebook/>
      <FaInstagram/>
      <FaEnvelope/>
      
    </Social>

    
    
    
    
    
  </Layout>
)

export default IndexPage
