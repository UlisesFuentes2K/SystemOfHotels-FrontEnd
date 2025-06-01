import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../../Models/person';
import { PersonService } from '../../Services/person.service';
import { Router } from '@angular/router';
import { Register } from '../../Models/register';
import { City } from '../../Models/city';
import { RegisterService } from '../../Services/register.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public person:Person | null = null;
  public register:Register | null = null;
  public cityfilter:City[] = []; 
  public confirmedPassword:string = "";
  public idCountry:number= 0;
  public isEditing = false;
  idPerson:number = -1;

  constructor(private registerService:RegisterService, private personService:PersonService, private router:Router, private route:ActivatedRoute){ }

  public ngOnInit(): void {
    const idPerson = parseInt(localStorage.getItem("idPerson") || "-1");
    this.personService.getOneData(idPerson).subscribe({
      next:(data) =>{this.person = data; console.log("Los datos de person son", this.person);},
      error:(error)=>{console.error("Error al obtener los datos: ", error)}
    })
  }

guardarDatos(){
    this.personService.putData(this.person).subscribe({
      next:(data)=>{
        console.log("datos enviados: ", data);
        this.isEditing = false;
      },
      error:(error)=>{console.error("Error al enviar los datos: ", error);}
    })
  }

  public editar(){ 
    this.isEditing = true;
  }

  cancelar(){
    this.isEditing = false;
  }

  public adminCuenta(){
    const id = localStorage.getItem("Id") || "0";
    this.router.navigate([`/user/${id}`]);
  }
}
