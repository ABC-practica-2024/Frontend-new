import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        NavbarComponent,
        MatIcon
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
