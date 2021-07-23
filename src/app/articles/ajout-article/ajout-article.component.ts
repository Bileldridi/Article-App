import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  articleForm = new FormGroup({
    category: new FormControl(''),
    title: new FormControl(''),
    img: new FormControl(''),
    message: new FormControl('')
  })

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const nouveauArticle = { id: this.articleService.articles.length, ...form.value };
    console.log(nouveauArticle);
    this.articleService.articles.push(nouveauArticle);
    console.log(this.articleService.articles);
  }
  onSubmitFormGroupe() {
    console.log(this.articleForm.value);
    const nouveauArticle = { id: this.articleService.articles.length, ...this.articleForm.value };
    console.log(nouveauArticle);
    this.articleService.articles.push(nouveauArticle);
    console.log(this.articleService.articles);

  }

}
