import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar';

const Cart = () => {

    const cartData = useSelector(state => state.cart);
    console.log(cartData);

    const totalPrice = cartData.data.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
      }, 0);

  return (
    <>
        <Navbar/>
        {
            cartData.data.length > 0 ? 
            <div className='container mt-3'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Size</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.data.map((item,index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.size}</td>
                                        <td>{item.price}</td>
                                        <td className='text-center'><button className='btn btn-danger'>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div><p>Total Price :{" "}<span>{totalPrice}/-</span></p></div>
            </div>
            :
            <div className='container text-center mt-10'><h3>Your cart is empty</h3></div>
        }
    </>
  )
}

export default Cart
