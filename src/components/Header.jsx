import { ArrowForward, MenuOutlined, SearchOutlined } from '@material-ui/icons'
import React, {useState} from 'react';
import { MenuData } from './MenuData';
import './styles/Header.css';
import {Link }  from 'react-router-dom'

const Header = () => {

const [show, setShow] = useState(false);
const showMeu = () => {
    setShow(!show)
}

  return (
    <div className='header' >

      <div className="navbar">


          <div className="left">
              <MenuOutlined  className='menu-icon' onClick={showMeu} />
              <div className="shop-arrow">
                  <button>SHOP</button>
                  <ArrowForward  className='arrow'/>
              </div>
          </div>


          <div className="center">
              <h1>ESIDE</h1>
          </div>


          <div className="right-side">
              <SearchOutlined className='srch-icon' />
              <button>CART</button>
          </div>

      </div>

      <nav  className={show ? 'nav-activ' :'nav'} >
           <ul  onClick={showMeu} >
               {MenuData.map((item,index) => {
                   return(
                       <li key={index} className={item.className}>
                           <Link to={item.path} > {item.title}  </Link>
                       </li>
                   )
               })}
           </ul>
      </nav>

    </div>
  )
}

export default Header