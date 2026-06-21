"use client";

import { useState } from "react";
import { User, Building2, Wallet } from "lucide-react";

// ponytail: empty/invalid input -> 0. parseFloat handles "12.5", "", "abc".
const num = (s: string) => {
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
};
const fmt = (n: number) => "฿" + Math.round(n).toLocaleString("en-US");
const fmt2 = (n: number) =>
  "฿" + (Math.round(n * 100) / 100).toLocaleString("en-US");

// Hide number-input spinners across browsers via Tailwind arbitrary utilities.
const noSpin =
  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

export default function PaymentSplitCalculator() {
  const [price, setPrice] = useState("");
  const [govLeft, setGovLeft] = useState("60");

  const P = num(price);
  const ownShare = P * 0.4;
  const govShare = P * 0.6;
  const total = P;

  // Bottom section: independent. Enter govt leftover (60%), compute 40% counterpart.
  const G = num(govLeft);
  const addBottom = (G / 0.6) * 0.4;
  const totalBottom = G + addBottom;

  return (
    <div className="w-full max-w-[360px] space-y-4">
      {/* 1. Dark display panel */}
      <div className="rounded-[28px] border border-white/15 bg-[#1b1f27]/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-gray-300">60 / 40 Split</span>
          <span className="text-gray-500">รัฐ 60% · คุณ 40%</span>
        </div>

        <label className="mt-6 block">
          <span className="text-xs text-gray-400">ราคาสินค้า (฿)</span>
          <input
            type="number"
            inputMode="decimal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0"
            className={`mt-1 w-full bg-transparent text-right text-[30px] font-light text-white placeholder-gray-600 outline-none sm:text-[38px] ${noSpin}`}
          />
        </label>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <User className="h-5 w-5 text-gray-300" />
            <div className="mt-3 text-xs text-gray-400">จ่ายเอง 40%</div>
            <div className="mt-1 text-lg font-semibold text-white">
              {fmt(ownShare)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-[#2563eb]/80 p-4 backdrop-blur-md">
            <Building2 className="h-5 w-5 text-blue-100" />
            <div className="mt-3 text-xs text-blue-100">รัฐช่วย 60%</div>
            <div className="mt-1 text-lg font-semibold text-white">
              {fmt(govShare)}
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">รวมทั้งหมด</span>
            <span className="text-xl font-semibold text-white">
              {fmt(total)}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Light panel — independent: enter govt leftover (60%), compute 40% counterpart */}
      <div className="rounded-[20px] border border-white/25 bg-white/15 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <label className="block">
          <span className="text-sm font-medium text-white/90">
            เงินรัฐคงเหลือ (60%) ฿
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={govLeft}
            onChange={(e) => setGovLeft(e.target.value)}
            placeholder="0"
            className={`mt-2 w-full rounded-xl border border-white/25 bg-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/70 ${noSpin}`}
          />
        </label>

        <div className="mt-4 rounded-2xl border border-white/20 bg-[#2563eb]/85 p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm text-blue-100">
            <Wallet className="h-4 w-4" />
            ต้องเติมเงินเพิ่ม (40%)
          </div>
          <div className="text-xs text-blue-100">เพื่อให้บัญชีเหลือ 0</div>
          <div className="mt-2 text-3xl font-bold text-white">
            {fmt2(addBottom)}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between px-1">
          <span className="text-sm text-white/80">รวมทั้งหมด (100%)</span>
          <span className="text-lg font-semibold text-white">
            {fmt2(totalBottom)}
          </span>
        </div>
      </div>
    </div>
  );
}
