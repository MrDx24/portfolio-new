import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpedskComponent } from './expedsk/expedsk.component';

export const routes: Routes = [
  { path: '', title:"DashBoard", component: DashboardComponent },
  { path: 'dashboard', title:"DashBoard", component: DashboardComponent },
  { path: 'projects', title:"Projects", component: ProjectsComponent },
  { path: 'aboutme', title:"Aboutme", component: AboutmeComponent },
  { path: 'exp-ed-sk', title:"Expedsk", component: ExpedskComponent },
];
