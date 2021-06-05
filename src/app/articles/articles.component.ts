import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from '../article';
import { articles_list } from '../articles-list';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = articles_list;

  constructor( ) { }
  /* constructor(private http: HttpClient) { } */
  
  /*loadArticles() {
  	this.http.get('https://www.davidschlachter.com/index.xml',
		{
			headers: new HttpHeaders()
				.set('Content-Type', 'text/xml')
				.append('Access-Control-Allow-Methods', 'GET')
	            .append('Access-Control-Allow-Origin', '*')  
	            .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
			responseType: 'text'
		})
  }*/

  ngOnInit(): void {
  }

}
