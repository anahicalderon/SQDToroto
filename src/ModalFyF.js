import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import { Modal } from './Modal';
import {GlobalStyles} from './globalStyles';


const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Button =styled.button `
    min-width:100px;
    padding: 16px, 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`

function FloraFauna () {
    const [showModal, setshowModal] = useState(false)
 
    const openModal = () => {
        setshowModal(prev => !prev)
    }
 
    return (
     <>
     <Container>
         <Button onClick={openModal}>
         Soy un super MODAL
         </Button>
         <Modal showModal={showModal} setshowModal={setshowModal}/>
         <GlobalStyles></GlobalStyles>
     </Container>
     </>
 )
}

export default FloraFauna;
