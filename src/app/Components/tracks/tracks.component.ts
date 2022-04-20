import { Component, OnInit } from '@angular/core';
import {ITrack} from '../../Interfaces/ITracks'
import {FetchTracksService} from '../../Services/fetch-tracks.service'
import {FetchLeadService} from '../../Services/fetch-lead.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  public tracks = [];


  constructor(private fetchTracksService:FetchTracksService, private router:Router) { }

  ngOnInit(): void {
    this.fetchTracksService.getTracks().subscribe(data => {
      this.tracks = data;
    });
  }

  trackDetails( track:ITrack){
    this.router.navigate(['/HTML',track._id])
  }

}
