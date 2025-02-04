import { Routes } from '@angular/router';
import { MedicalServiceListComponent } from './medical-service/medical-service-list/medical-service-list.component';
import { LoginComponent } from './login/login.component';
import { MedicalServiceAddComponent } from './medical-service/medical-service-add/medical-service-add.component';
import { MedicalServiceEditComponent } from './medical-service/medical-service-edit/medical-service-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'services',
        component: MedicalServiceListComponent,
    },
    {
        path: 'services/add',
        component: MedicalServiceAddComponent,
    },
    {   path: 'services/edit/:id',
        component: MedicalServiceEditComponent,
    },
    {
        path: 'patients',
        component: PatientListComponent,
    },
    {
        path: 'patients/add',
        component: PatientAddComponent,
    },
    {   path: 'patients/edit/:id',
        component: PatientEditComponent,
    }
];
