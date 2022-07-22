import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE } from '../Redux/actions/actions';
import { Link } from "react-router-dom";

const Header = () => {
    const [price, setPrice] = useState();
    const getData = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DELETE(id));
    }

    const total = () => {
        let price = 0;
        getData.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price);
    }
    useEffect(() => {
        total();
    }, [total])


    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: '60px' }}>
                <Container>
                    <Link to='/' className='text-decoration-none text-light mx-3'>Add to Cart</Link>
                    <Nav className="me-auto">
                        <Link to='/' className='text-decoration-none text-light'>Home</Link>
                    </Nav>

                    <Badge badgeContent={getData.length} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                    </Badge>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        {
                            getData.length ?
                                <div className='card_details' style={{ width: '24rem', padding: 10}}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Restaurant</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData.map((e) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <Link to={`/detail/${e.id}`} onClick={handleClose}><img src={e.imgdata} alt='' style={{ width: '5rem', height: '5rem' }} /></Link>
                                                                </td>
                                                                <td>
                                                                    <p>{e.rname}</p>
                                                                    <p>Price : ₹{e.price}</p>
                                                                    <p>Quantity :{e.qnty}</p>
                                                                    <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => { dlt(e.id) }}>
                                                                        <i className="fas fa-trash smalltrash" />
                                                                    </p>
                                                                </td>
                                                                <td className='mt-5'>
                                                                    <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => { dlt(e.id) }}>
                                                                        <i className="fas fa-trash largetrash" />
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                            <p className="text-center">Total : ₹{price}</p>
                                        </tbody>
                                    </Table>
                                </div> :
                                <div className='card_details d-flex justify-content-center align-items-center' style={{ padding: '5px' }}>
                                    <i className='fas fa-close smallclose'
                                        onClick={handleClose}
                                        style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer', color: 'red' }}></i>
                                    <p style={{ fontSize: 22 }}>Your Cart is empty</p>
                                    <img src='https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif' alt='' style={{ height: '20vh' }} />
                                </div>
                        }

                    </Menu>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;