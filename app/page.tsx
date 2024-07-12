export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 p-0 m-0">
			<h1
				className="text-mask bg-clip-text text-transparent text-[40rem] sixcaps m-0 tracking-[-1rem] leading-[40rem] font-extrabold"
				style={{
					backgroundImage: "url(/banner.jpg)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				STUDY BETTER
			</h1>
			<br />
			<br />
			<br />
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio repellat
				exercitationem quae optio ipsam ad, temporibus ab excepturi. Est, harum?
			</p>
		</div>
	);
}
