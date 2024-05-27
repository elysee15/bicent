import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "../home/footer";
import { useNavigate } from "@remix-run/react";
import { cn } from "~/lib/utils";

function PageLayout({
  children,
  noFooter = false,
  className,
}: PropsWithChildren<{ noFooter?: boolean; className?: string }>) {
  const navigate = useNavigate();
  return (
    <div className="container min-h-dvh flex flex-col">
      <header className="py-8">
        <Button
          onClick={() => navigate(-1)}
          className="bg-[#3F3F3F] rounded-none h-10 w-10 md:h-14 md:w-14 p-2.5"
        >
          <ArrowLeft className="w-6 h-6 md:w-6 md:h-6" />
        </Button>
      </header>
      <div className={cn("md:px-8 pt-8 md:pt-10 pb-10", className)}>
        {children}
      </div>
      {!noFooter && (
        <div className="mt-auto">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default PageLayout;
