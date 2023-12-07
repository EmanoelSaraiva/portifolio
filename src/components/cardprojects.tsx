import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface IframeComponentProps {
  children: React.ReactNode;
  description: string;
  url: string;
  title: string;
}

export default function CardProject({
  children,
  title,
  description,
  url,
}: IframeComponentProps) {
  return (
    <section className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <section className="w-full">{children}</section>
      <div className="p-5">
        <Link href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visite o site
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
