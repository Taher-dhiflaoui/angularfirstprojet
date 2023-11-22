import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fils-user',
  templateUrl: './fils-user.component.html',
  styleUrls: ['./fils-user.component.css']
})
export class FilsUserComponent {
@Input() Rfp!: number;
}
