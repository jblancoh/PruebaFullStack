export class CreateUserDto {
  email: string;
  password: string;
  name?: string;
  roles?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
