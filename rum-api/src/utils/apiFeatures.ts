import { AppError } from './appError';
import { isObject } from './helper';
import { StatusCodes } from 'http-status-codes';

const supabaseFilterMethod = {
    select: (_this: any, ...params: any[]) => _this.select(...params),
    containedBy: (_this: any, ...params: any[]) => _this.containedBy(...params),
    contains: (_this: any, ...params: any[]) => _this.contains(...params),
    eq: (_this: any, ...params: any[]) => _this.eq(...params),
    filter: (_this: any, ...params: any[]) => _this.filter(...params),
    gt: (_this: any, ...params: any[]) => _this.gt(...params),
    gte: (_this: any, ...params: any[]) => _this.gte(...params),
    ilike: (_this: any, ...params: any[]) => _this.ilike(...params),
    ilikeAllOf: (_this: any, ...params: any[]) => _this.ilikeAllOf(...params),
    ilikeAnyOf: (_this: any, ...params: any[]) => _this.ilikeAnyOf(...params),
    in: (_this: any, ...params: any[]) => _this.in(...params),
    is: (_this: any, ...params: any[]) => _this.is(...params),
    like: (_this: any, ...params: any[]) => _this.like(...params),
    likeAllOf: (_this: any, ...params: any[]) => _this.likeAllOf(...params),
    likeAnyOf: (_this: any, ...params: any[]) => _this.likeAnyOf(...params),
    limit: (_this: any, ...params: any[]) => _this.limit(...params),
    lt: (_this: any, ...params: any[]) => _this.lt(...params),
    lte: (_this: any, ...params: any[]) => _this.lte(...params),
    match: (_this: any, ...params: any[]) => _this.match(...params),
    neq: (_this: any, ...params: any[]) => _this.neq(...params),
    not: (_this: any, ...params: any[]) => _this.not(...params),
    or: (_this: any, ...params: any[]) => _this.or(...params),
    order: (_this: any, ...params: any[]) => _this.order(...params),
    overlaps: (_this: any, ...params: any[]) => _this.overlaps(...params),
    range: (_this: any, ...params: any[]) => _this.range(...params),
    rangeAdjacent: (_this: any, ...params: any[]) => _this.rangeAdjacent(...params),
    rangeGt: (_this: any, ...params: any[]) => _this.rangeGt(...params),
    rangeGte: (_this: any, ...params: any[]) => _this.rangeGte(...params),
    rangeLt: (_this: any, ...params: any[]) => _this.rangeLt(...params),
    rangeLte: (_this: any, ...params: any[]) => _this.rangeLte(...params),
    textSearch: (_this: any, ...params: any[]) => _this.textSearch(...params),
};

class APIFeatures<T> {
    query: T;
    queryString: any;
    constructor(query: T, queryString: any) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        try {
            /**
             * Copy queryString to queryObj to handle.
             * Query string format example: { id: 10, age: { gt: 50 }, name: { textSearch: 'abc' } }
             */
            const queryObj = { ...this.queryString };

            // Exclude some feilds to handle independently
            const excludeFeilds = ['order', 'ascending', 'page', 'limit'];
            excludeFeilds.forEach((field) => delete queryObj[field]);

            // Get keys of queryObj. These keys are fields of table on database
            const fields = Object.keys(queryObj);

            // Handle each field.
            fields.forEach((field) => {
                const valueOfField = queryObj[field];

                // If the value of this field is a object, so it is a operator of supabase js. Ex: gt, lt, or, textSearch,...
                if (isObject(valueOfField)) {
                    // Get the operator.
                    const operators = Object.keys(valueOfField);

                    // Handle each operator.
                    operators.forEach((operator) => {
                        // Check if the operator is esxit in supabase js.
                        if (supabaseFilterMethod.hasOwnProperty(operator)) {
                            const filterFn = supabaseFilterMethod[operator as keyof typeof supabaseFilterMethod];
                            this.query = filterFn(this.query, field, valueOfField[operator]);
                        } else {
                            throw new AppError(StatusCodes.BAD_REQUEST, 'Truy vấn dữ liệu không hợp lệ.');
                        }
                    });
                }
            });
        } catch (error) {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Truy vấn dữ liệu không hợp lệ.');
        }

        return this;
    }

    order() {
        if (this.queryString.order) {
            this.query = (this.query as any).order(this.queryString.order, {
                ascending: this.queryString.ascending === 'true',
            });
        } else {
            this.query = (this.query as any).order('createdAt', { ascending: false });
        }

        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 20;
        const skip = (page - 1) * limit;

        this.query = (this.query as any).range(skip, skip + limit - 1);

        return this;
    }
}
export default APIFeatures;
