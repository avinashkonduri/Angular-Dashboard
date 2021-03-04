import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';


@NgModule({
  declarations: [DashboardComponent, PostsComponent, CategoriesComponent, UsersComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    DashboardComponent, PostsComponent, CategoriesComponent, UsersComponent
  ]
})
export class ComponentsModule { }
