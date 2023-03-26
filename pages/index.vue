<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            cols="3"
          >
            <v-card height="200">
              <v-img
                :src="item.snippet.thumbnails.medium.url"
                height="200"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-btn
      @click="loadMore"
    >
      Load More
    </v-btn>
  </v-app>
</template>


<script>
import TheHeader from "~/components/TheHeader";
import TheSidebar from "~/components/TheSidebar";
import AppVideo from "~/components/AppVideo";
import ROUTES from "~/routes/api";

export default {
  components: {
    TheHeader,
    TheSidebar,
    AppVideo
  },

  computed: {
    items() {
      return this.$store.getters.getPopularVideos;
    },
    nextPageToken() {
      return this.$store.getters.getMeta.nextPageToken;
    }
  },
  filters: {
    omit: (value) => {
      if (!value) {
        return '';
      }
      if (value.length > 120) {
        return value.substr(0, 120) + '...';
      }
      return value;
    }
  },

  methods: {
    loadMore() {
      const payload = {
        uri: ROUTES.GET.POPULARS,
        params: {
          pageToken: this.nextPageToken
        }
      }

      this.$store.dispatch('fetchPopularVideos', payload);
    }
  },

  async fetch({store}) {
    const payload = {
      uri: ROUTES.GET.POPULARS
    }

    if (store.getters.getPopularVideos && store.getters.getPopularVideos.length > 0) {
      return;
    }

    await store.dispatch('fetchPopularVideos', payload);
  },
}
</script>
