import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from '../article';
import { articles_list } from '../articles-list';
import { ColormanagerService } from '../colormanager.service';
import randomColor from 'randomcolor';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = articles_list;
  
  articleColor() {
    return { 'background-color' : randomColor() };
  }

  constructor( ) { }

  ngOnInit(): void {
  }

}
