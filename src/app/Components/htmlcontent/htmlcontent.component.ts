import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogServiceService } from '../../Services/dialog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FetchTracksService} from '../../Services/fetch-tracks.service'
import { ITrack } from 'src/app/Interfaces/ITracks';

@Component({
  selector: 'app-htmlcontent',
  templateUrl: './htmlcontent.component.html',
  styleUrls: ['./htmlcontent.component.scss']
})
export class HtmlcontentComponent implements OnInit {
  trackId:string;
  currentTrack:ITrack;
  constructor(private dialog: MatDialog,
    private dialogService: DialogServiceService,
    private router: Router,private activatedRoute:ActivatedRoute, private fetchTracksService:FetchTracksService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.trackId = <string>params.get('id');
      console.log(this.trackId);
    });
    this.fetchTracksService.getTrackById(this.trackId).subscribe(data =>this.currentTrack = data);
  }

  alrtt(){
    this.dialogService.openConfirmDialog();
  }

  openStudyMaterial(){
    window.open('https://becurious.edcast.eu/journey/angular-course');
  }


}
