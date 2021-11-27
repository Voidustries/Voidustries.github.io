import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.sass']
})
export class ChallengeTwoComponent implements OnInit {

  public dateInput!: string;
  private date: string = '01/01/2021'

  constructor(
    public ref: MatDialogRef<ChallengeTwoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.dateInput = this.data.date;
  }

  submit() {
    if (this.dateInput == this.date) {
      this.data.completed = true;
      this.data.date = this.date;
      this.ref.close();
    }
  }
}
