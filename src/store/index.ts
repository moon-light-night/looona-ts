import { createStore, createLogger } from 'vuex'
import axios from 'axios'
import router from '@/router'
import Auth from '@/models/Urls'

export const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {

    async registration({commit}, payload) {
      await axios.post(Auth.registration, payload)
        .then(({ data }) => {
          router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
          console.log(response.data.message)
        })
      },

    async login({commit}, payload) {
      await axios.post(Auth.login, payload)
        .then(({ data }) => {
          router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
          console.log(response.data.message)
        })
      }

    // async registration({commit}, payload) {
    //   try {
    //     const response = await axios.get('/user?ID=12345');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

  },
  modules: {
  },
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
})