import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Diplomasi & Strategi Politik ala Nabi',
      description: 'Meneladani kepemimpinan, diplomasi, dan strategi politik Rasulullah ﷺ secara multidimensi.',
	    customCss: [
        './src/styles/custom.css',
	    ],
      components: {
        Footer: './src/content/docs/Footer.astro',
        SocialIcons: './src/content/docs/SocialIcons.astro',
      },
      sidebar: [
        {
          label: 'Mulai Dari Sini',
          items: [
            { label: 'Pengantar & Landasan Metodologi', slug: 'pengantar' },
          ],
        },
        {
          label: 'Bagian I: Fondasi & Kebijakan Dalam Negeri',
          items: [
            { label: 'Bab 1: Arsitektur Sosial & Kaderisasi Ideologis', slug: 'bab-1' },
            { label: 'Bab 2: Piagam Madinah: Konstitusi & Hak Publik', slug: 'bab-2' },
            { label: 'Bab 3: Sistem Intelijen & Penguasaan Informasi', slug: 'bab-3' },
          ],
        },
        {
          label: 'Bagian II: Manajemen Krisis & Peperangan Asimetris',
          items: [
            { label: 'Bab 4: Pengelolaan Krisis Koalisi Musuh & Pihak Ketiga', slug: 'bab-4' },
          ],
        },
        {
          label: 'Bagian III: Diplomasi & Geopolitik Luar Negeri',
          items: [
            { label: 'Bab 5: Perjanjian Hudaibiyah: Masterclass Diplomasi', slug: 'bab-5' },
            { label: 'Bab 6: Surat-Surat Diplomatik & Penjangkauan Regional', slug: 'bab-6' },
            { label: 'Bab 7: Deterrence Strategy: Penanganan Khaibar & Isyarat Tabuk', slug: 'bab-7' },
          ],
        },
        {
          label: 'Bagian IV: Kemenangan Peradaban & Relevansi Modern',
          items: [
            { label: 'Bab 8: Fathul Makkah & Soft Power Pembebasan', slug: 'bab-8' },
            { label: 'Bab 9: Khutbah Wada\' & Deklarasi Tatanan Universal', slug: 'bab-9' },
            { label: 'Bab 10: Relevansi Strategi Politik Nabi di Era Modern', slug: 'bab-10' },
          ],
        },
        {
          label: 'Lampiran & Penutup',
          items: [
            { label: 'Glosarium Istilah Siyasah', slug: 'glosarium' },
            { label: 'Daftar Rujukan & Referensi', slug: 'referensi' },
          ],
        },
      ],
    }),
  ],
});
