import {Routes} from '@angular/router';
import { MotionComponent } from './motion.component';

export const MOTION_ROUTES:Routes=[
     {path:'details/:id', component:MotionComponent},
]