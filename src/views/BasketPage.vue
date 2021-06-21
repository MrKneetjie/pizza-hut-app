<template>
  <div class="home">
    <Header transparent="true"/>
    <Basket/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Basket from '@/components/Basket.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'BasketPage',
  components: {
    Header,
    Basket,
    Footer,
  }
}
</script>
