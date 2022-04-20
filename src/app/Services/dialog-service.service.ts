import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {HelperDetailsComponent} from '../Components/helper-details/helper-details.component'

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog : MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(HelperDetailsComponent,{
      width: '30rem',
      height:'25rem',
      disableClose:true
    });
  }
}
