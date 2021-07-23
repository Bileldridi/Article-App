import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() category!: string;
  @Input() title!: string;
  @Input() id!: number;
  status: boolean = false;
  statut: string = "non vérifier";
  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    if (this.status) {
      this.statut = "vérifier"
    } else {
      this.statut = "non vérifier"
    }
  }

  changeStatus() {
    this.status = !this.status;
    this.ngOnInit();
  }

}
