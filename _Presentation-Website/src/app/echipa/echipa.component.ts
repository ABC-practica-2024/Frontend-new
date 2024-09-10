import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-echipa',
  standalone: true,
    imports: [
        NavbarComponent,
        NgIf
    ],
  templateUrl: './echipa.component.html',
  styleUrls: ['../app.component.css', './echipa.component.css']
})
export class EchipaComponent {

}
