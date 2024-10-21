import {Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {AppComponent} from './application/app.component';
import {LoginComponent} from './login/login.component';
import {AppointmentComponent} from './components/appointment/appointment.component';

export const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app',
    component: AppComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent
      },
      {
        path: 'appointments',
        component: AppointmentComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

