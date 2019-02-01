import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from '../app/app-http.service';

import { LimiteComponent } from './limite.component';
import { LimiteViewComponent } from './limite-view.component';
import { LimiteNewComponent } from './limite-new.component';
import { LimiteRemoveComponent } from './limite-remove.component';

const appRoutes: Routes = [
    { path: 'limite', component: LimiteComponent },
    { path: 'limite/new', component: LimiteNewComponent },
    { path: 'limite/:id', component: LimiteViewComponent },
    { path: 'limite/:id/remove', component: LimiteRemoveComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    declarations: [
        LimiteComponent,
        LimiteViewComponent,
        LimiteNewComponent,
        LimiteRemoveComponent,
    ],
    providers: [AppHttpService]
})
export class LimiteModule {}