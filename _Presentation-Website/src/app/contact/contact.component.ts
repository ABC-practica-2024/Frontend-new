import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgIf} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { MatLabel } from "@angular/material/form-field";
import {EmailService} from "../email.service";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "../footer/footer.component";

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
        MatLabel,
        FormsModule,
        FooterComponent
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    name = '';
    email = '';
    message = '';

    constructor(private emailService: EmailService) {}

    onSubmit() {
        this.emailService.sendEmail(this.name, this.email, this.message);
    }
}
