import { Routes } from '@angular/router';
import { MedicalServiceComponent } from './medical-service/medical-service-list/medical-service.component';
import { LoginComponent } from './login/login.component';
import { MedicalServiceAddComponent } from './medical-service/medical-service-add/medical-service-add.component';
import { MedicalServiceEditComponent } from './medical-service/medical-service-edit/medical-service-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'services',
        component: MedicalServiceComponent,
        children: [
            {
                path: 'add',
                component: MedicalServiceAddComponent,
            },
            {   path: 'edit',
                component: MedicalServiceEditComponent,
            }
        ]

    }
];
