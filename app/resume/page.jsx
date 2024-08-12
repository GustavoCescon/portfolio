"use client";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const about = {
	title: "About Me",
	description:
		"Lorem ipsum dolor sit amet. Ut voluptatem enim ut voluptatem facilis qui aperiam autem in dolorem obcaecati vel illum provident ut possimus tempora ea debitis esse. Eos laboriosam voluptas",
	info: [
		{
			fieldName: "Name",
			fieldValue: "John Doe",
		},
		{
			fieldName: "Phone",
			fieldValue: "John Doe",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Brasileiro",
		},
		{
			fieldName: "Email",
			fieldValue: "gustavocescon@gmail.com",
		},
		{
			fieldName: "FreeLancer",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Portuguese",
		},
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My experience",
	description:
		"Lorem ipsum dolor sit amet. Ut voluptatem enim ut voluptatem facilis qui aperiam autem in dolorem obcaecati vel illum provident ut possimus tempora ea debitis esse. Eos laboriosam voluptas",
	items: [
		{
			company: "Company 1",
			position: "Frontend Developer",
			duration: "2022 - 2022",
		},
		{
			company: "Company 1",
			position: "Frontend Developer",
			duration: "2022 - Present",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"Lorem ipsum dolor sit amet. Ut voluptatem enim ut voluptatem facilis qui aperiam autem in dolorem obcaecati vel illum provident ut possimus tempora ea debitis esse. Eos laboriosam voluptas",
	items: [
		{
			institution:
				"Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
			degree: "Sistemas de informação",
			duration: "2015 - 2017",
		},
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
	title: "My skills",
	description:
		"Lorem ipsum dolor sit amet. Ut voluptatem enim ut voluptatem facilis qui aperiam autem in dolorem obcaecati vel illum provident ut possimus tempora ea debitis esse. Eos laboriosam voluptas",
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
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 0.4,
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
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-6">
								<div className="flex items-center gap-4">
									<img
										src={experience.icon}
										alt="experience"
										className="w-12 h-12"
									/>
									<h2 className="text-2xl font-bold">My experience</h2>
								</div>
								<p>{experience.description}</p>
								<ScrollArea>
									{experience.items.map((item, index) => (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											className="flex flex-col gap-2 border-b border-gray-200 pb-2"
										>
											<h3 className="text-lg font-semibold">
												{item.company} - {item.position}
											</h3>
											<p>{item.duration}</p>
										</div>
									))}
								</ScrollArea>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
