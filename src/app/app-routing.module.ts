import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { FirstArticleComponent } from './first-article/first-article.component';
import { SecondArticleComponent } from './second-article/second-article.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/article1',component:FirstArticleComponent},
  {path:'blog/article2',component:SecondArticleComponent},
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


