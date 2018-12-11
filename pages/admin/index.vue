<template>
  <div>
    <h1>Welcome to book management</h1>
    <div>
      <b-modal @ok="deleteBook(selectBook.id)" id="deleteModal" title="Confirmation">
        <p class="my-4">Are you sure to remove the book <strong>{{selectBook.name}}</strong></p>
      </b-modal>
      <b-modal  id="addModal" v-model="showAdd" hide-footer title="add new book">
        <form @submit.prevent="test">
          <div class="form-group">
            <label>Name</label>
            <input v-model="newBook.name" type="text" class="form-control" placeholder="name">
          </div>
          <div class="form-group">
            <label>Author</label>
            <input v-model="newBook.author" type="text" class="form-control" placeholder="author">
          </div>
          <div class="form-group">
            <label>Book quantity</label>
            <input v-model="newBook.number" type="text" class="form-control" placeholder="number">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </b-modal>
    </div>
    <b-btn class="btn badge-success" v-b-modal.addModal>add new book</b-btn>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Author</th>
        <th>Total number</th>
        <th>Available numbere</th>
        <th>Edit</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>{{book.id}}</td>
        <td>{{book.name}}</td>
        <td>{{book.author}}</td>
        <td>{{book.number}}</td>
        <td>{{book.currentNumber}}</td>
        <td>
          <b-btn class="btn badge-danger" @click="bindBook(book)" v-b-modal.deleteModal>remove</b-btn>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        books: [],
        selectBook: {},
        newBook: {
          id: '',
          name: '',
          author: '',
          number: '',
        },
        title: 'ss',
        showAdd: false
      }
    },
    methods: {
      test () {
        this.$axios.post('book', this.newBook)
          .then(res => {
            this.books = [res.data, ...this.books]
          })
        this.showAdd = false

      },
      async listBook() {
        let res = await this.$axios.get('book');
        this.books = res.data
      },

      bindBook(book) {
        this.selectBook = book
      },
      deleteBook(bookid) {
        let url = 'book/' + bookid + '/delete'
        this.$axios.post(url)
          .then(res => {
            this.books = this.books.filter(element => element.id !== bookid)
          })
      }
    },
    mounted() {
      this.listBook()
    }
  }
</script>

<style scoped>

</style>
