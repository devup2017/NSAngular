"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var app_component_1 = require("./app.component");
var login_module_1 = require("./login/login.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [shared_1.BackendService, shared_1.LoginService],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
                login_module_1.LoginModule,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map