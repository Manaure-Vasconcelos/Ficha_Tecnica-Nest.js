import { UserEntity } from '@application/entities/user/user.entity';

export class UserViewModel {
  static toHTTP(user: UserEntity) {
    return {
      id: user.id,
      name: user.name,
      recipes: user.recipes,
    };
  }
}
