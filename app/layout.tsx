import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PluginGuard AI - Proactive WordPress Plugin Security Audits',
  description: 'Value Proposition: Prevents security breaches and data leaks (like the UK Gov OBR incident in Signal 1) by providing continuous, automated security audits and alerts for WordPress plugins, saving developers and site owners time and significantly reducing their risk exposure to third-party vulnerabilities.

Target Customer: WordPress development agencies, mid-sized businesses, e-commerce sites, and organizations handling sensitive data (e.g., government contractors, healthcare providers) that rely heavily on WordPress and its plugin ecosystem. Target roles include site administrators, security teams, and lead developers.

---
Category: Developer Tools
Target Market: WordPress development agencies, mid-sized businesses, e-commerce sites, and organizations handling sensitive data (e.g., government contractors, healthcare providers) that rely heavily on WordPress an
Source Hypothesis ID: ceeacc85-0a90-4af6-a2e3-d419748b30eb
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PluginGuard AI - Proactive WordPress Plugin Security Audits</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
