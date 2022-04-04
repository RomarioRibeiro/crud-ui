import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Clientes', url: 'clientes', icon: 'people' },
    { title: 'Empresas', url: 'empresa', icon: 'people' }

  ];
  constructor() {}
}
