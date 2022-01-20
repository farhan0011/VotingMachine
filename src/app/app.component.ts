import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VotingMachine';
  agree = 0;
  dis = 0;
  developpers = ['Farhan', 'Tanvir', 'Sanjit', 'Sajib', 'Shiab'];
  onVoted(isOk: boolean){
    if(isOk == true)
    {
      this.agree++;
    }
    else
    {
      this.dis++;
    }
  }
}
