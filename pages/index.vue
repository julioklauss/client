<template>
  <div class="container">
    <h1>Welcome to book library</h1>
    <b-form @submit.prevent="searchBook">
      <b-form-group id="exampleInputGroup1"
                    label="Search"
                    label-for="exampleInput1"
                    description="search by book name or author">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="searchKey"
                      placeholder="search">
        </b-form-input>
      </b-form-group>
    </b-form>
    <h2>Book list</h2>
    <div class="row">
      <div v-for="book in books" :key="book.id" class="col-4">
        <br>
        <nuxt-link :to="{name: 'book-id', params: { id:book.id } }" class="nav-link">
          <b-card-group deck>
            <b-card
              border-variant="success"
              title-tag="header"
              header-tag="header"
              img-src="https://placekitten.com/1000/300"
              img-alt="Card image"
              img-bottom
            >
              <h6 slot="header"
                  class="mb-0">Book: <strong>{{book.name}}</strong></h6>
              <p class="card-text">author: {{book.author}}</p>
            </b-card>
          </b-card-group>
        </nuxt-link>
        <br>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    middleware: 'admin',
    data() {
      return {
        books: [],
        searchKey: ''
      }
    },
    methods: {
      async listBook() {
        let res = await this.$axios.get('book');
        this.books = res.data
      },

      async searchBook() {
        let res = []
        if (this.searchKey === '') {
          res = await this.$axios.get('book');
        } else {
          res = await this.$axios.get('book/search', {params: {key: this.searchKey}});
        }
        this.books = res.data
      }
    },
    mounted() {
      this.listBook()
    }
  }
</script>
