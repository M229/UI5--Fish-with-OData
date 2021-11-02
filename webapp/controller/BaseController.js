"use strict";
sap.ui.define(
    ["sap/ui/core/mvc/Controller", "test/model/formatter", "sap/ui/model/odata/v2/ODataModel"],
    function (Controller, formatter, ODataModel) {
        const BaseController = Controller.extend(
            "test.controller.BaseController",
            {
                formatter: formatter,
                onInit: function () {
                    var oModel = new ODataModel("/V2/Northwind/Northwind.svc/");
                    this.getView().setModel(oModel, "Table");
                    this.BaseController
                }
            }
        );
        return BaseController;
    }
);
