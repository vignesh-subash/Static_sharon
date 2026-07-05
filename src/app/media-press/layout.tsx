import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Press | SharonPly News, Press Releases & Brand Updates",
  description: "Explore SharonPly media coverage, press releases, brand announcements, CSR stories, campaign updates, and official company communication.",
  alternates: { canonical: "https://sharonply.com/media-press" },
};

export default function MediaPressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
