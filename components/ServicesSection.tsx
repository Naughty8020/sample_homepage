
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  '/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg',
  '/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
  '/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg',
];

const services = [
  {
    title: "Webデザイン",
    description: "私たちのWebデザインサービスは、企業のブランドを反映した美しく、機能的なデザインを提供します。フロントエンドとバックエンド開発において最新技術を駆使し、ユーザーに優しいインターフェースと、スムーズな体験を実現します。サイトのSEO対策もお任せください。",
  },
  {
    title: "アプリ開発",
    description: "私たちのモバイルアプリ開発サービスは、ユーザーに優れた体験を提供するアプリケーションを提供します。iOSおよびAndroidプラットフォーム向けにカスタムアプリケーションを作成し、ビジネスの成長をサポートします。",
  },
  {
    title: "SEO対策",
    description: "SEO対策とデジタルマーケティング戦略を通じて、ビジネスのオンラインプレゼンスを向上させます。ターゲットオーディエンスへの露出を増やし、ROIを最大化します。",
  },
];

export default function ServicesSection() {

return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="border-b-4 border-gray-300 pb-2 mb-12">
        <h1 className="font-shippori text-2xl lg:text-4xl font-bold text-left">
          サービス内容
        </h1>
      </div>

      {/* サービスごとのコンテナ：flex-colで縦に並べる */}
      <div className="flex flex-col gap-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-10 lg:gap-20`}
          >
            {/* 画像セクション：幅を50%に確保 */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={images[index % images.length]}
                  alt={service.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>

            {/* サービス内容セクション：幅を50%に確保 */}
            <div className="w-full md:w-1/2">
              <h2 className="font-shippori font-bold text-2xl lg:text-4xl mb-6 border-b-2 border-gray-100 pb-2">
                {service.title}
              </h2>
              <p className="font-shippori text-base leading-relaxed text-gray-700">
                {service.description}
              </p>
              
              <div className="mt-8 flex justify-end">
                <button className="flex items-center gap-2 border-2 border-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300">
                  <span className="font-bold">詳しく見る</span>
                  <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
