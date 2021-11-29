import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-two',
  styleUrls: ['./challenge-two.component.sass'],
  templateUrl: './challenge-two.component.html',
})
export class ChallengeTwoComponent implements OnInit {

  public dateInput!: string;
  private date = '01/01/2021'

  constructor(
    public ref: MatDialogRef<ChallengeTwoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.dateInput = this.data.date;
  }

  submit(): void {
    if (this.dateInput == this.date) {
      this.data.completed = true;
      this.data.date = this.date;
      this.ref.close();
    }
  }
}
