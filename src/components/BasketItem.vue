<template>
  <div class="basket-item-wrapper">
    <div class="basket-item">
      <div class="row">
        <h1>{{ name }}</h1>
        <div class="prices">
          <h4 id="original">€ {{ (this.price * this.amount).toFixed(2) }}</h4>
          <h4 id="discount">€ {{ (this.discount * this.amount).toFixed(2) }}</h4>
        </div>
      </div>    
      <div class="row">
          <p>last chance</p>
          <small>(4 left)</small>
      </div>
      <div class="row">
        <div id="amount-wrapper">
          <img @click="this.add" src="../../public/assets/icons/plusmdpi.png" alt="">
          <h4 id="amount">{{ this.amount }}</h4>
          <img @click="this.subtract" src="../../public/assets/icons/minusmdpi.png" alt="">
        </div>
        <div id="button-wrapper">
          <img src="../../public/assets/icons/editmdpi.png" alt="">
          <img  @click="this.delete" id="delete" src="../../public/assets/icons/deletemdpi.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    price: Number,
    discount: Number,
    amount: Number,
  },
  methods: {
    add: function () {
      this.$store.commit('increment', this.id);
    },
    subtract: function () {
      if(this.amount > 1) {
        this.$store.commit('decrease', this.id)
      }
    },
    delete(){
      this.$parent.delete(this.id);
    }
  },
  name: 'BasketItem',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basket-item-wrapper {
  font-family: futuraBookRegular;
  letter-spacing: 0px;

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

h1 {
  font-size: 22px;
}

p {
  font-size: 12px;
}

h4 {
  font-size: 20px;
}

.basket-item {
  width: 260px;
  color: black;

  background-size: cover;

  margin-top: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row small {
  margin-right: 135px;
}

.prices {
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#original {
  font-size: 9px;
  text-decoration: line-through;
  font-size: 9px;
}

#discount {
  margin-left: 5px;
  font-size: 15px;
}

#amount-wrapper {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 70px;
  font-family: blockBeCondensed;
  letter-spacing: 2px;
}

#delete {
  margin-left: 10px;
}
</style>
