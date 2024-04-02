import z from 'zod';

// Client env schema
export const envSchema = z.object({
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_ZALO_BOOKING_URL: z.string().url(),
});

export const envClientSchema = envSchema.parse({
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_ZALO_BOOKING_URL: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
});

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv extends EnvSchemaType {}
    }
}
