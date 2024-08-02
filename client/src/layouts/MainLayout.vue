<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <div class="h-screen flex flex-col">
        <Navbar class="fixed top-0 left-0 right-0 z-10 h-16" />
        <div class="flex-grow overflow-y-auto mt-16">
            <RouterView />
        </div>
    </div>
</template>
