import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_URL } from '../../../environments/environment';
import { Gamer } from '../../models/gamer.interface';

@Injectable()
export class GamerInfoService {
    constructor(private http: Http) { }

    get(gamer: Gamer) {
        const url = `${API_URL}/sign_in`;

        return this.http
                   .post(url, gamer )
                   .map( (response: Response) => response.json())
                   .catch( (error: any) => Observable.throw(error));
    }
}