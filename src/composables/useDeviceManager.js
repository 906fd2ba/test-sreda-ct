import { ref, readonly } from "vue";
import Device from "@/entities/Device.js";
import swapArrayItems from "@/utils/swapArrayItems.js";

export default (initState = []) => {
    const devices = ref([ ...initState ]);

    const createDevice = name => {
        devices.value.push(new Device(name));
    };

    const getDevice = id => {
        return devices.value.find(device => device.id === id);
    };

    const removeDevice = id => {
        devices.value = devices.value.filter(device => device.id !== id);
    };

    const moveDevice = (id, dir) => {
        const idx = devices.value.findIndex(device => device.id === id);
        swapArrayItems(devices.value, idx, dir);
    };

    return {
        devices: readonly(devices),
        createDevice,
        getDevice,
        removeDevice,
        moveDevice,
    }
};
