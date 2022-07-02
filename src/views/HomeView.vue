<template>
  <div>
    <img class="mx-auto" alt="Vue logo" src="../assets/second_logo.gif">
    <HelloWorld msg="Good Morning!"/>
  </div>
</template>

<script>
import '../assets/tailwind.css'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
