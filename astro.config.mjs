import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Diplomasi & Strategi Politik ala Nabi',
      description: 'Meneladani kepemimpinan, diplomasi, dan strategi politik Rasulullah ﷺ secara multidimensi.',
	    customCss: [
        // Tambahkan baris ini
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Mulai Dari Sini',
          items: [
            { label: 'Pengantar', slug: 'pengantar' },
            { label: 'Daftar Rujukan & Referensi', slug: 'referensi' },
          ],
        },
        {
          label: 'Bagian I: Fondasi & Kebijakan Dalam Negeri',
          items: [
            { label: 'Bab 1: Fondasi Kekuatan & Arsitektur Sosial', slug: 'bab-1' },
            { label: 'Bab 2: Piagam Madinah: Konstitusi Tertulis', slug: 'bab-2' },
            { label: 'Bab 3: Seni Intelijen & Penguasaan Informasi', slug: 'bab-3' },
          ],
        },
        {
          label: 'Bagian II: Diplomasi & Geopolitik Luar Negeri',
          items: [
            { label: 'Bab 4: Perjanjian Hudaibiyah', slug: 'bab-4' },
            { label: 'Bab 5: Diplomasi Bilateral & Surat-Surat', slug: 'bab-5' },
          ],
        },
        {
          label: 'Bagian III: Manajemen Krisis & Kemenangan Peradaban',
          items: [
            { label: 'Bab 6: Manajemen Krisis & Koalisi Musuh', slug: 'bab-6' },
            { label: 'Bab 7: Fathul Makkah & Soft Power', slug: 'bab-7' },
            { label: 'Bab 8: Relevansi Strategi Politik Era Modern', slug: 'bab-8' },
          ],
        },
      ],
    }),
  ],
});
