import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-three',
  styleUrls: ['./challenge-three.component.sass'],
  templateUrl: './challenge-three.component.html',
})
export class ChallengeThreeComponent implements OnInit {

  public flagInput!: string;
  private flag = "addc4292-3c06-42fe-8c8a-7f94f9aad453"

  constructor(
    public ref: MatDialogRef<ChallengeThreeComponent>,
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
