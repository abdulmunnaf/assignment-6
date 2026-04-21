import { ShoppingCart } from 'lucide-react';
import React from 'react';

const AvailableCarts = ({ cart, handleRemove, setCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className='container bg-base-300 mx-auto p-5 md:p-10 my-5 mb-10 md:h-50 h-40 rounded-lg shadow-accent flex flex-col justify-center items-center'>
                <ShoppingCart className='w-20 h-20 mx-auto' />
                <p className='font-bold text-xs md:text-sm '>Your cart is empty!!</p>
            </div>
        );
    }

    return (
        <div className=' md:w-10/12 mx-auto shadow-2xl p-5 rounded-lg'>
            <p className='font-bold text-sm'>Available carts:({cart.length})</p>
            {cart.map(item => (
                <div key={item.id} className='flex justify-between items-center bg-white p-4 rounded mb-3 shadow'>
                    <div>
                        <img src={item.image} alt={item.name} className="w-auto h-auto object-cover mb-4" />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                    </div>

                    <button
                        onClick={() => handleRemove(item.id)}
                        className='btn btn-sm btn-ghost text-red-500'>
                        Remove
                    </button>
                </div>
            ))}

            <h1 className='text-xl font-bold mt-4'>Total: ${total}</h1>
            <button
                onClick={() => setCart([])}
                className='btn w-full my-4 bg-green-500 text-white'
            >Proceed to Checkout</button>
        </div>
    );
};

export default AvailableCarts;