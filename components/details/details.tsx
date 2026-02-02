import Map from '../details/Map';
import Schedue from '../details/Schedule';
import Image from 'next/image';
export default function Details() {
  return (
    /* 全体のコンテナ */
    <div className=" min-h-screen">
      <p className="text-center text-6xl md:text-9xl mt-1 md:mt-0 mb-23 md:mb-43">
        🚒
      </p>

      {/* 1. 上に膨らんだ背景部分 */}
      <div className="
  relative w-full 
  /* 高さの調整：スマホでは低め、PCでは高めに */
  h-[800px] md:h-[900px] lg:h-[1400px] 
  bg-sky-600
  
  /* clip-pathの調整：画面が小さいほど横の%を大きくして緩やかにする */
  [clip-path:ellipse(150%_100%_at_50%_100%)]
  md:[clip-path:ellipse(120%_100%_at_50%_100%)]
  lg:[clip-path:ellipse(90%_100%_at_50%_100%)]
  
  /* mt: 前のセクションとの重なり。ネガティブマージンで食い込ませるのもアリ */
  -mt-20 md:-mt-40
  z-10
">
        {/* 2. コンテンツ部分（背景の上に配置） */}
        <div className="relative z-20 flex flex-col items-center pt-10 md:pt-20">

          <div className="flex items-center justify-center  md:mt-10 ps-2 pe-7 pt-4 pb-2 lg:px-6 lg:py-7 gap-2 md:gap-3 lg:gap-4 z-50">
            <Image
              src="/earth.png"  // Next.jsでは"/"から始まるパスを使用
              alt="Logo"
              width={70}  // デフォルトの幅（h-8と同じサイズ）
              height={70}  // デフォルトの高さ（w-8と同じサイズ）
              className="h-11 w-20   md:h-8 md:w-8 md:h-10 md:w-10 lg:h-30 lg:w-30"
            />
            <div className="font-shippori   text-3xl md:text-4xl lg:text-5xl font-bold text-black z-50">
              <Image
                src="/icon2.png"
                alt="Sample Company"
                width={200}
                height={50}
                className="w-35 h-20 lg:w-110 lg:h-30 inline-block "

              />
            </div>
          </div>
          {/* 地図コンポーネント */}
          <div className="w-full flex justify-center mt-10">
            <Map />
          </div>
        </div>

        <Schedue />







      </div>
    </div>
  );
}
