export default class ContactForm {
	constructor(public Name: string | null | undefined,
							public Email: string | null | undefined,
							public Phone: string | null | undefined,
							public Role: string | null | undefined,
							public Message: string | null | undefined) {
	}
}
