export function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const color = light ? "bg-white/60" : "bg-[#0c1b2e]";
  const textColor = light ? "text-white" : "text-[#0c1b2e]";
  return (
    <div className="flex items-center justify-center gap-6">
      <span className={`h-px w-14 shrink-0 ${color}`} />
      <h2 className={`text-4xl font-black tracking-wide whitespace-nowrap ${textColor}`}>{children}</h2>
      <span className={`h-px w-14 shrink-0 ${color}`} />
    </div>
  );
}
