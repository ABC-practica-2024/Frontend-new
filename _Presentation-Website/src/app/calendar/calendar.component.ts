import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatIcon} from "@angular/material/icon";
import {PostService} from "../post.service";
import {Observable} from "rxjs";
import {Post} from "../post";
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        NavbarComponent,
        MatIcon,
        RouterLink,
        NgForOf,
        AsyncPipe,
        FooterComponent
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
    posts$: Observable<Post[]> | undefined;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        // localStorage.clear();
        this.getPosts();
    }

    // checkPostVersion() {
    //     const storedVersion = localStorage.getItem('postVersion');
    //     const latestVersion = this.postService.getLatestPostVersion();
    //
    //     if (storedVersion !== latestVersion) {
    //         localStorage.clear(); // Clear the old posts
    //         localStorage.setItem('postVersion', latestVersion); // Store the new version
    //     }
    // }

    getPosts() {
        this.posts$ = this.postService.getPosts();
    }
}
