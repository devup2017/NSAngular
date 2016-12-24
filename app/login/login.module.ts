import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { loginRouting } from "./login.routing";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    loginRouting
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class LoginModule { }
