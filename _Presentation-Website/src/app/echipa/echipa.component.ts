import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TeamService} from "../team.service";
import {TeamMember} from "../team-member";
import {Observable} from "rxjs";

@Component({
  selector: 'app-echipa',
  standalone: true,
    imports: [
        NavbarComponent,
        NgIf,
        NgForOf,
        RouterLink
    ],
  templateUrl: './echipa.component.html',
  styleUrls: ['../app.component.css', './echipa.component.css']
})
export class EchipaComponent implements OnInit {
    organizers: Observable<TeamMember[]> | undefined;
    members: Observable<TeamMember[]> | undefined;
    organizerNameList: string[] | undefined;
    memberNameList: string[] | undefined;

    constructor(private teamService: TeamService) { }

    ngOnInit() {
        // localStorage.clear();
        this.getOrganizers();
        this.getMembers();
    }

    getOrganizers() {
        this.organizers = this.teamService.getTeamMembersByRole("PM");
        this.organizers.subscribe(data => {
            this.organizerNameList = data.map(item => item.name);
        });
    }

    getMembers() {
        this.members = this.teamService.getTeamMembersByRole("membru");
        this.members.subscribe(data => {
            this.memberNameList = data.map(item => item.name);
        });
    }
}
