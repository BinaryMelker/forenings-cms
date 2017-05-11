import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Post } from '../shared/post.model';


@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['post-list.component.css']
})
export class PostListComponent implements OnInit{
    
    posts: Post[];
    
    constructor(private apiService: ApiService){
 
    }

    ngOnInit(){
        this.apiService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
    }
}