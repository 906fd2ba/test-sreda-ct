import assignId from "@/utils/assignId.js";
import Node from "@/entities/Node.js";
import swapArrayItems from "@/utils/swapArrayItems.js";

export default class {
    constructor(name, nodes = []) {
        this._id = assignId();
        this.name = name;
        this.nodes = [ ...nodes ];
    }

    get id() {
        return this._id;
    }

    addNode(name) {
        this.nodes.push(new Node(name));
    }

    removeNode(nodeId) {
        this.nodes = this.nodes.filter(node => node.id !== nodeId);
    }

    moveNode(nodeId, dir) {
        const idx = this.nodes.findIndex(node => node.id === nodeId);
        swapArrayItems(this.nodes, idx, dir);
    }
}
