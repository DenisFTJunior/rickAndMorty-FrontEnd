import { reduce } from 'ramda'

export const useValitador = (funcs: Function[], data: any) => {
    return reduce((acc: boolean, func: Function) => acc || func(data), false, funcs)
}

export const useOnlyOneValidator = (func: Function, data: any) => func(data)

export const useMultiDataValidator = (func: Function, data: []) => reduce((acc, item) => acc || func(item), false, data)

export const useMultiValitador = (funcs: Function[], data: []) => {
    return reduce((acc: boolean, func: Function) => acc || reduce((acc, item) => acc || func(item), false, data), false, funcs)
}

export default useValitador