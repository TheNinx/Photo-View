import {NgModule} from "@angular/core";
import {PhotosListComponent} from "./photos/photos-list/photos-list.component";
import {RouterModule, Routes} from "@angular/router";
import {PhotoFormComponent} from "./photos/photo-form/photo-form.component";
import {PhotoListResolver} from "./photos/photos-list/photo-list.resolver";



const ROUTES: Routes = [

  {path: 'user/:userName', component: PhotosListComponent, resolve:{
        photos: PhotoListResolver
    }},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: PhotosListComponent},





];

@NgModule({

  imports:[RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]


})
export class AppRoutingModule{

}
