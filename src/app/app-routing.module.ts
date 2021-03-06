import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./folder/clientes/clientes.module').then( m => m.ClientesModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./folder/empresa/empresa.module').then( m => m.EmpresaModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./folder/produtos/produto.module').then( m => m.ProdutoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
