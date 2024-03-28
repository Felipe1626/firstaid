import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BLSComponent } from './components/bls/bls.component';
import { ChockComponent } from './components/chock/chock.component';
import { HemorragiasComponent } from './components/hemorragias/hemorragias.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'BLS', component: BLSComponent },
  { path: 'chock', component: ChockComponent },
  { path: 'hemorragias', component: HemorragiasComponent },
  { path: '**', component: ErrorComponent },
  //{ path: '', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
