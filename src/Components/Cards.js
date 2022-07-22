import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import '../Css/style.css'

import '../Css/style.css'
const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    console.log(data)

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to cart</h2>

            <div className='row d-flex justify-content-center align-item-center'>
                {
                    data.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '18rem', border: 'none' }} className="mx-4 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} className='mt-3' />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            Price: ₹{element.price}
                                        </Card.Text>

                                        <div className='button_div d-flex justify-content-center'>
                                            <Button variant="primary" className='col-lg-12'>Add To Cart</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Cards