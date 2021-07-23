import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './articles/ajout-article/ajout-article.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: "articles", component: ArticlesComponent },
  { path: "article/:id", component: ArticleDetailsComponent },
  { path: "add", component: AjoutArticleComponent },
  { path: "", component: ArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
