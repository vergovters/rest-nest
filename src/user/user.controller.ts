import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe() {
        return { message: 'User profile data' };
    }
}
