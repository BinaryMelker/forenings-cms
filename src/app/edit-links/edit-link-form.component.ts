
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Link } from '../shared/link.model'
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../shared/auth.service';
import { ApiService } from '../shared/api.service';
import { Token } from '../shared/token.model';

@Component({
    selector: '<app-edit-link-form>',
    templateUrl: './edit-link-form.component.html'
})
export class EditLinkFormComponent {

links: Link[];
link: Link;
_id: string;
url: string;
name: string;
token: Token;
 
 @ViewChild('editLinkForm') editLinkForm: NgForm;
 

 constructor(private apiService: ApiService,private authService: AuthService){}



        ngOnInit(){
        console.debug('ngOnInit', 'EditLinksComponent');
        this.apiService.getLinks()
            .subscribe(links => {
                this.links = links;
            });
       
       this.token = JSON.parse(localStorage.getItem('currentUser'));    

    }
    
    
    onSubmit(editLinkForm: NgForm) {
        if(this.editLinkForm.invalid) return;
        this.link = new Link();
        this.link._id = this._id;
        this.link.url = this.url;
        this.link.name = this.name;
        
        console.debug('Url: ' + this.url + ' name: ' + this.name);
        
        if(this._id === undefined){
            console.debug('SUBMIT ' + this._id);

            this.apiService.postNewLink(this.link, this.token)
            .subscribe(result => {
                this.editLinkForm.reset()
                if (result === true) {
                    // link successfully added
            
                    console.log('link added')
                } else {
                    // adding link failed
                    console.error('Somthing whent wrong with adding link!');
                    
                }
            });
          
        }else{
             console.debug('UPDATE ' + this._id);

             this.apiService.updateLink(this.link, this.token)
            .subscribe(result => {
                this.editLinkForm.reset()
                if (result === true) {
                    // link successfully added
                
                    console.log('link updated')
                } else {
                    // adding link failed
                    console.error('Somthing whent wrong with uppdating the link!');
                    
                }
            });
        }
        this.ngOnInit();
    }

    deleteLink(i: number){
   
        this.apiService.removeLink(this.links[i], this.token).subscribe(result => {
               
                if (result === true) {
                    // link successfully added
                    this.ngOnInit();
                    console.log('link DELETED')
                } else {
                    // adding link failed
                    console.error('Somthing whent wrong with DELETE the link!');
                   }
                });

    }

    fetchLink(i: number){

        this._id = this.links[i]._id;
        this.url = this.links[i].url;
        this.name = this.links[i].name;
        

        console.log(this.links[i]._id +' '+ this.links[i].url +' '+ this.links[i].name);
    }

    clearForm(){
        this._id = undefined;
        this.editLinkForm.reset();
    }

} 