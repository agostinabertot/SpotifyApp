import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent  {

@Input() items: any[] = [];

  constructor(private router: Router) { }

verArtista( item: any ){
// si estoy en el home el tipo de info es un ALBUM entonces ahi dentro esta artist y ahi esta el id, si estoy en el search el tipo de informacion es un artista entonces ese id que me aparece es el que necesito
let artistaId;
if ( item.type === 'artist'){
  artistaId = item.id;
} else {
  artistaId = item.artists[0].id;
}
this.router.navigate(['/artist', artistaId]);
}


}
