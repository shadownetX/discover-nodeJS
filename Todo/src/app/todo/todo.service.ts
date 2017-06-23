import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TodoService {

    private headers = new Headers({ 'Content-Type': 'application/json' })
    private taskUrl = 'http://localhost:3000/todo/tasks';

    constructor(private http: Http) { };

    getTasks(): Promise<Task[]> {
        return this.http.get(this.taskUrl)
            .toPromise()
            .then(response => response.json() as Task[])
            .catch(this.errorHandler);
    }

    private errorHandler(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}