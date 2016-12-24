import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {connectionType, getConnectionType} from "connectivity";
import { Page } from "ui/page";

import { alert, LoginService, User } from "../shared";
@Component({
    selector: "my-signup",
    templateUrl: "login/signup.component.html",
    styleUrls: ["login/signup-common.css"],
})
export class SignupComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    isAuthenticating = false;

    @ViewChild("initialContainer") initialContainer: ElementRef;
    @ViewChild("mainContainer") mainContainer: ElementRef;
    @ViewChild("password") password: ElementRef;

    constructor(private router: Router,
        private userService: LoginService,
        private page: Page) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    focusPassword() {
        this.password.nativeElement = true;
    }

    submit(){
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }

    }

    signUp() {
        if(getConnectionType() === connectionType.none) {
            alert("MapApp requires an internet connection to register");
            return;
        }

        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.isAuthenticating = false;
                },
                (message) => {
                    if (message.match(/same user/)) {
                        alert("This email address is already in use.");
                    }else {
                        alert("Unfortunately we were unable to create your account.");
                    }
                    this.isAuthenticating = false;
                }
            );
    }

    backToLogin() {
        this.router.navigate(["/login"]);
    }
}