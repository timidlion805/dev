import CartItem from "./CartItem"
import './Aggregator.css';

export default function Aggregator({ tf, cart, cartTotal, onClick }) {
    console.log(tf)
    return (
        <div className="aggregator">
            <h4> Total Price of Items: ${(Math.round(cartTotal * 100) / 100).toFixed(2)} </h4>
            {tf.map((item, index) => (
                <CartItem item={item} quantity={cart[item.id]} />
            ))}
            <button onClick={onClick}> Clear Items in Cart </button>
        </div>
    )
}