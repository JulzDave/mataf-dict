import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictComponent } from './dict/dict.component';
import { TranslatorComponent } from './translator/translator.component';

const routes: Routes = [
  { path: 'dict', component: DictComponent },
  { path: 'translator', component: TranslatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DictComponent, TranslatorComponent];
