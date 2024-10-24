<script setup>
import { ref, computed } from "vue";
import Device from "@/entities/Device.js";
import Node from "@/entities/Node.js";
import EditableText from "@/ui/EditableText/index.vue";
import Controls from "@/components/Controls.vue";

const { device, node } = defineProps({
    device: { type: Device, required: true },
    node: { type: Node, required: true },
});

const isBeingEdited = ref(false);

const nodeControls = computed(() => [
    {
        name: isBeingEdited.value ? 'save' : 'edit',
        callback: () => isBeingEdited.value = !isBeingEdited.value,
    },
    {
        name: 'delete',
        callback: () => device.removeNode(node.id),
    },
    {
        name: 'move up',
        callback: () => device.moveNode(node.id, 'up'),
    },
    {
        name: 'move down',
        callback: () => device.moveNode(node.id, 'down'),
    },
]);
</script>

<template>
    <div class="node">
        <EditableText class="node-name" v-model:editable="isBeingEdited" v-model="node.name" />
        <Controls class="controls" :items="nodeControls" />
    </div>
</template>

<style scoped>
@import "@/assets/border.css";

.node-name {
    margin-bottom: 10px;
}
</style>
