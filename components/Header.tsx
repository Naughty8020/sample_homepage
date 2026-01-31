"use client";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type HeaderProps = {
  bgClass?: string;
  title?: string;
};

export default function Header({ bgClass = "bg-transparent", title = "" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // 車整備のサブメニュー項目
  const serviceItems = [
    { name: "車検・点検", href: "/services/inspection" },
    { name: "オイル交換", href: "/services/oil-change" },
    { name: "板金・塗装", href: "/services/repair" },
    { name: "タイヤ交換", href: "/services/tire" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full flex items-center pe-2 md:pe-6 pt-0 mt-0">
      {/* 背景とタイトルエリア */}
      <div className={`w-full h-[150] md:h-[340px] ${bgClass} absolute top-0 left-0 z-0`}>
        <h1 className="font-shippori text-black text-6xl z-50 text-left mt-60 p-5">
          {title}
        </h1>
      </div>

      {/* 上部の白いバー装飾 */}
      <div className="w-full h-4 lg:h-7 bg-white absolute top-0 left-0"></div>

      {/* ロゴエリア */}
      <div className="flex items-center bg-white ps-2 pe-7 pt-4 pb-2 lg:px-6 lg:py-7 rounded-br-4xl gap-2 md:gap-3 lg:gap-4 z-50">
        <Image
          src="/earth.png"
          alt="Logo"
          width={70}
          height={70}
          className="h-8 w-8 md:h-10 md:w-10 lg:h-30 lg:w-30"
        />
        <div className="font-shippori text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          <Image
            src="/icon2.png"
            alt="Sample Company"
            width={200}
            height={50}
            className="w-25 h-10 lg:w-110 lg:h-30 inline-block"
          />
        </div>
      </div>

      {/* デスクトップナビゲーション */}
      <nav className="hidden ml-auto md:flex items-center space-x-9 bg-sky-600 px-10 lg:px-20 py-4 mt-10 rounded-full shadow-lg z-50">
        <Link href="/" className="text-white text-3xl hover:text-gray-200 transition-colors">Home</Link>
        <Link href="/about" className="text-white text-3xl hover:text-gray-200 transition-colors">About</Link>

        {/* 車整備：アニメーション付きドロップダウン */}
        <div className="relative group">
          <button className="flex items-center text-white text-3xl hover:text-gray-200 focus:outline-none transition-colors py-2">
            Services
            <ArrowDropDownIcon className="group-hover:rotate-180 transition-transform duration-300 ml-1" />
          </button>

          {/* ドロップダウンメニュー本体 */}
          <div
            className="
              absolute left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl py-3
              opacity-0 invisible translate-y-4 scale-95 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
              transition-all duration-300 origin-top-left z-[60]
            "
            style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            {/* 吹き出しの三角部分 */}
            <div className="absolute -top-2 left-8 w-4 h-4 bg-white rotate-45 rounded-sm"></div>

            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative block px-6 py-4 text-xl text-gray-800 
                  hover:bg-sky-50 hover:text-sky-600 
                  transition-all duration-200 first:rounded-t-xl last:rounded-b-xl
                  group/item
                "
              >
                <span className="relative z-10">{item.name}</span>
                {/* ホバー時に左から線が出るアクセント */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-sky-600 group-hover/item:h-1/2 transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/contact" className="text-white text-3xl hover:text-gray-200 transition-colors">お問合わせ</Link>
      </nav>

      {/* モバイル用ハンバーガーボタン */}
      <button
        className="md:ml-10 mt-6 p-2 z-[60] rounded-lg bg-black hover:bg-gray-800 transition md:hidden ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon className="w-10 h-10 text-white" /> : <MenuIcon className="w-10 h-10 text-white" />}
      </button>

      {/* モバイルメニューオーバーレイ */}
      <nav
        className={`fixed inset-0 bg-black/95 text-white z-50 flex flex-col justify-center items-center space-y-8 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'
          }`}
      >
        <Link href="/" onClick={toggleMenu} className="text-4xl hover:text-sky-400 transition">Home</Link>
        <Link href="/about" onClick={toggleMenu} className="text-4xl hover:text-sky-400 transition">About</Link>

        {/* モバイル用サービスリスト */}
        <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-700 w-2/3">
          <p className="text-gray-500 text-xl font-bold uppercase tracking-widest">Services</p>
          {serviceItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="text-3xl hover:text-sky-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link href="/contact" onClick={toggleMenu} className="text-4xl hover:text-sky-400 transition">Contact</Link>
      </nav>
    </header>
  );
}
