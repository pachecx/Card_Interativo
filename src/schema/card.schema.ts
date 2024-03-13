import { object, string, z } from 'zod';

export const cardRegister = z.object({
    name: z.string().min(4, "Quatro caracteres"),
    number: z.string().min(6, "precisa ser seis numeros"),
    expDateM: z.string().min(2, "Precisa ser dois Digitos"),
    expDateY: z.string().min(2, "Precisa ser dois Digitos"), 
    codSafe: z.string().min(3, "Precisa ser 3 Digitos"), 
})

export type cardRequestData = z.infer<typeof cardRegister>