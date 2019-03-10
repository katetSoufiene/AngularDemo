import { RouterModule, Routes, PreloadingStrategy, NoPreloading } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomPreloadingService } from './custom-preloading.service';

const appRoutes: Routes = [

  { path: 'employees', data: {prelod: true}, loadChildren: './employee/employee.module#EmployeeModule' },
  // home route
  { path: 'home', component: HomeComponent },
  // redirect to the home route if the client side route path is empty
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // wild card route
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService  })
    // RouterModule.forRoot(appRoutes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
