export default function SneakerItem({ item, index, onClickAdd, onClickRemove, cart }) {
    return (
        <div className="bakery-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p> Brand: {item.type} </p>
            <p> Color: {item.color}</p>
            <p> Quantity: {cart[item.id]} </p>
            <button onClick={() => onClickAdd(item.id, item.price)}> Add to Cart</button>
            <button onClick={() => onClickRemove(item.id, item.price)}> Remove from Cart</button>
        </div>
    );
}