import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class CardComponent implements OnInit {
  @Input() player;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
