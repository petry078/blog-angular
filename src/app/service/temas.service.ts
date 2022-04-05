import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { temas } from '../model/Temas';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  constructor(private http: HttpClient){}
  token = {headers: new HttpHeaders().set("Authorization", environment.token)}

  getAllTema(): Observable<temas[]>{return this.http.get<temas[]>("https://blogpessoalthiago.herokuapp.com/temas", this.token)}

  getByIdTema(id: number): Observable<temas>{return this.http.get<temas>(`https://blogpessoalthiago.herokuapp.com/temas/${id}`, this.token)}
  
  postTema(tema: temas): Observable<temas>{return this.http.post<temas>("https://blogpessoalthiago.herokuapp.com/temas", tema, this.token)}

  putTema(tema: temas): Observable<temas>{return this.http.put<temas>("https://blogpessoalthiago.herokuapp.com/temas", tema, this.token)}

  deleteTema(id: number){return this.http.delete(`https://blogpessoalthiago.herokuapp.com/temas/${id}`, this.token)}

}
