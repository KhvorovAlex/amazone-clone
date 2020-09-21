//libraries
import React from 'react'
//context
import { useStateValue } from '../../context/StateProvider'
//db
import { db } from '../../firebase'
//css
import './Orders.css'
//components
import Order from './components/Order'

function Orders() {
    const [{ user }] = useStateValue()
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        })),
                    ),
                )
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map((order) => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
