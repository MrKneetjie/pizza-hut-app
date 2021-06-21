<template>
  <div class="home">
    <Header transparent="true"/>
    <NormalOrder/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NormalOrder from '@/components/NormalOrder.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'NormalOrderPage',
  components: {
    Header,
    NormalOrder,
    Footer,
  }
}
</script>
