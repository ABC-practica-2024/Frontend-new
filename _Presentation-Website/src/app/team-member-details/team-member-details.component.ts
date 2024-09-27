import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../team.service";
import {TeamMember} from "../team-member";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-team-member-details',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './team-member-details.component.html',
  styleUrl: './team-member-details.component.css'
})
export class TeamMemberDetailsComponent implements OnInit {
    teamMember: TeamMember | null | undefined;
    teamMemberName: string | null | undefined;

    constructor(private route: ActivatedRoute, private teamDataService: TeamService) { }

    ngOnInit() {
        this.teamMemberName = this.route.snapshot.paramMap.get('name');
        this.fetchTeamMemberData(this.teamMemberName);
    };

    fetchTeamMemberData(name: string | null) {
        this.teamMember = this.teamDataService?.getTeamMemberByName(name) ?? null;
    }
}
