import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { Art1Component } from './componentes/art1/art1.component';
import { Art2Component } from './componentes/art2/art2.component';
import { Art3Component } from './componentes/art3/art3.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioSesComponent } from './componentes/inicio-ses/inicio-ses.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/AboutMe/about.component';
import { ErrorPComponent } from './componentes/error-p/error-p.component';
import { HttpClientModule} from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { NewExpComponent } from './componentes/art2/new-exp.component';
import { EditExpComponent } from './componentes/art2/edit-exp.component';
import { EditEducacionComponent } from './componentes/art3/editeducacion.component';
import { NewEduComponent } from './componentes/art3/newedu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './componentes/art4/skills.component';
import { GalleryComponent } from './componentes/AboutMe/gallery/gallery.component';
import { ImageComponent } from './componentes/AboutMe/gallery/image-list/image.component';
import { ImageService } from './service/image.service';
import { AboutCardsComponent } from './componentes/AboutMe/about-cards/about-cards.component';
import { NavComponentComponent } from './componentes/nav-component/nav-component.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    Art1Component,
    Art2Component,
    Art3Component,
    ProyectosComponent, 
    InicioSesComponent, 
    HomeComponent,
    AboutComponent, 
    ErrorPComponent, 
    NewExpComponent, 
    EditExpComponent, 
    EditEducacionComponent, 
    NewEduComponent, 
    SkillsComponent, GalleryComponent, ImageComponent, AboutCardsComponent, NavComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports:[HomeComponent,AboutComponent,
  InicioSesComponent],
  
  providers: [interceptorProvider, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
