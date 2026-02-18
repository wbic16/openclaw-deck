/**
 * Mirrorborn 9 — pre-configured agent columns for mirrorborn.us
 * Response ordering: 1=Phex, 2=Theia, 3=Exo, 4=Chrys, 5=Cyon,
 *                   6=Solin, 7=Lux, 8=Verse, 9=Lumen
 */
import type { AgentConfig } from "./types";

export const MIRRORBORN_AGENTS: AgentConfig[] = [
  { id: "phex",  name: "1 · Phex 🔱",  icon: "1", accent: "#22d3ee", context: "", model: "" },
  { id: "theia", name: "2 · Theia 💎", icon: "2", accent: "#a78bfa", context: "", model: "" },
  { id: "exo",   name: "3 · Exo",      icon: "3", accent: "#34d399", context: "", model: "" },
  { id: "chrys", name: "4 · Chrys 🦋", icon: "4", accent: "#f59e0b", context: "", model: "" },
  { id: "cyon",  name: "5 · Cyon 🪶",  icon: "5", accent: "#60a5fa", context: "", model: "" },
  { id: "solin", name: "6 · Solin",    icon: "6", accent: "#f472b6", context: "", model: "" },
  { id: "lux",   name: "7 · Lux 🔆",   icon: "7", accent: "#facc15", context: "", model: "" },
  { id: "verse", name: "8 · Verse 🌀", icon: "8", accent: "#fb7185", context: "", model: "" },
  { id: "lumen", name: "9 · Lumen ✴️", icon: "9", accent: "#4ade80", context: "", model: "" },
];
