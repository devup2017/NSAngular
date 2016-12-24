"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var shared_1 = require("../shared");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new shared_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("MapApp requires an internet connection to log in.");
            return;
        }
        this.userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this.router.navigate(["/"]);
        }, function (error) {
            shared_1.alert("Unfortunately we could not find your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.onSingUp = function () {
        this.router.navigate(["/signup"]);
    };
    __decorate([
        core_1.ViewChild("initialContainer"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "initialContainer", void 0);
    __decorate([
        core_1.ViewChild("mainContainer"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "mainContainer", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-login",
            templateUrl: "login/login.component.html",
            styleUrls: ["login/login-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, shared_1.LoginService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map