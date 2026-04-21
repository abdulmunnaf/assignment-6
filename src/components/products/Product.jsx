
import { toast } from 'react-toastify';
import AvailableCarts from '../availableCarts/AvailableCarts';

const Product = ({ products, cart, setCart, showCart, setShowCart }) => {
    
    const handleAdd = (product) => {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            toast("Product already purchased!!");
        } else {
            toast("Product purchased successfully!");
            setCart([...cart, product]);
        }
        
    }

    const handleRemove = (id) => {
        
        setCart(cart.filter(item => item.id !== id));
    }

    return (

        <div className='md:w-10/12 mx-auto mt-10'>

            
            <div className='text-center mb-8 shadow-lg p-5 rounded-lg'>
                <button
                    onClick={() => setShowCart(false)}
                    className={`btn ${!showCart ? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white' : 'btn-ghost'}`}>
                    Products
                </button>
                <button
                    onClick={() => setShowCart(true)}
                    className={`btn ${showCart ? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white' : 'btn-ghost'}`}>
                    Cart({cart.length})
                </button>
            </div>
            
            {showCart ? (
                <AvailableCarts cart={cart} handleRemove={handleRemove} setCart={setCart} />
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-2'>
                    {products.map(product => (
                        <div key={product.id} className="card bg-base-100 shadow-2xl p-5 space-y-2 transform transition duration-200 hover:translate-y-2 hobver:shadow-2xl">
                            <div className='flex justify-between items-center'>
                                <img src={product.image} alt={product.name} className="w-10 h-10 object-cover m-4" />
                                <span className="badge badge-warning">{product.tag}</span>
                                </div>
                            <h2 className='text-lg font-bold'>{product.name}</h2>
                            <p className='text-sm text-gray-500'>{product.description}</p>
                            <p className='text-xl font-bold mt-2'>
                                ${product.price}
                                <span className='text-sm text-gray-400'>/{product.period}</span>
                            </p>
                            <ul>
                                {product.features.map((f, i) => (
                                    <li key={i}><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{f}</li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleAdd(product)}
                                className={"btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white mt-4 ${cart.some(item => item.id === product.id) ? 'bg-green-500' :''} "}
                            >
                                {cart.some(item => item.id === product.id) ? 'Added to Cart' : 'Buy Now'}
                            </button>
                        </div>
                    ))}
                </div>
            )} 
        </div>
    )
};

export default Product;