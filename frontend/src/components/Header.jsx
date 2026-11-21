import { FaCheckCircle } from "react-icons/fa";

function Header() {

  return(
    <>
      <header className="flex gap-3 items-center justify-center w-full p-4">
        <span className="text-5xl">
          <FaCheckCircle className="text-[#4F46E5]" />
        </span>
        <span>
          <h1 className="font-bold text-xl">Todo List</h1>
          <p className="text-gray-400 text-sm">Plan.Organize.Get things done.</p>
        </span>
      </header>
    </>
  );
}

export default Header