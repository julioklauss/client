<template>
  <nav class="navbar navbar-expand-sm" id="main-nav">
    <div class="container">
      <a class="navbar-brand" href="">
        Library Online System
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <template v-if="!loggedIn">
            <li class="nav-item">
              <nuxt-link :to="{ name: 'login' }" class="nav-link navbar-brand">
                Login
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="{ name: 'register' }" class="nav-link navbar-brand">
                Register
              </nuxt-link>
            </li>
          </template>
          <template v-if="loggedIn">
            <span class="nav-link navbar-brand">Hello {{user.name}}</span>
            <li class="nav-item">
              <a class="nav-link navbar-brand" @click.prevent="logout" href="#">
                Logout
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    methods: {
      async logout() {
        await this.$auth.logout()
        this.$router.push({
          path: '/login'
        })
      }

    }
  }
</script>
<style>
  nav#main-nav {
    background-color: #74ab2cde;
  }

  a.navbar-brand {
    color: wheat;
  }
</style>

