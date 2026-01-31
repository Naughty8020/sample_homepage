import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-center py-6 border-t border-gray-100">
      <div className="container mx-auto">
        {/* SNSアイコンエリア */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <Facebook size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <Github size={20} />
          </a>
        </div>

        <p className="text-sm">&copy; 2026 Your Company. All rights reserved.</p>

        <div className="mt-2 text-sm">
          <a href="/privacy" className="text-gray-500 hover:underline mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-500 hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
