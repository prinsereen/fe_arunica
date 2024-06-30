import Logo from "../assets/Footer/LogoFooter.png";
import Mail from "../assets/Footer/Mail_Icon.png"
import Phone from "../assets/Footer/Vector.png"

function Footer() {
    return (
        <div className="bottom-0 w-full translate-y-10">
            <div className="mt-4">
                <div className="h-[12px] bg-[#EFD595]"></div>
                <div className="h-[160px] bg-[#1450A3]">
                    <div className="mx-44 grid grid-cols-4 items-center justify-center">
                        <div className="flex col-span-2 mt-4 items-center justify-center">
                            <img className=" w-[100px] " src={Logo} alt="Logo" />
                            <div className="mt-6">
                            <h1 className="text-white font-bold text-2xl">Arundemy</h1>
                            <p className="text-white font-medium">Serunya belajar dengan gamifikasi</p>
                            </div>
                        </div>
                        <div className="mt-6 text-white">
                            <h2 className="font-bold mb-2">Area Eksplorasi</h2>
                            <ul className="font-light text-sm">
                                <li>Challenge</li>
                                <li>Knowledge Kingdom</li>
                                <li>Imagination Kingdom</li>
                                <li>Leaderboard</li>
                            </ul>
                        </div>
                        <div className="text-white">
                            <h2 className="font-bold mb-2">Area Eksplorasi</h2>
                            <div className="">
                                <div className="flex">
                                    <img src={Mail} alt="mail" />
                                    <a className="px-2" href="mail.to/info@arundemy.com">info@arundemy.com</a>
                                </div>
                                <div className="flex mt-2">
                                    <img src={Phone} alt="mail" />
                                    <a className="px-2" href="https://wa.me/6282114822843"> +6282114822843</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[24px] bg-[#F94C10] flex items-center justify-center">
                    <h1 className="text-white font-light
                    ">© Copyright 2024. Arundemy</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
