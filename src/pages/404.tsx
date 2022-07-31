import Link from "next/link";

function PageNotFound() {
  return (
    <>
      <div className="flex flex-row items-center justify-center text-7xl md:text-9xl font-mono font-bold">
        <span className="text-amber-200">4</span>
        <span className="tracking-tighter mx-1 text-5xl">&lt;/&gt;</span>
        <span className="text-amber-200">4</span>
      </div>
      <br />
      <div className="font-mono text-xl">
        <div>
          <span className="text-blue-300">Error404</span>
          <span>{"() {"}</span>
        </div>
        <div className="ml-4">
          <span className="text-red-400">message</span>
          <span> = </span>
          <span className="text-green-500">&quot;page not found&quot;;</span>
        </div>
        <div>{"}"}</div>
      </div>
      <Link href="/" passHref>
        <a className="border-2 border-rose-500 text-rose-400 rounded-lg w-fit m-auto text-3xl px-4 py-2 mt-6 hover:bg-rose-500 hover:text-slate-200 transition-colors">
          Head home?
        </a>
      </Link>
    </>
  );
}

export default PageNotFound;
