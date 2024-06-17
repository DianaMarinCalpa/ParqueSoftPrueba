import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
export const routes: Routes = [
     {
         path:'',
         loadChildren:()=> import('./pages/home/home.routes').then(m=>m.HOME_ROUTES)
     },
     {
        path:'',
        loadChildren:()=> import('./pages/login/login.routes').then(m=>m.LOGIN_ROUTES)
    },
    {
        path:'',
        loadChildren:()=> import('./pages/motion/motion.routes').then(m=>m.MOTION_ROUTES)
    }
];
