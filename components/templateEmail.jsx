const TemplateEmail = ({ name, email, subject, content, phone }) => {
	const style = {
		container: {
			width: "80%",
			margin: "0 auto",
			padding: "20px",
			backgroundColor: "#ffffff",
			color: "#000000",
			borderRadius: "8px",
			boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
		},
		heading: {
			padding: "10px",
			fontSize: "24px",
			color: "#00ff99",
		},
		paragraph: {
			paddingLeft: "10px",
			marginBottom: "10px",
		},
		footer: {
			paddingTop: "10px",
			marginTop: "20px",
			borderTop: "2px solid #00ff99",
		},
	};

	return (
		<div style={style.container}>
			<h1 style={style.heading}>Você tem um novo contato do portfolio</h1>
			<p style={style.paragraph}>
				<strong>Name:</strong> {name}
			</p>
			<p style={style.paragraph}>
				<strong>Email:</strong> {email}
			</p>
			<p style={style.paragraph}>
				<strong>Telefone:</strong> {phone}
			</p>
			<p style={style.paragraph}>
				<strong>Serviço:</strong> {subject}
			</p>
			<p style={style.paragraph}>
				<strong>Mensagem:</strong>
			</p>
			<p style={{ paddingLeft: "10px", marginBottom: "0" }}>{content}</p>
			<div style={style.footer}>
				<p>Entrar em contato em breve.</p>
			</div>
		</div>
	);
};

export { TemplateEmail };
