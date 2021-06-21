<template>
  <div>
    <div v-if="this.type == 'item'" class="body" id="backimg" @click="addItem">
      <h1>{{ name }}</h1>
      <div id="prices">
        <h4 id="original">{{ this.price }}</h4>
        <h4 id="discount">{{ this.discount }}</h4>
      </div>
    </div>
    <div v-if="this.type == 'menu'" class="body" id="backimg" @click="$router.push('../lastchance')">
      <h1>{{ name }}</h1>
      <div id="prices">
        <h4 id="original">{{ this.price }}</h4>
        <h4 id="discount">{{ this.discount }}</h4>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    path: String,
    src: String,
    name: String,
    price: String,
    discount: String,
    id: Number,
    type: String,
    },
  methods: {
    addItem: function() {
      let item = {
        name: this.name,
        price: this.price,
        discount: this.discount,
        amount: 1,
        sub: this.sub,
        id: this.id
      }

      this.$store.commit('addItem', item);
      this.$router.push('../basket')
    }
    // setImg: function(src) {
    //   document.getElementById("backimg").style.backgroundImage = "url('" + src + "')";
    // },
  },
  // mounted() {
  //   this.setImg(this.src);
  // },
  name: 'LastChanceItem',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  background-image: url("../../public/assets/food_spareribs.png");
  background-size: cover;

  width: 375px;
  height: 100px;

  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin-left: 24px;
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

#prices {
  margin-top: 44px;
  margin-right: 5px;
}

#original {
  color: white;
  text-decoration: line-through solid red 2px;
}

#discount {
  color: #FED03B;
}
</style>
