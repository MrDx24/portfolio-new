import { Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', title:"DashBoard", component: DashboardComponent },
  { path: 'dashboard', title:"DashBoard", component: DashboardComponent },
  { path: 'projects', title:"Projects", component: ProjectsComponent },
];
