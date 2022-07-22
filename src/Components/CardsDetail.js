import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CardsDetail = () => {
    const { id } = useParams();
    // console.log(id);
    const [data, setData] = useState([]);

    const getData = useSelector((state) => state.cartreducer.carts);

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id
        });
        setData(compareData);
    }

    useEffect(() => {
        compare();
    }, [id]);


    return (
        <div className='container mt-2'>
            <h2 className='text-center'>Items Details Page</h2>
            <section className='container mt-3'>
                <div className='itemsdetails'>
                    {
                        data.map((element) => {
                            return (
                                <>
                                    <div className='items_img'>
                                        <img src={element.imgdata} alt='' />
                                    </div>
                                    <div className='details'>
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong> : {element.rname}</p>
                                                    <p><strong>Price</strong> : ₹{element.price}</p>
                                                    <p><strong>Dishes</strong> : {element.address}</p>
                                                    <p><strong>Total</strong> : ₹300</p>
                                                </td>
                                                <td>
                                                    <p><strong>Rating :</strong><span style={{ backgroundColor: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}> {element.rating}★</span></p>
                                                    <p><strong>Order Review :</strong><span> {element.somedata}</span></p>
                                                    <p><span><i className='fas fa-trash' style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}></i></span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default CardsDetail;
