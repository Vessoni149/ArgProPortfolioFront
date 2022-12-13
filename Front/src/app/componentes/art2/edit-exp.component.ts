import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpService } from 'src/app/service/exp.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
expLab : ExpLaboral = null;
  constructor(private  Exp : ExpService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Exp.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err=>{
        alert("Failed to edit experience");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Exp.update(id, this.expLab).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err=>{
        this.router.navigate(['']);
      }
    )
  }

}
