import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-four',
  templateUrl: './challenge-four.component.html',
  styleUrls: ['./challenge-four.component.sass']
})
export class ChallengeFourComponent implements OnInit {

  public flagInput!: string;
  private flag: string = "950e2ae5-5da4-4f63-a99e-4305e1d7699b"

  constructor(
    public ref: MatDialogRef<ChallengeFourComponent>,
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
