import { Component, OnInit } from '@angular/core';
import { TeamService, CardComponent } from '../shared';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
  directives: [CardComponent]
})
export class TeamComponent implements OnInit {

  constructor(public team: TeamService, public router: Router) { }

  ngOnInit() {
  }

  onEdit(event) {
    this.router.navigate(['/detail', event.id]);
  }
}
