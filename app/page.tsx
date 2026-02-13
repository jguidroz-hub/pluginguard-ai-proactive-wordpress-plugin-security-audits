export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">PluginGuard AI - Proactive WordPress Plugin Security Audits</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Value Proposition: Prevents security breaches and data leaks (like the UK Gov OBR incident in Signal 1) by providing continuous, automated security audits and alerts for WordPress plugins, saving developers and site owners time and significantly reducing their risk exposure to third-party vulnerabilities.

Target Customer: WordPress development agencies, mid-sized businesses, e-commerce sites, and organizations handling sensitive data (e.g., government contractors, healthcare providers) that rely heavily on WordPress and its plugin ecosystem. Target roles include site administrators, security teams, and lead developers.

---
Category: Developer Tools
Target Market: WordPress development agencies, mid-sized businesses, e-commerce sites, and organizations handling sensitive data (e.g., government contractors, healthcare providers) that rely heavily on WordPress an
Source Hypothesis ID: ceeacc85-0a90-4af6-a2e3-d419748b30eb
Promotion Type: automatic</p>
        <div className="flex gap-3 justify-center">
          <a href="/auth/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Start Free
          </a>
          <a href="#features" className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-gray-600">Solving a key business challenge</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Get started in minutes with our intuitive interface.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security with 99.9% uptime.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold mb-2">Built for Teams</h3>
            <p className="text-gray-600">Collaborate seamlessly with your entire team.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">Join thousands of small businesses who trust PluginGuard AI - Proactive WordPress Plugin Security Audits.</p>
        <a href="/auth/signup" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Start Free Today
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PluginGuard AI - Proactive WordPress Plugin Security Audits. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-gray-700">Privacy</a>
            <a href="/terms" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
