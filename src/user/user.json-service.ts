import { User } from './user';
import { UserService } from './user.service';
import * as fs from 'fs';

export class UserJSONService implements UserService {
    add(username: string): User {
        let maxId = 0;
        const user = JSON.parse(fs.readFileSync('./src/user/users.json', 'utf8')).users;
        for(let i = 0; i < user.length; i++){
            if (user[i].id > maxId) {
                maxId = user[i].id;
            }
        }
        const newUser = new User(maxId + 1, username);
        user.push(newUser);
        fs.writeFileSync('./src/user/users.json', "{\"users\":"+JSON.stringify(user)+"}", 'utf8');
        return user;
    }

    getById(id: number): User | null {
        const user = JSON.parse(fs.readFileSync('./src/user/users.json', 'utf8')).users;
        for(let i = 0; i < user.length; i++){
            if (user[i].id === id) {
                return user[i];
            }
        }
        return null;
    }
}
