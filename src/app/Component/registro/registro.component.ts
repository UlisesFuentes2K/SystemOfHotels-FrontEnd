import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
validar:boolean=false;

  Alera(entrada:boolean){
    if(entrada){
      Swal.fire('Éxito', 'Proceso terminado.', 'success');
    }else{
      Swal.fire('Error', 'Error de proceso', 'error');
    }
  }
}
