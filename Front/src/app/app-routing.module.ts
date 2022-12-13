import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './componentes/AboutMe/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioSesComponent } from './componentes/inicio-ses/inicio-ses.component';
import { ErrorPComponent } from './componentes/error-p/error-p.component';
import { NewExpComponent } from './componentes/art2/new-exp.component';
import { EditExpComponent } from './componentes/art2/edit-exp.component';
import { NewEduComponent } from './componentes/art3/newedu.component';
import { EditEducacionComponent } from './componentes/art3/editeducacion.component';



const routes: Routes = [

{path: 'About me', component: AboutComponent},
{path: '', component: HomeComponent},
{path: 'login', component: InicioSesComponent},
{path: 'error',component:ErrorPComponent},
{path:'nuevaexp', component: NewExpComponent},
{path:'editexp/:id', component: EditExpComponent},
{ path: 'nuevaedu', component: NewEduComponent},
{ path: 'editedu/:id', component: EditEducacionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
