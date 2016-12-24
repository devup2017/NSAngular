import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {connectionType, getConnectionType} from "connectivity";
import { Page } from "ui/page";

import { alert, LoginService, User } from "../shared";
@Component({
    selector: "my-login",
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login-common.css"],
})
export class LoginComponent implements OnInit {
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

    login(){
        if(getConnectionType() === connectionType.none) {
            alert("MapApp requires an internet connection to log in.");
            return;
        }

        this.userService.login(this.user)
            .subscribe(
                ()=>{
                    this.isAuthenticating = false;
                    this.router.navigate(["/"]);
                },
                (error) => {
                    alert("Unfortunately we could not find your account.");
                    this.isAuthenticating = false;
                }
            );
    }

    onSingUp() {
        this.router.navigate(["/signup"]);
    }
}