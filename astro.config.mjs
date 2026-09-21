cat << 'EOF' > astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Diplomasi & Strategi Politik ala Nabi',
      description: 'Meneladani kepemimpinan, diplomasi, dan strategi politik Rasulullah ﷺ secara multidimensi.',
      sidebar: [
        {
          label: 'Mulai Dari Sini',
          items: [
            { label: 'Halaman Utama', link: '/' },
            { label: 'Pendahuluan', link: '/pengantar/' },
            { label: 'Daftar Rujukan & Referensi', link: '/referensi/' },
          ],
        },
        {
          label: 'Bagian I: Fondasi & Kebijakan Dalam Negeri',
          items: [
            { label: 'Bab 1: Fondasi Kekuatan & Arsitektur Sosial', link: '/bab-1/' },
            { label: 'Bab 2: Piagam Madinah: Konstitusi Tertulis', link: '/bab-2/' },
            { label: 'Bab 3: Seni Intelijen & Penguasaan Informasi', link: '/bab-3/' },
          ],
        },
        {
          label: 'Bagian II: Diplomasi & Geopolitik Luar Negeri',
          items: [
            { label: 'Bab 4: Perjanjian Hudaibiyah', link: '/bab-4/' },
            { label: 'Bab 5: Diplomasi Bilateral & Surat-Surat', link: '/bab-5/' },
          ],
        },
        {
          label: 'Bagian III: Manajemen Krisis & Kemenangan Peradaban',
          items: [
            { label: 'Bab 6: Manajemen Krisis & Koalisi Musuh', link: '/bab-6/' },
            { label: 'Bab 7: Fathul Makkah & Soft Power', link: '/bab-7/' },
            { label: 'Bab 8: Relevansi Strategi Politik Era Modern', link: '/bab-8/' },
          ],
        },
      ],
    }),
  ],
});
EOF