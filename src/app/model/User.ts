import {Role} from "../enums/Role";

export default class User {
  id?: number;

  avatar?: number;

  firstName: string;

  lastName: string;

  address?: string;

  phone?: string;

  role: Role;

  email: string;

  constructor(user: Partial<User>) {
    this.id = user.id;
    this.avatar = user.avatar ?? 1;
    this.firstName = user.firstName ?? '';
    this.lastName = user.lastName ?? '';
    this.address = user.address ?? '';
    this.phone = user.phone ?? '';
    this.email = user.email ?? '';
    this.role = user.role ?? Role.USER
  }
};
