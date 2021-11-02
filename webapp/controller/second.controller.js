"use strict";
sap.ui.define(["./BaseController"], function (BaseController) {
    return BaseController.extend("test.controller.second", {
        onInit: function () {
            BaseController.prototype.onInit.apply(this, arguments);
            console.log("Second controller onInit");
        }
    });
});
