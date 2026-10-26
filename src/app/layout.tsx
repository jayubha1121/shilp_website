import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { site } from '@data/site';
import EnquiryModal from '@/components/EnquiryModal';

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  icons: {
    icon: '/favicon-shilp.png',
    shortcut: '/favicon-shilp.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <EnquiryModal />
        <a
          href="https://wa.me/919898211567"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Shilp Group on WhatsApp"
          title="Chat with us on WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00c853] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c853]"
        >
          <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
            <path d="M16.02 3.2A12.67 12.67 0 0 0 5.1 22.3L3.4 28.5l6.34-1.66A12.7 12.7 0 1 0 16.02 3.2Zm0 23.1c-2 0-3.95-.53-5.66-1.54l-.4-.24-3.77.99 1.01-3.67-.26-.42a10.4 10.4 0 1 1 9.08 4.88Zm5.7-7.8c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.7.16-.21.31-.8 1.02-.98 1.23-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.52-1.82-1.7-2.13-.18-.31-.02-.48.14-.64.14-.13.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.7-1.7-.96-2.32-.25-.6-.51-.51-.7-.52h-.6c-.2 0-.54.08-.83.39-.28.31-1.08 1.06-1.08 2.6 0 1.55 1.11 3.05 1.27 3.26.15.21 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.23 1.42.2 1.95.12.6-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
