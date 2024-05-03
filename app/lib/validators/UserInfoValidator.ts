import { z } from "zod";

export const UserInfoValidator = z.object({
    name: z.string(),
    location: z.string(),
})

export type UserInfoRequest = z.infer<typeof UserInfoValidator>