import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';
import { GraphExporter } from './GraphExporter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[GraphExporter]
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService, http: HttpClient, private xyz: GraphExporter ) {
    this.service.login('Max', null);
  }

  handleclick() {
    if (typeof Worker !== 'undefined') {
      setTimeout(() => {
       this.xyz.export();
      }, 1);

    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}

