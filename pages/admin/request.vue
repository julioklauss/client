<template>
  <div>
    <h1>Request management</h1>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Request owner</th>
        <th>Book name</th>
        <th>Deadline</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in requests" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.user}}</td>
        <td>{{item.book}}</td>
        <td>{{item.deadline}}</td>
        <td>
          <button class="btn btn-primary">Accept</button>
          <button @click="denyRequest(item.id)" class="btn btn-danger">Deny</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'user',
    data () {
      return {
        requests: 'aaaaa'
      }
    },
    methods: {
      async listRequest () {
        let res = await this.$axios.get('request/list');
        this.requests = res.data
        console.log(res.data[0].book.name)
      },
      denyRequest(id) {
        let url = 'request/' + id + '/delete'
        this.$axios.post(url)
          .then(res => {
            this.requests = this.requests.filter(element => element.id !== id)
          })
      }
    },
    mounted () {
      this.listRequest()
    }
  }
</script>

<style scoped>

</style>
