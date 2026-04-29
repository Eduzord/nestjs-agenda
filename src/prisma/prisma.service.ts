import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client/extension';
import mariadb from 'mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {

        const adapter = new PrismaMariaDb({
            host: 'localhost',
            port: 3306,
            user: 'root', // Usuário padrão do XAMPP
            password: '', // Deixe vazio se você não configurou senha no XAMPP
            database: 'projeto_crud_db', // Coloque o exato nome do seu banco aqui
        });
        super(adapter);
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

}
