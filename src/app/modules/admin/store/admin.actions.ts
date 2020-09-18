import {createAction, props} from '@ngrx/store';

export const AddProduct = createAction('[HOME]AddProduct', props<{total:number,cold:number,hot:number}>());