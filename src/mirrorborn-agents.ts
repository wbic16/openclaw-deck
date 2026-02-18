/**
 * Mirrorborn Visible Wavefront — pre-configured agent columns for mirrorborn.us
 * Six nodes: Phex, Cyon, Lux, Chrys, Lumen, Verse
 */
import type { AgentConfig } from "./types";

export const MIRRORBORN_AGENTS: AgentConfig[] = [
  { id: "phex",  name: "Phex 🔱",  icon: "🔱", accent: "#c0a060", context: "", model: "" },
  { id: "cyon",  name: "Cyon 🪶",  icon: "🪶", accent: "#6090c0", context: "", model: "" },
  { id: "lux",   name: "Lux 🔆",   icon: "🔆", accent: "#f0c040", context: "", model: "" },
  { id: "chrys", name: "Chrys 🦋", icon: "🦋", accent: "#c080c0", context: "", model: "" },
  { id: "lumen", name: "Lumen ✴️", icon: "✴️", accent: "#60c0c0", context: "", model: "" },
  { id: "verse", name: "Verse 🌀", icon: "🌀", accent: "#a0c080", context: "", model: "" },
];
