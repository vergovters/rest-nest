import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signin() {
        // Logic for user signin
        return { message: 'User signed in successfully' };
    }

    signup() {
        // Logic for user signup
        return { message: 'User signed up successfully' };
    }
}
