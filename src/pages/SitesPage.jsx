import { useState } from "react";
import tempImg from "../assets/Temp.png";
//import { whatever } from "../api/whatever";

const situri_mock = [
	{
		image: tempImg,
		siteName: "Sit Peana",
		location: "Cluj-Napoca, jud. Cluj",
		role: "Arheo",
		description:
			"to be, or not to be, thats the question Rough quarries, rocks and hills whose heads touch heaven They have their exits and their entrances; With worms that are thy chamber-maids; o, here And so the general of hot desire",
	},
	{
		image: tempImg,
		siteName: "Sit arheologic Darjiu",
		location: "Darjiu, jud. Harghita",
		role: "Main Arheo",
		description:
			"to be, or not to be, thats the question Have no delight to pass away the time, Thou desperate pilot, now at once run on",
	},
	{
		image: tempImg,
		siteName: "Situl arheologic Turdeni",
		location: "Turdeni, jud. Harghita",
		role: "Arheo",
		description:
			"to be, or not to be, thats the question Upon the sightless couriers of the air, I should but teach him how to tell my story",
	},
	{
		image: tempImg,
		siteName: "Sit Arheologic Aluniș",
		location: "Aluniș, jud. Prahova",
		role: "Arheo",
		description:
			"to be, or not to be, thats the question Out, out, brief candle! Life's but a walking shadow, a poor player that struts and frets his hour upon the stage",
	},
	{
		image: tempImg,
		siteName: "Cetatea Poenari",
		location: "Arefu, jud. Argeș",
		role: "Main Arheo",
		description:
			"to be, or not to be, thats the question Full of sound and fury, signifying nothing. The better part of valour is discretion",
	},
	{
		image: tempImg,
		siteName: "Situl arheologic Sarmizegetusa Regia",
		location: "Grădiștea de Munte, jud. Hunedoara",
		role: "Lead Arheo",
		description:
			"to be, or not to be, thats the question When shall we three meet again, in thunder, lightning, or in rain?",
	},
	{
		image: tempImg,
		siteName: "Sit Arheologic Cucuteni",
		location: "Cucuteni, jud. Iași",
		role: "Arheo",
		description:
			"to be, or not to be, thats the question Fair is foul, and foul is fair: Hover through the fog and filthy air.",
	},
	{
		image: tempImg,
		siteName: "Sit Arheologic Cetățuia",
		location: "Iași, jud. Iași",
		role: "Arheo",
		description:
			"to be, or not to be, thats the question Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him.",
	},
	{
		image: tempImg,
		siteName: "Sit Arheologic Costești",
		location: "Costești, jud. Hunedoara",
		role: "Main Arheo",
		description:
			"to be, or not to be, thats the question There is nothing either good or bad, but thinking makes it so.",
	},
	{
		image: tempImg,
		siteName: "Situl Arheologic Polovragi",
		location: "Polovragi, jud. Gorj",
		role: "Arheo",
		description:
			"to be, or not to be, thats the question All the world’s a stage, and all the men and women merely players; They have their exits and their entrances.",
	},
];


const SiteCard = ({ image, siteName, location, role, description }) => {
	return (
		<div
			className={
				"border rounded-2xl border-slate-900 p-0 overflow-hidden"
			}
		>
			<div className="image">
				<img className="" src={image} />
			</div>
			<div className="content p-4">
				<h1>
					<span className="title text-2xl font-semibold font-lufga">
						{siteName}
					</span>
				</h1>
				<span className="desc leading-5 ">
					<p className="location">{location}</p>
					<p className="role">{role}</p>
					<p className="description">{description}</p>
				</span>
			</div>
		</div>
	);
};

export default function SitesPage() {
	const [situriMock, setSituriMock] = useState(situri_mock);

	return (
		<div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{situriMock.map((sit,index) => (
				<SiteCard image={sit.image} siteName={sit.siteName} location={sit.location} role={sit.role} description={sit.description} key={index}/>
			))}
		</div>
	);
}
