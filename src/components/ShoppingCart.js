import React from 'react'
import {Offcanvas} from 'react-bootstrap';
import {CardContext} from '../context/Context';

function ShoppingCart() {

    const details = React.useContext(CardContext);
    
    return (
      <>
        <Offcanvas placement='end' show={details.show} onHide={details.setCloseCanvas} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
     
    );
  }

export default ShoppingCart;
