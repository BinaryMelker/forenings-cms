import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
/*import { Link } from '../shared/link.model';*/


@Component({
    selector: 'app-edit-list',
    templateUrl: 'edit-links.component.html',
    styleUrls: ['edit-links.component.css']
})
export class EditLinksComponent /*implements OnInit*/{
    
    /*links: Link[];*/
    
    constructor(private apiService: ApiService){
 
    }
/*
    ngOnInit(){
        console.debug('ngOnInit', 'EditLinksComponent');
        this.apiService.getLinks()
            .subscribe(links => {
                this.links = links;
            });
    }
    */
}