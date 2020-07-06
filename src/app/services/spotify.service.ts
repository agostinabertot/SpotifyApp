import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
  // forma automatica de importar servicios
  // gracias a esta linea no necesito agregar la importacion y en providers en el app.module este servicio
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBSIoQYYIiDK6NSLe6hZPom-4t0nXgn0X_dcAURv0CqZ7j54cryHlt2Nz3j3TFtVtwkji6HD-SlUGBOJ_U'
    });
    return this.http.get(url, {headers});
  }

getNewReleases(){

  return this.getQuery('browse/new-releases')
  .pipe( map( (data: any) => data.albums.items));
}


// para que en el home.component no tenga que poner data.albums.items para obetener la info que quiero , lo hago directamente aca con el operador MAP y uso esa variable data en el componente

getArtistas( termino: string ){
  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
  .pipe( map( (data: any) => data.artists.items));
}

getArtista( id: string ){
  return this.getQuery(`artists/${ id }`);
}

getTopTracks( id: string ){
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
  .pipe( map( (data: any) => data.tracks));
}

}
