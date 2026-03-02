<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const { backendUrl, token , currency} = useContext(ShopContext);

  const [orderData,setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      }
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div className='border-t pt-16'>

        <div className='text-2xl'>
            <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
            {
              orderData.map((item,index) => (
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='flex items-start gap-6 text-sm'>
                        <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                        <div>
                          <p className='sm:text-base font-medium'>{item.name}</p>
                          <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                            <p>{currency}{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Size: {item.size}</p>
                          </div>
                          <p className='mt-1'>Date: <span className=' text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                          <p className='mt-1'>Payment: <span className=' text-gray-400'>{item.paymentMethod}</span></p>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                            <p className='text-sm md:text-base'>{item.status}</p>
                        </div>
                        <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                    </div>
                </div>
              ))
            }
        </div>
=======
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }


  }

  const statusHandler = async ( event, orderId ) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value}, { headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span> {item.size} </span> </p>
                    }
                    else {
                      return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span> {item.size} </span> ,</p>
                    }
                  })}
                </div>
                <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ","}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                <p className='mt-3'>Method : {order.paymentMethod}</p>
                <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='p-2 font-semibold'>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
>>>>>>> ec0606688d066a433361338bd2ba6d8a8a1557f5
    </div>
  )
}

<<<<<<< HEAD
export default Orders
=======
export default Orders
>>>>>>> ec0606688d066a433361338bd2ba6d8a8a1557f5
