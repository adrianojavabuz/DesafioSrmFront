import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {
    private url: string;

    constructor(private http: Http) {}

    builder (resource: string) {
        this.url = 'http://localhost:8082/api/private/' + resource;
        return this;
    }

    list () {
        let url = this.url ;

        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    view (id: number) {
        let url = this.url + '/' + id ;

        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

   

    create (data: any) {
        let url = this.url + '/inserirlimite';

        return this.http.post(url, data)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    remove (id: number) {
        let url = this.url + '/' + id ;

        return this.http.delete(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

   
}