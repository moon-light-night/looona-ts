import { createStore, createLogger } from 'vuex'
import authModule from './modules/auth'
import adminModule from './modules/admin'

export const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authModule,
    adminModule
  },
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
})