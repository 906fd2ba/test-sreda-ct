<script setup>
const model = defineModel({ type: String, required: true });
const editable = defineModel('editable', { type: Boolean, default: false });
</script>

<template>
    <input v-if="editable" v-model.trim="model" @keydown.exact.prevent.enter="editable = false" />
    <div v-else>
        <slot>{{ model }}</slot>
    </div>
</template>
