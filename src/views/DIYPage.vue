<template>
  <div class="home">
    <Header transparent="true"/>
    <DIY/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import DIY from '@/components/DIY.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DIYPage',
  components: {
    Header,
    DIY,
    Footer,
  }
}
</script>
