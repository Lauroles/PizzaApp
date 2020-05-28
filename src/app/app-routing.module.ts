import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  },  {
    path: 'ingredient',
    loadChildren: () => import('./ingredient/ingredient.module').then( m => m.IngredientPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
