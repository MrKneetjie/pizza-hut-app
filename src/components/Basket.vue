<template>
  <div class="basket-wrapper">
    <div v-if="this.index === 0" class="basket">
      <h1 class="title">Basket</h1>
      <div class="cart">
        <h4>There is nothing in<br>your basket</h4>
      </div>
      <div class="total">
        <h4>Total</h4>
        <p>€ 0.00</p>
      </div>
      <div class="coupon">
        <p>You can add your discount code here</p>
      </div>
      <button @click="$router.go(-1)" class="back">Go Back</button>
    </div>
    <div v-if="this.index === 1" class="basket">
      <h1 class="title">Basket</h1>
      <BasketItem v-for="item in this.items" :key="item.id" :name="item.name" :price="item.price" :discount="item.discount" :amount="item.amount" :id="item.id"/>
      <div class="total total-discount">
        <div class="total-discount-prices">
          <h4>Total</h4>
          <div class="total-price">
            <small>€{{ this.$store.state.orignalTotal }}</small>
            <p>€{{ this.$store.state.total }}</p>
          </div>
        </div>
        <small class="discount">discount: €{{ (this.$store.state.orignalTotal - this.$store.state.total).toFixed(2) }}</small>
      </div>
      <div class="coupon">
        <p>You can add your discount code here</p>
      </div>
      <button @click="this.continue" class="pay">Continue to pay (€ {{ this.$store.state.total }})</button>
    </div>
    <div v-if="this.index === 2" class="basket">
      <h1 class="title">Pay</h1>
      <div class="pickup">
        <p>Pick-up time</p>
        <select name="pickup-select" id="pickup-select">
            <option value="asap">As soon as possible</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
        </select>
      </div>
      <div class="pay-method">Pay method</div>
      <button @click="this.continue" class="online">
        <img id="online" src="../../public/assets/icon_online.png" alt="">
        <h4>Online</h4>
        <img src="../../public/assets/icon_payments.png" alt="">
      </button>
      <button @click="this.continue" class="bank">
        <img id="bank" src="../../public/assets/icon_bank.png" alt="">
        <h4>Bancontact App</h4>
        <img src="../../public/assets/icon_bankcontact.png" alt="">
      </button>
      <button @click="this.continue" class="hut">
        <img id="hut" src="../../public/assets/icon_hut.png" alt="">
        <h4>Hut Rewards</h4>
        <img src="../../public/assets/icon_new.png" alt="">
      </button>
      <div class="total total-discount">
        <div class="total-discount-prices">
          <h4>Total</h4>
          <div class="total-price">
            <small>€{{ this.$store.state.orignalTotal }}</small>
            <p>€{{ this.$store.state.total }}</p>
          </div>
        </div>
        <small class="discount">discount: €{{ (this.$store.state.orignalTotal - this.$store.state.total).toFixed(2) }}</small>
      </div>
    </div>
    <div v-if="this.index === 3" class="basket">
      <div class="ordered">
        <h1>Order Succesfull</h1>
        <div v-for="item in this.items" :key="item.id" class="ordered-item">
          <h4>{{ item.amount }} X </h4>
          <h4>{{ item.name }} </h4>
          <small>last chance</small>
        </div>
        <button @click="$router.push('../tracktrace')">Track & Trace</button>
        <p>Estimated time: 30m.</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BasketItem from '@/components/BasketItem.vue'

export default {
  name: 'Basket',
  data: function() {
      return {
          index: 0,
          items: this.$store.state.items,
      }
  },
  methods: {
    continue: function () {
      this.index++;
    },
    delete: function(id) {
      this.$store.commit('removeItem', id)
      if (this.items.length == 0) {
        this.index = 0;
      }
    },
  },
  mounted() {
    console.log(this.items.length)
    if(this.items.length != 0) {
      this.continue();
    }
    console.log(this.index)
  },
  components: {
    BasketItem,
  }
}
</script>

<style>
.home {
  background-image: url("../../public/assets/wood_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basket-wrapper {
  min-height: 600px;
  width: 375px;
  font-family: futuraBookRegular;
  letter-spacing: 0px;
}

.basket {
  color: white;
  text-align: start;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 45px;
}

.cart {
  width: 295px;
  height: 100px;

  border-radius: 13px;

  background-color: white;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin-bottom: 10px;
}

.total {
  width: 255px;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  color: black;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 13px;

  font-size: 20px;
}

.total-discount {
  flex-direction: column;
  justify-content: center;
}

.total-discount-prices {
  width: 255px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
}

.total-price {
  display: flex;
  font-size: 18px;
}

.total-price small {
  color: #BA0024;
  text-decoration: line-through;
  
  margin-right: 8px;
  font-size: 12px;
  line-height: 20px;
}

.discount {
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: right;

  width: 255px;
  height: 14px;
  font-size: 10px;
}

.coupon {
  width: 220px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;

  background-color: hsla(0, 0%, 100%, 0.45);
  color: hsla(0, 0%, 0%, 0.45);

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%233333336E' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  margin-top: 10px;
}

.back {
  width: 255px;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #FED03B;
  color: black;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 9px;
  border: none;

  margin-top: 10px;
  margin-bottom: 85px;

  font-size: 18px;
}

.pay {
  width: 255px;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #70A401;
  color: white;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 9px;
  border: none;

  margin-top: 10px;
  margin-bottom: 85px;

  font-size: 18px;
}

.pickup {
  width: 255px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  color: black;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 9px;

  margin-bottom: 20px;

  font-size: 18px;
}

.pickup select {
  margin-top: 5px;
}

.pay-method {
  width: 295px;
  height: 70px;

  border-radius: 13px;

  background-color: #FED03B;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin-bottom: 10px;
}

.online {
  width: 295px;
  height: 70px;

  border-radius: 13px;

  background-color: white;
  color: black;

  display: flex;
  align-items: center;

  text-align: center;

  margin-bottom: 10px;

  border: none;
}

.online h4 {
  margin-right: 50px;
}

.bank {
  width: 295px;
  height: 70px;

  border-radius: 13px;

  background-color: white;
  color: black;

  display: flex;
  align-items: center;

  text-align: center;

  margin-bottom: 10px;

  border: none;
}

.bank h4 {
  margin-right: 45px;
}

.hut {
  width: 295px;
  height: 70px;

  border-radius: 13px;

  background-color: white;
  color: black;

  display: flex;
  align-items: center;

  text-align: center;

  margin-bottom: 40px;

  border: none;
}

.hut h4 {
  margin-right: 62px;
}

#online {
  margin-left: 10px;
  margin-right: 5px;
}

#bank {
  margin-left: 17px;
  margin-right: 5px;
}

#hut {
  margin-left: 17px;
  margin-right: 12px;
}

.ordered {
  width: 300px;

  border-radius: 14px;

  background-color: white;
  color: black;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.ordered h1 {
  margin-top: 15px;
}

.ordered-item {
  width: 232px;

  margin-top: 15px;
  margin-bottom: 25px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.ordered-item h4 {
  margin-right: 10px;
}

.ordered button {
  width: 280px;
  height: 40px;

  font-size: 30px;

  background-color: #FED03B;
  color: #BA0024;

  border-radius: 10px;
  border: none;

  margin-bottom: 15px;
}

.ordered p {
  margin-bottom: 5px;
}
</style>
