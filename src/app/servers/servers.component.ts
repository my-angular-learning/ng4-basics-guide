import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .whiten {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Testserver' , 'Testserver 2'];
  display = false;
  clicks = [];
  clicksNumber = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is : ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUser() {
    this.userName = '';
  }

  onDisplay() {
    this.display = !(this.display);
    this.clicks.push(++this.clicksNumber);
  }

  getColor() {
    if (this.clicks.length >= 5) {
      return 'blue';
    }
  }
}
