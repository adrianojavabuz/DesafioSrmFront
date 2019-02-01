import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({templateUrl: './limite-view.component.html'})
export class LimiteViewComponent {
    public limite: any = {};
    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
            });
    }

    view(id: number) {
        this.httpService.builder('limite')
            .view(id)
            .then((res) => {
                this.limite = res.limite;
            })
    }
}