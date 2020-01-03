<template>
  <table>
    <thead>
      <tr>
        <th>Meal</th>
        <th>Qty</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{item.title}}</td>
        <td>{{item.quantity}}</td>
        <td>{{item.unit_price}}</td>
        <td>{{item.total}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3">Order Total</th>
        <th>{{totalAmount}}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: ['items', 'totalAmount']
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  margin-top: .5rem;
}

tr:nth-child(even) {
  background-color: #eee;
}

th, td {
  padding: .6rem;
}

tr >:not(:first-child) {
  text-align: center;
}

thead, tfoot {
  background-color: #999;
}
</style>
