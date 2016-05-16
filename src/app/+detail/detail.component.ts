import { Component, OnInit } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { TeamService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {
  player;
  
  routerOnActivate(curr: RouteSegment): void {
    const id = curr.getParam('id');
    this.player = this.team.players.find(
      player => player.id === +id
    );
  }

  constructor(public team: TeamService) { }

  ngOnInit() {
  }

}
