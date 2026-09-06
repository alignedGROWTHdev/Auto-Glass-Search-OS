/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#F7F8F6",
      "foreground": "#0B1F30",
      "border": "#D8DEE3",
      "card": "#FFFFFF",
      "cardForeground": "#0B1F30",
      "popover": "#FFFFFF",
      "popoverForeground": "#0B1F30",
      "primary": "#0B1F30",
      "primaryForeground": "#FFFFFF",
      "secondary": "#DCEBFA",
      "secondaryForeground": "#0B1F30",
      "muted": "#EEF1F2",
      "mutedForeground": "#526573",
      "accent": "#3182F6",
      "accentForeground": "#FFFFFF",
      "destructive": "#B42318",
      "destructiveForeground": "#FFFFFF",
      "input": "#B8C3CC",
      "ring": "#3182F6",
      "chart1": "#3182F6",
      "chart2": "#0B1F30",
      "chart3": "#56758F",
      "chart4": "#177E89",
      "chart5": "#8A6D3B",
      "sidebar": "#0B1F30",
      "sidebarForeground": "#F7F8F6",
      "sidebarBorder": "#263746",
      "sidebarPrimary": "#3182F6",
      "sidebarPrimaryForeground": "#FFFFFF",
      "sidebarAccent": "#263746",
      "sidebarAccentForeground": "#FFFFFF",
      "sidebarRing": "#68A4F8"
    },
    "dark": {
      "background": "#081825",
      "foreground": "#F7F8F6",
      "border": "#344C5E",
      "card": "#0B1F30",
      "cardForeground": "#F7F8F6",
      "popover": "#10283B",
      "popoverForeground": "#F7F8F6",
      "primary": "#3182F6",
      "primaryForeground": "#FFFFFF",
      "secondary": "#263746",
      "secondaryForeground": "#FFFFFF",
      "muted": "#183044",
      "mutedForeground": "#B5C1CB",
      "accent": "#68A4F8",
      "accentForeground": "#081825",
      "destructive": "#E05A4F",
      "destructiveForeground": "#081825",
      "input": "#496174",
      "ring": "#68A4F8",
      "chart1": "#68A4F8",
      "chart2": "#DCEBFA",
      "chart3": "#7F9AAD",
      "chart4": "#4FB5BE",
      "chart5": "#C7A96B",
      "sidebar": "#071520",
      "sidebarForeground": "#F7F8F6",
      "sidebarBorder": "#263746",
      "sidebarPrimary": "#3182F6",
      "sidebarPrimaryForeground": "#FFFFFF",
      "sidebarAccent": "#183044",
      "sidebarAccentForeground": "#F7F8F6",
      "sidebarRing": "#68A4F8"
    }
  },
  "fontFamily": {
    "sans": [
      "Inter",
      "system-ui",
      "sans-serif"
    ],
    "serif": [
      "Georgia",
      "serif"
    ],
    "mono": [
      "IBM Plex Mono",
      "ui-monospace",
      "monospace"
    ]
  },
  "radius": "0.375rem",
  "spacing": "0.5rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
