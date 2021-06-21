<template>
  <div class="home">
    <Header/>
    <Modes/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Modes from '@/components/Modes.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Modes,
    Footer,
  }
}
</script>
