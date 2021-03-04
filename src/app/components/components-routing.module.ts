import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},
  {path:'posts',component: PostsComponent},
  {path:'categories',component: CategoriesComponent},
  {path:'users',component: UsersComponent},
  {path:'postdetails',component: PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
