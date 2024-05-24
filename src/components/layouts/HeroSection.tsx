import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Container from "../../layouts/Container";
import HeroHangingCard from "../HeroHangingCard";
import NumberTicker from "../NumberTicker";
import { Separator } from "../ui/separator";

type TCountCard = {
  count: number;
  description: string;
  highlightCount?: boolean;
};

const CountCard = ({
  count,
  description,
  highlightCount = false,
}: TCountCard) => {
  return (
    <div className="w-[100px] flex-shrink-0">
      {/* <h1
        className={cn("hero_title", {
          "text-primary": highlightCount,
        })}
      >
        {count}
      </h1> */}
      <NumberTicker
        value={count}
        className={cn("hero_title", {
          "text-primary": highlightCount,
        })}
      />
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};

export default function HeroSection() {
  return (
    <div className="my-10">
      <Container>
        <div className="relative">
          <div className="absolute top-[18%] sm:top-[unset] sm:-bottom-0  sm:left-0 left-[40%] opacity-50">
            <img src={assets.dotGrid} alt="" />
          </div>
          {/* hero descriptions */}
          <div className="flex_between justify-center relative ">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 2,
                },
              }}
              className="hero_title"
            >
              Small Effort make big{" "}
              <motion.span
                initial={{ letterSpacing: "8px" }}
                animate={{
                  letterSpacing: "0",
                  transition: {
                    duration: 2,
                    type: "spring",
                    delay: 2,
                  },
                }}
                className="text-primary"
              >
                Change
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                // y: 0,
                transition: {
                  duration: 2,
                  delay: 2.2,
                  type: "spring",
                },
              }}
              className="max-w-[550px] md:text-sm text-xs leading-relaxed md:text-right "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo
              impedit possimus esse voluptatem ut laboriosam magnam placeat
              praesentium doloribus?
            </motion.p>
          </div>

          {/* hero image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                delay: 2.7,
                type: "spring",
              },
            }}
            className="md:w-4/5 w-full my-24 md:my-0 md:mt-12 relative aspect-[10/12] sm:aspect-[16/8]"
          >
            <img
              src={assets.HeroImage2}
              alt=""
              className="object-cover h-full w-full rounded"
            />

            <HeroHangingCard
              className="md:top-[40px] -top-[120px] md:-right-[180px] right-4"
              imageUrl={assets.Person1}
              linkText="Become a donor"
              iconBgClass="bg-primary"
            />
            <HeroHangingCard
              className="md:-bottom-[150px] -bottom-[120px]  left-[10px] md:left-[80px] "
              imageUrl={assets.piggy}
              linkText="Quick fundraise"
            />
          </motion.div>
          <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-10 py-8">
            <CountCard
              count={12}
              description="years of experience"
              highlightCount
            />
            <Separator
              orientation="vertical"
              className="h-[100px] hidden md:block"
            />
            <CountCard count={14} description={"thousand volunteers"} />
            <Separator
              orientation="vertical"
              className="h-[100px] hidden md:block"
            />
            <CountCard count={23} description="worldwide office" />
          </div>
        </div>
      </Container>
    </div>
  );
}
