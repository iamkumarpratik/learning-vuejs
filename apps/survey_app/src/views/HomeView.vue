<template>
  <div>
    <img class="mx-auto" alt="Vue logo" src="../assets/second_logo.gif">
    <Home msg="Good Morning!"/>
  </div>
</template>

<script>
import '../assets/tailwind.css'
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
  }
}
</script>
