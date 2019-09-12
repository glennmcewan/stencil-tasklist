import { r as registerInstance, h } from './core-d800627d.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", { class: "page-header" }, h("h1", null, "TodoMVC StencilJS Example")), h("main", null, h("task-app", null))));
    }
    static get style() { return ".page-header {\n  background: #5851ff;\n  color: white;\n  height: 56px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nh1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}"; }
};

export { AppRoot as app_root };
