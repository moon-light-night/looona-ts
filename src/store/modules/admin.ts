import { Module } from 'vuex'
import axios from 'axios'
import Auth from '@/models/Urls'

const adminModule: Module<any, any> = {
  state: {},
  mutations: {},
  actions: {
    async getUser({ commit }) {
      await axios
        .get(Auth.users)
        .then((response) => {
          console.log(response.data)
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}

export default adminModule
