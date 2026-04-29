import { Contact } from "../../contacts/entities/contact.entity";

export class User {
  id: string;
  name: string;
  email:string;
  createdAt: Date;
  updatedAt: Date;
  contacts?: Contact[];

}
