import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './forms/data-form/data-form.component';
import { DisplayFormComponent } from './forms/display-form/display-form.component';
import { LabFormComponent } from './forms/lab-form/lab-form.component';
import { FormsComponent } from './forms/forms.component';
// import { LoginDriverComponent } from './login/login-driver/login-driver.component';
// import { LoginKemriAdminComponent } from './login/login-kemri-admin/login-kemri-admin.component';
// import { LoginMoringaAdminComponent } from './login/login-moringa-admin/login-moringa-admin.component';
// import { LoginKemriComponent } from './login/login-kemri/login-kemri.component';
// import { LoginMoringaComponent } from './login/login-moringa/login-moringa.component';
// import { LandingComponent } from './landing-page/landing/landing.component';
// import { ChatComponent } from './chat-box/chat/chat.component';
// import { NavbarComponent } from './navigation-bar/navbar/navbar.component';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
