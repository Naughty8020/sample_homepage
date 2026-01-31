import Map from '../details/Map';
import Schedue from '../details/Schedule';
import Image from 'next/image';
export default function Details() {
  return (
    /* 全体のコンテナ */
    <div className="bg-white min-h-screen">
      <p className="text-center text-9xl mt-20">
        🚒
      </p>

      {/* 1. 上に膨らんだ背景部分 */}
      <div className="
        relative w-full h-[1400px] bg-sky-600
        /* 上に向かって凸（山なり）にするための clip-path */
        /* ellipse(横の半径 縦の半径 at 中心点X 中心点Y) */
        [clip-path:ellipse(90%_100%_at_50%_100%)]
        /* mt: 前の要素との重なり具合を調整 */
        mt-3
      ">

        {/* 2. コンテンツ部分（背景の上に配置） */}
        <div className="relative z-20 flex flex-col items-center pt-20">

          <div className="flex items-center justify-center mt-10 ps-2 pe-7 pt-4 pb-2 lg:px-6 lg:py-7 gap-2 md:gap-3 lg:gap-4 z-50">
            <Image
              src="/earth.png"  // Next.jsでは"/"から始まるパスを使用
              alt="Logo"
              width={70}  // デフォルトの幅（h-8と同じサイズ）
              height={70}  // デフォルトの高さ（w-8と同じサイズ）
              className="h-8 w-8 md:h-10 md:w-10 lg:h-30 lg:w-30"
            />
            <div className="font-shippori   text-3xl md:text-4xl lg:text-5xl font-bold text-black z-50">
              <Image
                src="/icon2.png"
                alt="Sample Company"
                width={200}
                height={50}
                className="w-25 h-10 lg:w-110 lg:h-30 inline-block "

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
