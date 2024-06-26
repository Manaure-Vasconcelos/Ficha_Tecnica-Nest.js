import { UserEntity } from '@application/entities/user/user.entity';

export abstract class UserRepository {
  abstract create(user: UserEntity): Promise<UserEntity>;
  abstract findUser(emailUser: string): Promise<UserEntity | null>;
  abstract findById(emailId: string): Promise<UserEntity | null>;
  abstract findUserWithProps(idUser: string): Promise<UserEntity | null>;
  abstract delete(idUser: string): Promise<any>;
  abstract save(receivedValues: UserEntity): Promise<any>;
}
