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

    constructor(
        from: string,
        subject: string,
        text: string,
        created_at: Date,
        private builder: UntypedFormBuilder
    ) {
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.created_at = created_at;
    }

    public create(builder: UntypedFormBuilder) {
        this.FormData = builder.group({
            from: new UntypedFormControl('', [Validators.required]),
            subject: new UntypedFormControl('', [Validators.required]),
            text: new UntypedFormControl('', [Validators.required]),
            created_at: Date.now(),
        });
        return this.FormData;
    }
}