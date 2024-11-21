import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
      <div className="text-center flex flex-col items-center justify-center w-fit gap-2">
        <h2 className="text-7xl font-bold pr-1">404 - page not found</h2>
        <p className="text-muted-foreground text-md font-medium">
          If you think this is an issue please let me know!
        </p>
        <a href="/contact.html">Contact me</a>
      </div>
      <Link href="/" className={buttonVariants({})}>
        Take me home
      </Link>
    </div>
  );
}
