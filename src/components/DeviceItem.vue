<script setup>
import { ref, computed } from "vue";
import EditableText from "@/ui/EditableText/index.vue";
import Controls from "@/components/Controls.vue";
import NodeItem from "@/components/NodeItem.vue";
import Device from "@/entities/Device.js";

const { device } = defineProps({
    device: { type: Device, required: true },
});

const emit = defineEmits([ 'removeDevice', 'moveDevice' ]);
const isBeingEdited = ref(false);

const deviceControls = computed(() => [
    {
        name: 'add node',
        callback: () => device.addNode('new node'),
    },
    {
        name: isBeingEdited.value ? 'save' : 'edit',
        callback: () => isBeingEdited.value = !isBeingEdited.value,
    },
    {
        name: 'delete',
        callback: () => emit('removeDevice', device.id),
    },
    {
        name: 'move up',
        callback: () => emit('moveDevice', device.id, 'up'),
    },
    {
        name: 'move down',
        callback: () => emit('moveDevice', device.id, 'down'),
    },
]);
</script>

<template>
    <div class="device">
        <EditableText class="device-name" v-model:editable="isBeingEdited" v-model="device.name">
            Device name: {{ device.name }}
        </EditableText>

        <Controls class="controls" :items="deviceControls" />

        <p v-if="device.nodes.length">nodes:</p>

        <transition-group class="nodes" name="list" tag="div">
            <NodeItem
                v-for="node of device.nodes"
                :key="node.id"
                v-bind="{ device, node }"
            />
        </transition-group>
    </div>
</template>

<style scoped>
@import "@/assets/border.css";
@import "@/assets/transitions.css";

.device-name, .controls {
    margin-bottom: 10px;
}
</style>
