import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
  isLogged = false;

  title = 'Portfolio';
  constructor(private router:Router,private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
   
  }

  onLogOut(): void{
    this.tokenService.logOut();
    
    this.router.navigate(['']);
    
  }
  login(){
    this.router.navigate(['login']);
  }
}
