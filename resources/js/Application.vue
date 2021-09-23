<template>
    <div id="application">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Application"
}
</script>

<style scoped>

</style>
