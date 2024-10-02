<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <div>
        <h1>404 Page Not Found</h1>
        <h2>Route {{ route?.params?.id }} is not valid. Please return to home.</h2>
        <RouterLink to="/">Back to Home</RouterLink>
    </div>
</template>
