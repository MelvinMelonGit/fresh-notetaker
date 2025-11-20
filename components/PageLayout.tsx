import { ComponentType } from "preact";

interface LayoutProps {
  Component: ComponentType;
}

export function PageLayout({ Component }: LayoutProps) {
  return (
    <main class="flex min-h-screen place-center">
      <aside class="fresh-gradient">Here is some sidebar content</aside>
      <Component />
    </main>
  );
}