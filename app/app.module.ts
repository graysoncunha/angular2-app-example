import './util/rxjs-extensions';
import { DialogService } from './dialog.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './contatos/in-memory-data.service';

import { AppComponent } from './app.component';
import { ContatosModule } from "./contatos/contatos.module";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ContatosModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}
