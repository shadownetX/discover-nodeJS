export type Status = 'pending' | 'ongoing' | 'completed';

export class Task {

    _id: string;
    title: string;
    description: string;
    status: string;
    created: Date;

    constructor(id: string, title: string, description: string, status: Status){
        this._id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }

}