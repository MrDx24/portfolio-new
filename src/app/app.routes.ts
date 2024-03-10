import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpedskComponent } from './expedsk/expedsk.component';
import { ContactmeComponent } from './contactme/contactme.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'exp-ed-sk', component: ExpedskComponent },
  { path: 'contactme', component: ContactmeComponent },
];
