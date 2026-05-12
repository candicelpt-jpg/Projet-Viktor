import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type AppShellProps = {
  atmosphereClass: string;
  children: ReactNode;
};

export function AppShell({ atmosphereClass, children }: AppShellProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-nightForest text-parchment">
      <div className="fixed inset-0 bg-[url('/images/viktor-reference.jpg')] bg-cover bg-center opacity-20" />
      <div className={classNames("fixed inset-0", atmosphereClass)} />
      <div className="relative min-h-screen px-4 py-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
