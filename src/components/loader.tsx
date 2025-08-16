import { BiLoaderCircle } from "react-icons/bi";

export default function Loader() {
	return (
		<div className="w-screen min-h-screen flex justify-center items-center bg-background">
			<BiLoaderCircle className="animate-spin w-20 h-20 text-[#E4FF07]" />
		</div>
	);
}
