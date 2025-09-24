import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

const META_PIXEL_CODE = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1497292261315958');
  fbq('track', 'PageView');
`;

const META_PIXEL_NOSCRIPT = `
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1497292261315958&ev=PageView&noscript=1" />
`;

const TIKTOK_PIXEL_CODE = `
  !function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
      "holdConsent",
      "revokeConsent",
      "grantConsent"
    ];
    ttq.setAndDefer = function (t, e) {
      t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (var i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(ttq, ttq.methods[i]);
    }
    ttq.instance = function (t) {
      for (
        var e = ttq._i[t] || [],
          n = 0;
        n < ttq.methods.length;
        n++
      ) {
        ttq.setAndDefer(e, ttq.methods[n]);
      }
      return e;
    };
    ttq.load = function (e, n) {
      var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
        o = n && n.partner;
      ttq._i = ttq._i || {};
      ttq._i[e] = [];
      ttq._i[e]._u = r;
      ttq._t = ttq._t || {};
      ttq._t[e] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[e] = n || {};
      n = document.createElement("script");
      n.type = "text/javascript";
      n.async = !0;
      n.src = r + "?sdkid=" + e + "&lib=" + t;
      e = document.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(n, e);
    };
    ttq.load("D39NN03C77U10IM7GH9G");
    ttq.page();
  }(window, document, "ttq");
`;

export const metadata: Metadata = {
  title: "Kemitraan DRW Beauty Center",
  description: "Landing page konversi kemitraan Beauty Center DRW Skincare."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Meta Pixel Code Start */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {META_PIXEL_CODE}
        </Script>
        {/* Meta Pixel Code End */}
        {/* TikTok Pixel Code Start */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {TIKTOK_PIXEL_CODE}
        </Script>
        {/* TikTok Pixel Code End */}
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{ __html: META_PIXEL_NOSCRIPT }}
        />
        {children}
      </body>
    </html>
  );
}
