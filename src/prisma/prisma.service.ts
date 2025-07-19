import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL || 'postgresql://devuser:devpass@localhost:5432/rest-nest',
                }
            },
        });
    }
}
