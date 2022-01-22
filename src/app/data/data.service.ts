import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UNKWONWN_ROUTE_DATASOURCE } from '../constants/errors';
import { ROUTES } from '../constants/routes';
import { DICT_STUB } from '../constants/stubs/dict.stub.constants';
import { TRANSLATOR_STUB } from '../constants/stubs/translator.stub.constants';
import { TdataSource } from '../types/columns-data.type';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private router: Router) {}
    public fetchData(): TdataSource {
        switch (this.router.url) {
            case ROUTES.DICTIONARY:
                return DICT_STUB;
            case ROUTES.TRANSLATOR:
                return TRANSLATOR_STUB;
            default:
                throw UNKWONWN_ROUTE_DATASOURCE as Error;
        }
    }
}
