import { socialList } from "../data/socialList";

export const SocialList = () => {
    return (
        <ul className="mx-auto flex justify-center gap-10">
            {socialList.map(item => (
                <li
                    key={item.name}
                    className="group flex flex-col items-center justify-center gap-[6px]"
                >
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-alumni flex h-16 w-16 items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};
