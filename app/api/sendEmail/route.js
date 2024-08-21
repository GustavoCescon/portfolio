import { TemplateEmail } from "@/components/templateEmail";
import { render } from "@react-email/render";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { NextResponse } from "next/server";
export async function POST(request) {
	const { name, email, subject, content, phone } = await request.json();

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

	const sentFrom = new Sender(
		"MS_H8KmCr@trial-jy7zpl9vw15g5vx6.mlsender.net",
		"Portfolio",
	);
	const recipients = [new Recipient("gustavocescon@gmail.com", "Portfolio")];

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
