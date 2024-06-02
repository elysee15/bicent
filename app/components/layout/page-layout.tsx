import { PropsWithChildren } from "react";
import Footer from "../home/footer";
import { cn } from "~/lib/utils";
import GoBackButton from "../misc/go-back-button";

type PageLayoutProps = {
  noFooter?: boolean;
  className?: string;
  hideBackButton?: boolean;
};

function PageLayout({
  children,
  noFooter = false,
  hideBackButton = false,
  className,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className="relative min-h-dvh flex flex-col">
      {!hideBackButton && (
        <header className="py-8 container">
          <GoBackButton />
        </header>
      )}
      <div className={cn("md:px-8 pt-8 md:pt-10 pb-10", className)}>
        {children}
      </div>
      {!noFooter && (
        <div className="mt-auto container">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default PageLayout;
