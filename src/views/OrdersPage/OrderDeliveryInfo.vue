<template>
  <table>
    <tbody>
      <tr>
        <th class="order-props">Order ID:</th>
        <td>{{order.order_id}}</td>
      </tr>
      <tr>
        <th class="order-props">Status:</th>
        <td :class="order.order_status">{{order.order_status}}</td>
      </tr>
      <tr>
        <th class="order-props">Customer:</th>
        <td>{{order.customer}}</td>
      </tr>
      <tr>
        <th class="order-props">Recipient Name:</th>
        <td>{{order.recipient_name}}</td>
      </tr>
      <tr>
        <th class="order-props">Recipient Address:</th>
        <td>{{order.recipient_address}}</td>
      </tr>
      <tr>
        <th class="order-props">Recipient Phone Number:</th>
        <td>{{order.recipient_phone}}</td>
      </tr>
      <tr>
        <th class="order-props">Date:</th>
        <td>{{new Date(order.ordered_time).toDateString()}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['order']
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  margin-top: .5rem;
}

tr:nth-child(even) {
  background-color: #eee;
}

th, td {
  padding: .6rem;
}

.order-props {
  min-height: 2rem;
  margin: 0.7rem;
  margin-right: 0;
}
</style>
