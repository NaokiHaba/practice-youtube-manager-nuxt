<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list dense>
      <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {title: 'Home', icon: 'mdi-home', route: '/'},
      ],
    };
  },
};
</script>
