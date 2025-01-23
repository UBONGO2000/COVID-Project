import { Component } from '@angular/core';
@Component({
  selector: 'app-first-article',
  standalone: false,
  
  templateUrl: './first-article.component.html',
  styleUrl: './first-article.component.css'
})
export class FirstArticleComponent {

  publication:Date = new Date('05/25/2021');
}
