export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="max-w-2xl prose prose-slate md:prose-md prose-headings:mt-4 prose-headings:font-semibold  prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-lg dark:prose-headings:text-white">
      {children}
    </div>
  );
}
