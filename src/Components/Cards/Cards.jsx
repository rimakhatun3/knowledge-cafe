import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import SingleCard from '../singleCard/SingleCard';
const Cards = () => {
    const [cards,setCards] =useState([])
    const [cart,setCart] = useState([])
    const [bookMark,setBookMark] =useState(0)
    const handleAddToCart =(product)=>{
        const newCart = [...cart,product]
        toast("Wow so easy!")
            setCart(newCart)
            console.log(newCart)
        
    }
    const handleBookMark =(item)=>{

       setBookMark(bookMark +1)
    }
    
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className='mx-auto mt-10'>
             <div className='grid md:grid-cols-6 gap-5'>
            <div className='col-span-4'>
<div>
    {cards.map(card=><SingleCard card={card} key={card.id} setBookMark={setBookMark} handleBookMark={handleBookMark} handleAddToCart={handleAddToCart} cart={cart}></SingleCard>)}
</div>
            </div>
<div className='col-span-2 '>

   <SideCart bookMark={bookMark} cart={cart}></SideCart>
</div>
        </div>
        
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cards;