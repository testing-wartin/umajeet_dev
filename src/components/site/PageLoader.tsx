"use client";

import { useEffect, useState } from "react";

const Bone = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <div className={`animate-pulse rounded bg-gray-200 ${className}`} style={style} />
);

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setVisible(false);
      return;
    }
    const hide = () => setVisible(false);
    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">

      {/* Navbar */}
      <div className="h-[88px] border-b border-gray-100 flex items-center px-8 gap-8">
        <Bone className="h-12 w-36" />
        <div className="flex-1" />
        <div className="hidden md:flex gap-8">
          <Bone className="h-4 w-16" />
          <Bone className="h-4 w-14" />
          <Bone className="h-4 w-20" />
          <Bone className="h-4 w-24" />
        </div>
        <Bone className="hidden md:block h-12 w-36 rounded-2xl" />
      </div>

      {/* Hero */}
      <div className="h-[700px] bg-gray-300 relative flex items-end px-16 pb-16">
        <div className="space-y-5 max-w-[600px]">
          <Bone className="h-16 w-[500px] !bg-gray-400 rounded-lg" />
          <Bone className="h-16 w-[380px] !bg-gray-400 rounded-lg" />
          <Bone className="h-9 w-[300px] !bg-gray-400 rounded-lg" />
          <div className="flex gap-3 pt-2">
            <Bone className="h-4 w-14 rounded-full !bg-gray-400" />
            <Bone className="h-4 w-4 rounded-full !bg-gray-400" />
            <Bone className="h-4 w-4 rounded-full !bg-gray-400" />
            <Bone className="h-4 w-4 rounded-full !bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Reputation */}
      <div className="py-20 px-8 bg-white">
        <Bone className="h-10 w-56 mx-auto mb-16" />
        <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
              <Bone className="h-10 w-10 rounded-lg" />
              <Bone className="h-7 w-36" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-4/5" />
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="py-20 px-8 bg-gray-50">
        <Bone className="h-10 w-40 mx-auto mb-16" />
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="border border-gray-200 rounded-3xl p-4">
              <Bone className="h-[328px] w-full rounded-2xl" />
            </div>
            <div className="space-y-5">
              <Bone className="h-10 w-40" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-5/6" />
              <Bone className="h-4 w-4/6" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <Bone className="h-10 w-40" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-5/6" />
              <Bone className="h-4 w-4/6" />
            </div>
            <div className="border border-gray-200 rounded-3xl p-4">
              <Bone className="h-[328px] w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 px-8 bg-white">
        <Bone className="h-10 w-56 mx-auto mb-12" />
        <div className="mx-auto max-w-7xl space-y-5">
          <div className="grid gap-5 md:grid-cols-[59fr_41fr]">
            <Bone className="h-[368px] rounded-[25px]" />
            <Bone className="h-[368px] rounded-[25px]" />
          </div>
          <Bone className="h-[200px] rounded-[25px]" />
          <div className="grid gap-5 md:grid-cols-[41fr_59fr]">
            <Bone className="h-[320px] rounded-[25px]" />
            <Bone className="h-[320px] rounded-[25px]" />
          </div>
        </div>
      </div>

      {/* Leaders */}
      <div className="py-20 px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl bg-blue-100 px-16 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Bone className="h-4 w-32" />
                <Bone className="h-12 w-72" />
              </div>
              <div className="space-y-3">
                <Bone className="h-4 w-full" />
                <Bone className="h-4 w-5/6" />
                <Bone className="h-4 w-4/6" />
              </div>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <Bone className="h-10 w-40" />
              <Bone className="h-6 w-32" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-5/6" />
            </div>
            <div className="border border-gray-200 rounded-3xl px-10 py-4">
              <Bone className="h-[420px] w-full rounded-2xl md:h-[673px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-20 px-8 bg-white">
        <Bone className="h-10 w-40 mx-auto mb-4" />
        <Bone className="h-4 w-64 mx-auto mb-12" />
        <div className="mx-auto max-w-7xl grid md:grid-cols-[1fr_1.6fr] rounded-xl overflow-hidden shadow-sm">
          <div className="bg-[#0c1b2e] px-10 py-12 space-y-8">
            <Bone className="h-7 w-48 !bg-gray-600" />
            <Bone className="h-4 w-40 !bg-gray-600" />
            {[0, 1, 2].map((i) => (
              <Bone key={i} className="h-4 w-36 !bg-gray-600" />
            ))}
          </div>
          <div className="bg-white p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Bone className="h-10 w-full" />
              <Bone className="h-10 w-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Bone className="h-10 w-full" />
              <Bone className="h-10 w-full" />
            </div>
            <Bone className="h-20 w-full" />
            <div className="flex justify-end">
              <Bone className="h-12 w-36" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-16 px-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div className="space-y-4">
            <Bone className="h-12 w-36" />
            <Bone className="h-4 w-40" />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-3">
              <Bone className="h-5 w-24" />
              <Bone className="h-4 w-20" />
              <Bone className="h-4 w-16" />
              <Bone className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
