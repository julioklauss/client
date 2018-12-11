<template>
  <div>
    <h1>Book information</h1>
    <h2>id: {{book.id}}</h2>
    <h2>Name: {{book.name}}</h2>
    <h2>Author: {{book.author}}</h2>
    <h2>Available book: {{book.currentNumber}}</h2>
    <button v-if="!requested" @click="requestBook" class="btn btn-success">Borrow this book</button>
    <button v-if="requested" class="btn btn-warning">Requested</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        book: {},
        requested: false
      }
    },
    asyncData({params}) {
      return {
        id: params.id
      }
    },
    methods: {
      async getBook() {
        let url = 'book/' + this.id
        let res = await this.$axios.get(url)
        this.book = res.data
      },
      async requestBook() {
        let url = 'request/create'
        let res = await this.$axios.get(url, {params:{bookId: this.id, userId: this.user.id}})
        this.requested = true
      },
    },
    created () {
      this.getBook()
    }
  }
</script>

<style scoped>

</style>
