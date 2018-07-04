import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() userName: string;
  @Input() index: number;
  @Input() id: number;  

  constructor() { }

  ngOnInit() {
  }

}
