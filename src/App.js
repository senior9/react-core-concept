import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const friendList = [
    "Abhishek",
    "Bulet",
    "Rajib",
    "pangchung",
    "jhangu",
    "mintu",
  ];
  const productList = [
    { name: "Photo-Shop", price: "$80.99" },
    { name: "Illustrator", price: "$40.99" },
    { name: "Premier-Pro", price: "$48.99" },
    { name: "Adobe-Reader", price: "$8.99" },
    { name: "Adobe-Xi", price: "$54.24" },
    { name: "Adobe-Animation", price: "$4.24" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        {productList.map((pd) => (
          <Person product={pd}></Person>
        ))}
      </header>
    </div>
  );
function Users() {
  const [user, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>setUsers(data));
  }, [])
  return(
    <div>
      <h2>
        Users :{user.length}
      </h2>
      {
        <ul>
          {user.map(user =><li> <b style={{color:"red"}}>Name:</b> {user.name}<br></br> <b style={{color:'goldenrod'}}>Email:</b> <i style={{color:'salmon'}}>{user.email}</i></li>)}
        </ul>
      }
    </div>
  )
}


  function Counter() {
    const [count, setCount] = useState(0);
    const clickHandler = ()=>{
      const newCount = count +1;
      setCount(newCount);
    }
    return(
      <div>
        <h1>Count:{count}</h1>
        <button onClick={clickHandler}>Add-Cart</button>
      </div>
    );
  }
  function Person(props) {
    const productStyle = {
      border: "1px solid gray",
      borderRadius: "5px",
      backgroundColor: "gray",
      float: "left",
      height: "300px",
      width: "300px",
      margin: "10px",
      
    };

    console.log(props);
    return (
      <div style={productStyle}>
        <h2>{props.product.name}</h2>
        <h3>{props.product.price}</h3>
        <button>Buy Now</button>
      </div>
    );
  }
}

export default App;
