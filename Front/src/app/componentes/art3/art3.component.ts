import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EduService } from 'src/app/service/eduservice';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-art3',
  templateUrl: './art3.component.html',
  styleUrls: ['./art3.component.css']
})
export class Art3Component implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionS: EduService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        {next: data => {
          this.cargarEducacion();
        },error:  err => {
          alert("No se pudo eliminar");
        }}
      )
    }
  }
}
