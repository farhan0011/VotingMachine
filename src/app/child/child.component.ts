import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() NameOfDevelopper = '';

  @Output() childEvent = new EventEmitter<boolean>();

  isOk = false;

  fireEvent(ok: boolean){
    this.childEvent.emit(ok);
    this.isOk = true;
  }

}
