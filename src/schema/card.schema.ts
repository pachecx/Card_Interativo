import { z } from 'zod';

export const cardRegister = z.object({
    name: z.string().regex(/^[a-zA-ZÀ-ÿ]+(?:\s+[a-zA-ZÀ-ÿ]+)+$/, {
        message: 'Full name',
    }),
    number: z.number({required_error: "", invalid_type_error: "Can'be Blank"})
    .min(16, "Must be sixteen numbers").max(16, "Must be sixteen numbers"),

    expDateM: z.number({required_error: "", invalid_type_error: "Can'be Blank"})
    .min(2, "Must be two numbers").max(2, "Must be two numbers"),
   
    expDateY: z.number({required_error: "", invalid_type_error: "Can'be Blank"})
    .min(2, "Must be two numbers").max(2, "Must be two numbers"),

    codSafe: z.number({required_error: "", invalid_type_error: "Can'be Blank"})
    .min(3, "Must be three numbers").lt(3), 
})

export type cardRequestData = z.infer<typeof cardRegister>



// formatar numero do cartao

// tirar o / de entre as datas
// pagina da f5 ao fechar modal
// add imagem desktop 1024px
// alterar todos os tipos para number