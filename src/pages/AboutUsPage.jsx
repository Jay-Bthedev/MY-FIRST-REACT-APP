import React from 'react'
import "./AboutUsPage.css"
import NavComponent from '../component/NavComponent'

const AboutUsPage = () => {
    return (

        //react fragment
        // <>
        
        // <div>About Us Page</div>
        // <div>Hello</div>
        
        // </>

        <div className='about-us-page'>
            <NavComponent username ="Olarotimi"/>
            <div>About Us Page</div>

            <p>
                Welcome to our company! We are dedicated to providing the best services to our customers. Our team is passionate about innovation and excellence. Thank you for choosing us as your trusted partner.
            </p>
        </div>
      
        
  )
}

export default AboutUsPage