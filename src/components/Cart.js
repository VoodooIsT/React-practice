import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CDN_URL } from '../utils/constants'
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveBtn = () => {
    dispatch(removeItem())
  }
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    < div className='text-center m-4 px-4 flex flex-col items-center'>
      <div className='flex gap-x-4 items-center'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <button className='bg-slate-900 text-white px-4 py-2' onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
      <div className='w-6/12 mx-auto border border-b-1 border-black mt-8'></div>
    
      <div>
        {
          cartItems.map((item) => (
           <div className='flex items-center justify-between mx-auto p-5 mt-8'>
              <div>
                <img src={CDN_URL + item.card.info.imageId} className='shadow-lg rounded-md w-[300px]' alt="" />
              </div>

              <div className="w-7/12">
                            <div className="flex flex-col py-2 font-bold">
                                <span className="">{item.card.info.name}</span>
                                {" "}
                                <span>₹ {item.card.info.price/100}</span>
                            </div>
                            <p className="text-sm font-light">
                            {item.card.info.description}
                            </p>
                </div>
                
                <button onClick={() => handleRemoveBtn()}
                className='bg-slate-900 text-white px-4 py-2'
                >Remove</button>

           </div>
          ))
        }
        </div>
    </div>
  )
}

export default Cart