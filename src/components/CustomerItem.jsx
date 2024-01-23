import React from 'react'
import './CustomerItem.css'

const CustomerItem = ({customer,deleteCustomer}) => {
  return (
    <div>
        <li className='customerItem'>
            <div className='customerInfo'>
                <img src="https://i.pravatar.cc/300" alt="" className='customerAvatar' />
                <span className='customerName' > {customer.name}</span>
            </div>
            <button className='deleteButton' onClick={() => deleteCustomer(customer)} >Delete</button>
        </li>
    </div>
  )
}

export default CustomerItem