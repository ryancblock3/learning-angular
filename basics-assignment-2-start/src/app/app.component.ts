import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameCreationStatus = 'No username was created!';

  onUsernameCreated() {
    this.usernameCreationStatus = 'Your username is ' + this.username;
  }
}
