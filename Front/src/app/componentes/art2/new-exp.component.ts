import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpService } from 'src/app/service/exp.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
nombreE: string = '';
descripcionE: string = '';
  constructor(private Exp: ExpService, private routes : Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const expe = new ExpLaboral(this.nombreE, this.descripcionE);
    this.Exp.save(expe).subscribe(
      {
        next: data=>{
      alert("Experiencie added");
      this.routes.navigate(['']);
}, error: err=>{
  alert("It failed");
  this.routes.navigate(['']);
}}
)
  }

}
