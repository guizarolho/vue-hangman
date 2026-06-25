<template>
  <RouterView />
</template>
<style>
:root {
  --color-success: green;
  --color-success-light: #10b981;
  --color-sucess-shadow: rgba(16, 185, 129, 0.4);

  --color-error: red;
  --color-error-light: #ef4444;
  --color-error-shadow: rgba(239, 68, 68, 0.3);

  --color-selection: yellow;

  --color-white: white;
  --color-black: black;

  --keyboard: #818384;
  --keyboard-hover: #9a9c9d;

  --bg-primary: #f8fafc;
  --bg-outline: #e2e8f0;
  --bg-secondary: #f1f5f9;
  --bg-hover: #e5e7eb;
  --bg-blur: rgba(15, 23, 42, 0.6);

  --text-primary: #111827;
  --text-secondary: #6b7280;

  --box-shadow-primary: rgba(0, 0, 0, 0.1);
  --box-shadow-secondary: rgba(0, 0, 0, 0.04);

  --slider-on: #b3ecb3;
  --slider-off: #ecb3b3;
}

.dark {
  --color-success: #10b981;
  --color-success-light: #059669;
  --color-sucess-shadow: rgba(16, 185, 129, 0.2);

  --color-error: #ef4444;
  --color-error-light: #dc2626;
  --color-error-shadow: rgba(239, 68, 68, 0.2);

  --color-selection: #fbbf24;

  --color-white: #1e293b;
  --color-black: #f8fafc;

  --keyboard: #475569;
  --keyboard-hover: #64748b;

  --bg-primary: #0f172a;
  --bg-outline: #334155;
  --bg-secondary: #1e293b;
  --bg-hover: #334155;
  --bg-blur: rgba(0, 0, 0, 0.7);

  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;

  --box-shadow-primary: rgba(0, 0, 0, 0.3);
  --box-shadow-secondary: rgba(0, 0, 0, 0.15);

  --slider-on: #065f46;
  --slider-off: #7f1d1d;
}

.high-contrast {
  --color-success: #00ff00;
  --color-success-light: #00ff00;
  --color-sucess-shadow: transparent;

  --color-error: #ff0000;
  --color-error-light: #ff0000;
  --color-error-shadow: transparent;

  --color-selection: #ffff00;

  --color-white: #000000;
  --color-black: #ffffff;

  --keyboard: #000000;
  --keyboard-hover: #ffff00;

  --bg-primary: #000000;
  --bg-outline: #ffffff;
  --bg-secondary: #121212;
  --bg-hover: #333333;
  --bg-blur: rgba(0, 0, 0, 0.9);

  --text-primary: #ffffff;
  --text-secondary: #ffffff;

  --box-shadow-primary: none;
  --box-shadow-secondary: none;

  --slider-on: #ffffff;
  --slider-off: #000000;
}
</style>
