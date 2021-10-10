<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <router-link
            :to="{ name: 'SignUp' }"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            create new account
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              name="username"
              required=""
              v-model="user.username"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              v-model="user.password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
      </form>

      <div>
        <button
          type="button"
          @click="login(), (animateSpin = true)"
          :disabled="!fillFields"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <div>
            <span
              v-if="!fillFields"
              class="absolute left-0 inset-y-0 flex items-center pl-3"
            >
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </div>
        </button>

        <span class="flex items-center justify-center mx-auto">
          <button
            v-if="fillFields && animateSpin"
            type="button"
            class="flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-transparent transition ease-in-out duration-150 mx-auto"
            disabled
          >
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/solid'
import { store } from '@/store'
import { User } from '@/store/state'

export default defineComponent({
  name: 'SignIn',
  components: {
    LockClosedIcon,
  },
  data: () => ({
    user: {} as User,
    animateSpin: false,
  }),
  computed: {
    fillFields() {
      return !!(this.user.password && this.user.username)
    },
  },
  mounted() {
    this.animateSpin = false
  },
  methods: {
    login(): void {
      store.dispatch('login', this.user)
    },
  },
})
</script>
