// src/app/models/admin.model.ts

import { Company } from './Company';

export class Admin {
  adminId!: number;
  username!: string;
  password!: string;
  name!: string;
  contact!: string;
  company: Company = new Company;
}
