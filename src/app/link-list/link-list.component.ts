import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Link } from '../shared/link.model';


@Component({
    selector: 'app-link-list',
    templateUrl: 'link-list.component.html',
    styleUrls: ['link-list.component.css']
})
export class LinkListComponent implements OnInit{
    
    links: Link[];
    
    constructor(private apiService: ApiService){
 
    }

    ngOnInit(){
        this.apiService.getLinks()
            .subscribe(links => {
                this.links = links;
            });
    }
}