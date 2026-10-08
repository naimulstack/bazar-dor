import Image from 'next/image';
import bannerImage from "../../public/Images/bazar-hero.png";
import Link from 'next/link';

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <div className="mx-auto grid grid-cols-3 max-w-6xl items-center justify-between my-5 border border-gray-200 rounded-2xl bg-white">

            <div className='col-span-2 space-y-4 px-8'>
                <div>
                    <span className="inline-block text-xs font-medium text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                        {date}
                    </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                    আজকের বাজারের দাম এক নজরে
                </h1>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <div className="pt-2">
                    <Link href="#all-products">
                        <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors">
                            সব পণ্য দেখুন
                        </button>
                    </Link>
                </div>
                
            </div>
            <div>
                <Image src={bannerImage} alt='Bazar dor banner image' height={300} width={300} className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default Banner;