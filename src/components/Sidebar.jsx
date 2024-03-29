import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-auto">
      <nav className="h-full flex flex-col bg-[#1b1e1c] shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711651247/logo_n01lln.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <GiHamburgerMenu size={20} />
          </button>
        </div>

        <div
          class={`${
            expanded ? "visible" : "hidden"
          } flex w-auto relative bg-[#333333] m-4 rounded-lg px-2 py-1 lg:py-2 xl:py-3`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 pt-0.5 text-white font-semibold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            class="ml-2 outline-none bg-transparent "
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div
          className={`flex mx-4 mb-5 rounded-xl ${
            expanded ? "bg-[#333333] p-4" : "w-0"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711651057/profile_dyhpvh.png"
            alt=""
            className="w-12 h-12 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3 " : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-medium text-white mb-1">Brooklyn Simmons</h4>
              <span className="text-xs text-gray-400">
                brooklyn@simmons.com
              </span>
            </div>
            <MoreVertical size={16} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-3 px-3 my-2
        font-medium rounded-md cursor-pointer
        group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-[#2bb42a]"
            : " text-white hover:text-[#2bb42a]"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-white text-[#2bb42a] text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
