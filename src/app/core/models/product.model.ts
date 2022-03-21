import { Spec } from "./spec.model"

export interface Product {
    _id: string,
    name: string,
    specs: Spec[],
    desc: string,
    info: string,
    usage: string,
    ingredients: string,
    
}