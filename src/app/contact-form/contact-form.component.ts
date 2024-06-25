import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contacts: any[] = [];
  contact = {
    id: '',
    createdAt: new Date().toISOString().split('T')[0],
    first_name: '',
    last_name: '',
    emailId: '',
    age: null,
    gender: '',
    mobilenumber: null,
    pan_no: '',
    adhaar_no: '',
    status: true
  };
  apiUrl = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';
  editMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getContacts();
  }

  onSubmit() {
    if (this.validateForm()) {
      if (this.editMode) {
        this.updateContact();
      } else {
        this.createContact();
      }
    }
  }

  validateForm() {
    if (!this.contact.first_name || !this.contact.last_name || !this.contact.emailId || !this.contact.age || !this.contact.gender || !this.contact.mobilenumber || !this.contact.pan_no || !this.contact.adhaar_no) {
      alert('Please fill all the required fields');
      return false;
    }
    if (isNaN(Number(this.contact.age))) {
      alert('Age must be a number');
      return false;
    }
    if (isNaN(Number(this.contact.mobilenumber))) {
      alert('Mobile number must be a number');
      return false;
    }
    return true;
  }

  createContact() {
    this.http.post(this.apiUrl, this.contact)
      .subscribe(response => {
        console.log('Contact created', response);
        this.getContacts(); 
        this.resetForm();
      }, (error: HttpErrorResponse) => {
        console.error('Error creating contact', error);
        alert('Error creating contact');
      });
  }

  getContacts() {
    this.http.get(this.apiUrl)
      .subscribe((response: any) => {
        this.contacts = response;
      }, (error: HttpErrorResponse) => {
        console.error('Error fetching contacts', error);
        alert('Error fetching contacts');
      });
  }

  getContact(id: string) {
    this.http.get(`${this.apiUrl}/${id}`)
      .subscribe((response: any) => {
        this.contact = response;
        this.editMode = true;
      }, (error: HttpErrorResponse) => {
        console.error('Error fetching contact', error);
        alert('Error fetching contact');
      });
  }

  updateContact() {
    if (!this.contact.id) {
      alert('No contact selected for update');
      return;
    }

    this.http.put(`${this.apiUrl}/${this.contact.id}`, this.contact)
      .subscribe(response => {
        console.log('Contact updated', response);
        this.getContacts();
        this.resetForm();
      }, (error: HttpErrorResponse) => {
        console.error('Error updating contact', error);
        alert(`Error updating contact: ${error.statusText} (ID: ${this.contact.id})`);
      });
  }

  deleteContact(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe(response => {
        console.log('Contact deleted', response);
        this.getContacts();
      }, (error: HttpErrorResponse) => {
        console.error('Error deleting contact', error);
        alert('Error deleting contact');
      });
  }

  resetForm() {
    this.contact = {
      id: '',
      createdAt: new Date().toISOString().split('T')[0],
      first_name: '',
      last_name: '',
      emailId: '',
      age: null,
      gender: '',
      mobilenumber: null,
      pan_no: '',
      adhaar_no: '',
      status: true
    };
    this.editMode = false;
  }
}
