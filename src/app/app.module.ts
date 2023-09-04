import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { RequestBuilderComponent } from './request-builder/request-builder.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { RequestResultBodyComponent } from './request-result/request-result-body/request-result-body.component';
import { RequestResultCookiesComponent } from './request-result/request-result-cookies/request-result-cookies.component';
import { RequestResultHeadersComponent } from './request-result/request-result-headers/request-result-headers.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { FlexModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LayoutComponent,
    SidebarMenuComponent,
    SidebarContentComponent,
    RequestBuilderComponent,
    RequestResultComponent,
    RequestResultBodyComponent,
    RequestResultCookiesComponent,
    RequestResultHeadersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        FlexModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        MatButtonToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
