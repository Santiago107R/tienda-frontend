import type { LinkType } from "@/types/link.type";

interface Props {
    description: string;
    links?: LinkType[];
}

const CustomFooter = ({ description, links }: Props) => {
    return (
        <footer className='border-t-2 border-t-gray-300 p-8'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                <p className='text-gray-500 text-sm'>
                    {description}
                </p>

                <div className="flex gap-6">
                    {
                        links?.map(({ name, url }) => (
                            <a href={url} className="text-gray-500 hover:text-blue-600 transition-colors">{name}</a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default CustomFooter
