import { Contacts } from "./contacts";
import { Person } from "./person";

export interface AddUser {
    person:Person;
    contacts?:Contacts;
}
