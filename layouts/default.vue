<template>
  <v-app>
    <TheHeader/>

    <TheSidebar/>

    <nuxt/>
  </v-app>
</template>

<script>
import TheHeader from "~/components/TheHeader";
import TheSidebar from "~/components/TheSidebar";

export default {
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>
