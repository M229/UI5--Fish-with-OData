"use strict";
sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
    return UIComponent.extend("test.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }
    });
});
