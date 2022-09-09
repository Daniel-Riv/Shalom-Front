
import { Link } from "react-router-dom";

import { ShoppingCartIcon } from '@heroicons/react/outline'



export const Cart = () => {


    return (
        <Link to="/cart" style={{ textDecoration: "none" }}>
            <div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                        type="button"
                        className="p-1 rounded-full text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-light focus:ring-white"
                    >
                        <span className="sr-only">View notifications</span>
                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/*   {
                    state.cart >= 0 ? <span></span>
                        : <span className="cart-span">{state.cart.length}</span>
                } */}
            </div>
        </Link>
    )
}
