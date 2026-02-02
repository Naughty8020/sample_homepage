import { SERVICES } from "@/constants/services";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ビルド時に生成するパスを指定（SEO・爆速化）
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <Header title="" />
      <main>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </main>
      <Footer />
    </>
  );
}
