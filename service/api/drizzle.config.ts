import type { Config } from 'drizzle-kit'

const cfConfig = {
  schema: './schema/db/schema.ts',
  out: './schema/db/migrations',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: './wrangler.toml',
    dbName: 'test-db',
  },
  verbose: false,
  strict: true,
} satisfies Config

const localConfig = {
  schema: './schema/db/schema.ts',
  driver: 'better-sqlite',
  dbCredentials: {
    url: "./.wrangler/state/v3/d1/miniflare-D1DatabaseObject/xxx.sqlite"
  },
} satisfies Config

export default process.env.NODE_ENV === 'production' ? cfConfig : localConfig
