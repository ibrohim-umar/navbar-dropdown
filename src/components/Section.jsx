import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import {Data} from './Data';
import Header from './Header'
import './styles/Section.css'

const Section = ({slides}) => {

    const [current, setCurrent]  = useState(0);
      const length = slides.length


  return (
    <section  className='section' >
        <Header/>
        
        <div className="buttons">
            <ArrowBackIosOutlined  className='left-btn'  onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)} />
            <ArrowForwardIosOutlined className='right-btn'  onClick={ () => setCurrent(current === 0 ? length - 1 : current - 1 ) } />
        </div>

        <div className="content">
            <h1>Discover our universe</h1>
            <button>Discover</button>
            <button>Read article</button>
        </div>
         



       <div className="slider">
          {Data.map((slide,index)=> {
              return(
                  <div className={index ===current  ? "slide-active" : 'slides'} >
                      {index === current && (
                          <img src={slide.image} alt="" />
                      )}
                  </div>
              )
          } )}
       </div>




    </section>
  )
}

export default Section