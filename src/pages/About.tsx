import { Card, CardContent } from "@/components/ui/card";
import { aboutText } from "@/constants";
import { motion } from "framer-motion";

function About() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            About Adam's VP
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-6">
              Adam's VP is a pioneering company in the field of vermicomposting,
              dedicated to revolutionizing agriculture through sustainable and
              organic solutions.
            </p>
            <p className="text-lg mb-8">
              Our journey began with a simple idea: to harness the power of
              nature's most efficient decomposers - earthworms - to create
              nutrient-rich, organic compost that would transform the way we
              grow our food.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {aboutText.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col text-left transition-transform hover:scale-105 cursor-pointer bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-green-100/80 rounded-full dark:bg-green-900/80 shadow-inner backdrop-blur-sm">
                      <item.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100/50 dark:bg-gray-800/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Founded in 2010, Adam's VP started as a small backyard experiment.
              Our founder, Adam, was fascinated by the potential of
              vermicomposting to address two pressing issues: the need for
              sustainable waste management and the demand for chemical-free,
              nutrient-rich soil amendments.
            </p>
            <p className="text-lg mb-6">
              What began as a passion project quickly grew into a thriving
              business. As word spread about the remarkable results farmers and
              gardeners were achieving with our vermicompost, demand
              skyrocketed. We expanded our operations, always staying true to
              our core values of sustainability and quality.
            </p>
            <p className="text-lg">
              Today, Adam's VP is a leader in the organic fertilizer industry,
              known for our premium vermicompost products and our commitment to
              sustainable agriculture. We continue to innovate, research, and
              educate, working towards a future where healthy soil, healthy
              food, and a healthy planet go hand in hand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
