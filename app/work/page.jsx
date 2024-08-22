"use client";

import { motion } from "framer-motion";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		num: "01",
		category: "FrontEnd",
		title: "project 1",
		description:
			"Novo site da prefeitura Municipal de Cachoeiro de Itapemirim em desenvolvimento.",
		stack: [{ name: "React" }, { name: "NextJs" }],
		image: "/assets/work/thumb10.png",
		live: "",
		github: "",
	},
	{
		num: "02",
		category: "Fullstack",
		title: "project 2",
		description: "Sistema completo de ouvidoria.",
		stack: [
			{ name: "React" },
			{ name: "Bulma" },
			{ name: "Express" },
			{ name: "Api" },
		],
		image: "/assets/work/thumb8.png",
		live: "https://sigo.cachoeiro.es.gov.br/login",
		github: "",
	},
	{
		num: "03",
		category: "Fullstack",
		title: "project 3",
		description: "Site para monitorar os atendimentos dos contadores.",
		stack: [
			{ name: "React" },
			{ name: "NextJs" },
			{ name: "NestJs" },
			{ name: "TailwindCss" },
		],
		image: "/assets/work/thumb9.png",
		live: "https://sites.cachoeiro.es.gov.br/conexao-empresarial",
		github: "",
	},
	{
		num: "04",
		category: "Fullstack",
		title: "project 4",
		description: "Site para adoção de animais.",
		stack: [{ name: "PHP" }, { name: "Bulma" }, { name: "Jquery" }],
		image: "/assets/work/thumb5.png",
		live: "https://apps.cachoeiro.es.gov.br/adocao-de-animais/",
		github: "",
	},
	{
		num: "05",
		category: "Fullstack",
		title: "project 5",
		description:
			"Site para capacitação dos munícipes de Cachoeiro de Ipemirim.",
		stack: [
			{ name: "Vue" },
			{ name: "Bulma" },
			{ name: "Express" },
			{ name: "Api" },
		],
		image: "/assets/work/thumb4.png",
		live: "https://sites.cachoeiro.es.gov.br/capacita/",
		github: "",
	},
	{
		num: "06",
		category: "Fullstack",
		title: "project 6",
		description: "Site carta de serviços em desenvolvimento.",
		stack: [
			{ name: "Vue" },
			{ name: "Bulma" },
			{ name: "Express" },
			{ name: "Api" },
		],
		image: "/assets/work/thumb7.png",
		live: "https://sites.cachoeiro.es.gov.br/carta-servico-ipaci/",
		github: "",
	},
	{
		num: "07",
		category: "Fullstack",
		title: "project 7",
		description:
			"Site de transparência da autarquia IPACI, da Prefeitura de Cachoeiro de Itapemirim.",
		stack: [{ name: "PHP" }, { name: "Bootstrap" }, { name: "Jquery" }],
		image: "/assets/work/thumb6.png",
		live: "https://transparencia.ipaci.es.gov.br/",
		github: "",
	},
	{
		num: "08",
		category: "Fullstack",
		title: "project 8",
		description:
			"Site de transparência da autarquia AGERSA, da Prefeitura de Cachoeiro de Itapemirim.",
		stack: [{ name: "PHP" }, { name: "Bootstrap" }, { name: "Jquery" }],
		image: "/assets/work/thumb11.png",
		live: "https://transparencia.agersa.es.gov.br/",
		github: "",
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							<div className="font-extrabold leading-none text-transparent text-8xl text-outline">
								{project.num}
							</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								Projeto {project.category}
							</h2>
							<p className="text-white/60">{project.description}</p>
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<li key={index} className="text-xl text-accent">
											{item.name}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							<div className="border border-white/20" />
							<div className="flex items-center gap-4">
								{project?.live && (
									<Link href={project.live}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>live project</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}

								{project?.github && (
									<Link href={project.github}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsGithub className="text-3xl text-white group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Github repository</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<SwiperSlide key={index} className="w-full ">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer">
											<div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10" />
											<div className="relative w-full h-full">
												<Image
													src={project.image}
													width={1024}
													height={460}
													loading="lazy"
													className="object-contain w-full h-full"
													alt="project image"
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}

							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 rounded-full"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
