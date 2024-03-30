import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { getAllFoods } from '../services/home.service'
import { useSelector } from 'react-redux'

const Home = () => {

  const [food,setFood] = useState({});
  // eslint-disable-next-line no-unused-vars
  const {searchData} = useSelector(state => state.search);

  const loadFoods = async() => {
    try {
      const foods = await getAllFoods();
      console.log(foods);
      setFood(foods);
    } catch (error) {
      console.log(error.message);
    }
  }

useEffect(() => {
    loadFoods();
},[])


  return (
    <div>
        <Navbar/>
        <>
            <Carousel/>
            <div className='container'>
                {
                  food.foodCategory ? 
                  food.foodCategory.map((data) => {
                    return (
                      <div className='row mb-3'>
                        <div className='fs-3 m-3' key={data._id}>{data.CategoryName}</div>
                        <hr/>
                        {
                          food.foodItems ?
                          food.foodItems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(searchData.toLowerCase())))
                          .map(filterItem => {
                            return (
                              <div key={filterItem._id} className='col-12 col-md-6 col-lg-4'>
                                <Card item={filterItem}/>
                              </div>
                            )
                          })
                        : <div>No data found</div>}
                      </div>
                    )
                  })
                  : <div>No such data found</div>
                }
            </div>
        </>
        <Footer/>
    </div>
  )
}

export default Home
