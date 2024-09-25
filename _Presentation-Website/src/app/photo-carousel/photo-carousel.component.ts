import {NgFor, NgIf} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {
    CarouselComponent,
    CarouselControlComponent, CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective
} from '@coreui/angular';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
    selector: 'app-carousel',
    templateUrl: './photo-carousel.component.html',
    styleUrls: ['./photo-carousel.component.css'],
    standalone: true,
    imports: [ThemeDirective, CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink, CarouselIndicatorsComponent, NgIf]
})
export class PhotoCarouselComponent implements OnInit {
    post: Post | null | undefined;
    postId: number | null | undefined;
    slides: any[] = [];
    activeSlide = 0;

    constructor(private route: ActivatedRoute, private postService: PostService) { }

    ngOnInit(): void {
        this.postId = Number(this.route.snapshot.paramMap.get('id'));
        this.getPostById(this.postId);
        this.getImages();
    }

    getPostById(id: number | null) {
        this.post = this.postService?.getPostById(id) ?? null;
    }

    getImages() {
        this.slides = this.postService.getImages(this.post);
    }

    goToPreviousSlide(): void {
        this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    }

    goToNextSlide(): void {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }

    setActiveSlide(index: number): void {
        this.activeSlide = index;
    }
}
