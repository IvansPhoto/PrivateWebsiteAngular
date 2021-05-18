import {Component, OnInit} from '@angular/core';
import ContactForm from "../../Models/ContactForm";

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

	contactForm: ContactForm = new ContactForm(undefined, undefined, "+** *** *******", null, null);

	constructor() {
	}

	OnSubmit(): void {

	}

	ngOnInit(): void {
	}

	// createFormDataObj(data: any): any {
	// 	const formData = new FormData();
	// 	for (const key of Object.keys(data)) {
	// 		formData.append(key, data[key]);
	// 	}
	// 	return formData;
	// }
	//
	// handleSubmit() {
	// 	const data = {
	// 		'form-name': 'contact',
	// 		name: this.userName,
	// 		email: this.userEmail,
	// 		telephone: this.userTelephone,
	// 		role: this.userRole,
	// 		message: this.userMessage
	// 	};
	//
	// 	fetch('/', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 		body: new URLSearchParams(this.createFormDataObj(data)).toString()
	// 	})
	// 		.then(() => this.$router.push('response'))
	// 		.catch((error) => alert(error));
	// }

}
