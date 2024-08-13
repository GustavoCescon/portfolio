"use client";

import {
	FaCss3,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaPhp,
	FaReact,
} from "react-icons/fa";
import {
	SiBootstrap,
	SiCypress,
	SiDocker,
	SiGit,
	SiJquery,
	SiNestjs,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";

const about = {
	title: "Sobre Mim",
	description:
		"Sou um profissional apaixonado por tecnologia e inovação, com experiência em desenvolvimento de software e resolução de problemas complexos. Tenho interesse em aprender constantemente e aplicar novas tecnologias para criar soluções eficientes e impactantes. Valorizo a colaboração em equipe e estou sempre em busca de desafios que me permitam crescer tanto profissional quanto pessoalmente.",
	info: [
		{
			fieldName: "Nome",
			fieldValue: "Gustavo Cescon",
		},
		{
			fieldName: "Telefone",
			fieldValue: "(28) 99976-4529",
		},
		{
			fieldName: "Experiência",
			fieldValue: "2+ years",
		},
		{
			fieldName: "Nacionalidade",
			fieldValue: "Brasileiro",
		},
		{
			fieldName: "Linkedin",
			fieldValue: "gustavo-cescon",
		},
		{
			fieldName: "Email",
			fieldValue: "gustavocescon@gmail.com",
		},
		{
			fieldName: "Idiomas",
			fieldValue: "English, Portuguese",
		},
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "Minha Experiência",
	description:
		"Experiência em diversas áreas do desenvolvimento de software, incluindo construção e implantação de aplicações, integração de APIs e otimização de desempenho. Hábil no uso de tecnologias e metodologias modernas para resolver problemas complexos e entregar soluções de alta qualidade.",
	items: [
		{
			company: "Prefeitura de Cachoeiro de Itapemirim",
			position: "Estágio",
			duration: "Jul/2022 - Dez/2022",
		},
		{
			company: "Prefeitura de Cachoeiro de Itapemirim",
			position: "Software Engineer",
			duration: "Dez/2022 - Presente",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "Minha Formação",
	description:
		"Formado em Sistemas de Informação, com uma sólida base em desenvolvimento de software, design de sistemas e análise de dados. Experiência acadêmica que inclui projetos práticos e estudo de metodologias modernas aplicadas ao desenvolvimento de tecnologias.",
	items: [
		{
			institution: "Estacio de Sá",
			degree: "Sistemas de informação",
			duration: "2022 - 2024",
		},
		{
			institution: "Onebit code",
			degree: "Curso de programação",
			duration: "2022",
		},
		{
			institution: "JS Expert",
			degree: "Curso avançado de programação",
			duration: "2024",
		},
	],
};

const skills = {
	title: "Minhas Habilidades",
	description:
		"Minhas habilidades incluem desenvolvimento web, integração de APIs, otimização de desempenho e resolução de problemas complexos. Sou capaz de aprender rapidamente novas tecnologias e aplicá-las para alcançar resultados eficazes em projetos desafiadores.",
	skillLists: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 3",
		},
		{
			icon: <FaJs />,
			name: "javascript",
		},
		{
			icon: <FaReact />,
			name: "react.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <SiNestjs />,
			name: "nest.js",
		},
		{
			icon: <FaPhp />,
			name: "php",
		},
		{
			icon: <SiTypescript />,
			name: "typescript",
		},
		{
			icon: <SiJquery />,
			name: "jquery",
		},
		{
			icon: <SiCypress />,
			name: "cypress",
		},
		{
			icon: <SiVuedotjs />,
			name: "vue",
		},
		{
			icon: <SiDocker />,
			name: "docker",
		},
		{
			icon: <SiGit />,
			name: "git",
		},
		{
			icon: <SiBootstrap />,
			name: "bootstrap",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn",
				},
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experiência</TabsTrigger>
						<TabsTrigger value="education">Formação</TabsTrigger>
						<TabsTrigger value="skills">Habilidades</TabsTrigger>
						<TabsTrigger value="about">Sobre mim</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent" />
														<p className="text-white/60 ">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent" />
														<p className="text-white/60 ">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
										{skills.description}
									</p>
								</div>
								<ScrollArea className="h-[320px] xl:h-[350px] ">
									<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
										{skills.skillLists.map((skill, index) => {
											return (
												<li
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={index}
												>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-[150px] bg-[#232328] rounded-xl flex justify-center items-center group">
																<div className="text-6xl group-hover:text-accent transition-all duration-300">
																	{skill.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className="capitalize">{skill.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent
							value="about"
							className="w-full text-center xl:text-justify"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
									{about.info.map((info, index) => {
										return (
											<li
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{info.fieldName}</span>
												<span className="text-xl">{info.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
