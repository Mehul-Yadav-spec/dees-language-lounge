"use client";

import { useState } from "react";

// Country dial codes — +1 and +91 first as the business defaults, extendable.
export const DIAL_CODES = ["+1", "+91", "+44", "+61", "+971", "+33"];

// Split a stored E.164 string into a known dial code + national digits.
function split(e164: string | null): { code: string; digits: string } {
  const v = (e164 ?? "").trim();
  const code = DIAL_CODES.find((c) => v.startsWith(c)) ?? "+1";
  return { code, digits: v.startsWith(code) ? v.slice(code.length).replace(/\D/g, "") : v.replace(/\D/g, "") };
}

// Controlled WhatsApp field: dial-code select + digits-only input. Emits E.164
// (e.g. "+14165550187") or "" when empty.
export function PhoneInput({
  value,
  onChange,
  className,
}: {
  value: string | null;
  onChange: (e164: string) => void;
  className?: string;
}) {
  const init = split(value);
  const [code, setCode] = useState(init.code);
  const [digits, setDigits] = useState(init.digits);

  function emit(nextCode: string, nextDigits: string) {
    onChange(nextDigits ? `${nextCode}${nextDigits}` : "");
  }

  return (
    <div className="flex gap-2">
      <select
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          emit(e.target.value, digits);
        }}
        aria-label="Country code"
        className={`w-20 shrink-0 rounded-input border border-hairline bg-canvas px-2 text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${className ?? ""}`}
      >
        {DIAL_CODES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <input
        value={digits}
        onChange={(e) => {
          const d = e.target.value.replace(/\D/g, "").slice(0, 15);
          setDigits(d);
          emit(code, d);
        }}
        inputMode="numeric"
        placeholder="4165550187"
        className={`flex-1 rounded-input border border-hairline bg-canvas px-4 text-ink placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${className ?? ""}`}
      />
    </div>
  );
}

// Valid if empty (optional) or 6–15 national digits.
export function isValidPhone(e164: string): boolean {
  if (!e164) return true;
  return /^\+\d{1,4}\d{6,15}$/.test(e164);
}
