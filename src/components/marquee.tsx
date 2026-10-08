import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Product {
    id: number;
    nameBn: string;
    today: number;
    unit: string;
    image: string;
    change: {
        dir: "up" | "down";
        pct: number;
    };
}

const Marquee = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const products: Product[] = await res.json();

    const unitBn: Record<string, string> = {
        kg: "কেজি",
        piece: "টি",
        litre: "লিটার",
        dozen: "ডজন"
    };

    const toBanglaNumber = (number: number) => {
        return new Intl.NumberFormat("bn-BD").format(number);
    };

    return (
        <div className="w-full bg-slate-50 border-y border-slate-200 overflow-hidden py-2.5">
            <div className="flex w-max animate-marquee whitespace-nowrap items-center gap-8">

                {[...products, ...products].map((item, i) => {
                    const isUp = item.change.dir === "up";

                    return (
                        <div
                            key={`${item.id}-${i}`}
                            className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm text-xs md:text-sm"
                        >
                            <span className="text-base">
                                {item.image}
                            </span>

                            <span className="font-medium text-slate-700">
                                {item.nameBn}
                            </span>

                            <span className="font-semibold text-slate-900">
                                ৳{toBanglaNumber(item.today)}/
                                {unitBn[item.unit] || item.unit}
                            </span>

                            <span
                                className={`flex items-center font-bold ${isUp
                                        ? "text-emerald-600"
                                        : "text-rose-600"
                                    }`}
                            >
                                {isUp ? (
                                    <TiArrowSortedUp size={22} />
                                ) : (
                                    <TiArrowSortedDown size={22} />
                                )}

                                {toBanglaNumber(item.change.pct)}%
                            </span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Marquee;

