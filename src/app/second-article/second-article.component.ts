import { Component } from '@angular/core';

@Component({
  selector: 'app-second-article',
  standalone: false,
  
  templateUrl: './second-article.component.html',
  styleUrl: './second-article.component.css'
})
export class SecondArticleComponent {
  publication:Date = new Date('05/30/2021');
}
