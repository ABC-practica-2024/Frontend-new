import { Injectable } from '@angular/core';
import {Post} from "./post";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private posts: Post[] = [];
    private postsSubject = new BehaviorSubject<Post[]>([]);

    constructor() {
        // localStorage.clear();
        this.loadPosts();
    }

    async loadPosts(): Promise<void> {
        const storedData = localStorage.getItem('posts');
        if (storedData) {
            await this.loadFromLocalStorage(storedData);
        } else {
            await this.fetchPosts();
        }
    }

    private loadFromLocalStorage(storedData: string): void {
        this.posts = JSON.parse(storedData);
        this.postsSubject.next(this.posts);
    }

    private fetchPosts(): Promise<void> {
        return fetch('/assets/posts.json')
            .then(response => response.json())
            .then(data => {
               this.posts = data;
               localStorage.setItem('posts', JSON.stringify(data));
                this.postsSubject.next(this.posts);
            });
    }

    getPosts(): Observable<Post[]> {
        return of(this.posts);
    }

    getPostById(id: number | null): Post | undefined {
        return this.posts.find(post => post.id === id);
    }
}
