import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { DocumentosComponent } from './documentos/documentos.component';
import { VerDocumentosComponent } from './ver-documentos/ver-documentos.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'error', component: ErrorPageComponent
    },
    {
        path: 'home', component: HomeComponent, canActivate: [authGuard]
    },
    {
        path: 'documents', component: DocumentosComponent, canActivate: [authGuard],
        children: [
            {
                path: 'my-documents', component: VerDocumentosComponent
            }
        ]
    },
    {
        path: 'my-documents', component: VerDocumentosComponent, canActivate: [authGuard]
    },
    {
        path: '', redirectTo: '/error', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/error', pathMatch: 'full'
    }
];
