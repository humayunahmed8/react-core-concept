import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const singer = {
    name : 'Arijit',
    prof : 'Singer'
  }

  var style = {
    color : '#fff',
    backgroundColor : 'red',
  }

  const products = [
    {name : 'Photography', price : 'US$9.99/mo', description : 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).' },
    {name : 'All Apps', price : 'US$52.99/mo', description : 'Get all 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat.'},
    {name : 'Acrobat Pro', price : 'US$14.99/mo', description : 'The complete PDF solution for working anywhere (includes desktop, web, and mobile access).'},
  ]


  const FlexItem = {
    display : 'flex',
    flex : '1',
    margin : '10px 15px',
    flexDirection : 'row',
    margin : 0
  }


  const actorNames = ['Rahim', 'Karim', 'Salim', 'Rakib']



  return (
    <div className="App">

      {/* Simple Person Component  */}
      <header className="App-header" style={FlexItem}>
        <Person name="Karim Uddin"></Person>
        <Person name="Rahim Uddin"></Person>
        <Person name="Kamal Uddin"></Person>
      </header>

      {/* Product Component */}
      <div className="product-wrapper" style={FlexItem}>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </div>


      {/* Create List Style using Map */}
      <ul>
        {actorNames.map(actor => <li>{actor}</li>)}
      </ul>



      {/* Create Component Using Map */}
      <div className="product-wrapper" style={FlexItem}>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </div>


      {/* Counter Component using State  */}
      <div style={{padding : '15px'}}>
        <Counter></Counter>
      </div>
      


      {/* User Component Using Fetch Data  */}
      <div style={{padding : '15px'}}>
        <User></User>
      </div>
      

      
      



    </div>
  );


  // Person Component 
  function Person(props){
    const style = {
      border : '1px solid red',
      backgroundColor : '#000',
      padding : '10px 30px',
      marginBottom : '15px',
      marginTop: '15px',
      marginRight : '15px',
      marginLeft : '15px'
    }

    return (
      <div style={style} className="simple-block">
        <h3>Name : {props.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, doloremque?</p>
      </div>
    )
  }



  // Product Component 
  function Product(props){
    //console.log(props)

    // const {name, price} = props.product;
    // console.log(name, price);

    const singleProductStyle = {
      backgroundColor : '#FAFAFA',
      padding : '15px',
      border : '1px solid #e1e1e1',
      borderRadius : '4px',
      marginLeft : '15px',
      marginRight : '15px',
      textAlign : 'left',
      marginBottom : '15px',
      marginTop: '15px',
    }
    
    return (
      <div className="product-block" style={singleProductStyle}>
        <h3 style={{margin : 0}}>{props.product.name}</h3>
        <h3 style={{marginTop : '10px', marginBottom : '10px'}}>{props.product.price}</h3>
        <p style={{marginBottom : 0}}>{props.product.description}</p>
      </div>
    )
  }


  // Counter Component using State 
  
  function Counter() {

    // const [stateName, StateAction]
    const [count, setCount] = useState(0);

    // const handleIncreaseOne = () => {
    //   const newCount = count + 1;
    //   setCount(newCount);
    // }
    // const handleIncrease = () => setCount(count + 1);
    
    // const handleDecreaseOne = () => {
    //   const newCount = count - 1;
    //   setCount(newCount);
    // }
    // const handleDecrease = () => setCount(count - 1);

    return (
      <div className="Counter">
        <h3>Quantity : {count}</h3>
        <button onClick={() => setCount(count - 1)} style={{marginRight: '5px'}}>- Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase +</button>
      </div>
    )
  }


  // User component using Fetch Data 

  function User(){

    // Declare State 
    const [users, SetUser] = useState([]);

    // Fetch Data (Use UseEffect for Data Load)
    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => SetUser(data));
    }, [])

    // Return User Component JSX 
    return (
      <div className="User">
        <h3>Total User : {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }




}

export default App;
