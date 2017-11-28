
import {RouterModule} from '@angular/router';
import{RouteComponents} from './music/route.component'

export const routes = RouterModule.forRoot(
    [
        {
            path:'Music/:id',
            component:RouteComponents
        }
    ]
)
