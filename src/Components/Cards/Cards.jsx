import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import SingleCard from '../singleCard/SingleCard';
const Cards = () => {
    const [cards, setCards] = useState([])
    const [cart, setCart] = useState([])
    const[watchTime,setWatchTime] = useState([])
    
    console.log(cards)
   
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleAddToCart = (product) => {
        toast("Already have Bookmarked")
        const newCart = [...cart, product]
            setCart(newCart)
       
        // const isExist = cards.find(p => p.blogs === product.blogs)
        
        // if (isExist) {
        //     toast.error("Already have Bookmarked", { theme: "colored" })
        // } 
        // else{
        //     toast.success("Added as Bookmark", { theme: "colored" });

        //     const newCart = [...cart, product]
        //     setCart(newCart)
        // }

    }
    const handleWatchTime=(time)=>{
        const newTime=[...watchTime,time]
        setWatchTime(newTime)
    }
    return (
        <div className='mx-auto mt-10'>
            <div className='grid md:grid-cols-6 gap-5'>
                <div className='col-span-4'>
                    <div>
                        {cards.map(card => <SingleCard card={card} key={card.id} handleAddToCart={handleAddToCart} watchTime={watchTime} handleWatchTime={handleWatchTime} cart={cart}></SingleCard>)}
                    </div>
                </div>
                <div className='col-span-2 '>

                    <SideCart watchTime={watchTime}  cart={cart}></SideCart>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cards;