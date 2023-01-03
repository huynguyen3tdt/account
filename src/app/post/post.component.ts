import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts: any;
  imgs: any;
  constructor(private post: PostService,private img: PostService) {
  }

  ngOnInit(): void{
    this.post.getListPost().subscribe(res=>{
      this.posts = res;
    })
    this.img.getImgpost().subscribe((res)=>{
      this.imgs = res.splice(0,100);
    })
  }
}
