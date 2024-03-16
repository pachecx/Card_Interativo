import { number, z } from 'zod';

export const cardRegister = z.object({
    name: z.string().regex(/^[a-zA-ZÀ-ÿ]+(?:\s+[a-zA-ZÀ-ÿ]+)+$/, {
        message: 'Full name',
    }),
    number: z.string(number())
    .min(16, "Must be sixteen numbers").max(16, "Must be sixteen numbers"),
    expDateM: z.string(number()).min(2, "Must be two numbers").max(2, "Must be two numbers"),
    expDateY: z.string(number()).min(2, "Must be two numbers").max(2, "Must be two numbers"),
    codSafe: z.string(number()).min(3, "Must be three numbers").max(3, "Must be three numbers"), 
})

export type cardRequestData = z.infer<typeof cardRegister>