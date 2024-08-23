import { TemplateEmail } from "@/components/templateEmail";
import { render } from "@react-email/render";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { NextResponse } from "next/server";

export async function POST(request) {
	const { name, email, subject, content, phone } = await request.json();
	const isEmpty = (value) => !value || value.trim().length === 0;
	if ([name, email, subject, content, phone].some(isEmpty)) {
		return NextResponse.json(
			{ error: "Todos os campos são obrigatórios." },
			{ status: 500 },
		);
	}

	const mailerSend = new MailerSend({
		apiKey: process.env.MAILERSEND_API_KEY || "",
	});

	const emailHtml = render(
		<TemplateEmail
			content={content}
			email={email}
			name={name}
			phone={phone}
			subject={subject}
		/>,
	);

	const sentFrom = new Sender(process.env.RECEIVER_EMAIL, "Portfolio");
	const recipients = [new Recipient(process.env.EMAIL, "Portfolio")];

	try {
		const emailParams = new EmailParams()
			.setFrom(sentFrom)
			.setTo(recipients)
			.setSubject(subject)
			.setHtml(emailHtml);

		mailerSend.email.send(emailParams);
		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
