import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
    sendEmail(name: string, email: string, message: string) {
        const mailtoLink = `mailto:${email}?subject=Contact Form&body= ${message}`;

        window.location.href = mailtoLink;
    }
}
