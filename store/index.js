import {createRequestClient} from "~/store/request-client";

export const state = () => ({
  items: [],
  main: {}
})

export const actions = {
  async fetchPopularVideos({commit}, payload) {
    const client = createRequestClient(this.$axios)
    const res = await client.get(payload.uri, payload.params)

    // ミューテーションを経由してstateを更新する
    commit('mutatePopularVideos', res)
  }
}

export const mutations = {
  mutatePopularVideos(state, payload) {
    state.items = payload.items ? state.items.concat(payload.items) : []
    state.main = payload
  }
}

export const getters = {
  getPopularVideos(state) {
    return state.items
  }
}
