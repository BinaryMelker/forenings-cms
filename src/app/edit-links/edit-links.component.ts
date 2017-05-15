import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
    selector: 'app-edit-list',
    templateUrl: 'edit-links.component.html',
    styleUrls: ['edit-links.component.css']
})
export class EditLinksComponent{
    
    constructor(private apiService: ApiService){
 
    }

}