import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly APi = environment.api;
  private readonly EndPoint ="Person";

  constructor(private http:HttpClient) { }
  
  // Obtener los datos de una persona
  public getOneData(Id:number):Observable<Person>{
    const url = [this.APi, this.EndPoint, Id].join('/');
    const token =  localStorage.getItem("token") || "";
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':`Bearer ${token}`});

    return this.http.get<any>(url, {headers}).pipe(
      map(response => {
        const data = response?.$value ?? response;
        return data;
      }),
      catchError(error => {
        console.error('Error al obtener los datos', error); 
        throw error;
      })
    )
  }

  // Guardar los datos de una persona
    public postData(data:any):Observable<{ response?: Person, error?: string }>{
      const url = [this.APi, this.EndPoint].join('/');
      const headers = new HttpHeaders({'Content-Type':'application/json'});
  
      return this.http.post<any>(url, data, {headers}).pipe(
        map(response => {
         console.log("Respuesta recibida:", response);
  
          if (response?.error) {
              return { error: response.error };
          }
  
          return { response: response };
        }),
        catchError(error => {
          console.error("Error al guardar los datos", error); 
          throw error;})
      ) 
    }
  
    // Actualizar los datos de una persona
    public putData(data:any):Observable<{ response?: Person, error?: string }>{
      const url = [this.APi, this.EndPoint].join('/');
      const token =  localStorage.getItem("token") || "";
      const headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':`Bearer ${token}`});
  
      return this.http.put<any>(url, data, {headers}).pipe(
        map(response => {
         console.log("Respuesta recibida:", response);
          if (response?.error) {
              return { error: response.error };
          }
  
          return { response: response };
        }),
        catchError(error => {
          console.error('Error al actualizar los datos');
          throw error;
        })
      )
    }
}
