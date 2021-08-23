import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'Voidustries';

  constructor(
    private metaTagService: Meta,
    ) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: "og:title", content: "Voidustries | Home"},
      { name: "og:description", content: "Voidustries home page."},
      { name: "og:image", content: "https://www.voidustries.ca/android-chrome-512x512.png"},
      { name: "og:url", content: "https://www.voidustries.ca"},
    ]);
  }
}
