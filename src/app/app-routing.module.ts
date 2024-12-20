import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponentComponent } from './Components/add-album-component/add-album-component.component';
import { AlbumsComponentComponent } from './Components/albums-component/albums-component.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';

const routes: Routes = [{ path: 'albums', component: AlbumsComponentComponent },
  { path: 'add-album', component:AddAlbumComponentComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }, 
  { path: '**', component: NotFoundComponentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
