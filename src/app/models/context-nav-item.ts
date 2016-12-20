import {INavigatable} from './inavigatable'


export class ContextNavItem implements INavigatable {
    constructor() {
        this.Selected = false;
    }

Selected: boolean;
    URL: string;
    Text: string;    
    Description: string;

}