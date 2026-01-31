export default function Map() {
  // 埋め込み用のURL
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.764936111397!3d35.68123620073535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x4430224344514c5a!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp";
  return (
    /* w-1/2  : width: 50%
       h-[450px] : height: 450px (カスタム値)
       mx-auto : 左右中央寄せ (margin-left/right: auto)
    */
    <div className="w-1/2 h-[400px] mt-10 mx-auto">
      <iframe
        title="google-map"
        src={mapSrc}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
