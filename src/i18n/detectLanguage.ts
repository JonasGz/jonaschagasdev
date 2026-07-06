export const SUPPORTED_LANGUAGES = ["en", "pt-BR", "pt-PT", "es"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_STORAGE_KEY = "lang";

const isSupported = (value: string | null): value is Language =>
  !!value && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);

/**
 * Maps a single BCP-47 tag (e.g. "pt-PT", "es-MX", "en-US") to one of the
 * supported languages, or null when it doesn't match any rule.
 */
const matchTag = (tag: string): Language | null => {
  const lower = tag.toLowerCase();

  if (lower === "pt-pt") return "pt-PT";
  if (lower.startsWith("pt")) return "pt-BR";
  if (lower.startsWith("es")) return "es";

  return null;
};

/**
 * Resolves the language to use:
 * 1. A previously saved manual choice (localStorage) always wins.
 * 2. Otherwise, the browser's preferred languages are scanned in order and the
 *    first one matching a rule is used (pt-PT → Portugal, other pt → Brazil,
 *    es-* → Spanish).
 * 3. Everything else falls back to English.
 */
export const detectLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isSupported(saved)) return saved;
  } catch {
    // localStorage may be unavailable (private mode / SSR) — ignore.
  }

  const preferred =
    typeof navigator !== "undefined"
      ? navigator.languages?.length
        ? navigator.languages
        : [navigator.language]
      : [];

  for (const tag of preferred) {
    const match = tag && matchTag(tag);
    if (match) return match;
  }

  return "en";
};
