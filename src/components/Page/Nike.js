import React from 'react';
import Cart from '../Cart';
import Filter from '../Filter';
import Navbar from '../Navbar';


import {BrowserRouter ,Route} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/Scroll';


class App extends React.Component {
  
  render(){
    return (
      <div className="grid-container">
          <BrowserRouter>
            <Route exact path ="/">
                <header className="App-header">
                        <Navbar/>
                        
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
