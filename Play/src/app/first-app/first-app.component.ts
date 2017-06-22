import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {

  name: string;
  movies = MOVIES;
  movie= { title: '' };

  constructor() { }

  ngOnInit() {
  }

  onUpdate(movie) : void{
    this.movie = movie;
  }

  onData(event: Event): void {
    let element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addMovie(): void{
    if(this.movie.title.trim()){
      this.movies.push({ title: this.movie.title});
      this.movie.title= '';
    }
  }

  delMovie(index): void{
    this.movies.splice(index,1);
  }

}

const MOVIES = [
  { title: 'Harry Potter'},
  { title: 'Les Hobbits'},
  { title: 'Les bronzés'},
  { title: 'la cité de la peur'},
  { title: 'Star Wars'}
]
