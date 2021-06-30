import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { FooterComponent } from './footer/footer.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { AuthorCollectionComponent } from './author-collection/author-collection.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';

const routes: Routes = [
  {
    path: '', component: LoginlayoutComponent,
    children: [
      { path: '', component: SigninComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'signin', component: SigninComponent },

    ]
  },
  {
    path: 'add', canActivate: [AuthGuard], component: AddComponent
  },
  {
    path: 'books', component: BookCollectionComponent ,
    // children: [
    //   { path: '/:id', component: SinglebookComponent },
    // ]
  },
  {
    path: 'authors', component: AuthorCollectionComponent,
    // children: [
    //   { path: '/:id', component: SinglebookComponent },
    // ]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'books/:id', component: SinglebookComponent
  } ,
  {
    path: 'authors/:id', component: SingleauthorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
