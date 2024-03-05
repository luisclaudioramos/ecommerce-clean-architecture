import {Mapper} from "../../core/utils/mapper";
import ErrorModel from "../../core/utils/error.model";

export default class ValidationJoiMapper extends Mapper<any, ErrorModel | ErrorModel[] | null> {

    mapFrom(param: any): ErrorModel | ErrorModel[] | null {
        if (param) {
            if (Array.isArray(param) && param.length > 0) {
                return param.map((e: any) => {
                    const error = new ErrorModel();

                    error.fieldName = e.path.join('.');
                    error.message = e.message;

                    return error;
                });
            } else {
                const error = new ErrorModel();

                error.fieldName = param.name;
                error.message = param.message;

                return error;
            }
        }
        return null;
    }

    mapTo(param: ErrorModel): any {
        return {} as any;
    }
}
