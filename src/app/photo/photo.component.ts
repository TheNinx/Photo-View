import {Component,Input} from "@angular/core";

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.ts.html',

})

export class PhotoComponent{

   @Input() description = '';
   @Input() url = '';
}
