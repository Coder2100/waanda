import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {

  connection: Env.get('DB_CONNECTION', 'sqlite') as string,

  connections: {
    pg: {
      client: 'pg',
      migrations: {
        disableTransactions: false,
        tableName: 'adonis_schema',
        disableRollbacksInProduction: true,
      },
      debug: true,//turn this to false in production
      connection: {
        host: Env.get('DB_HOST', '127.0.0.1') as string,
        port: Number(Env.get('DB_PORT', 5432)),
        user: Env.get('DB_USER', 'apexcure') as string,
        password: Env.get('DB_PASSWORD', '') as string,
        database: Env.get('DB_NAME', 'blog') as string,

      },
      healthCheck: true,
    }

  },
  orm: {
  },
}

export default databaseConfig


