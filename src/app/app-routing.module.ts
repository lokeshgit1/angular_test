import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodComponent } from './good/good.component';
import { LokiComponent } from './loki/loki.component';

const routes: Routes = [
  { path: 'good', component: GoodComponent },
  { path: 'loki', component: LokiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}