export const isObject = (object: any) =>
    (typeof object === 'object' || typeof object === 'function') && object !== null;
