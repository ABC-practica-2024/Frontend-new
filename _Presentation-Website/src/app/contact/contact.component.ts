import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgIf} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { MatLabel } from "@angular/material/form-field";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        MatIcon,
        NavbarComponent,
        NgIf,
        MatCard,
        MatFormField,
        MatInput,
        MatLabel
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
