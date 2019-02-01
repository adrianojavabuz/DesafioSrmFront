import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({template: ''})
export class LimiteRemoveComponent {
    public limite: any = {};
    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.remove(params.id);
            });
    }

    remove (id: number) {
        this.httpService.builder('limite')
            .remove(id)
            .then(() => {
                this.router.navigate(['/limite']);
            })
    }
}