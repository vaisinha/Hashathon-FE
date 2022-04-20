import { Component, OnInit } from '@angular/core';
import {ITrack} from '../../Interfaces/ITracks';
import {FetchTracksService} from '../../Services/fetch-tracks.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tracks:ITrack[] = [];
  constructor(private fetchTracksService:FetchTracksService) { }

  ngOnInit(): void {
    this.fetchTracksService.getTracks().subscribe(data => this.tracks = data);
  }
  showApi(){
    console.log(this.tracks);

  }

}
