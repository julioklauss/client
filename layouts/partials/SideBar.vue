<template>
  <div class="vertical-menu col-2">
    <nuxt-link :to="{ path: '/admin/book' }" class="">
      Book management
    </nuxt-link>
    <nuxt-link :to="{ path: '/admin/request' }" class="">
      Request management
    </nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
