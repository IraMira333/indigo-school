import Image from "next/image";
import { IconLogo } from "../shared/icons/IconLogo";
import { IconMap } from "../shared/icons/IconMap";
import { IconPhone } from "../shared/icons/IconPhone";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { SocialList } from "./SocialList";
import { UpButton } from "./UpButton";

const IrynaTrynkal = "https://www.instagram.com/trynkal_iryna_developer";

export const Footer = () => {
    return (
        <footer className="bg-dark-bg text-light-text pc:pt-10 pc:pb-[50px] pt-[45px] pb-[30px]">
            <div className="pc:px-6 pc:pb-7 relative flex flex-wrap items-center justify-around gap-10 px-4 pb-8">
                <div className="max-w-[400px]">
                    <div className="pc:h-[92px] pc:w-[92px] mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                        <IconLogo />
                    </div>
                    <div className="mb-4">
                        <h3 className="mx-auto mb-4 w-fit text-[18px] leading-none font-bold uppercase">
                            Контакти
                        </h3>
                        <ul className="">
                            <li className="pc:mb-4 mb-3 flex justify-center gap-2 transition-all duration-300 ease-in-out hover:underline">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <IconMap className="" />
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/xpdQ1jumXptVeLpi6"
                                    className="text-center"
                                >
                                    вул. Героїв полку «Азов», 34А, <br></br>м.
                                    Київ, Оболонь
                                </a>
                            </li>

                            <li className="pc:mb-4 mb-3 flex justify-center gap-2 transition-all duration-300 ease-in-out hover:underline">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <IconPhone className=" " />
                                </div>
                                <a href="tel:+380963009978" className="">
                                    +38 (096) 300 99 78
                                </a>
                            </li>
                        </ul>
                    </div>
                    <SocialList />
                </div>
                <div className="max-w-[400px]">
                    <a
                        href="https://maps.app.goo.gl/xpdQ1jumXptVeLpi6"
                        className="mx-auto block w-fit"
                    >
                        <Image
                            src="/map.jpg"
                            alt="вул. Героїв полку «Азов», 34А, Київ, Оболонь"
                            width={400}
                            height={300}
                            className="h-auto w-full max-w-[400px] rounded-2xl"
                        />
                    </a>
                </div>
            </div>
            <div className="pc:px-6 pc:pt-12 relative border-t px-4 pt-8">
                <div className="pc:ml-0 pc:max-w-[calc(50%+87px)] pc:flex-row pc:justify-between pc:gap-24 relative mx-auto flex flex-col gap-4">
                    <div>
                        <p className="pc:mb-5 mb-4 text-xs leading-none uppercase">
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
                    <div className="mb-3 leading-none">
                        <PrivacyPolicy policyButton="Політика конфіденційності" />
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
