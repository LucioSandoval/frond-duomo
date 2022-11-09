import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import {ComunaI, RegionI} from '../model/model.interface'
import { PersonaService } from '../service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-persona',
  templateUrl: './register-persona.component.html',
  styleUrls: ['./register-persona.component.css']
})
export class RegisterPersonaComponent implements OnInit {
  
  persona: Persona = new Persona();
  region:RegionI =  new RegionI();
  comuna:ComunaI = new ComunaI();
  // idreg : number;
  // idcom:number;
  regiones: RegionI[];
  comunas: ComunaI[];
  
  constructor(private service: PersonaService, private router: Router) { this.getRegion(); }

  ngOnInit(): void {
    console.log(this.persona);
  }

  getComuna(id: number){
    this.service.getComunas(id).subscribe( rsp =>{
      this.comunas = rsp;
    }, err => console.log(err));
  }

  getRegion(){
    this.service.getRegiones().subscribe( rsp =>{
      this.regiones = rsp; 
    }, err => console.log(err));
  }
  savePersona(){
    this.service.registerPersona(this.persona,this.region.id, this.comuna.id).subscribe( rsp => {
      console.log(rsp);
      this.router.navigate(['/personas'])
    }, err => console.log(err));
  }

  onSelect(id:number):void{
    debugger;
    console.log(id);
    this.getComuna(id);
  }
  save(){
    this.savePersona();
  }

  
  
}
