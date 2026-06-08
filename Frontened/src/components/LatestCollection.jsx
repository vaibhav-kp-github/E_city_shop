import React , { useContext } from 'react'
import {ShopContext} from '../context/shopContext'
import Title from '../components/Title'
import Card from './Card'

const LatestCollection = () => {
    const {products } = useContext(ShopContext)
    
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the latest trends and exclusive arrivals, carefully
          handpicked to match your style and elevate your everyday look.
        </p>
      </div>

      <div className="">
        {products.map((item , index)=>{
            <Card key={item.id} item={item}/>
        })}
      </div>
    </div>
  );
}

export default LatestCollection
