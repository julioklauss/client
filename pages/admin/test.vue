<template>
  <div>
    d
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'user',
    data () {
      return {
        test: 'aaaaa'
      }
    },
    methods: {
      async listBook () {
        this.test = await this.$axios.get('users/admin');
      }
    },
    mounted () {
      this.listBook()
    }
  }
</script>

<style scoped>

</style>
