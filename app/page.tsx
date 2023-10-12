import { ContactFormModal } from "@/components";
import Link from "next/link";

type HomeProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Home({ searchParams }: HomeProps) {
  const showModal = searchParams?.modal;

  return (
    <main className="h-full min-h-screen w-full bg-yellow">
      <div className="px-4 mx-auto w-full h-20 max-w-3xl">
        <div className="h-full w-full flex items-center justify-between">
          <span className="text-black font-bold font-aktiv-grotesk">
            Kyle Conrad
          </span>
          <Link
            href="/?modal=true"
            className="h-10 flex items-center px-4 bg-black border-2 border-solid border-black hover:border-dashed hover:text-black hover:bg-yellow duration-250 transition-colors text-yellow text-base font-aktiv-grotesk rounded-full"
          >
            Let&apos;s talk!
          </Link>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-3xl flex flex-col pt-16 gap-6 items-center">
        <h1 className="text-black text-center text-6xl sm:text-7xl font-mencken-std-head-compress font-lightest uppercase">
          UX Engineer with a passion for experimentation and growth
        </h1>
        <h2 className="text-black text-base text-center font-aktiv-grotesk font-lightest">
          Hi, I&apos;m Kyle, a digital product creator based in California.
          Reach out to me if you want to work with someone who is just as
          comfortable designing UIs in Figma as coding frontends in React and
          Next.js.
        </h2>
      </div>
      <div className="px-4 mx-auto max-w-3xl flex flex-col pt-10 pb-16">
        <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-2">
          <span className="shrink-0 font-bold text-black font-aktiv-grotesk">
            Lets build the next
            <span className="inline-block px-2">
              <svg
                className="w-14 h-14 text-black inline-block"
                width="218"
                height="203"
                viewBox="0 0 218 203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M100.5 64.5319V0H114.5V70.9337L146.209 5.93103L158.791 12.069L132.134 66.7164L185.8 13.0503L195.7 22.9497L140.486 78.1632L199.544 50.6546L205.456 63.3454L139.107 94.25H218V108.25H144.528L205.055 131.983L199.945 145.017L136.154 120.004L175.95 159.8L166.05 169.7L127.956 131.605L146.446 175.27L133.554 180.73L114.5 135.733V202.5H100.5V143.73L88.1299 180.246L74.8701 175.754L91.2512 127.398L48.9497 169.7L39.0503 159.8L76.2731 122.577L25.3097 144.911L19.6903 132.089L74.0872 108.25H0V94.25H75.8932L9.54437 63.3454L15.4556 50.6546L74.5137 78.1632L27.5503 31.1997L37.4497 21.3003L88.562 72.4126L64.491 11.5754L77.509 6.42461L100.5 64.5319Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            (big thing)
          </span>
          <div className="hidden sm:flex h-px w-full border border-dashed border-black"></div>
          <Link
            href="/?modal=true"
            className="shrink-0 flex items-center justify-center h-10 w-full sm:w-auto px-4 bg-black border-2 border-solid border-black hover:border-dashed hover:text-black hover:bg-yellow transition duration-250 transition-colors text-yellow text-base font-aktiv-grotesk rounded-full"
          >
            Send me a message
          </Link>
        </div>
      </div>
      {showModal && <ContactFormModal></ContactFormModal>}
    </main>
  );
}
