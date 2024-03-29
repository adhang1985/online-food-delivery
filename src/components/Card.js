import React from 'react'

const Card = (props) => {

    const priceOptions = Object.keys(props.item.options[0]);

  return (
    <>
      <div className="card mt-3" style={{"width": "18rem"}}>
                <img src={props.item.img} className="card-img-top" alt="..." style={{"height":"180px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p className="card-text">This is some important notes!</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                Array.from(Array(6),(e,i) => {
                                    return (
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                priceOptions.map((data) => {
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                    <hr/>
                    <button className='btn btn-success justify-center ms-2'>Add to cart</button>
                </div>
            </div>
    </>
  )
}

export default Card
