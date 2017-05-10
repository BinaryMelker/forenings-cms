import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['post-list.component.css']
})
export class PostListComponent implements OnInit{
    
    posts: Post[];
    
    constructor(private entryService: PostService){
 
    }

    ngOnInit(){
        this.entryService
            .getPosts()
            .then(posts => this.posts = posts );
    }
}