"use client";

import dynamic from "next/dynamic";

const AIChatButton = dynamic(() => import("./AIChatButton"), {
  ssr: false,
  loading: () => null,
});

export default function AIChatButtonWrapper() {
  return <AIChatButton />;
}
