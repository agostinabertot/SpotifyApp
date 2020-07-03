import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  // forma automatica de importar servicios
  // gracias a esta linea no necesito agregar la importacion y en providers en el app.module este servicio
})
export class SpotifyService {

  constructor(private http: HttpClient) {

   }
getNewReleases(){
const headers = new HttpHeaders({
  Authorization: 'Bearer BQCmRFxB9yPQ8uKexXS39DSogSSGLrjEBGTb6qZudcH_0gMBGorKpRXERH-00hXK0I-KjvxPtSxka-HQw54'
});

return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

}

}
