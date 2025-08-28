import Image from "next/image";

export const socialList = [
    {
        icon: (
            <Image
                src="/fb-color.svg"
                alt="Facebook"
                width={100}
                height={100}
            />
        ),
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61575191665235",
    },
    {
        icon: (
            <Image
                src="/telegram-color.svg"
                alt="Telegram"
                width={100}
                height={100}
            />
        ),
        name: "Telegram",
        link: "https://t.me/indigoobolon",
    },
    {
        icon: (
            <Image
                src="/instagram-color.svg"
                alt="Instagram"
                width={100}
                height={100}
            />
        ),
        name: "Instagram",
        link: "https://www.instagram.com/indigo.obolon/?igsh=ZTR0aWFxNm81MWZ2",
    },
];
