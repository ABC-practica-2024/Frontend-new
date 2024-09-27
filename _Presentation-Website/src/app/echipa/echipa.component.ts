import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TeamService} from "../team.service";
import {TeamMember} from "../team-member";
import {filter, map, Observable} from "rxjs";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-echipa',
  standalone: true,
    imports: [
        NavbarComponent,
        NgIf,
        NgForOf,
        RouterLink,
        AsyncPipe,
        FooterComponent
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
        this.members$ = this.teamService.getAllTeamMembers().pipe(
            map(members => members.filter(member => member.role !== 'Project Manager')),
            map(filteredMembers => filteredMembers.map(member => member.name)) // Extract member names (non-PMs)
        );
    }
}
