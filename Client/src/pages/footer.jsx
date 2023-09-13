import React from 'react'
import {Input,Button} from '@nextui-org/react'
function footer() {
  return (
    <div className='footerMain'>
      <div>
        <ul>
          <li>Careers</li>
          <li>Shop with Points</li>
          <li>Shipping Rates & Policies</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Careers</li>
          <li>Shop with Points</li>
          <li>Shipping Rates & Policies</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Careers</li>
          <li>Shop with Points</li>
          <li>Shipping Rates & Policies</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-4">
        <h1>Stay Updated!</h1>
     
        <Input
       
          type="email"
          color="primary"
          label="Email"
          placeholder="Enter your email"

          className="max-w-[220px]"
        />
 <Button variant = "ghost" color='primary'>Sign Me Up</Button>
    </div>
      
    </div>
  )
}

export default footer
