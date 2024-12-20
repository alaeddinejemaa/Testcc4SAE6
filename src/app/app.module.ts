import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponentComponent } from './Components/nav-bar-component/nav-bar-component.component';
import { AlbumsComponentComponent } from './Components/albums-component/albums-component.component';
import { AddAlbumComponentComponent } from './Components/add-album-component/add-album-component.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    AlbumsComponentComponent,
    AddAlbumComponentComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
