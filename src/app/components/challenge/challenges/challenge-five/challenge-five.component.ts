import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-five',
  templateUrl: './challenge-five.component.html',
  styleUrls: ['./challenge-five.component.sass']
})
export class ChallengeFiveComponent implements OnInit {

  public flagInput!: string;
  private flag: string = "f3714726-0f6a-4c1d-abff-a95d672f27db"

  constructor(
    public ref: MatDialogRef<ChallengeFiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.flagInput = this.data.flag;
  }

  submit() {
    if (this.flagInput == this.flag) {
      this.data.completed = true;
      this.data.flag = this.flag;
      this.ref.close();
    }
  }

}
