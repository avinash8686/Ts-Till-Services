import { Component, OnInit, OnDestroy } from '@angular/core';

// Importing the Activated Route from router.
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  

  constructor(private _route:ActivatedRoute, private router: Router, private blogService:BlogService) { 
    console.log("blog View Constructor called");
    
  }
  
  ngOnInit() {
    let currentBlogId = this._route.snapshot.paramMap.get('blogId');
    
    console.log("blog View OnInit called");
    console.log(currentBlogId);
    // console.log(this.blogService.getAllBlogs());
    this.currentBlog = this.blogService.getCurrentBlog(currentBlogId);
  }

  

  ngOnDestroy() {
    console.log("Blog View Destroy called");
  }
}
