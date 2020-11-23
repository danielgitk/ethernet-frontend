import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { News } from './news.model';


@Injectable({ providedIn: "root" })
export class NewsService {
 
 
  news: News[] = [];
  private newsUpdated = new Subject<News[]>();

  constructor(private http: HttpClient, private router: Router) {}




  getNewsUpdateListener() {
    return this.newsUpdated.asObservable();
  }

  getNews(id: string) {
    return this.http.get<{ id: string, title: string, body: string  }>(
      "http://localhost:8000/api/news/" + id
    );
  }

  addNews(title: string, description: string) {
    const newsData = new FormData();
    newsData.append("title", title);
    newsData.append("body", description);
    this.http
      .post<{ message: string; news: News }>(
        "http://localhost:8000/api/news",
        newsData
      )
      .subscribe(responseData => {
        console.log(responseData);
       
        this.router.navigate(["/"]);
      });
  }

 

  deleteNews(newsId: string) {
    this.http
      .delete("http://localhost:8000/api/news/" + newsId)
      .subscribe((response) => {
        
       console.log(response)
      });
  }
}
