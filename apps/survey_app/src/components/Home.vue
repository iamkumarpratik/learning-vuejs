<template>
  <div>
    <h1 class="text-4xl font-mono">{{ msg }}</h1>
    <p class="mt-8 text-xl">
      To take the survey click on the below button. We are excited to learn
      about you! If you would like to know about us, click on the About tab
      above on the Navbar.
    </p>

    <router-link to="/survey">
      <StartButton />
    </router-link>
  </div>
</template>

<script>
import "../assets/tailwind.css";
import StartButton from "@/components/StartButton";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    StartButton,
  },
};
</script>
