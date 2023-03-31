import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart'
import SingleCard from '../singleCard/SingleCard';
const Cards = () => {
    const [cards,setCards] =useState([])
    const [cart,setCart] = useState(null)
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className='mx-auto mt-10'>
             <div className='grid md:grid-cols-6'>
            <div className='col-span-4'>
<div>
    {cards.map(card=><SingleCard card={card} key={card.id} setCart={setCart} cart={cart}></SingleCard>)}
</div>
            </div>
<div className='col-span-2'>

   <SideCart cart={cart}></SideCart>
</div>
        </div>
        </div>
    );
};

export default Cards;