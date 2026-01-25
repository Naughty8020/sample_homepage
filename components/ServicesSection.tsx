'use client';

import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect, useRef } from 'react';

const images = [
  '/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg',
  '/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
  '/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg',
];

const services = [
  {
    title: "Webデザイン & 開発",
    description: "私たちのWebデザインサービスは、企業のブランドを反映した美しく、機能的なデザインを提供します。フロントエンドとバックエンド開発において最新技術を駆使し、ユーザーに優しいインターフェースと、スムーズな体験を実現します。サイトのSEO対策もお任せください。",
  },
  {
    title: "モバイルアプリ開発",
    description: "私たちのモバイルアプリ開発サービスは、ユーザーに優れた体験を提供するアプリケーションを提供します。iOSおよびAndroidプラットフォーム向けにカスタムアプリケーションを作成し、ビジネスの成長をサポートします。",
  },
  {
    title: "SEO & デジタルマーケティング",
    description: "SEO対策とデジタルマーケティング戦略を通じて、ビジネスのオンラインプレゼンスを向上させます。ターゲットオーディエンスへの露出を増やし、ROIを最大化します。",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // スクロールした位置に応じてインデックスを更新する関数
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollTop;
      const index = Math.floor(scrollPosition / 500);  // 500pxごとに次のセットに切り替え
      // もし、インデックスがサービスの長さを超えた場合、最大インデックスに設定
      if (index < services.length) {
        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll); // スクロールイベントリスナーを追加
    }

    // クリーンアップ（アンマウント時にイベントリスナーを解除）
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="py-30 px-6">
      <div className="border-b-4 border-gray-300 pb-2">
        <h1 className="font-shippori text-4xl ml-20 md:ml-26 lg:ml-100 font-bold text-left">
          サービス内容
        </h1>
      </div>
      <div className="flex items-center justify-center gap-40 p-20">
        
        {/* 画像セクション */}
        <div>
          <Image src={images[currentIndex]} alt="サービス画像" width={650} height={450} className="transition-all duration-1000 ease-in-out object-cover" />
        </div>

  <div className="w-1/2">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden mb-12">
              <h2 className="font-shippori text-4xl mb-4">{service.title}</h2>
              <p className="font-shippori text-xl">{service.description}</p>
              <div className="border-2 border-black w-40 ml-auto mt-6">
                <button className="text-black py-2 px-4 rounded-lg transition">
                  詳しく見る
                </button>
                <ArrowForwardIosIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
