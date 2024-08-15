import React from 'react';

function Cards({ item }) {
  return (
    <div className='mt-10 mb-10 p-5'>
        <div className=" card  bg-base-100 w-92 shadow-xl relative z-1 hover:scale-105 duration-200">
      <figure>
        <img src={item.image} alt="Books" />
      </figure>
      <div className="card-body bg-pink-300">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary bg-green-300 text-black">{item.categary}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge cursor-pointer badge-outline bg-yellow-300 text-black font-bold">${item.price}</div>
          <div className="badge badge-outline cursor-pointer font-bold bg-white text-black hover:bg-black  hover:text-white px-2 py-1 ">Buy now</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
