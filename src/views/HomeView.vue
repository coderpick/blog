<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
const posts = ref([])
const fetchPosts = async () => {
   let response = await axios.get('https://lara10blog.test/api/posts')
    posts.value = response.data.data;
}
onMounted( async() => {
    await fetchPosts()
})

</script>
<template>
    <div>
          <h1>Home Page</h1>
          {{  posts }}
    </div>
</template>



<style lang="scss" scoped>

</style>