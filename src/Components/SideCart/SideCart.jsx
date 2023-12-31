import { data } from 'autoprefixer';
import React from 'react';

const SideCart = (props) => {
    const {cart,watchTime} =props;
  let readingTime = 0;
  for(const data of watchTime){
   readingTime = readingTime + data.watchTime;
   
  }
    return (
        <div>
            <h1 className='text-center font-semibold text-sky-400 border px-3 py-3 rounded-lg bg-slate-200'>Spent time on read : {readingTime} min</h1>
            <div className='bg-slate-100 rounded-lg mb-3'>
            <h2 className='font-bold text-center my-5 py-4 px-4'>Bookmarked Blogs: {cart.length}  </h2>
            
            {cart.map((data,index)=>(
            <div key={index} className='border rounded-md my-2 bg-white py-4 mx-4 px-5 '>
                
                <p> {data.blogs}</p>
                
            </div>))}
            
            
           
            </div>
           
        </div>
    );
};

export default SideCart;