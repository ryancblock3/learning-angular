import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { view } from 'drizzle-orm/sqlite-core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {}

  ngOnInit() {
  }
}
