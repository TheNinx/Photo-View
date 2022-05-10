import { Component, OnInit } from '@angular/core';
import {Photo} from "../photo/photo";
import {ActivatedRoute} from "@angular/router";
import {filter, Subject} from "rxjs";
import { debounceTime} from "rxjs";
import {PhotoService} from "../photo/photo.service";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = []
  filter: string = ''
  deBounce: Subject<string> = new Subject<string>()
  hasmore: boolean = true
  currentPage: number = 1
  userName: string = ''

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService
  ) {}

  ngOnInit(): void{ //ao iniciar execute
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

    this.deBounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter)

  }

  onKeyUp(target : any) {

    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.deBounce.next(elemento.value)

    }
  }

  load(){
    this.photoService.listFromUserPaginated(this.userName,++this.currentPage,).subscribe(photos =>{
      this.photos = this.photos.concat(photos)
      if (!photos.length){
        this.hasmore = false
      }
    })
  }

}
