// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import SneakerItem from "./components/SneakerItem";
import Aggregator from './components/Aggregator';
import FilterBar from './components/FilterBar'


const Sneaker = [
  { id: 0, name: "Nike Dunk Low Retro", price: 110, type: "Nike", color: "Black", image: process.env.PUBLIC_URL + "/" + "images/dunks.jpg" },
  { id: 1, name: "Adidas STAN SMITH SHOES", price: 100, type: "Adidas", color: "White", image: process.env.PUBLIC_URL + "/" + "images/stansmith.jpg" },
  { id: 2, name: "Under Armour Men's UA Charged Vantage 2 Running Shoes", price: 80, type: "Under Armour", color: "Red", image: process.env.PUBLIC_URL + "/" + "images/charged.jpg" },
  { id: 3, name: "Nike Blazer Mid '77", price: 105, type: "Nike", color: "White", image: process.env.PUBLIC_URL + "/" + "images/blazers.jpg" },
  { id: 4, name: "Adidas SAMBA ARSENAL SHOES", price: 100, type: "Adidas", color: "Red", image: process.env.PUBLIC_URL + "/" + "images/samba.jpg" },
  { id: 5, name: "Under Armour Grade School UA Jet '21 Basketball Shoes", price: 55, type: "Under Armour", color: "Black", image: process.env.PUBLIC_URL + "/" + "images/jet.jpg" },
  { id: 6, name: "Nike Air Force 1 '07 LV8 1", price: 130, type: "Nike", color: "Red", image: process.env.PUBLIC_URL + "/" + "images/airforce.jpg" },
  { id: 7, name: "Adidas SOLARGLIDE 5 RUNNING SHOES", price: 130, type: "Adidas", color: "Black", image: process.env.PUBLIC_URL + "/" + "images/solar.jpg" },
  { id: 8, name: "Under Armour Unisex Curry 3Z6 Basketball Shoes", price: 80, type: "Under Armour", color: "Red", image: process.env.PUBLIC_URL + "/" + "images/curry.jpg" },
  { id: 9, name: "Nike Victori One Slides", price: 35, type: "Nike", color: "Black", image: process.env.PUBLIC_URL + "/" + "images/slides.jpg" },
  { id: 10, name: "Adidas PUREMOTION ADAPT SHOES", price: 60, type: "Adidas", color: "White", image: process.env.PUBLIC_URL + "/" + "images/puremotion.jpg" },
  { id: 11, name: "Under Armour Unisex Curry Flow 9 Team Basketball Shoes", price: 160, type: "Under Armour", color: "White", image: process.env.PUBLIC_URL + "/" + "images/curry2.jpg" },
  { id: 12, name: "Nike Air Max 90", price: 130, type: "Nike", color: "White", image: process.env.PUBLIC_URL + "/" + "images/maxx.jpg" }
]

function App() {
  const [cart, setCart] = useState(Array(Sneaker.length).fill(0));
  const [cartTotal, setCartTotal] = useState(0.00);
  const [shoeData, setShoeData] = useState([...Sneaker]);
  const [sort, setSort] = useState(null);
  const [type, setType] = useState("all")
  const [color, setColor] = useState("all")

  const selectShoeBrand = (e) => {
    let newBrandFilter = e.target.value;
    console.log("brand_filter", newBrandFilter)
    setType(newBrandFilter)
  }

  const matchBrandFilter = item => {
    if (type == "all") {
      return true
    } else {
      return type === item.type
    }
  }

  const selectColorType = (e) => {
    let newColorFilter = e.target.value;
    console.log("color_filter", newColorFilter)
    setColor(newColorFilter)
  }

  const matchColorFilter = item => {
    if (color == "all") {
      return true
    } else {
      return color === item.color
    }
  }

  const sorting = (e) => {
    let sortingMethod = e.target.value;
    console.log("sortingMethod", sortingMethod)
    setSort(sortingMethod)
    sort_function()
  }

  function sort_function() {
    let result
    if (sort === "price-low-high") {
      console.log("low-to-high")
      result = shoeData.sort(function (a, b) { return a.price - b.price })
      setShoeData(result)
    } else {
      console.log("high-to-low")
      result = shoeData.sort(function (a, b) { return b.price - a.price })
      setShoeData(result)
    }
  }

  function addItems(index, price) {
    cart[index] = cart[index] + 1 || 1;
    setCart({ ...cart });
    const total_price = cartTotal + price
    console.log(total_price)
    setCartTotal(total_price);
  }

  function decreaseCart(index, price) {
    if (cart[index] > 0) {
      cart[index] = cart[index] - 1
      setCart({ ...cart })
      const total_price = cartTotal - price
      setCartTotal(total_price)
    }
  }

  function clearCart() {
    setCart(Array(Sneaker.length).fill(0));
    setCartTotal(0);
  }



  return (
    <div className="App">
      <div className="header">
        <h1> SHOP AT TIMID LION'S SHOE STOREFRONT!
        </h1>
      </div>
      <div>
        <FilterBar selectColorType={selectColorType} selectShoeBrand={selectShoeBrand} sorting={sorting} />
        <Aggregator tf={Sneaker} cart={cart} cartTotal={cartTotal} onClick={clearCart} />

        <div className="wrapper">
          {shoeData.map((item, index) => (
            matchColorFilter(item) &&
            matchBrandFilter(item) &&
            <SneakerItem item={item} index={index} onClickAdd={addItems} onClickRemove={decreaseCart} cart={cart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

