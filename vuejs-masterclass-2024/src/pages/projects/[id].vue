<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <div>
        <h1>Project {{ route?.params?.id || 'Default' }}</h1>
        <RouterLink to="/projects">Back to Projects</RouterLink>
    </div>
</template>
