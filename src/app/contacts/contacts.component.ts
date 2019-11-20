import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Array<Contact> = [];
  contactParams = '';
  constructor(private http: Http) { }

  async ngOnInit() {
    this.loadContacts();


  }

  async loadContacts() {
    const savedContacts = this.getItemsFromLocalStorage('contacts');
    if (savedContacts.length > 0) {
      this.contacts = savedContacts;


    } else {
      this.contacts = await this.loadItemsFromFile();
    }
    this.sortById(this.contacts);
  }

  async loadItemsFromFile() {
    const data = await this.http.get('assets/contacts.json').toPromise();
    return data.json();
  }

  addContact() {
    this.contacts.unshift(new Contact({}));

  }

  delete(index: number) {
    this.contacts.splice(index, 1);
    this.saveItemsToLocalStorage(this.contacts);
  }

  save(contacts: any) {
    this.sortById(this.contacts);
    contacts.editing = false;

  }
  saveItemsToLocalStorage(contacts: Array<Contact>) {
    const savedContacts = localStorage.setItem('contacts', JSON.stringify(contacts));
    return savedContacts;
  }

  getItemsFromLocalStorage(key: string) {
    const savedContacts = JSON.parse(localStorage.getItem(key));
    return savedContacts;

  }

  search(params: string) {

    this.contacts = this.contacts.filter((item: Contact) => {
      const fullName = item.firstName + ' ' + item.lastName;
      if (params === fullName || params === item.firstName || params === item.lastName) {
        return true;
      } else {
        return false;
      }
    });
  }

  sortById(contacts: Array<Contact>) {
    contacts.sort((a: Contact, b: Contact) => {

      return a.id > b.id ? 1 : -1;
    });
  }


}
