import { Injectable } from '@angular/core';
import {RegionI, ComunaI} from '../model/model.interface';

@Injectable({providedIn: 'root'}) //{providedIn: 'root'}
 
export class DataService {
  private regiones: RegionI[]=[
  {id: 1, nombre:"Iquique"}, 
  {id:2, nombre:"Antofagasta"}, 
  {id: 3, nombre:"Atacama"}, 
  {id:4, nombre:"Coquimbo"}, 
  {id:5, nombre:"Valparaiso"}
];

private comunas: ComunaI[] =[
  {id: 1, regionId: 1, nombre:"Iquique"}, 
  {id: 2, regionId: 1, nombre:"Alto Hospicio"}, 
  {id: 3, regionId: 1, nombre:"Pozo Almonte"},
  {id: 4, regionId: 1, nombre:"Pica"}, 
  {id: 5, regionId: 1, nombre:"Huara"}, 
  {id: 6, regionId: 1, nombre:"Camiña"}, 
  {id: 7, regionId: 1, nombre:"Colchane"},

  {id: 8, regionId: 2, nombre:"Antofagasta"},
  {id: 9, regionId: 2, nombre:"Mejillones"},
  {id: 10, regionId: 2, nombre:"Tocopilla"},
  {id: 11, regionId: 2, nombre:"Sierra Gorda"},

];  
  
listRegiones():RegionI[]{
  debugger;
  return this.regiones;
}

listComunas():ComunaI[]{
  return this.comunas;
}

}
