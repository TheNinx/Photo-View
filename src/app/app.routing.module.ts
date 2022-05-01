import {NgModule} from "@angular/core";
import {PhotosListComponent} from "./photos/photos-list/photos-list.component";
import {RouterModule, Routes} from "@angular/router";
import {PhotoFormComponent} from "./photos/photo-form/photo-form.component";


const ROUTES: Routes = [

  {path: 'user/flavio', component: PhotosListComponent},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: PhotosListComponent},




];

@NgModule({

  imports:[RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]


})
export class AppRoutingModule{

}
