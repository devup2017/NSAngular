"use strict";
var dialogsModule = require("ui/dialogs");
function alert(message) {
    return dialogsModule.alert({
        title: "MapApp",
        okButtonText: "OK",
        message: message
    });
}
exports.alert = alert;
//# sourceMappingURL=dialog-util.js.map