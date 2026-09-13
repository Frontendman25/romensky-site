/**
 * Typed seams for a later NestJS + PostgreSQL backend.
 * This site does not run a database or API in v1.
 */
export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { ok: true; id?: string }
  | { ok: false; error: string; code: "validation" | "not_configured" | "upstream" };

export const futureBackend = {
  nestApiUrl: process.env.NEST_API_URL,
  databaseUrl: process.env.DATABASE_URL,
} as const;
