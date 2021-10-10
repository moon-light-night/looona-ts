import axios from 'axios'
import { Module } from 'vuex'
import router from '@/router'
import Auth from '@/models/Urls'

const authModule: Module<any, any> = {
  state: {
    token: '',
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    clearToken(state) {
        state.token = ''
    }
  },
  actions: {
    async registration({ commit }, payload) {
      await axios
        .post(Auth.registration, payload)
        .then(({ data }) => {
          router.push({ name: 'SignIn' })
        })
        .catch(({ response }) => {
          console.log(response.data.message)
        })
    },

    async login({ commit }, payload) {
      await axios
        .post(Auth.login, payload)
        .then(({ data }) => {
          commit('setToken', data.token)
        })
        .then(() => {
          router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
          console.log(response.data.message)
        })
    },

    async logout({ commit }) {
        await router.push({ name: 'SignIn'})
        commit('clearToken')
    }
  },
  getters: {
      getToken(state): string {
          return state.token
      }
  }
}

export default authModule
