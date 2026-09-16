# 1.000 Wildcard Subdomain — clothes-shop.web.id

Project Next.js untuk melayani banyak subdomain dari satu deployment Vercel.

## 1. Install
```bash
npm install
```

## 2. Ubah data
Edit:
`data/sites.csv`

Kolom:
- subdomain
- title
- description
- city
- phone
- cta

Contoh:
```csv
subdomain,title,description,city,phone,cta
ac-kediri,Jasa Service AC Kediri,Service AC profesional,Kediri,081234567890,Hubungi Sekarang
```

## 3. Generate JSON
```bash
npm run data:build
```

## 4. Jalankan lokal
```bash
npm run dev
```

Untuk melihat halaman subdomain secara lokal, paling mudah deploy ke Vercel terlebih dahulu. Proxy menggunakan hostname produksi `*.clothes-shop.web.id`.

## 5. Deploy ke Vercel
Push project ke GitHub lalu import ke Vercel.

Build command:
```bash
npm run build
```

## 6. Wildcard domain di Vercel
Di Vercel:
Project → Settings → Domains

Tambahkan:
```text
clothes-shop.web.id
*.clothes-shop.web.id
```

Vercel akan memberi instruksi DNS yang tepat untuk zone kamu.

## 7. DNS IDWebHost
Pada DNS management domain, ikuti record yang diberikan Vercel. Untuk wildcard, umumnya record host `*` diarahkan sesuai target Vercel yang ditampilkan di dashboard. Jangan menyalin nilai DNS dari contoh ini secara membabi buta; gunakan nilai yang Vercel tampilkan untuk project kamu.

## Catatan
- Tidak perlu membuat 1.000 project Vercel.
- Tidak perlu membuat 1.000 record DNS jika wildcard aktif.
- Semua subdomain harus ada di `data/sites.csv` agar menghasilkan halaman.
- Data contoh berisi 1.000 baris dummy; ganti dengan data milikmu.
