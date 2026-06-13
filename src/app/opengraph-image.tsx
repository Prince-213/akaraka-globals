import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Akaraka Global Resources Limited (AGRL)';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  try {
    const bgData = await readFile(join(process.cwd(), 'public/assets/img/og-bg.png'));
    const bgBase64 = bgData.toString('base64');
    const bgSrc = `data:image/png;base64,${bgBase64}`;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgSrc})`,
            backgroundSize: '1200px 630px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.65)',
              padding: '60px 80px',
              borderRadius: '24px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            <h1
              style={{
                fontSize: '68px',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                textAlign: 'center',
              }}
            >
              Akaraka Global Resources
            </h1>
            <h2
              style={{
                fontSize: '42px',
                fontWeight: '600',
                color: '#ef4444',
                marginBottom: '30px',
                marginTop: '0',
                textAlign: 'center',
              }}
            >
              Industrial Chemicals & Paints
            </h2>
            <p
              style={{
                fontSize: '32px',
                color: '#e2e8f0',
                lineHeight: 1.5,
                maxWidth: '850px',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Trusted supplier of raw materials, inks, coatings, and plastics across Nigeria since 2000.
            </p>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e) {
    console.error('Error generating OG image', e);
    return new ImageResponse(
      (
        <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '60px' }}>Akaraka Global Resources Limited</h1>
        </div>
      ),
      { ...size }
    );
  }
}
