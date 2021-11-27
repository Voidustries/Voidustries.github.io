import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-three',
  templateUrl: './challenge-three.component.html',
  styleUrls: ['./challenge-three.component.sass']
})
export class ChallengeThreeComponent implements OnInit {

  public flagInput!: string;
  private flag: string = "addc4292-3c06-42fe-8c8a-7f94f9aad453"

  constructor(
    public ref: MatDialogRef<ChallengeThreeComponent>,
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
