<template>
  <section class="section">
    <div class="container">
      <div class="block">
        <div class="block video-block" v-for="item in items">
          <AppVideo
            :item="item"
            :video-id="item.id"
          />
        </div>
      </div>

      <div class="block">
        <nav class="pagination">
          <a
            href.prevent="#"
            class="pagination-next"
            @click="loadMore"
          >
            More
          </a>
        </nav>
      </div>
    </div>
  </section>
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

<style scoped>
.video-block {
  max-width: 900px;
}

</style>
