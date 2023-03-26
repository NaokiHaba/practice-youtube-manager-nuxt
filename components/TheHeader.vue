<template>
  <v-app-bar app>
    <v-toolbar-title>
      <nuxt-link :to=to>
        {{ title }}
      </nuxt-link>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",

  props: {
    title: {
      type: String,
      default: "Youtube Player"
    },
    to: {
      type: String,
      default: "/"
    }
  }
}
</script>
