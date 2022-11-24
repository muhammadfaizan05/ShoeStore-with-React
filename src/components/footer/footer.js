import React from 'react';
import './footer.css';

const Footer = () => {
  return (<>

    <footer>

     
      
          <div className='banner'>
            <img src='banner.png' />
            <div className='text_section'>
              <span>If something is wrong, it also applies to us. Try Our Racing Items for 90 days.</span><br />
              <span><a href='#'>The Return is Free</a></span>
            </div>
          </div>
          <div className='whitepart'>
            {/* <div class="typewriter">
          <h1>Easy Return Policy</h1>
        </div> */}
          </div>
          <div className='lower_footer'>
            <div className='section_1'>
              <img src='logo.png' />
              <p>Sign up today to hear about new arrivals, our collection and limited editions right away. Do not waste time, sign up now!</p>
              <label>Email Address:  </label>
              <input placeholder="E.g 'faizan3154@gmail.com' " />&nbsp;&nbsp;&nbsp;
              <button class="button-92" role="button">.&#x2197;</button>
            </div>
            <div className='section_2'>
              <h3>About Us</h3>
              <span>Our History</span><br />
              <span>Our Society</span><br />
              <span>Main Articles</span><br />
              <span>Featured Products</span><br />
            </div>
            <div className='section_3'>
              <h3>MEASUREMENTS & SIZES</h3>
              <span>Find the Perfect Shoe</span><br />
              <span>Running Shoes</span><br />
              <span>Size Chart</span><br />
            </div>
            <div className='section_4'>
              <h3>Privacy Policy</h3>
              <span>Terms of Use</span><br />
              <span>Privacy</span><br />
              <span>About Your Data</span><br />
            </div>
          </div>
          <hr></hr>
        </footer>

      </>
      )
}

      export default Footer
