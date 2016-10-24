import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {

  @Input() teddy
  constructor() { }

  ngOnInit() {
  }

}
