import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import YouTubeIcon from '../components/Icon/YouTubeIcon';
import TikTokIcon from '../components/Icon/TikTokIcon';
import heroImage from '../images/header-background.webp';
import lambda from '../images/portfolio/lambda.png';
import machina from '../images/portfolio/machina.png';
import link from '../images/portfolio/link.webp';
import dino from '../images/portfolio/dinos.png';
import nav from '../images/portfolio/nav.png';
import nordic from '../images/portfolio/nordic.webp';
import car from '../images/portfolio/car.png';
import bezier from '../images/portfolio/bezier.png';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Michael Salton',
  description: "Michael Salton's Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Projects',
  Resume: 'resume',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Michael Salton`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100"> Computer Science Student </strong>
        interested in <strong className="text-stone-100">Machine Learning and Video Games</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/michaelsalton/salton_resume/blob/main/salton_resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a passionate student studying computer science and video game development 
  with a strong interest in machine learning. With a particular interest in machine learning's potential 
  applications both in the video game industry and the real world. I am eager to gain hands-on 
  experience, work with professionals, and contribute to important projects.`,
  aboutItems: [
    {label: 'Location', text: 'Montreal, QC', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'Photo/Video, Boxing, Abandoned Places', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Western Ontario', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Peavey Industries', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project Lambda',
    description: 'Two AI agents built to play Counter-Strike: Global'
      + ' Offensive. The first agent uses a combination of YOLOv7 object'
      + ' detection and A* pathfinding algorithm. The second agent uses a'
      + ' deep neural network trained on a large data set of video footage '
      + ' of professional CS:GO matches using behavioural cloning and offline '
      + ' reinforcement learning.',
    url: 'https://github.com/michaelsalton/ProjectLambda',
    image: lambda,
  },
    {
    title: 'Project Machina',
    description: 'Project Machina is a VR simulation being built with Unreal Engine'
      + ' that consists of NPCs built with large language models, reincforcment learning, '
      + ' and a deep neural network. I am currently working on this project and right now '
      + ' am experimenting with unprompted chat dialogue.',
    url: 'https://github.com/michaelsalton/ProjectMachina',
    image: machina,
  },
  {
    title: 'Brach.io',
    description: 'Brach.io is a unique and engaging finance tracking' 
      + ' application built using C++. This innovative app features a visual' 
      + ' representation of an island filled with dinosaurs that can grow and' 
      + ' shrink based on the performance of your stocks.',
    url: '',
    image: dino,
  },
    {
    title: 'Link\'s Treehouse',
    description: 'Recreation of Link\'s Treehouse from Ocharina of Time using C++ and OpenGL.',
    url: 'https://github.com/michaelsalton/LinksHouse',
    image: link,
  },
    {
    title: 'Unreal Engine Video Game',
    description: 'A short, horror style, video game, inspired by Norse mythology. Built using Unreal Engine 4 and C++',
    url: 'https://www.tiktok.com/@michaelsalton/video/6850061035349593350?is_from_webapp=1&sender_device=pc&web_id=7145889536991954438',
    image: nordic,
  },
  {
    title: 'NavWestern',
    description: 'Google Maps-like application for the building interiors at Western University' 
    + 'built using Java and JavaFX.',
    url: 'https://github.com/michaelsalton/NavWestern/tree/master/NavWestern',
    image: nav,
  },
    {
    title: 'Bezier Curve Tool',
    description: 'A bezier curve program built using C++ and OpenGL.',
    url: 'https://github.com/michaelsalton/LinksHouse',
    image: bezier,
  },

  {
    title: 'Autonomous Car',
    description: 'A small autonomous car I programmed using Aurdiono and C',
    url: 'https://github.com/michaelsalton/LinksHouse',
    image: car,
  }

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2024',
    location: 'University of Western Ontario',
    title: 'Bachelor of Computer Science',
    content: <p>Major in Computer Science. Minor in Video Game Development</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - Present',
    location: 'Peavey Industries',
    title: 'Software Developer',
    content: (
      <p>
          At Peavey Industries, I designed and constructed a mobile Android application using Java, Kotlin, and SQL to be used by thousands
          of employees in Peavey Mart stores and warehouses across Canada. I also utilized SQL joins and sub-queries to 
          simplify complex queries involving multiple tables. I collaborated with engineers, project managers, and 
          the design team to ensure quality in all phases of developmen
      </p>
    ),
  },
  {
    date: 'August 2022 - Present',
    location: 'Project Manager',
    title: 'Western AI',
    content: (
      <p>
          At Western AI, I lead a team of student developers through the process of planning, designing, and constructing a machine-
          learning project while delegating tasks between members based on experience and skill set.
          I also hosted various workshops curated to help students improve their knowledge of programming and machine learning topics
          such as Python, data analysis, reinforcement learning, and neural network.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me on any of my social media :)',
  items: [
    {
      type: ContactType.Email,
      text: 'msalton6@gmail.com',
      href: 'mailto:msalton6@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Montreal QC, Canada',
      href: 'https://goo.gl/maps/58kGVWK4Pa3wKLCH7',
    },
    {
      type: ContactType.Instagram,
      text: '@michaelsalton_',
      href: 'https://www.instagram.com/michaelsalton_/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'msalton',
      href: 'https://www.linkedin.com/in/msalton/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/msalton/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/michaelsalton'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/michaelsalton_/'},
  {label: 'YouTube', Icon: YouTubeIcon, href: 'https://www.youtube.com/channel/UC3K0gvgaokZF4Pr6sLTsJSA'},
  {label: 'TikTok', Icon: TikTokIcon, href: 'https://www.tiktok.com/@michaelsalton'}
];
