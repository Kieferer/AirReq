import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { RequestBuilderComponent } from './request-builder/request-builder.component';
import { RequestResultComponent } from './request-result/request-result.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { FlexModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LayoutComponent,
    SidebarMenuComponent,
    SidebarContentComponent,
    RequestBuilderComponent,
    RequestResultComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        FlexModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
