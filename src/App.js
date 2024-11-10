import './App.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizzas) => (
              <Pizza pizzaData={pizzas} key={pizzas.name}/>
            ))}
          </ul>
        </>
      ) : (
        <p></p>
      )}
    </main>
  );
}

function Pizza({pizzaData}) {
  return (
    <li className={`pizza ${pizzaData.soldOut ? "Sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name}/>
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT" : pizzaData.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour}/>
      ) : (
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
      )}
    </footer>
  )
}

function Order({ closeHour, openHour}) {
  return (
    <div className='order'>
      <p>We're open from {openHour}:00 and {closeHour}:00. Come visit us or order online</p>
      <button className='btn'>Order</button>
    </div>
  )
}

function App() {
  return (
    <div className="container">
        <Header />
        <Menu />
        <Footer /> 
    </div>
  );
}

export default App;
