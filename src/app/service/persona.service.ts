import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComunaI, RegionI } from '../model/model.interface';
import { Persona } from '../persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseUrl = "http://localhost:8080/api/persona";
  private baseUrlRegion = "http://localhost:8080/api/region";
  private baseUrlComuna = "http://localhost:8080/api/comuna?id";
  constructor(private httpClient: HttpClient) {    
  }
  getPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseUrl}`);
  }

  registerPersona(persona:Persona,region:number,comuna:number):Observable<Object>{
    debugger;
    return this.httpClient.post(`${this.baseUrl}/${region}/${comuna}`, persona);
  }

  updatePersona(persona:Persona, id: number, region:number,comuna:number):Observable<Object>{
    debugger;
    return this.httpClient.put(`${this.baseUrl}/${id}/${region}/${comuna}`, persona);
  }

  deletePersona(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  
  getPersonaFindById(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseUrl}/${id}`);
  }


  getRegiones():Observable<RegionI[]>{

    return this.httpClient.get<RegionI[]>(`${this.baseUrlRegion}`);
  }

  getComunas(id:number):Observable<ComunaI[]>{
   
    return this.httpClient.get<ComunaI[]>(`${this.baseUrlComuna}=${id}`);
  }

}
