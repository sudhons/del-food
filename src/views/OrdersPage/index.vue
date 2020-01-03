<template>
  <div class="section-orders">
    <div class="head">
      <div>Order</div>
      <div>Time</div>
      <div>Status</div>
    </div>
    <ul>
      <li v-for="order in orderList" :key="order.order_id">
        <div class="order-table">
          <div class="show-order">
            <font-awesome-icon
              :class="['fas', {'open': order.order_id===active}]"
              icon="angle-right"
              @click="active=order.order_id===active ? 0 : order.order_id"
            />
            <span>{{order.order_id}}</span>
          </div>
          <div class="date">{{new Date(order.ordered_time).toDateString()}}</div>
          <div :class="order.order_status">{{order.order_status}}</div>
        </div>
        <transition name="open" appear>
          <div class="order-detail" v-show="active===order.order_id">
            <order-delivery-info :order="order" />
            <order-items-info :items="order.items" :totalAmount="order.total_amount" />
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import OrderDeliveryInfo from './OrderDeliveryInfo'
import OrderItemsInfo from './OrderItemsInfo'

export default {
  components: {
    'order-delivery-info': OrderDeliveryInfo,
    'order-items-info': OrderItemsInfo
  },

  data () {
    return {
      active: 0,
      orderList: [
        { order_id: 1,
          order_status: 'new',
          ordered_time: Date.now(),
          customer: 'Sunday sundy',
          recipient_name: 'Oluwaseun',
          recipient_address: 'Oluwasogo str',
          recipient_phone: '37173781388',
          total_amount: 13000,
          items: [
            {
              title: 'some item',
              unit_price: 2000,
              quantity: 5,
              total: 10000
            },
            {
              title: 'another item',
              unit_price: 1000,
              quantity: 2,
              total: 2000
            },
            {
              title: 'fresh item',
              unit_price: 2000,
              quantity: 3,
              total: 6000
            },
            {
              title: 'all of the items',
              unit_price: 1200,
              quantity: 3,
              total: 3600
            }
          ]
        },
        { order_id: 2,
          order_status: 'processing',
          ordered_time: Date.now(),
          customer: 'Sunday sundy',
          recipient_name: 'Oluwaseun',
          recipient_address: 'Oluwasogo str',
          recipient_phone: '37173781388',
          total_amount: 13000,
          items: [
            {
              title: 'some item',
              unit_price: 2000,
              quantity: 5,
              total: 10000
            },
            {
              title: 'another item',
              unit_price: 1000,
              quantity: 2,
              total: 2000
            },
            {
              title: 'fresh item',
              unit_price: 2000,
              quantity: 3,
              total: 6000
            },
            {
              title: 'all of the items',
              unit_price: 1200,
              quantity: 3,
              total: 3600
            }
          ]
        },
        { order_id: 3,
          order_status: 'cancelled',
          ordered_time: Date.now(),
          customer: 'Sunday sundy',
          recipient_name: 'Oluwaseun',
          recipient_address: 'Oluwasogo str',
          recipient_phone: '37173781388',
          total_amount: 13000,
          items: [
            {
              title: 'some item',
              unit_price: 2000,
              quantity: 5,
              total: 10000
            },
            {
              title: 'another item',
              unit_price: 1000,
              quantity: 2,
              total: 2000
            },
            {
              title: 'fresh item',
              unit_price: 2000,
              quantity: 3,
              total: 6000
            },
            {
              title: 'all of the items',
              unit_price: 1200,
              quantity: 3,
              total: 3600
            }
          ]
        },
        { order_id: 4,
          order_status: 'completed',
          ordered_time: Date.now(),
          customer: 'Sunday sundy',
          recipient_name: 'Oluwaseun',
          recipient_address: 'Oluwasogo str',
          recipient_phone: '37173781388',
          total_amount: 13000,
          items: [
            {
              title: 'some item',
              unit_price: 2000,
              quantity: 5,
              total: 10000
            },
            {
              title: 'another item',
              unit_price: 1000,
              quantity: 2,
              total: 2000
            },
            {
              title: 'fresh item',
              unit_price: 2000,
              quantity: 3,
              total: 6000
            },
            {
              title: 'all of the items',
              unit_price: 1200,
              quantity: 3,
              total: 3600
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-orders {
    box-shadow: 0 0 .5rem #4f4f4f;
    border-bottom: solid 3rem  #aaa;
    border-radius: .5rem;
    overflow: hidden;
    position: relative;
    bottom: 0;
    top: 0;
    height: 100%;
  }

  .head {
    border-radius: .5rem .5rem 0 0;
    text-transform: uppercase;
    background-color: #aaa;
    padding: .6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
  }

  ul {
    height: 63.3vh;
    overflow-y: scroll;
  }

  li {
    margin: .1rem 0;
    overflow: hidden;
  }

  .order-table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
    min-height: 2.7rem;
  }

  .order-table > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .order-table > div:nth-child(even) {
    background-color: #dadada;
  }

  .order-table > div:nth-child(odd) {
    background-color: #cecece;
  }

  .new {
    color: brown;
  }

  .completed {
    color: green;
  }

  .cancelled {
    color: red;
  }

  .processing {
    color: rgb(173, 173, 22);
  }

  .date {
    background-color: #cecece;
  }

  .status-btn {
    position: relative;
    display: inline-block !important;
    font-size: 1rem;
    border-radius: .3rem;
    color: #fff !important;
    min-width: 6rem;
    min-height: 2.13rem;
  }

  .fas {
    position: absolute;
    left: 0;
    display: block;
    font-size: 1.3rem;
    transform: rotate(0deg);
    transition: .6s;
    cursor: pointer;
    margin-left: 0.4rem;
  }

  .fas.open {
    transform: rotate(90deg);
  }

  .fas:hover {
    color: #fff;
  }

  .order-detail {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    grid-gap: 1rem;
    background-color: #fff;
    width: 100%;
    overflow-y: scroll;
    height: 19rem;
    border-bottom:#7c7c7c solid .4rem;
  }

  .open-leave-active {
    animation: order-detail-anim 0.6s reverse linear;
  }

  .open-enter-active {
    animation: order-detail-anim 0.6s forwards linear;
  }

  @keyframes order-detail-anim {
    from {height: 0;}
    to {height: 19rem;}
  }

  .order-detail table {
    border-collapse: collapse;
    width: 100%;
  }

  .order-detail tr:nth-child(even) {
    background-color: #eee;
  }

  .order-detail th, .order-detail td {
    padding: .6rem;
  }

  /*  */
  .order-table a {
    display: block;
    padding: .4rem;
    text-decoration: none;
    color: #000;
  }

    /* .complete > a {
    background-color: green;
  } */

    /* .accept > a {
    background-color: rgb(26, 26, 87);
  }

  .decline > a {
    background-color: red;
  } */

  /*  */
</style>
