import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { DocumentosComponent } from './documentos/documentos.component';
import { VerDocumentosComponent } from './ver-documentos/ver-documentos.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransferOptionsComponent } from './transfer-options/transfer-options.component';

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
        path: 'register', component: RegisterComponent,
    },
    {
        path: 'confirmation', component: ConfirmationEmailComponent,
    },
    
    {
        path: 'documents', component: DocumentosComponent, canActivate: [authGuard],
    },
    {
        path: 'transfers', component: TransfersComponent , canActivate: [authGuard]
    },
    {
        path: 'transfers-options', component: TransferOptionsComponent, canActivate: [authGuard]
    },
    {
        path: 'upload-documents', component: UploadDocumentsComponent, canActivate: [authGuard]
    },
    {
        path: 'my-documents', component: VerDocumentosComponent, canActivate: [authGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/error'
    }
];
