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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="firstname" placeholder="Nome" />
								<Input type="lastName" placeholder="Sobrenome" />
								<Input type="email" placeholder="email" />
								<Input type="phone" placeholder="telefone" />
							</div>
							{/* select */}

							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Selecione um serviço" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Selecione um serviço</SelectLabel>
										<SelectItem value="fs">Fullstack developer</SelectItem>
										<SelectItem value="fe">Front-end developer</SelectItem>
										<SelectItem value="be">Back-end developer</SelectItem>
										<SelectItem value="be">Consultoria em TI</SelectItem>
										<SelectItem value="be">Integração de sistemas</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* textarea */}

							<Textarea
								className="h-[200px]"
								placeholder="Escreva sua mensagem aqui."
							/>

							{/* button */}
							<Button size="md" className="max-w-40">
								Send message
							</Button>
						</form>
					</div>
					{/*info*/}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
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
