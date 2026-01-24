import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ServicesSection() {
  return (
  <section className="py-30 px-6">
      <div className="border-b-4 border-gray-300 pb-2">
        <h1 className="font-shippori text-4xl ml-20 md:ml-26 lg:ml-100 font-bold text-left">
          サービス内容
        </h1>
      </div>
      <div className="flex items-center justify-center gap-40 p-20">

        <div>
                  <Image src="/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg" alt="" width={650} height={450} className="" />

        </div>

        <div>

           <h2 className=" font-shippori text-4xl  mb-10">
          Webデザイン & 開発
        </h2>
        <p className="font-shippori w-150 text-1xl">
私たちのWebデザインサービスは、企業のブランドを反映した美しく、機能的なデザインを提供します。フロントエンドとバックエンド開発において最新技術を駆使し、ユーザーに優しいインターフェースと、スムーズな体験を実現します。サイトのSEO対策もお任せください。
        </p>

          <div className="border-2 border-black w-40 ml-auto mt-30">
             <button className=" text-black py-2 px-4 rounded-lg  transition ">
      詳しく見る
    </button>

              <ArrowForwardIosIcon/>

          </div>
         


        </div>
       
        
      </div>
    </section>  );
}


      
