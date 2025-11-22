import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

const Header = () => {
    return (
        <header className = "xl:hidden absolute top-0 right-0 left-0 z-40">
            <div className = "container mx-auto">
                <div className = "flex items-center justify-between py-6">
                    <Logo />
                    <Sheet>
                        <SheetTrigger className = "cursor-pointer text-[30px]">
                            <CiMenuFries />
                        </SheetTrigger>
                        <SheetContent className = "bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20" side = "left">
                            <SheetHeader>
                                <SheetTitle>
                                    <Logo />
                                </SheetTitle>
                                <SheetDescription className = "sr-only">
                                    Navigation menu
                                </SheetDescription>
                            </SheetHeader>
                            <NavLinks containerStyles = "flex flex-col gap-8 max-w-[100px]" />
                            <div className = "">
                                <button className = "btn btn-lg btn-tertiary mb-[44px]">
                                    <div className = "flex items-center gap-2">
                                        <span className = "">Descargar CV</span>
                                        <MdFileDownload className = "text-xl" />
                                    </div>
                                </button>
                                <Socials containerStyles = "flex gap-4" iconStyles = "bg-accent hover:bg-accent-hover text-white transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer" />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header;