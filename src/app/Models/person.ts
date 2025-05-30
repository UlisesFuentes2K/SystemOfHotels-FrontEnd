import { City } from "./city";

export interface Person {
    idPerson:number;
    name:string;
    lastName:string;
    direction:string;
    idGender:number;
    idTypeDocument:number;
    numberDocument:string;
    idCity:number;
    idTypePerson:number;
    city:City;
}
