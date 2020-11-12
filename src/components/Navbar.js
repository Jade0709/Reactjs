import React,{Component} from 'react'
import './Navbar.css'
import {MenuItems} from './MenuItem'
import { Button } from './Button'

class Navbar extends Component{
    state = {click: false}
    handleClick = ()=>{
        this.setState({click: !this.state.click})
    }

    render(){
        
        return (
       
                <div>
                    <nav className="NavbarItem">
                        <h1 className="navbar-logo">ToiBanGiay<i className="fab fa-react"></i></h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                                <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.click ? 'nav-memu active':
                            'nav-menu'}>
                            {MenuItems.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <a className={item.cName}
                                                        href={item.url}>
                                                        {item.title}
                                            </a>
                                        </li>
                                        
                                    )
                            })}   
                        </ul>
                        <Button>Sign up</Button>
                    </nav>
                    
                </div>
           
        )
    }
}

export default Navbar
