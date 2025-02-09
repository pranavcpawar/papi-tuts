import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin w-12 h-12 text-white" />
    </div>
  );
}
