import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  personas: Persona[];
  constructor(private service: PersonaService, private router: Router) { }

  ngOnInit(): void {
   this.getPersona();
  }


  updatePersona(id: number){
    this.router.navigate(['/update-persona', id]);
  }
  
  deletePersona(id: number){
    this.service.deletePersona(id).subscribe( rsp =>{
      console.log(rsp);
       this.getPersona();
    }, err => console.log(err));
    this.personas = this.personas.filter(item => item.id != id);
  
  }

  private getPersona(){
    this.service.getPersonas().subscribe(rsp => {

      this.personas = rsp;
    },err => console.log(err));
  }

  

  

}
