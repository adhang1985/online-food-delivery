import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const Card = (props) => {

    const priceOptions = Object.keys(props.item.options[0]);

    const foodVal = (Object.values(props.item.options[0]))[0];

    const dispatch = useDispatch();
    const [qty,setQty] = useState(1);
    const [size,setSize] = useState();
    const [price,setPrice] = useState();

    const foodObj = {
        id: props.item._id,
        CategoryName : props.item.CategoryName,
        name : props.item.name,
        img : props.item.img,
        qty: Number(qty),
        size : size ? size : priceOptions[0],
        price : price ? price : parseInt(foodVal)
    }

    const goToCart = () => {
        console.log(props.item);
        dispatch(addToCart(foodObj));
    }

   

    useEffect(() => {
        setPrice(qty*(props.item.options[0][size]));
    },[qty,size])

    
    

  return (
    <>
      <div className="card mt-3" >
                <img src={props.item.img} className="card-img-top" alt="..." style={{height:"220px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p className="card-text">This is some important notes!</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6),(e,i) => {
                                    return (
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setSize(e.target.value)}>
                            {
                                priceOptions.map((data) => {
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>
                        {
                            price ? 
                            <div className='d-inline h-100 fs-5'>
                                Total Price : {price}
                            </div>
                            : 
                            <div className='d-inline h-100 fs-5'>
                                Total Price : {foodVal}
                            </div>
                        }
                    </div>
                    <hr/>
                    <button className='btn btn-success justify-center ms-2' onClick={goToCart}>Add to cart</button>
                </div>
            </div>
    </>
  )
}

export default Card
