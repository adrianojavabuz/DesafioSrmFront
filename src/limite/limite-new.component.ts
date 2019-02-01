import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({templateUrl: './limite-new.component.html'})
export class LimiteNewComponent {
    public limite: any = {};
    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    save () {
        let data = {
            nomeCliente: this.limite.nomeCliente,
            limiteCredito: this.limite.limiteCredito,
            risco: this.limite.risco,
            status: 1
        };

        this.httpService.builder('limite')
            .create(data)
            .then(() => {
                this.router.navigate(['/limite']);
            })
    }
}