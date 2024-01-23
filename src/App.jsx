import React, {useState} from 'react'
import './App.css'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'

function App() {
  const [customerData, setCustomerData] = useState([])

    const addCustomer = (newCustomer) => {
        setCustomerData([ newCustomer,...customerData])
        // yada modern olan aşağıdaki gibi de yazılabilir
        // setCustomerData((prevCustomerData) => [...prevCustomerData, newCustomer])
    }
  

  return (
    <>
    <div className='App'>
      <h1>Customer Management App</h1>
    <CustomerForm addCustomer={addCustomer} />
    {customerData.length === 0 && <p>There is no customer...</p>}
    <CustomerList customerData={customerData} setCustomerData={setCustomerData} />
    </div>
      
    </>
  )
}

export default App
