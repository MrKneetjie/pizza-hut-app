<template>
  <div class="box-wrapper">
    <h2 class="box">Giant {{ this.$vnode.key }}*</h2>
      <div>
        <div class="flex select">
          <img src="../../public/assets/giant_pizza.png" alt="">
          <div>
            <select type="text" class="input-big">
              <option v-for="topping in this.toppings" :key="topping.id">{{ topping.name }}</option>
            </select>
            <select type="text" class="input-big">
              <option v-for="topping in this.toppings" :key="topping.id">{{ topping.name }}</option>
            </select>
            <select type="text" class="input-big">
              <option v-for="topping in this.toppings" :key="topping.id">{{ topping.name }}</option>
            </select>
            <select type="text" class="input-big">
              <option v-for="topping in this.toppings" :key="topping.id">{{ topping.name }}</option>
            </select>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GiantPizza',
  data: function() {
    return {
      toppings: [
        {
          name: "Pepper",
          id: 1
        },
        {
          name: "Tomato Sauce",
          id: 2
        },
        {
          name: "Salami",
          id: 3
        },
      ]
    }
  },
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
.box-wrapper {
  display: flex;
  flex-direction: column;
}

.flex {
  width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.box {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: underline;
  font-weight: bold;
}

.select {
  margin-bottom: 13px;
}

select {
  margin-bottom: 13px;
  margin-left: 20px;
}

.input-big {
  width: 227px;
  height: 31px;
  background-color: #FED03B;
  border-radius: 10px;
  border: none;
}
</style>
