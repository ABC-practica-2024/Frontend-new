import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TeamService} from "../team.service";
import {TeamMember} from "../team-member";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-echipa',
  standalone: true,
    imports: [
        NavbarComponent,
        NgIf,
        NgForOf,
        RouterLink,
        AsyncPipe
    ],
  templateUrl: './echipa.component.html',
  styleUrls: ['../app.component.css', './echipa.component.css']
})
export class EchipaComponent implements OnInit {
    organizers$: Observable<string[]> | undefined;
    members$: Observable<string[]> | undefined;

    constructor(private teamService: TeamService) { }

    ngOnInit() {
        this.organizers$ = this.teamService.getTeamMembersByRole('Project Manager').pipe(
            map((data) => data.map((item) => item.name)) // Extract organizer names directly
        );
        this.members$ = this.teamService.getTeamMembersByRole('Member').pipe(
            map((data) => data.map((item) => item.name)) // Extract member names directly
        );
    }
}
