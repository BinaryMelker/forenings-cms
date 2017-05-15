import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
    selector: 'app-edit-list',
    templateUrl: 'edit-posts.component.html',
    styleUrls: ['edit-posts.component.css']
})
export class EditPostsComponent {
    
    
    constructor(private apiService: ApiService){
 
    }

}