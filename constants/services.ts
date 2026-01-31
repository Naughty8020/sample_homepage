// src/constants/services.ts

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-design",
    title: "Webデザイン",
    image: '/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg',
    description: "私たちのWebデザインサービスは、企業のブランドを反映した美しく、機能的なデザインを提供します。フロントエンドとバックエンド開発において最新技術を駆使し、ユーザーに優しいインターフェースと、スムーズな体験を実現します。サイトのSEO対策もお任せください。",
  },
  {
    slug: "app-dev",
    title: "アプリ開発",
    image: '/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
    description: "私たちのモバイルアプリ開発サービスは、ユーザーに優れた体験を提供するアプリケーションを提供します。iOSおよびAndroidプラットフォーム向けにカスタムアプリケーションを作成し、ビジネスの成長をサポートします。",
  },
  {
    slug: "seo",
    title: "SEO対策",
    image: '/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg',
    description: "SEO対策とデジタルマーケティング戦略を通じて、ビジネスのオンラインプレゼンスを向上させます。ターゲットオーディエンスへの露出を増やし、ROIを最大化します。",
  },
];
