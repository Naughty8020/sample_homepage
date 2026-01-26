export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4">
      <p>&copy; 2026 Your Company. All rights reserved.</p>
      <div>
        <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
      </div>
    </footer>
  );
}

