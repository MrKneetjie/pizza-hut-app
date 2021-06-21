<template>
  <div class="home">
    <Header transparent="true"/>
    <Giant/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Giant from '@/components/Giant.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'GiantPage',
  components: {
    Header,
    Giant,
    Footer,
  }
}
</script>
