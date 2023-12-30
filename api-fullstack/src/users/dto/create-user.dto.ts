export class CreateUserDto {
  email: string;
  password: string;
  name?: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
