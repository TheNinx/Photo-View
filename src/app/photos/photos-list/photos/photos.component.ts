import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from "../../photo/photo";

@Component({
  selector: 'apx-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = []

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){//caso minha inbound properties tenha uma mudança de estado
      this.rows = this.groupColumns(this.photos);
    }

  }


  groupColumns(photos: Photo[]){
    const newRows = [];

    for (let index =0; index < photos.length; index+=3){
      newRows.push(photos.slice(index,index + 3));
    }

    return newRows;


  }
}
