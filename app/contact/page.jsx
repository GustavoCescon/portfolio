"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Telefone",
		description: "+55 (28)99976-4529",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "gustavocescon@gmail.com",
	},
	{
		icon: <FaMapMarkedAlt />,
		title: "Endereço",
		description: "ES, Brasil",
	},
];

const Contact = () => {
	const inputName = useRef();
	const inputSobrenome = useRef();
	const inputEmail = useRef();
	const inputTelefone = useRef();
	const [selectService, setSelectService] = useState();
	const inputTextarea = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			name: `${inputName.current.value} ${inputSobrenome.current.value}`,
			email: inputEmail.current.value,
			subject: selectService,
			content: inputTextarea.current.value,
			phone: inputTelefone.current.value,
		};
		try {
			const response = await fetch("/api/sendEmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("it's ok");
			} else {
				console.log("it's not right");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/*form*/}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
							<p className="text-white/60">
								Tem um projeto em mente? Vamos conversar e descobrir como
								podemos colaborar para transformá-lo em realidade. Entre em
								contato hoje mesmo!
							</p>
							{/*input*/}
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
								<Input type="text" placeholder="Nome" ref={inputName} />
								<Input
									type="text"
									placeholder="Sobrenome"
									ref={inputSobrenome}
								/>
								<Input type="email" placeholder="email" ref={inputEmail} />
								<Input type="text" placeholder="telefone" ref={inputTelefone} />
							</div>
							{/* select */}

							<Select onValueChange={(e) => setSelectService(e)}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Selecione um serviço" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Selecione um serviço</SelectLabel>
										<SelectItem value="Fullstack developer">
											Fullstack developer
										</SelectItem>
										<SelectItem value="Front-end developer">
											Front-end developer
										</SelectItem>
										<SelectItem value="Back-end developer">
											Back-end developer
										</SelectItem>
										<SelectItem value="Consultoria em TI">
											Consultoria em TI
										</SelectItem>
										<SelectItem value="Integração de sistemas">
											Integração de sistemas
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* textarea */}

							<Textarea
								className="h-[200px]"
								placeholder="Escreva sua mensagem aqui."
								ref={inputTextarea}
							/>

							{/* button */}
							<Button
								size="md"
								className="max-w-40"
								onClick={(e) => handleSubmit(e)}
							>
								Send message
							</Button>
						</form>
					</div>
					{/*info*/}
					<div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
