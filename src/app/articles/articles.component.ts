import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: Article = {
    id: 0,
    title: "How to make a front-end with Angular",
    thumbnail_url: "https://www.davidschlachter.com/thumbnails/pumpkin-pie-small.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
