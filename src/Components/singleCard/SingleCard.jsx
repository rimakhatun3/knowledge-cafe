import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const{authorName,authorTitle,picture,watchTime,authorImg,blogs} = props.card
    // console.log(props.card)
    return (
        <div>
            <div className="card w-full mb-5 bg-base-100 shadow-xl ">
  
  <div className="card-body">
  <figure><img src={picture} alt="Shoes" /></figure>
       <div className='flex justify-between items-center mt-5'>
       <div className='flex gap-5 items-center justify-start mt-5'>
        <div>
          <img className='w-10 rounded-full' src={authorImg} alt="" />
        </div>
        <div>
            <p>{authorName}</p>
            <p>Mar 14 (4 Days ago)</p>
        </div>
        </div>
        <div className='flex gap-2' >
    <p>{watchTime} min read</p>
    <button onClick={()=>props.handleAddToCart(props.card) }><FontAwesomeIcon icon={faBookmark} /></button>

</div>
       </div>
        <h2 className='text-left font-bold mt-5'>{authorTitle}</h2>
     <div className='text-left'>
    <div className='flex mb-3'>
    <p>#Beginners</p> 
      <p>#Programing</p>
    </div>
      {/* <a className=' text-blue-700 underline ' href="./read">Mark as read</a> */}
      <button onClick={()=>props.handleWatchTime(props.card)} className=' text-blue-700 underline ' href="./read">Mark as read</button>
        </div>  
  
  </div>
 
</div>


        </div>
    );
};

export default SingleCard;