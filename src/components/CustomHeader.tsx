import type { LinkType } from "@/types/link.type";
import { Link } from "react-router";

interface Props {
    title: string;
    links?: LinkType[];
}

const CustomHeader = ({ title, links }: Props) => {
    return (
        <header className="flex justify-between items-center bg-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold">{title}</h1>
            <nav>
                <ul className="flex flex-row items-center justify-center gap-3">
                    {links?.toReversed().map(({ name, url, icon: Icon, isButton, onClick }) => (
                        <li key={url || name}> 
                            {isButton ? (
                                <button
                                    onClick={onClick} 
                                    className="flex items-center gap-2 hover:text-gray-400 cursor-pointer"
                                >
                                    {Icon && <Icon size={30} />}
                                    {name && <span className="text-2xl">{name}</span>}
                                </button>
                            ) : (
                                <Link 
                                    to={url} 
                                    className="flex items-center gap-2 hover:text-gray-400 transition-colors"
                                >
                                    {Icon && <Icon size={30} />}
                                    {name && <span className="text-2xl">{name}</span>}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default CustomHeader;