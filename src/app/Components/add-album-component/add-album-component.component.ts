import { Component } from '@angular/core';

@Component({
  selector: 'app-add-album-component',
  templateUrl: './add-album-component.component.html',
  styleUrls: ['./add-album-component.component.css']
})
export class AddAlbumComponentComponent {
  onSubmit() {
    alert('Album ajouté avec succès!');
  }

}
