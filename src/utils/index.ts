

export const isFunction = (value: any): value is Function =>
  typeof value === 'function';


export function isObject(value: unknown): Boolean {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export const isPromise = (value: any): value is PromiseLike<any> => {
  return value && typeof value.then === 'function'
}



export function isArray(value: unknown): Boolean {
  return Object.prototype.toString.call(value) === '[object Array]';
}

export function isEmpty(value: any): Boolean {
  if (value === '') return true
  if (value === undefined) return true
  if (isObject(value)) return Object.keys(value).length === 0
  if (isArray(value)) value.length === 0
  return false
}