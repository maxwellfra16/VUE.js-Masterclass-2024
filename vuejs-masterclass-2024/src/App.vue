<script setup lang="ts">
import TopNavBar from './components/Layout/TopNavBar.vue'
import Sidebar from './components/Layout/Sidebar.vue'
</script>

<template>
    <Sidebar></Sidebar>
    <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
        <TopNavBar></TopNavBar>
        <main>
            <RouterView />
        </main>
    </div>
</template>
