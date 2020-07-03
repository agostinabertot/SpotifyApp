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
  Authorization: 'Bearer BQCW3os1Me5vfr8VpM6awSird7BFCMmIyx7kn-RFddlVzoYmE4i0Lhh2cPLoxV9An8mAM3J22V6Rm6HHKJs'
});

return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

}

getArtista( termino: string){
  const headers = new HttpHeaders({
    Authorization: 'Bearer BQCW3os1Me5vfr8VpM6awSird7BFCMmIyx7kn-RFddlVzoYmE4i0Lhh2cPLoxV9An8mAM3J22V6Rm6HHKJs'
  });
  
  return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
}

}
