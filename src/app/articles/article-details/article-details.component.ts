import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }
  article: any;
  articleId: any;
  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['id'];
    this.article = this.articleService.articles[this.articleId];
  }

}
