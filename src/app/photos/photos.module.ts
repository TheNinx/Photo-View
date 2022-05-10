import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


import {PhotoComponent} from "./photo/photo.component";
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import {FilterByDescriptionPipe} from "./photos-list/filter-by-description.pipe";




@NgModule({
  declarations: [PhotoComponent, PhotosListComponent, PhotoFormComponent, PhotosComponent,FilterByDescriptionPipe],
  imports: [HttpClientModule,CommonModule]

})
export class PhotosModule {

}
