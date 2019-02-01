import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

@Component({templateUrl: './limite.component.html'})
export class LimiteComponent {
    public limites: any[];
    constructor (private httpService: AppHttpService) {}

    ngOnInit() {
        this.httpService.builder('limite')
            .list()
            .then((res) => {
                this.limites = res.limite;
            })
    }
}