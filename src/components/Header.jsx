import React from 'react'
import {Container, Navbar , FormControl, Dropdown, Badge, Nav, Button } from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
import { AiFillDelete } from 'react-icons/ai'
import {Link} from "react-router-dom"
import { CartState } from '../context/Context'
import "./Style.css"

const Header = () => {
    const{state: {cart},dispatch, productDispatch} = CartState()
  return (
    <div>
        <Navbar bg="dark" variant="dark" style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width:500}}
                    placeholder="Search a product"
                    className='m-auto'
                    onChange={(e)=>{
                      productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value,
                      })
                    }}/>
                </Navbar.Text>
                <Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="white" fontSize="25px"/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        

                        <Dropdown.Menu style={{minWidth: 370}}>
                            {cart.length>0?(
                                <>
                                {
                                    cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                          <img
                                            src={prod.image}
                                            className="cartItemImg"
                                            alt={prod.name}
                                          />
                                          <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span>₹ {prod.price.split(".")[0]}</span>
                                          </div>
                                          <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                              dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                              })
                                            }
                                          />
                                        </span>
                                      ))
                                }
                                <Link to="/cart">
                                    <Button style={{ width: "95%", margin: "0 10px" }}>
                                    Go To Cart
                                    </Button>
                                </Link>
                            
                                </>

                            ):(
                                <span style={{padding:10 }}>Cart is Emty!</span>
                            )
                            }
                            

                        </Dropdown.Menu>

                        
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
      
    </div>
  )
}

export default Header
