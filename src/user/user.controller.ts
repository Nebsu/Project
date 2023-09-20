import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    checkUsername(username: string): boolean {
        if (username === '' || username.trim() === '') return false;
        return true;
    }

    add(username: string): User {
        if (!this.checkUsername(username)) throw new Error('Username is invalid');
        // is the username empty ?
        // is the username whitespaced ?
        // other checks...
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (id < 0) throw new Error('Id cannot be negative');
        if (id % 1 !== 0) throw new Error('Id cannot be decimal');
        // is the id a decimal ?
        // is the id a negative number ?
        // other checks...
        return this.userService.getById(id);
    }
}
