import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../../Models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  public user:User | null = null;
  public isEditing = false;
  public data:any={isActive:false, id:"0"};
  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
    const Id = localStorage.getItem("Id") || "0";
      this.userService.getOneUser(Id).subscribe({
        next:(data) => {
          this.user = data;
          console.log("Los datos son: ", this.user);},
        error:(error) => {
          console.error("Error al obtener los datos", error);
        }
      })
  }

 cancelar(){
     this.isEditing = false;
   }
 
   guardarDatos(){
     this.userService.putUser(this.user).subscribe({
       next:(data)=>{
         console.log("datos enviados: ", data);
         this.isEditing = false;
       },
       error:(error)=>{console.error("Error al enviar los datos: ", error);}
     })
   }
 
   desactivarUser() {
    if(this.user){
      this.data.id= this.user.id || null;
      if (!this.data.isActive) {
      this.userService.activeUser(this.data).subscribe({
        next: (data) => { console.log("datos enviados: ", data); },
        error: (error) => { console.error("Error al enviar los datos: ", error); }
      })
    }
    }
  }
 
   cambiarPassword(){
     this.userService.changePassWord(this.user).subscribe({
       next:(data)=>{console.log("datos enviados: ", data);},
       error:(error)=>{console.error("Error al enviar los datos: ", error);}
     })
   }
 
   editarDatos(){
     this.isEditing = true;
   }
 
   public regresar(){
     this.router.navigate(['user']);
   }


}
