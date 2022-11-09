import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonaComponent } from './list-persona/list-persona.component';
import { RegisterPersonaComponent } from './register-persona/register-persona.component';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';


const routes: Routes = [
  {path: 'personas', component:ListPersonaComponent },
  {path: '', redirectTo: 'personas', pathMatch: 'full'},
  {path: 'register-persona', component: RegisterPersonaComponent},
  {path: 'update-persona/:id', component: UpdatePersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
