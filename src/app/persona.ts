import { ComunaI, RegionI } from "./model/model.interface";

export class Persona {
    id: number;
   nombre: string;
   apellido: string;
  correo: string;
 fechaNacimiento: string;
   telefono: string;
   region:RegionI;
   comuna:ComunaI;
}
