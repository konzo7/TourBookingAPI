import pgPromise from "pg-promise";

export const pgp = pgPromise();

const devURL = "postgres://carlos:hallo@localhost:5432/tourdb";

export const db = pgp(process.env.DATABASE_URL || devURL);
