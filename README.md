# Development

### Link to Deployed Website

https://timidlion805.github.io/dev

### Goal and Value of the Application

The TimidLion storefront is an application that allows users to select shoes based on filters (Brands and Color) and sort prices (high to low, low to high). 

### Usability Principles Considered

My interface is very user-friendly and simple to use in terms of usability. I have a large title that describes the purpose of the website. Then there's a new section with filtering and sorting options. I made sure to use hierarchy by reducing the font size of the functions. The shoe brand filter has the largest font, the color filter has the second largest, and the sorting feature has the smallest. I did this so that users could see the descending text size, which makes each feature stand out more. I made the total price font very large so that users could see how much money they would spend at checkout. Lastly, I made sure the shoe names were in bold so that information could stand out to users. I also listed my products vertically on the website so users can easily scroll through and see each product.

### Organization of Components

I used three main components for this project. The FilterBar component consists of the brand and color filters as well as the sorting feature. Each shoe item is represented by the CartItem component. Finally, the SneakerItem component displays the shoe's characteristics, such as price, brand, color, and quantity.

### How Data is Passed Down Through Components

The FilterBar component receives the filtering and sorting functions and updates the state via props. The Aggregator component receives sneaker data, the cart, a function to clear the cart, and a function to calculate the total cost of items. The Aggregator sends individual sneaker and quantity information to the CartItem component using props. The SneakerItem component receives information about each sneaker, the quantity, and an onclick function to remove/add from the aggregator using props. The component then generates a card for each sneaker item.

### How the User Triggers State Changes
- Adding an item to the cart
- Removing an item from the cart
- Clearing the cart
- Filtering the information
- Using the sort feature

