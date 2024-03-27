import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BLSComponent } from './components/bls/bls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'BLS', component: BLSComponent },
  //{ path: '', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
