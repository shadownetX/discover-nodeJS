import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular test';

  getTitle(): string {
    return this.title;
  }

  myAlert(data: string): void {
    alert(data);
  }
}
