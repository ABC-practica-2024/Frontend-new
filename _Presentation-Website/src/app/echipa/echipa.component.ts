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
export class EchipaComponent {
    // organizerNameList = [
    //     'Gabi Mircea',
    //     'Jane Smith'
    // ];
    // memberNameList = [
    //     'cineva ajerwuw',
    //     'no one'
    // ];
    // organizers: TeamMember[] | undefined = [];
    // members: TeamMember[] = [];
    // organizerNameList: string[] | null = [];
    // memberNameList: string[] | null = [];
    organizers: Observable<TeamMember[]> | undefined;
    members: TeamMember[] | undefined;
    organizerNameList: string[] | undefined;
    memberNameList: string[] | undefined;

    constructor(private teamService: TeamService) {
        // console.log(this.organizerNameList);
    }

    // ngOnInit() {
    //     this.getOrganizers();
    //     // console.log(this.organizerNameList);
    // }

    // ngOnInit() {
    //     this.organizers = this.teamService.getTeamMembersByRole("PM");
    //     this.organizers.subscribe(data => {
    //         this.organizerNameList = data.map(item => item.name);
    //     });
    // }

    // getOrganizers() {
    //     this.organizers = this.teamService?.getTeamMembersByRole("PM") ?? [];
    //     console.log(this.organizers);
    //     this.organizers.forEach(item => {
    //         this.organizerNameList?.push(item.name);
    //     });
    // }

    // async getOrganizers() {
    //     this.organizers = await this.teamService.getTeamMembersByRole("PM");
    //     this.organizerNameList = this.organizers.map(item => item.name);
    // }

    getMembers() {

    }


}
