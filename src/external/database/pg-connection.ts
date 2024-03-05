import {Client, QueryResult} from 'pg';
import {config} from "../../config/db-pg-config";

export default class PgConnection {
    private readonly client: Client;
    private readonly config: PgConfig = config;

    constructor() {
        this.client = new Client(this.config);

        this.connect().then(() => {
            console.log('Conectado ao banco de dados PostgreSQL!');
        }).catch(err => {
            console.error('Erro ao conectar ao banco de dados PostgreSQL:', err);
        });
    }

    async connect(): Promise<void> {
        await this.client.connect();
    }

    async query(query: string, params?: any[]): Promise<QueryResult<any>> {
        return await this.client.query(query, params);
    }

    async end(): Promise<void> {
        await this.client.end();
    }
}

export interface PgConfig {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}

export interface PgResult {
    rows: any[];
    rowCount: number;
}