// import REACT from 'react';
import Logo from './logo'
import "./index.css";
import {List}   from "react-bootstrap-icons"
 export default function Header(){
 
    return( 
        <header className="nav">
            <div className='navbar '>
                <div className='logo'>
                    <Logo  />
                </div>
                
                <div className='list'>
                    <div className='list'>
              <List  className='menu_list'/>
                </div>
               </div>
                <div className='navigation'>
                    <ul>
                   <li>Sell Online</li>
                   <li>Feature</li>
                   <li>Pricing</li>
                   <li>Blog</li>
                   <li>Login</li>
                   </ul>
                   <div className='button_free_try'>
                   <button className='try_free'>Try For Free</button>
                   </div>
                </div>
            </div>
        </header>
    )
 }