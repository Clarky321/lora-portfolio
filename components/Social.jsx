import Link from "next/link"

import { FaGithub, FaTelegram, FaYoutube } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Clarky321" },
    { icon: <FaTelegram />, path: "" },
    { icon: <FaYoutube />, path: "" },

];

export default function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}