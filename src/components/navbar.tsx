import Image from "next/image";
import Logo from "../../public/Images/logo-icon.png";
import NavLinks from "./navlinks";
import Link from "next/link";

const HeaderPage = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="border-b border-gray-300">
            <div className="border-b border-gray-200">
                <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <Image
                                src={Logo}
                                width={38}
                                height={38}
                                priority
                                alt="Bazar Dor Logo"
                                className="rounded-lg bg-green-600 p-1.5"
                            />
                        </Link>

                        <div>
                            <h1 className="text-lg font-bold leading-5 text-gray-800">
                                বাজার দর
                            </h1>

                            <p className="text-[9px] text-gray-500">
                                {date}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-xs font-medium text-gray-700">
                            সাইন ইন
                        </button>

                        <button className="rounded-md bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">
                            সাইন আপ
                        </button>
                    </div>
                </div>
            </div>

            <NavLinks />
        </header>
    );
};

export default HeaderPage;