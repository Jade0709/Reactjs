import React from 'react';
 
import Cart from './components/Cart';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Products from './components/Products';
import data from "./data.json";
import {BrowserRouter ,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Scroll from './components/ScrollToTop/Scroll';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: data.products,
        cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems"))
        :[],
        size: "",
        sort: "",
    };
  }
  createOrder = (order)=>{
    alert("Need to save"+order.name);
  }
  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems:cartItems.filter((x)=>x.id!==product.id),
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter((x)=>x.id!==product.id)));
  };
  addToCart=(product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item =>{
      if(item.id === product.id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart){
      cartItems.push({...product,count:1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  };

  sortProducts = (event)=>{
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state)=>({
        sort: sort,
        products: this.state.products
        .slice().sort((a,b)=>
            sort === 'lowest'
            ? a.price > b.price
              ?1
              :-1
            :sort === 'highest'
            ? a.price < b.price
              ?1
              :-1
            :a._id < b._id
              ?1
              :-1
        ),
    }));
  };
  
  filterProducts=(event)=>{
    console.log(event.target.value);
    if(event.target.value ===""){
      this.setState({size:event.target.value,products:data.products});
    }else{
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product)=>product.availableSizes.indexOf(event.target.value)>=0
          ),
      });
    }
    
  };
      
  render(){

    return (
      <div className="grid-container">
          <BrowserRouter>
            <Route exact path ="/">
                <header className="App-header">
                        <Navbar>
                        </Navbar>
                </header>
            </Route>        
          </BrowserRouter>
        <main>
          <div className="content"> 
            <div className="main">
                <Filter count = {this.state.products.length}
                        size = {this.state.size}
                        sort = {this.state.sort}
                        filterProducs = {this.filterProducts}
                        sortProducts = {this.sortProducts}
                ></Filter>
                <Products products={this.state.products} 
                addToCart={this.addToCart}> </Products>
            </div>
            <div className="sidebar">
                <Cart cartItems={this.state.cartItems} 
                removeFromCart={this.removeFromCart}
                  createOrder = {this.createOrder}
                />
            </div>
          </div>
        </main>
        
        <footer><Footer></Footer></footer>
        <Scroll/>
            
        
      </div>
    );
  }
  }
  

export default App;
