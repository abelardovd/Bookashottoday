import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'


import imgWedding1 from '../images/imgWeddings.jpg'
import imgEngagements2 from '../images/imgEngagements.jpg'
import imgPortrait3 from '../images/imgPortraits.jpg'





const Title = styled.h1`
  font-size: 3.2em;
  text-align: center;
  color:  #404040;
  position: absolute;
  left: 280px;
    top: -11px;
`
const Par1 = styled.h1`
padding: 100px 15px;

  font-size: 5.9em;
  text-align: center;
  color: whitesmoke;
  position: absolute;
    left: 100px;
    top: 110px;
    
    
    z-index: 1;
`

const Par1mini = styled.h1`


  font-size: 1.9em;
  text-align: center;
  color: whitesmoke;
  position: absolute;
    left: 600px;
    top: 275px;
    
    
    z-index: 1;
`

const Par2 = styled.h1`
padding: 100px 15px;

  font-size: 4.2em;
  text-align: center;
  color: whitesmoke;
  position: absolute;
    left: 480px;
    top: 550px;
   
    
    z-index: 1;
`
const Par2mini = styled.h1`


  font-size: 1.9em;
  text-align: center;
  color: whitesmoke;
  position: absolute;
    left: 150px;
    top: 685px;
    
    
    z-index: 1;
`
const Par3 = styled.h1`
padding: 100px 15px;

  font-size: 5.9em;
  text-align: center;
  color: whitesmoke;
  position: absolute;
    left: 40px;
    top: 1150px;
   
    
    z-index: 1;
`
const Par3mini = styled.h1`
padding: 100px 15px;

  font-size: 1.9em;
  text-align: center;
  color: whitesmoke;
  position: absolute;
    left: 390px;
    top: 1215px;
   
    
    z-index: 1;
`

const Image = styled.img`
    background-color: #dcdcd4;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0px;
    top: 50px;
`

const Image2 = styled.img`
    background-color: #dcdcd4;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0px;
    top: 550px;
`

const Image3 = styled.img`
    background-color: #dcdcd4;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0px;
    top: 1000px;
`
const Button = styled.a`

display: inline-block;
    position: absolute;
    left: 250px;
    top: 340px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    padding: 50px 30px;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    border-image: initial;
    width: 15%;
    height: 10%;
    :hover {
      background-color: #555555;
      color: white;
    }
    
    
`

const Button2 = styled.a`

display: inline-block;
    position: absolute;
    left: 750px;
    top: 700px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    padding: 50px 30px;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    border-image: initial;
    width: 15%;
    height: 10%;
    :hover {
      background-color: #555555;
      color: white;
    }
    
    
`


const IndexPage = () => (
  
  <Layout>
    <Title>Book A Shoot Today</Title>
    <Image src={imgWedding1} alt='something here'/>
    <Par1>weddings</Par1>
    <Par1mini>Capture your big moment.</Par1mini>
    <Image2 src={imgEngagements2} alt='something here'/>
    <Par2>Engagements</Par2>
    <Par2mini>Every Detail. Forever.</Par2mini>
    <Image3 src={imgPortrait3} alt='something here'/>
    <Par3>Portait</Par3>
    <Par3mini>A Photographic Story.</Par3mini>
    
    
    
    
    
    
  </Layout>
)

export default IndexPage
