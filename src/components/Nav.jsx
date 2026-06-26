import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex w-full h-[50px] items-center bg-brand px-5 shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
      <img src="./assets/logo.png" className="max-w-[100px]" />
      <div className="flex gap-10">
        <Link to="/" className="text-sand text-base font-bold no-underline hover:text-[#c3b677]">
          Home
        </Link>
        <Link to="/timeline" className="text-sand text-base font-bold no-underline hover:text-[#c3b677]">
          Timeline
        </Link>
        <Link to="/photos" className="text-sand text-base font-bold no-underline hover:text-[#c3b677]">
          Photos
        </Link>
        <Link to="/diary" className="text-sand text-base font-bold no-underline hover:text-[#c3b677]">
          Diary
        </Link>
        <Link to="/about" className="text-sand text-base font-bold no-underline hover:text-[#c3b677]">
          About
        </Link>
      </div>
    </nav>
  );
}
