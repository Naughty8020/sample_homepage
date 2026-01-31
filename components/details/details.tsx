import Map from '../details/Map';

export default function Details() {
  return (
    /* 全体のコンテナ */
    <div className="bg-white min-h-screen">

      {/* 1. 上に膨らんだ背景部分 */}
      <div className="
        relative w-full h-[1400px] bg-amber-300
        /* 上に向かって凸（山なり）にするための clip-path */
        /* ellipse(横の半径 縦の半径 at 中心点X 中心点Y) */
        [clip-path:ellipse(90%_100%_at_50%_100%)]
        /* mt: 前の要素との重なり具合を調整 */
        mt-10
      ">

        {/* 2. コンテンツ部分（背景の上に配置） */}
        <div className="relative z-20 flex flex-col items-center pt-20">
          <h1 className="text-4xl font-bold mb-10">詳細ページ</h1>

          {/* 地図コンポーネント */}
          <div className="w-full flex justify-center">
            <Map />
          </div>
        </div>

      </div>
    </div>
  );
}
