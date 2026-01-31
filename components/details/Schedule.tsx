export default function Schedule() {
  const days = ["月", "火", "水", "木", "金", "土", "日祝"];
  const amTime = "9:30 - 12:30";
  const pmTime = "14:30 - 18:30";

  return (
    <div className="w-full max-w-4xl mx-auto overflow-x-auto mt-10">
      <table className="w-full border-collapse border border-slate-300 text-center">
        <thead>
          <tr className="bg-slate-50">
            <th className="border border-slate-300 py-3 px-4 font-bold">診療時間</th>
            <th className="border border-slate-300 py-3 px-2">月</th>
            <th className="border border-slate-300 py-3 px-2">火</th>
            <th className="border border-slate-300 py-3 px-2">水</th>
            <th className="border border-slate-300 py-3 px-2">木</th>
            <th className="border border-slate-300 py-3 px-2">金</th>
            <th className="border border-slate-300 py-3 px-2">土</th>
            <th className="border border-slate-300 py-3 px-2 text-red-500">日祝</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="border border-slate-300 py-3 px-4 font-medium">9:30 - 12:30</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3 text-slate-400">×</td>
          </tr>
          <tr>
            <td className="border border-slate-300 py-3 px-4 font-medium">14:30 - 18:30</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3">●</td>
            <td className="border border-slate-300 py-3 text-slate-400">×</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 text-left text-sm text-slate-600 leading-relaxed">
        {/* 注釈の書き換え */}
        <p className="flex items-start">
          <span className="mr-1">※</span>
          祝日のある週の場合は、定休日の木曜日も休まず営業・振替受付けいたします。
        </p>

        {/* <p className="mt-6 text-xl font-bold text-slate-800 text-center leading-snug"> */}
        {/*   愛車と長く、どこまでも元気に。<br /> */}
        {/*   皆さまのカーライフを全力でサポートいたします！ */}
        {/* </p> */}

      </div>
    </div>);
}
