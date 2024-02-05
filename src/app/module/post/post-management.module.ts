import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { PostsComponent } from './posts/posts.component';
import { PostManagementRoutingModule } from './post-management-router-module';
@NgModule({
    declarations: [
        PostsComponent
    ],
    imports: [CommonModule, BookingModule, PostManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        PostsComponent
    ],
})
export class PostManagementModule { }
