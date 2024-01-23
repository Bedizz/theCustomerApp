import React from 'react'
import './CustomerList.css'
import CustomerItem from './CustomerItem'

const CustomerList = ({customerData,setCustomerData}) => {
    const deleteCustomer = (item) => {
        setCustomerData(customerData.filter((customer) => customer.id !== item.id))

    }

    
  return (
    <ul className='customerList'>
        {customerData.map((customer) => {
            return <CustomerItem key={customer.id} customer={customer} deleteCustomer={deleteCustomer}/>
        })
        }
        
    </ul>
  )
}

export default CustomerList