<template>
  <div class="container">
    <div class="row">
      <div v-for="book in books" :key="book.id" class="col-4">
        {{books}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  middleware:'admin',
  data () {
    return {
      books: []
    }
  },
  methods: {
    async listBook () {
      this.books = await this.$axios.get('book');
    }
  },
  mounted () {
    this.listBook()
  }
}
</script>
