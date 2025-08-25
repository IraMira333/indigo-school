import { navList } from "../data/navList";
import { IconLogo } from "../shared/icons/IconLogo";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { PublicOferta } from "./PublicOferta";
import { SocialList } from "./SocialList";
import { UpButton } from "./UpButton";

const IrynaTrynkal = "https://www.instagram.com/trynkal_iryna_developer";

export const Footer = () => {
    return (
        <footer className="bg-dark-bg text-light-text pc:pt-10 pc:pb-[50px] pt-[45px] pb-[30px]">
            <div className="pc:px-6 pc:pb-7 relative px-4 pb-8">
                <div>
                    <div className="pc:mb-5 pc:h-[92px] pc:w-[92px] mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                        <IconLogo />
                    </div>
                    <div className="pc:mb-9 mb-8">
                        <h3 className="font-alumni text-txligth pc:mb-4 mx-auto mb-[23px] w-fit text-[18px] leading-none font-bold uppercase">
                            Навігація
                        </h3>
                        <nav role="navigation">
                            <ul
                                id="nav-menu-list"
                                className="text-txligth pc:flex-row pc:gap-10 flex flex-col items-center justify-center gap-5 text-[18px]"
                            >
                                {navList.map(item => (
                                    <li
                                        key={item.name}
                                        className="group uppercase"
                                    >
                                        <a
                                            href={`#${item.path}`}
                                            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <SocialList />
            </div>
            <div className="pc:px-6 pc:pt-12 relative border-t px-4 pt-8">
                <div className="pc:ml-0 pc:max-w-[calc(50%+87px)] pc:flex-row pc:justify-between pc:gap-24 relative mx-auto flex max-w-[500px] flex-col gap-4">
                    <div>
                        <p className="text-txligth pc:mb-5 mb-4 text-xs leading-none uppercase">
                            &copy; 2025 Всі права захищені
                        </p>
                        <div className="flex gap-2">
                            <p className="text-xs leading-none uppercase">
                                Розробка сайту
                            </p>
                            <a
                                href={IrynaTrynkal}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs leading-none font-semibold uppercase transition-all duration-300 ease-in-out hover:underline"
                            >
                                Ірина Тринкаль
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 leading-none">
                            <PrivacyPolicy policyButton="Політика конфіденційності" />
                        </div>
                        <div className="leading-none">
                            <PublicOferta oferta="Публічна оферта" />
                        </div>
                    </div>
                    <div className="pc:hidden absolute right-0 bottom-0">
                        <UpButton />
                    </div>
                </div>
                <div className="pc:right-6 pc:inline-block absolute bottom-0 hidden">
                    <UpButton />
                </div>
            </div>
        </footer>
    );
};
