import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './forms/data-form/data-form.component';
import { DisplayFormComponent } from './forms/display-form/display-form.component';
import { LabDisplayFormsComponent } from './forms/lab-display-forms/lab-display-forms.component';
import { UpdateFormComponent } from './forms/update-form/update-form.component';
import { HomeComponent } from './home/home.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { LoginMoringaComponent } from './login/login-moringa/login-moringa.component';
import { LoginMoringaAdminComponent } from './login/login-moringa-admin/login-moringa-admin.component';
import { LoginKemriAdminComponent } from './login/login-kemri-admin/login-kemri-admin.component';
import { LoginKemriComponent } from './login/login-kemri/login-kemri.component';
import { KemriComponent } from './Admin-Dashboard/kemri/kemri.component';
import { MoringaComponent } from './Admin-Dashboard/moringa/moringa.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat-box/chat/chat.component';
import { ChartComponent } from './charts/chart/chart.component';
import { MapComponent } from './driver/map/map.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"moringaStaff/data", component: DisplayFormComponent },
  {path:"data/:id", component: DisplayFormComponent },
  {path:"moringaStaff/data/add", component: DataFormComponent },
  {path:"lab", component: LabDisplayFormsComponent },
  {path:"kemriStaff/lab", component: LabDisplayFormsComponent },
  {path:"update/:id", component:UpdateFormComponent },
  {path:"driver",component:LoginDriverComponent},
  {path:"moringaAdmin",component:LoginMoringaAdminComponent},
  {path:"kemriAdmin",component:LoginKemriAdminComponent},
  {path:"moringaStaff",component:LoginMoringaComponent},
  {path:"kemriStaff",component:LoginKemriComponent},
  {path:"kemriAdmin/kemri",component:KemriComponent},
  {path:"moringaAdmin/data",component:MoringaComponent},
  {path:"chat",component:ChatComponent},
  {path:"moringaAdmin/data/chart",component:ChartComponent},
  {path:"kemriAdmin/lab/chart",component:ChartComponent},
  {path:"lab/chart",component:ChartComponent},
  {path:"data", component:MoringaComponent},
  {path:"kemriAdmin/lab",component:KemriComponent},
  {path:"driver/map",component:MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
