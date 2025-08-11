import React from "react";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const socials = [
    {
        icon: <BiLogoFacebook />,
        path: "",
    },
    {
        icon: <BiLogoInstagramAlt />,
        path: "",
    },
    {
        icon: <BiLogoGithub />,
        path: "",
    },
    {
        icon: <BiLogoLinkedin />,
        path: "",
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className = {containerStyles}>
            {
                socials.map((social, i) => (
                    <div key = {i} className = {iconStyles}>
                        {social.icon}
                    </div>
                ))
            }
        </div>
    )
}

export default Socials;