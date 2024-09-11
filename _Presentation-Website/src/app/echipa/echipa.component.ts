import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-echipa',
  standalone: true,
    imports: [
        NavbarComponent,
        NgIf,
        NgForOf
    ],
  templateUrl: './echipa.component.html',
  styleUrls: ['../app.component.css', './echipa.component.css']
})
export class EchipaComponent {
    organizerNameList = [
        'Gabi Mircea',
        'Jane Smith'
    ];
    memberNameList = [
        'cineva ajerwuw',
        'no one'
    ];
}
