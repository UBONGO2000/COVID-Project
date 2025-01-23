import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  assets:any=[
    {
      image:'../assets/fever.png',
      title:'Forte fièvre',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at laudantium consectetur vitae, saepe accusamus minus, pariatur, blanditiis dolorum consequatur explicabo necessitatibus? Saepe, ipsam voluptatibus.'
    },
    {
      image:'../assets/fever.png',
      title:'Toux',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at laudantium consectetur vitae, saepe accusamus minus, pariatur, blanditiis dolorum consequatur explicabo necessitatibus? Saepe, ipsam voluptatibus.'
    },
    {
      image:'../assets/fever.png',
      title:'Gorge irritée',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at laudantium consectetur vitae, saepe accusamus minus, pariatur, blanditiis dolorum consequatur explicabo necessitatibus? Saepe, ipsam voluptatibus.'
    },
    {
      image:'../assets/fever.png',
      title:'Migraine',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum at laudantium consectetur vitae, saepe accusamus minus, pariatur, blanditiis dolorum consequatur explicabo necessitatibus? Saepe, ipsam voluptatibus.'
    }
  ]
  
}
