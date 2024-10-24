import assignId from "@/utils/assignId.js";

export default class {
    constructor(name) {
        this._id = assignId();
        this.name = name;
    }

    get id() {
        return this._id;
    }
}
