"use client";

/* Landing client behaviour:
   - toggles the `scrolled` class on #hdr past 40px (mirrors the source HTML script)
   - handles the contact form submit: prevents navigation and shows the thank-you state */
import { useEffect } from "react";

export function LandingScroll() {
  useEffect(() => {
    const hdr = document.getElementById("hdr");
    const onScroll = () => {
      if (!hdr) return;
      if (window.scrollY > 40) hdr.classList.add("scrolled");
      else hdr.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const form = document.getElementById("cform") as HTMLFormElement | null;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      if (form && !form.reportValidity()) return;
      form?.classList.add("sent");
      form?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    form?.addEventListener("submit", onSubmit);

    return () => {
      window.removeEventListener("scroll", onScroll);
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
