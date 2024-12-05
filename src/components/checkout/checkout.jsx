import '../../../src/main.css'
import './checkout.css'
import ProgressBar from './progress-bar.jsx'
import ProgressForm from './progress-form.jsx'
import ProgressPagination from './progress-pagination.jsx'
import Cart from './cart.jsx'
import { useState } from 'react'



export default function Checkout() {
  const [status, setStatus] = useState(1)
  
  function handlePreviousClick() {
    if (status > 1) {
      setStatus(status - 1);
    }
  }

  function handleNextClick() {
    if (status < 3) {
      setStatus(status + 1);
    }
  }
  return (
    <main>
      <div>
        <h1 className='checkout-title'>結帳</h1>
      </div>
      <div className='content'>
        <div className='progress-block'>
          <ProgressBar status={status} />
          <ProgressForm status={status}/>
          <Cart cartType="cart-block-m"/>
          <ProgressPagination status={status} handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick}/>
        </div>
        <Cart cartType="cart-block"/>
      </div>
    </main>
    
    
  )
}