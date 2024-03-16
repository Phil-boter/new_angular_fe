import {
    UntypedFormGroup,
    UntypedFormBuilder,
    UntypedFormControl,
    Validators,
    NgForm,
} from '@angular/forms';

export class Email {
    public from: string;
    public subject: string;
    public text: string;
    public created_at: Date;

    public FormData!: UntypedFormGroup;
    static FormData: UntypedFormGroup;

    constructor(
        from: string,
        subject: string,
        text: string,
        created_at: Date    ) {
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.created_at = created_at;
    }

    public static async createEmail(from: string, subject: string, text: string) {
        console.log(from, subject, text)
        return new Email(
            from,
            subject,
            text, 
            new Date
        )
    }
}