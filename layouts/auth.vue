<template>
  <div>
    <Navbar />
    <nuxt/>
  </div>
</template>
<script>
import Navbar from './partials/Navbar';
export default {
  middleware: 'guest',
  components: {
    Navbar
  }
}
</script>
