import React from "react"
import { Truck, RotateCcw, ShieldCheck, Award } from "lucide-react"

export const TrustIcons = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-brand-muted">
      <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          {
            icon: <Truck className="w-5 h-5" />,
            title: "Free Shipping",
            desc: "Global express delivery",
          },
          {
            icon: <RotateCcw className="w-5 h-5" />,
            title: "Easy Returns",
            desc: "30-day seamless process",
          },
          {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Secure Checkout",
            desc: "Encrypted transactions",
          },
          {
            icon: <Award className="w-5 h-5" />,
            title: "Premium Fabric",
            desc: "Lifetime quality guarantee",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <div className="text-black opacity-80">{item.icon}</div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1">
                {item.title}
              </h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
