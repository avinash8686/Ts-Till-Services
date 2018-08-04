import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  
  public allBlogs;
  constructor( public blogService:BlogService) { 
    console.log("Home Component Constructor called");
  }

  ngOnInit() {
    console.log("Home Component OnInit Called");
    this.allBlogs = this.blogService.getAllBlogs();
  }

  ngOnDestroy() {
    console.log("Home Component On Destroy Called");
  }

}
