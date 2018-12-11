<template>
  <div style="background-color: whitesmoke">
    <Navbar />
    <div class="row container-fluid">
      <SideBar></SideBar>
      <div class="col-10">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
  import Navbar from './partials/Navbar';
  import SideBar from './partials/SideBar';
  export default {
    middleware: 'auth',
    components: {
      SideBar,
      Navbar
    }
  }
</script>
