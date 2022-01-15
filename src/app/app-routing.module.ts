import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictComponent } from './dict/dict.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslatorComponent } from './translator/translator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dict', component: DictComponent,  },
  { path: 'translator', component: TranslatorComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DictComponent, TranslatorComponent];
