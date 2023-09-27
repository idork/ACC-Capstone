import { addCart } from '../API/index';

export default function AddCart( {cart, setCart} ){



    async function handleSubmit(e){
        e.preventDefault();

            const cart = JSON.parse(localStorage.setItem('item'));
            if (cart){
                setCart(cart)
            }

        }


    return (
        <div>
            <h2> Cart </h2>
            <h4 id='cartId'>{cart.id} </h4>
            <div id="single-cart-date"> Date: {cart.date}</div>

            {cart != null && cart.products != null && cart.products.map((obj) => { //jsx if statement syntax, mainly to check if products array is there (only way it worked)
                    return (
                        <div key={obj.productId}>
                            <div id="single-cart-product"> Product ID: {obj.productId}</div>
                            <div id="single-cart-quantity"> Quantity: {obj.quantity}</div>
                        </div>
                    );
                }
            )}
        </div>
    )
}

//not sure how to get the data from the button on SingleProduct to be added to here
