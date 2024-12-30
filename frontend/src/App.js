import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('Error fetching clients:', error));

    axios.get('http://localhost:3000/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name} - {client.computer_type} - ${client.price}</li>
        ))}
      </ul>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>Client {order.client_id} - {order.product_type} - ${order.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
