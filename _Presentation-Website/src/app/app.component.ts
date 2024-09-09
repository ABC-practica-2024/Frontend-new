import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentation-website';
  private router: Router;


  constructor(router: Router) {
      this.router = router;
  }

  isHomePage(): boolean {
      return this.router.url === '/';
  }
}
