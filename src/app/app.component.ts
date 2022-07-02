import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  value = 10;
  images: string[] = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.gif",
    "/assets/4.png",
    "/assets/5.png",
  ];
}
