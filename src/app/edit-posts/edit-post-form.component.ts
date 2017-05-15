import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../shared/post.model'
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../shared/auth.service';
import { ApiService } from '../shared/api.service';
import { Token } from '../shared/token.model';

@Component({
    selector: '<app-edit-post-form>',
    templateUrl: './edit-post-form.component.html'
})
export class EditPostFormComponent {

posts: Post[];
post: Post;
_id: string;
body: string;
title: string;
token: Token;
 
 @ViewChild('editPostForm') editPostForm: NgForm;
 

 constructor(private apiService: ApiService,private authService: AuthService){}



        ngOnInit(){
        console.debug('ngOnInit', 'EditpostsComponent');
        this.apiService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
            });
       
       this.token = JSON.parse(localStorage.getItem('currentUser'));    

    }
    
    
    onSubmit(editPostForm: NgForm) {
        if(this.editPostForm.invalid) return;
        this.post = new Post();
        this.post._id = this._id;
        this.post.body = this.body;
        this.post.title = this.title;
        this.post.isVisible = true;
        
        console.debug('body: ' + this.body + ' title: ' + this.title);
        
        if(this._id === undefined){
            console.debug('SUBMIT ' + this._id);

            this.apiService.postNewPost(this.post, this.token)
            .subscribe(result => {
                this.editPostForm.reset()
                if (result === true) {
                    // Post successfully added
            
                    console.log('Post added')
                } else {
                    // adding Post failed
                    console.error('Somthing whent wrong with adding Post!');
                    
                }
            });
          
        }else{
             console.debug('UPDATE ' + this._id);

             this.apiService.updatePost(this.post, this.token)
            .subscribe(result => {
                this.editPostForm.reset()
                if (result === true) {
                    // Post successfully added
                
                    console.log('Post updated')
                } else {
                    // adding Post failed
                    console.error('Somthing whent wrong with uppdating the Post!');
                    
                }
            });
        }
        this.ngOnInit();
    }

    deletePost(i: number){
   
        this.apiService.removePost(this.posts[i], this.token).subscribe(result => {
               
                if (result === true) {
                    // Post successfully added
                    this.ngOnInit();
                    console.log('Post DELETED')
                } else {
                    // adding Post failed
                    console.error('Somthing whent wrong with DELETE the Post!');
                   }
                });

    }

    fetchPost(i: number){

        this._id = this.posts[i]._id;
        this.body = this.posts[i].body;
        this.title = this.posts[i].title;
        

        console.log(this.posts[i]._id +' '+ this.posts[i].body +' '+ this.posts[i].title);
    }

    clearForm(){
        this._id = undefined;
        this.editPostForm.reset();
    }

} 