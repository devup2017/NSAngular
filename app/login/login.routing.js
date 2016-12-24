"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var signup_component_1 = require("./signup.component");
var loginRoutes = [
    { path: "login", component: login_component_1.LoginComponent },
    { path: "signup", component: signup_component_1.SignupComponent }
];
exports.loginRouting = router_1.RouterModule.forChild(loginRoutes);
//# sourceMappingURL=login.routing.js.map