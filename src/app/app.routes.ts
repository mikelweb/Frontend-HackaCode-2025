import { Routes } from '@angular/router';
import { MedicalServiceComponent } from './medical-service/medical-service.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'services',
        component: MedicalServiceComponent
    }
];
