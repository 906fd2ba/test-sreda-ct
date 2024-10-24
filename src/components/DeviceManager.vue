<script setup>
import { watch } from "vue";
import Device from "@/entities/Device.js";
import Node from "@/entities/Node.js";
import useDeviceManager from "@/composables/useDeviceManager.js";
import useStorageManager from "@/composables/useStorageManager.js";
import DeviceItem from "@/components/DeviceItem.vue";

const { getData, setData, resetData } = useStorageManager();

const { devices, createDevice, removeDevice, moveDevice } = useDeviceManager(getData() || [
    new Device('device1', [
        new Node('node1'),
        new Node('node2'),
    ]),

    new Device('device2', [
        new Node('node3'),
    ]),
]);

watch(devices, () => setData(devices), { deep: true });
</script>

<template>
    <div class="device-manager">
        <div class="controls">
            <button @click="createDevice('new device')">create device</button>
            <button @click="resetData">reset to default</button>
        </div>

        <transition-group class="devices" name="list" tag="div">
            <DeviceItem
                v-for="device of devices"
                :key="device.id"
                :device="device"
                v-on="{ removeDevice, moveDevice }"
            />
        </transition-group>
    </div>
</template>

<style scoped>
@import "@/assets/transitions.css";

.devices {
    margin-top: 20px;
}

.controls {
    display: flex;
    gap: 10px;
}
</style>
