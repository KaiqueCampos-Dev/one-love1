import { Link } from "react-router-dom";

interface CalendarButtonProps {
  text: string;
  // Add link to month memorys page
}

export function CalendarButton({ text }: CalendarButtonProps) {
  return (
    <Link to={`${text.replace(' ', '')}`}>
      <button className="w-full text-center rounded p-4 border text-zinc-400 border-zinc-400 hover:bg-zinc-400 hover:text-white">
        {text}
      </button>
    </Link>
  );
}
