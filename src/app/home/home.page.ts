import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable-next-line:no-inferrable-types
  isSignedIn: boolean = true;

  constructor(private router: Router) {
    if (this.isSignedIn) {
      this.router.navigate(['/signup']);
    }
  }

}
