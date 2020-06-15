<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <card-box msg="Hello, i'm a prop"></card-box>
  </div>
</template>

<script>
import CardBox from '@/components/CardBox.vue'

export default {
  name: 'Home',
  components: {
    CardBox
  }
}
</script>
