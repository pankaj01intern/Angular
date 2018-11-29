import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFOrmComponent } from './product-form/product-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListAllComponent } from './list-all/list-all.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'product', component: ProductFOrmComponent},
  {path: 'listall', component: ListAllComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'Delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents=[
 ProductFOrmComponent
];
