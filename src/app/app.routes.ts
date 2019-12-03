import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactsComponent} from './contacts/contacts.component';


const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: '**',
        component: LoginComponent
    }
];


export const AppRoutes = RouterModule.forRoot(appRoutes);
