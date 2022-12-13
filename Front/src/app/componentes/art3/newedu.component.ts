import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EduService } from 'src/app/service/eduservice';



@Component({
  selector: 'app-newedu',
  templateUrl: './newedu.component.html',
  styleUrls: ['./newedu.component.css']
})
export class NewEduComponent implements OnInit {

  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EduService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      { next: data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, error: err =>{
        alert("error al añadir educación");
        this.router.navigate(['']);
      }}
    )
  }

}
