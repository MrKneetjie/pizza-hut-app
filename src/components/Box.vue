<template>
  <div class="box-wrapper">
    <h2 class="box">Box {{ this.$vnode.key }}*</h2>
    <div>
      <div class="flex select">
        <h4>Pizza:</h4>
        <select type="text" class="input-big">
          <option v-for="pizza in this.pizzas" :key="pizza.id">{{ pizza.name }}</option>
        </select>
      </div>
      <div class="flex select">
        <h4>Side:</h4>
        <select type="text" class="input-big">
          <option v-for="side in this.sides" :key="side.id">{{ side.name }}</option>
        </select>
      </div>
      <div class="flex select">
        <h4>Side 2:</h4>
        <select type="text" class="input-big">
          <option v-for="side in this.sides" :key="side.id">{{ side.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  data: function() {
    return {
        pizzas: [
          {
            name: "Four Cheese",
            id: 1
          },
          {
            name: "BBQ Chicken",
            id: 2
          },
          {
            name: "Pepperoni",
            id: 3
          },
          {
            name: "Margarita",
            id: 4
          }
        ],
        sides: [
          {
            name: "Chicken Nuggets",
            id: 2
          },
          {
            name: "Fries",
            id: 3
          },
          {
            name: "Salad",
            id: 4
          },
          {
            name: "Potatoes",
            id: 5
          }
        ],
    }
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

.input-big {
  width: 227px;
  height: 31px;
  background-color: #FED03B;
  border-radius: 10px;
  border: none;
}
</style>
