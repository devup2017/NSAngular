import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appRoutes } from "./app.routing";
import { BackendService, LoginService } from "./shared";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";


@NgModule({
	providers: [BackendService, LoginService],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
    	NativeScriptModule,
    	NativeScriptHttpModule,
    	NativeScriptRouterModule,
    	NativeScriptRouterModule.forRoot(appRoutes),
    	LoginModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
