import {
  Leaf,
  Tractor,
  Recycle,
  Sprout,
  Target,
  Compass,
  Eye,
  Heart,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Vermicompost",
    description:
      "Our flagship product, rich in nutrients and beneficial microorganisms.",
    price: 29.99,
    inStock: true,
    image: "https://picsum.photos/800/600",
  },
  {
    id: 2,
    name: "Vermicompost Tea",
    description: "Liquid gold for your plants, perfect for foliar application.",
    price: 19.99,
    inStock: true,
    image: "https://picsum.photos/800/600",
  },
  {
    id: 3,
    name: "Worm Castings",
    description:
      "Pure, unadulterated worm castings for ultimate soil amendment.",
    price: 24.99,
    inStock: true,
    image: "https://picsum.photos/800/600",
  },
  {
    id: 4,
    name: "Organic Fertilizer Blend",
    description:
      "A perfect mix of vermicompost and organic materials for all-purpose use.",
    price: 34.99,
    inStock: true,
    image: "https://picsum.photos/800/600",
  },
];
const aboutText = [
  {
    icon: Target,
    title: "Our Objectives",
    description:
      "At Adam's VP, our primary objective is to provide sustainable, organic solutions for soil enrichment and crop enhancement, promoting eco-friendly agricultural practices. We aim to revolutionize the way farmers and gardeners approach soil health, offering products that not only boost crop yields but also contribute to long-term soil sustainability. Our objectives include:\n\n1. Developing and producing high-quality vermicompost products that meet the diverse needs of both small-scale gardeners and large agricultural operations.\n\n2. Educating farmers, gardeners, and the general public about the benefits of vermicomposting and its role in sustainable agriculture.\n\n3. Continuously researching and innovating to improve our products and develop new solutions for soil health and plant nutrition.\n\n4. Collaborating with agricultural institutions, environmental organizations, and local communities to promote sustainable farming practices.\n\n5. Reducing agricultural waste by transforming organic matter into valuable soil amendments through vermicomposting.\n\nBy focusing on these objectives, we strive to create a positive impact on global food production while preserving our planet's precious soil resources for future generations.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "The mission of Adam's VP is to revolutionize agriculture through innovative vermicomposting techniques, empowering farmers with natural, high-yield solutions. We are committed to:\n\n1. Providing farmers and gardeners with premium quality, organic soil amendments that enhance soil health and boost crop productivity.\n\n2. Promoting sustainable agricultural practices that reduce reliance on chemical fertilizers and pesticides.\n\n3. Developing scalable vermicomposting solutions that can be implemented in various agricultural settings, from small urban gardens to large-scale farms.\n\n4. Conducting ongoing research to improve our understanding of soil ecosystems and the role of earthworms in soil health.\n\n5. Offering educational resources and support to help our customers maximize the benefits of our products and adopt more sustainable farming practices.\n\n6. Collaborating with local communities to create job opportunities in the green sector and promote environmental stewardship.\n\n7. Continuously innovating our production processes to minimize our environmental footprint and maximize resource efficiency.\n\nThrough this mission, we aim to contribute to a more sustainable and productive agricultural system that benefits farmers, consumers, and the environment alike.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "At Adam's VP, we envision a world where organic waste is transformed into valuable resources, creating a circular economy in agriculture and ensuring food security. Our vision encompasses:\n\n1. A global shift towards sustainable agriculture, where vermicomposting plays a central role in maintaining soil health and fertility.\n\n2. The widespread adoption of our vermicompost products, leading to significant reductions in chemical fertilizer use and improved soil biodiversity worldwide.\n\n3. A network of local vermicomposting facilities in communities around the world, reducing waste and providing local jobs.\n\n4. Innovative urban farming solutions that incorporate vermicomposting, enabling cities to produce more of their own food sustainably.\n\n5. Collaboration with governments and international organizations to implement policies that promote sustainable soil management practices.\n\n6. A world where farmers are empowered with the knowledge and tools to maintain the long-term health and productivity of their soil.\n\n7. Significant contributions to global efforts in combating climate change through carbon sequestration in healthier, more organic-rich soils.\n\n8. A future where sustainable, organic farming is the norm rather than the exception, ensuring food security for generations to come.\n\nThrough this vision, we strive to be at the forefront of a global movement towards more sustainable and regenerative agricultural practices.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "At Adam's VP, our values are the cornerstone of everything we do. They guide our decisions, shape our culture, and define our relationships with customers, partners, and the environment. Our core values include:\n\n1. Sustainability: We are committed to environmental stewardship and promoting practices that conserve and enhance our natural resources.\n\n2. Innovation: We continuously seek new ways to improve our products, processes, and services, staying at the forefront of vermicomposting technology.\n\n3. Integrity: We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.\n\n4. Quality: We are dedicated to producing the highest quality vermicompost products that consistently meet or exceed our customers' expectations.\n\n5. Education: We believe in the power of knowledge and are committed to educating our customers and the public about sustainable agricultural practices.\n\n6. Community: We value our role in the community and strive to create positive impacts through job creation, local partnerships, and environmental initiatives.\n\n7. Respect for Nature: We recognize the wisdom in natural systems and aim to work in harmony with nature rather than against it.\n\n8. Customer Focus: We prioritize our customers' needs and are committed to providing excellent service and support.\n\n9. Collaboration: We believe in the power of partnerships and actively seek collaborations that can drive positive change in agriculture.\n\n10. Continuous Improvement: We are always looking for ways to better ourselves, our products, and our impact on the world.\n\nThese values are not just words on a page; they are the principles that drive our daily operations and long-term strategy at Adam's VP.",
  },
];
const testimonials = [
  {
    name: "John Doe",
    role: "Organic Farmer",
    content:
      "Adam's VP has transformed my farm. The increase in crop yield is remarkable!",
  },
  {
    name: "Jane Smith",
    role: "Home Gardener",
    content:
      "I've never seen my garden so vibrant. The vermicompost tea works wonders!",
  },
  {
    name: "Mike Johnson",
    role: "Agricultural Researcher",
    content:
      "The quality and consistency of Adam's VP products are unmatched in the industry.",
  },
];

const aboutUs = [
  {
    icon: Target,
    title: "Our Objectives",
    description:
      "To provide sustainable, organic solutions for soil enrichment and crop enhancement, promoting eco-friendly agricultural practices.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "To revolutionize agriculture through innovative vermicomposting techniques, empowering farmers with natural, high-yield solutions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where organic waste is transformed into valuable resources, creating a circular economy in agriculture and ensuring food security.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Sustainability, innovation, integrity, and commitment to the well-being of farmers, consumers, and the environment.",
  },
];

const whyUs = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "Our compost is made from natural materials, free from harmful chemicals.",
  },
  {
    icon: Recycle,
    title: "Sustainable Process",
    description:
      "We utilize organic waste, contributing to a circular economy.",
  },
  {
    icon: Sprout,
    title: "Enhanced Growth",
    description: "Proven to increase crop yields and improve soil health.",
  },
  {
    icon: Tractor,
    title: "Farmer-Friendly",
    description: "Easy to apply and compatible with modern farming practices.",
  },
];
export { products, aboutText, testimonials, aboutUs, whyUs };
