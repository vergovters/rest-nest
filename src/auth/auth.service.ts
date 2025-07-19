import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}
    signin() {
        // Logic for user signin
        return { message: 'User signed in successfully' };
    }

    signup() {
        // Logic for user signup
        return { message: 'User signed up successfully' };
    }
}
