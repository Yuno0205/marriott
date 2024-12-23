import { BannerFields } from "@/types/contentful";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: BannerFields;
};

export const Banner = ({ data }: Props) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full h-full">
        <div
          style={{
            backgroundImage: `url(${data?.backgroundImage?.fields?.file?.url})`,
          }}
          className="w-full relative bg-cover bg-no-repeat flex items-center justify-center bg-center py-20 xs:py-10 2xs:h-96"
        >
          <div
            style={{
              // width: "calc(100% - 400px)",
              // height: "calc(100% - 50px)",
              opacity: 0.85,
            }}
            className="h-full w-5/6 bg-[#F2F3F5D9] flex flex-col items-center justify-center text-center gap-5 py-10"
          >
            <div className="w-72 xs:w-52">
              <Link
                href="/"
                className="flex w-full h-full items-center px-4 relative z-2"
              >
                <Image
                  src={`https:${data.logo?.fields?.file?.url}`}
                  alt="logo"
                  width={173}
                  height={154}
                  className="object-cover w-full"
                />
              </Link>
            </div>
            <div className="avenir text-[#666666] w-full text-5xl flex flex-col font-light capitalize sm:text-4xl px-4 pt-10 2xs:pt-0 pb-10">
              <span className="line-clamp-3"> {data.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
