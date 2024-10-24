<script setup>
defineProps({
    items: { type: Array, required: true },
});
</script>

<template>
    <div class="controls">
        <button
            v-for="(item, idx) of items"
            :key="idx"
            @click="item.callback"
            v-text="item.name"
        />
    </div>
</template>

<style scoped>
.controls {
    display: flex;
    gap: 5px;
}
</style>
