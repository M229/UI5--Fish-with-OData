"use strict";
sap.ui.define(["./BaseController"], function (BaseController) {
    return BaseController.extend("test.controller.first", {
        onInit: function () {
            BaseController.prototype.onInit.apply(this, arguments);
            console.log("First controller onInit");
        }
    });
});
