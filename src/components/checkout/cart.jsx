import { Fragment, useState } from 'react'
import '../../../src/main.css'
import './cart.css'




export default function Cart({cartType}) {


const itemData = [
  {
    id: '0',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 1,
  },
  {
    id: '1',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const [itemList, setItemList] = useState(itemData)

function ChangeAmount(e) {
  const clickedId = e.target.dataset.id
  const clickedPlus = e.target.className.includes('plus')
  const clickedMinus = e.target.className.includes('minus')
  
  const newItemList = itemList.map(item => {
    if ((item.id === clickedId) && clickedPlus) {
      return {
        ...item,
        quantity: item.quantity + 1,
      }
    } else if ((item.id === clickedId) && clickedMinus) {
      return {
        ...item,
        quantity: item.quantity - 1,
      }
    } else {
      return item
    }
  })
  setItemList(newItemList)
}
  const cartItems = itemList.map(item => 
    <Fragment key={item.id}>
      <div className="cart-item">
      <div className="item-image">
        <img className="item-photo" src={item.img} alt="" />
      </div>
      <div className="item-detail">
        <div className="item-info">
          <div className="item-name">{item.name}</div>
          <div className="item-price">{item.price}</div>
        </div>
        <div className="item-amount-group">
          <div className="amount-circle minus" data-id={item.id} onClick={(e) => ChangeAmount(e)}></div>
          <div className="item-amount">{item.quantity}</div>
          <div className="amount-circle plus" data-id={item.id} onClick={(e) => ChangeAmount(e)}></div>
        </div>
      </div>
    </div>
    </Fragment>
  )

  function Calculator() {
  let cartTotal = 0;
  itemList.map(item => {
  cartTotal += item.price * item.quantity; 
  }
  )
  return cartTotal
}


  return (
    <div className={cartType}>
      <h1 className='cart-title'>購物籃</h1>
      <div className="cart-items">
        {cartItems}
      </div>
      <div className="cart-total">
        <div className="cart-cal">運費</div>
        <div className="cart-value">免費</div>
      </div>
      <div className="cart-total">
        <div className="cart-cal">小計</div>
        <div className="cart-value">$<Calculator /></div>
      </div>
    </div>
  )
}


 