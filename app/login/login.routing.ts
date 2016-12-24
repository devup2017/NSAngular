import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";

const loginRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];
export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);