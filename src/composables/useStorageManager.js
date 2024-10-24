import Device from "@/entities/Device.js";
import Node from "@/entities/Node.js";

export default () => {
    const getData = () => {
        try {
            const devices = JSON.parse(localStorage.getItem('devices'));

            // "prop type check failed" workaround
            return devices.map(device => {
                return new Device(
                    device.name,
                    device.nodes.map(node => new Node(node.name))
                )
            });
        } catch {
        }
    };

    const setData = data => {
        try {
            localStorage.setItem('devices', JSON.stringify(data.value));
        } catch {
        }
    };

    const resetData = () => {
        try {
            localStorage.removeItem('devices');
            location.reload();
        } catch {
        }
    };

    return {
        getData,
        setData,
        resetData,
    };
};
