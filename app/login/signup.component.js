"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var shared_1 = require("../shared");
var SignupComponent = (function () {
    function SignupComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new shared_1.User();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    SignupComponent.prototype.focusPassword = function () {
        this.password.nativeElement = true;
    };
    SignupComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            shared_1.alert("Enter a valid email address.");
            return;
        }
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("MapApp requires an internet connection to register");
            return;
        }
        this.userService.register(this.user)
            .subscribe(function () {
            shared_1.alert("Your account was successfully created.");
            _this.isAuthenticating = false;
        }, function (message) {
            if (message.match(/same user/)) {
                shared_1.alert("This email address is already in use.");
            }
            else {
                shared_1.alert("Unfortunately we were unable to create your account.");
            }
            _this.isAuthenticating = false;
        });
    };
    SignupComponent.prototype.backToLogin = function () {
        this.router.navigate(["/login"]);
    };
    __decorate([
        core_1.ViewChild("initialContainer"), 
        __metadata('design:type', core_1.ElementRef)
    ], SignupComponent.prototype, "initialContainer", void 0);
    __decorate([
        core_1.ViewChild("mainContainer"), 
        __metadata('design:type', core_1.ElementRef)
    ], SignupComponent.prototype, "mainContainer", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], SignupComponent.prototype, "password", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            selector: "my-signup",
            templateUrl: "login/signup.component.html",
            styleUrls: ["login/signup-common.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, shared_1.LoginService, page_1.Page])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map