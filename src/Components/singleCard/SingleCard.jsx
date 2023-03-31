import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const{authorName,authorTitle,picture,watchTime} = props.card
    console.log(props.card)
    return (
        <div className='flex justify-between'>
            <div className="card w-full mb-5 bg-base-100 shadow-xl   ">
  
  <div className="card-body">
  <figure><img src={picture} alt="Shoes" /></figure>
        <div className='flex my-5 gap-5 items-center justify-start'>
        <div className="w-10 rounded-full ">
          <img src="https://cdn-icons-png.flaticon.com/512/187/187488.png?w=740&t=st=1680222744~exp=1680223344~hmac=05b634c8cf652cca4574e1fc0d65af770063b02b8bfa66587f29d7bd3431b2e6" alt="" />
        </div>
        <div>
            <p>{authorName}</p>
            <p>Mar 14 (4 Days ago)</p>
        </div>
        </div>
        <h2 className='text-left font-bold'>{authorTitle}</h2>
     <div className='text-left'>
     <p>#Beginners</p> 
      <p>#Programing</p>
      <a className=' text-blue-700 underline ' href="./read">Mark as read</a>
        </div>  
  
  </div>
  <div >
    <p>{watchTime}</p>
    <span><FontAwesomeIcon icon={faBookBookmark} /></span>

</div>
</div>


        </div>
    );
};

export default SingleCard;