import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

export const getActivatedRouteValue = (params, data) => {
    return {
        params: Observable.from([params]),
        data: Observable.from([data])
    };
};
