import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
// import { PipesModule } from "./pipes/pipe.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule ,
    FlexLayoutModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    // PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
