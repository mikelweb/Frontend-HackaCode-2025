import { Routes } from '@angular/router';
import { MedicalServiceListComponent } from './medical-service/medical-service-list/medical-service-list.component';
import { LoginComponent } from './login/login.component';
import { MedicalServiceAddComponent } from './medical-service/medical-service-add/medical-service-add.component';
import { MedicalServiceEditComponent } from './medical-service/medical-service-edit/medical-service-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { ServicePackListComponent } from './service-pack/service-pack-list/service-pack-list.component';
import { ServicePackAddComponent } from './service-pack/service-pack-add/service-pack-add.component';
import { ServicePackEditComponent } from './service-pack/service-pack-edit/service-pack-edit.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
import { AppointmentEditComponent } from './appointment/appointment-edit/appointment-edit.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';

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
        path: 'service-packs',
        component: ServicePackListComponent,
    },
    {
        path: 'service-packs/add',
        component: ServicePackAddComponent,
    },
    {   path: 'service-packs/edit/:id',
        component: ServicePackEditComponent,
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
    },
    {
        path: 'doctors',
        component: DoctorListComponent,
    },
    {
        path: 'doctors/add',
        component: DoctorAddComponent,
    },
    {   path: 'doctors/edit/:id',
        component: DoctorEditComponent,
    },
    {
        path: 'appointments',
        component: AppointmentListComponent,
    },
    {
        path: 'appointments/add',
        component: AppointmentAddComponent,
    },
    {   path: 'appointments/edit/:id',
        component: AppointmentEditComponent,
    }
];
