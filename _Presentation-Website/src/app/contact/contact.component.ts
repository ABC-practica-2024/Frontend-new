import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        MatIcon,
        NavbarComponent,
        NgIf
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
