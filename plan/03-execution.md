# 03 — Execution (Step-by-Step)

## Step 1 — Struktur HTML
Mulai dari `<!DOCTYPE html>` dan set `lang="id"` untuk aksesibilitas.
Susun skeleton: `<header>` → `<main>` (berisi semua section) → `<footer>`.
Pastikan setiap section punya `id` untuk anchor navigation dan `aria-labelledby` yang mengarah ke heading section.

## Step 2 — CSS Variables
Definisikan semua warna, font, spacing, dan radius di `:root` menggunakan custom properties.
Ini memudahkan perubahan tema tanpa refactor seluruh CSS.

```css
:root {
  --clr-bg: #0d0d0d;
  --clr-accent: #e8c97a;
  --ff-display: 'Playfair Display', serif;
  /* dst... */
}
```

## Step 3 — Mobile-first CSS
Tulis semua style untuk mobile dulu (default).
Gunakan `@media (min-width: 640px)` untuk tablet dan `@media (min-width: 900px)` untuk desktop.
Contoh: `.projects__grid` default 1 kolom → 2 kolom di 640px → 3 kolom di 900px.

## Step 4 — Navigation
- Fixed header dengan `backdrop-filter: blur()` untuk efek glass
- Hamburger button di mobile menggunakan CSS transform untuk animasi X
- JavaScript toggle class `open` dan `active`

## Step 5 — Hero Section
- Background decorative text menggunakan `-webkit-text-stroke`
- Avatar dengan CSS `conic-gradient` + animasi `@keyframes spin`
- Badge "Open to work" dengan animasi `pulse`

## Step 6 — Skills Section
- Progress bar menggunakan CSS custom property `--pct`
- Animasi bar dipicu oleh `IntersectionObserver` saat elemen masuk viewport

## Step 7 — Scroll Animation
- `IntersectionObserver` untuk fade-in elemen saat di-scroll
- Dinamis inject style awal (opacity: 0) via JavaScript agar fallback non-JS tetap terlihat

## Step 8 — Contact Form
- Form HTML native dengan validasi `required`
- Submit handler JavaScript dengan simulasi loading state
- Tidak membutuhkan backend karena demo (bisa dihubungkan ke Formspree/Netlify Forms)

## Step 9 — Review & Deploy
- Cek di Chrome DevTools: mobile 375px, tablet 768px, desktop 1200px
- Validasi HTML di validator.w3.org
- Push ke GitHub, aktifkan GitHub Pages dari Settings → Pages
