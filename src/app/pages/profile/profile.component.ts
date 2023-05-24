import { Component } from '@angular/core';
import { Autor } from 'src/app/models/autor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    public autor: Autor;

    constructor(){
      this.autor = new Autor(200892,'Armando','Paredes','armie@codenotch.com','img2120', 'abcabc')
    }
      public modificar(nombre:string, apellido:string, correo:string){
        this.autor.name = nombre;
        this.autor.surname = apellido;
        this.autor.email = correo;
      }
 }





