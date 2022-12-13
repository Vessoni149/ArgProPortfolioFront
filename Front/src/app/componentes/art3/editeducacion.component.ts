import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EduService } from 'src/app/service/eduservice';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion = null;
  
  constructor(
    private educacionS: EduService, private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      {next: data =>{
        this.educacion = data;
      }, error: err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      {next: data => {
        this.router.navigate(['']);
      }, error: err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }}
    )
  }

}
