import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunaI, RegionI } from '../model/model.interface';
import { Persona } from '../persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {
  id: number;
  persona: Persona = new Persona();
  comuna: ComunaI = new ComunaI();
  region: RegionI = new RegionI();

  regiones: RegionI[];
  comunas: ComunaI[];

  constructor(
    private router: Router, 
    private route:ActivatedRoute,
    private service: PersonaService ) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
     this.getPersonaFindById();
     this.getResiones()
  }

  getPersonaFindById(){
    this.service.getPersonaFindById(this.id ).subscribe( rsp =>{
      console.log(rsp);
      this.persona=rsp;
      console.log(this.persona.comuna.comuna);

    }, error => console.log(error))
  }


  listPersona(){
    this.router.navigate(['/personas']);
  }

  update(){
    this.service.updatePersona(this.persona, this.id, this.region.id, this.comuna.id).subscribe( rsp =>{
      console.log(rsp);
      this.listPersona();
    }, error => console.log(error))
    
    
  }

  onSelect(id: number){
    this.getComunas(id);
  }

 

  getResiones(){
    this.service.getRegiones().subscribe( rsp => {
      this.regiones = rsp;    
    }, error => console.log(error))
  }

  getComunas(id: number){
    this.service.getComunas(id).subscribe( rsp =>{
      debugger;
      this.comunas = rsp;
    }, error => console.log(error))
  }
 
}
