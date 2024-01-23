import React from 'react'
import './CustomerForm.css'
import {useState} from 'react'


const CustomerForm = ({addCustomer}) => {
    const [customerName, setCustomerName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCustomer = {
            id: Math.random(),
            name: customerName
        }
        addCustomer(newCustomer)
        if (customerName === '') {
            alert('Please enter a name')
            
        }
        setCustomerName('')
    }
  return (
    <>
    <form className='customerForm' onSubmit={handleSubmit}>
        <input type="text" className='customerInput' placeholder='Enter the name' onChange={(e) => setCustomerName(e.target.value)} value={customerName}  />
        
        <button>Add</button>
    </form>
    </>
  )
}

export default CustomerForm