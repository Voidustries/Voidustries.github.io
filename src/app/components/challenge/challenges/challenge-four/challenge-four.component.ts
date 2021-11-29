import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-four',
  styleUrls: ['./challenge-four.component.sass'],
  templateUrl: './challenge-four.component.html',
})
export class ChallengeFourComponent implements OnInit {

  public flagInput!: string;
  private flag = "950e2ae5-5da4-4f63-a99e-4305e1d7699b"

  constructor(
    public ref: MatDialogRef<ChallengeFourComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  public ngOnInit(): void {
    this.flagInput = this.data.flag;
  }

  public submit(): void {
    if (this.flagInput == this.flag) {
      this.data.completed = true;
      this.data.flag = this.flag;
      this.ref.close();
    }
  }

}
