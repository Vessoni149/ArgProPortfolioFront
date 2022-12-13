import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpService } from 'src/app/service/exp.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-art2',
  templateUrl: './art2.component.html',
  styleUrls: ['./art2.component.css']
})
export class Art2Component implements OnInit {
  expLaboral: ExpLaboral[] = [];
  constructor(private Exp: ExpService, private tokenService: TokenService) { }


  isLogged = false;
  ngOnInit(): void {
    this.cargarExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  

  cargarExp():void{
    this.Exp.lista().subscribe(data => {this.expLaboral = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.Exp.delete(id).subscribe(
        {
        next: data => {
          this.cargarExp();
        }, error: err => {
          alert("No se pudo borrar la experiencia");
        }}
      )
    }
  }
}


