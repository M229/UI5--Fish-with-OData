"use strict";
sap.ui.define(["./BaseController"], function (BaseController) {
    return BaseController.extend("test.controller.App", {
        onInit: function () {
            BaseController.prototype.onInit.apply(this, arguments);
            console.log("App controller onInit");
        }
    });
});
