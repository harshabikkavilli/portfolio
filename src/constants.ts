import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import amazonCareLogo from './assets/experience/AmazonCareLogo.jpeg';
import amazonPhotosLogo from './assets/experience/AmazonPhotosLogo.jpeg';
import snapchatLogo from './assets/experience/SnapchatLogo.png';
import heroImage from './assets/hero.jpg';
import { AppData } from './types';

export const DATA: AppData = {
  hero: {
    name: "Harsha Bikkavilli",
    role: "Software Engineer",
    description: "8+ years of experience designing and shipping large-scale, AI-powered platforms. Expert in React, TypeScript, GraphQL, and Java, with a strong background in generative AI, creative systems, and distributed architectures. Known for leading cross-functional initiatives and delivering durable systems that drive measurable business impact.",
    image: heroImage
  },
  experiences: [
    {
      id: "snap",
      company: "Snapchat",
      role: "Software Engineer",
      logo: snapchatLogo,
      logoColor: "#FFFC00",
      logoText: "SNAP",
      textColor: "black",
      duration: "July 2022 — Present",
      description: [
        "Led end-to-end architecture and development of Generative AI features (Background Generation, Image-to-Video, Text-to-Video) in Ads Manager, integrating Vertex AI and Gemini models — improving creative production time by 60% and enhancing advertiser engagement.",
        "Spearheaded the Creative Liquidity initiative (\"Smart Ads\"), enabling dynamic creative optimization across assets, CTAs and headlines.",
        "Designed and developed unified media workflows (Unified Media Editor) across image, video, and sound assets, enabling scalable integration of new creative generation tools.",
        "Owned the Creative Preview Library SDK powering ad previews across 10+ internal tools and partner integrations, reducing maintenance overhead by 40% and improving feature velocity.",
        "Built the contextual HelpCenter system in Ads Manager - a dynamic drawer that surfaces knowledge articles based on user context, with integrated chat support."
      ]
    },
    {
      id: "amazon-care",
      company: "Amazon Care",
      role: "Software Engineer",
      logo: amazonCareLogo,
      logoColor: "#232F3E",
      logoText: "CARE",
      textColor: "white",
      duration: "May 2020 — July 2022",
      description: [
        "Architected and replatformed Amazon Care's real-time messaging system to integrate with Amazon Chime, eliminating duplicate infrastructure and focusing the team on healthcare-specific features.",
        "Built complex front-end state machines in XState and Vue for video and chat sessions, improving reliability and user experience.",
        "Developed asynchronous messaging backend services, optimizing latency and ensuring HIPAA-compliant data exchange."
      ]
    },
    {
      id: "amazon-photos",
      company: "Amazon Photos",
      role: "Software Engineer",
      logo: amazonPhotosLogo,
      logoColor: "#00A8E1",
      logoText: "PHOTOS",
      textColor: "white",
      duration: "July 2017 — May 2020",
      description: [
        "Built and scaled photo upload and custom product creation experiences (e.g., photo books, wall décor) using React and TypeScript, improving purchase conversion through a 3D preview UI built with CSS.",
        "Designed performant data models to streamline data exchange between client and backend services, improving API efficiency and overall reliability.",
        "Collaborated with XFN design and product teams to deliver personalized creative experiences, leading to higher engagement and retention."
      ]
    }
  ],
  education: [
    {
      id: "usc",
      degree: "Masters in Electrical Engineering",
      school: "University of Southern California, Los Angeles, CA, USA",
      year: "MAY 2017"
    },
    {
      id: "iiit",
      degree: "Bachelors in Electronics & Communication Engineering",
      school: "IIIT Allahabad, India",
      year: "JUNE 2014"
    }
  ],
  skills: [
    "React.js", "Typescript", "Javascript", "Java", "GraphQL", "Node.js", "Apollo MCP", "Vertex AI", "Gemini", "AWS", "GCP", "Distributed Systems", "Event-driven Architecture", "A/B Testing Frameworks"
  ],
  interests: [
    "Artificial Intelligence", "Machine Learning", "Open Source Contributions", "Cricket", "Science Fiction"
  ],
  testimonials: [
    {
      id: "billy-wu",
      text: "Harsha has proven himself to be the definition of an Amazon SDE, being able to to take on any task, backend or frontend, and being able to deliver them. Harsha's quick ramp up and contributions to backend work was extremely helpful and instrumental in launching high profile products successfully.",
      author: "Billy Wu",
      role: "Software Development Manager, Amazon"
    },
    {
      id: "hardik-shah",
      text: "Harsha constantly strives to raise the bar on the visual appeal and customer experiences. He enjoys learning and comes up with cool ideas that play a huge impact in customer experience. He would humbly ask questions when he actually intends to suggest something smart!",
      author: "Hardik Shah",
      role: "Software Development Manager, Amazon"
    },
    {
      id: "sai-jonnala",
      text: "Harsha is very quick to build an understanding of unknown concepts and team/org specific service architecture. He played an important role in successfully designing and delivering multiple critical services. He was also instrumental in adapting the common libraries used across the org to the specific requirements of our product.",
      author: "Sai Jonnala",
      role: "Sr. Software Development Engineer, Amazon"
    },
    {
      id: "jon-varner",
      text: "Through my experience talking with and working with Harsha, I've noticed that he often provides unique perspectives to problems - whether they be technical or process related. He is great at staying calm and objective while being faced with any problem. He is always friendly and I notice that his guidance is often sought, even if just for reassurance due to his wealth of experience.",
      author: "Jon Varner",
      role: "Sr. Software Development Engineer, Amazon"
    }
  ],
  contact: {
    email: "harshabikkavilli@gmail.com",
    phone: "+1 669-300-7129",
    formSparkId: "nok7j6qzX"
  },
  social: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/harsha-bikkavilli-0382051b/",
      icon: FaLinkedin,
      backgroundColor: "bg-[#0077b5]",
      iconColor: "text-white"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/harshabikkavilli/",
      icon: FaInstagram,
      backgroundColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
      iconColor: "text-white"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/harsha.bvns",
      icon: FaFacebook,
      backgroundColor: "bg-[#1877f2]",
      iconColor: "text-white"
    },
    {
      platform: "GitHub",
      url: "https://github.com/harshabikkavilli",
      icon: FaGithub,
      backgroundColor: "bg-black",
      iconColor: "text-white"
    }
  ]
};
