/**
 * Verde Trust palette — keep in sync with :root tokens in src/app/globals.css
 */
export const verdeTrust = {
  bg: "#FBFAF7",
  surface: "#FFFFFF",
  surfaceSubtle: "#F3F1EB",
  text: "#14201B",
  textSecondary: "#5A6862",
  textMuted: "#8A968F",
  border: "#E6E3DB",
  borderStrong: "#D4D0C6",
  primary: "#0F1E1A",
  primaryHover: "#1C3530",
  net: "#0E9F6E",
  netHover: "#0B8A5F",
  netTint: "#E7F4EE",
  irpef: "#0B7A5E",
  inps: "#5B8DEF",
  localTax: "#E0A93F",
  focus: "rgba(14, 159, 110, 0.35)",
  error: "#DC2626",
  chartTints: {
    net: "#E7F4EE",
    irpef: "#E8F3EF",
    inps: "#EEF3FD",
    local: "#FDF6E8",
  },
} as const;

/** Salary breakdown category colors (donut + bars) */
export const breakdownColors = {
  net: verdeTrust.net,
  irpef: verdeTrust.irpef,
  inps: verdeTrust.inps,
  local: verdeTrust.localTax,
} as const;
