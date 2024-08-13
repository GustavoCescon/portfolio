"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
	{
		num: "01",
		title: "Desenvolvimento Web",
		description:
			"Ofereço soluções completas em desenvolvimento web, desde o design até a manutenção. Crio experiências digitais responsivas e intuitivas, utilizando tecnologias modernas e melhores práticas.",
		href: "",
	},
	{
		num: "02",
		title: "Otimização e SEO",
		description:
			"Crio sites e aplicações com design responsivo e SEO. Garanto que seu projeto seja visualmente atraente e tecnicamente sólido, melhorando a experiência do usuário e o desempenho nos motores de busca.",
		href: "",
	},
	{
		num: "03",
		title: "Consultoria em TI",
		description:
			"Ofereço consultoria para melhorar a eficiência e segurança de suas operações de TI. Identifico melhorias e implemento soluções tecnológicas eficazes para otimizar o desempenho e segurança do seu negócio.",
		href: "",
	},
	{
		num: "04",
		title: "Integração de Sistemas",
		description:
			"Ofereço serviços de integração de sistemas para conectar suas aplicações e processos. Asseguro que todas as ferramentas e plataformas funcionem de maneira coesa e eficiente, melhorando a operação do seu negócio.",
		href: "",
	},
];

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 2,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
					}}
					className="grid grid-cols-1 md:grid-cols-2  gap-[60px]"
				>
					{services.map((service, index) => {
						return (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="flex-1 flex flex-col justify-center gap-6 group"
							>
								<div className="w-full flex justify-between items-center ">
									<div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
										{service.num}
									</div>
									<Link
										href={service.href}
										className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
									>
										<BsArrowDownRight className="text-primary text-3xl" />
									</Link>
								</div>

								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								<p className="text-white/60">{service.description}</p>
								<div className="border-b border-white/20 w-full" />
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
