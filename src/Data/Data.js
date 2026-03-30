import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const navLinks = [
  { name: "Home", url: "#home" },
  { name: "About Us", url: "#about" },
  { name: "Classes", url: "#classes" },
  { name: "Blog", url: "#blog" },
  { name: "Contact Us", url: "#contact" },
];

export const heroData = {
  badgeActive: "The Best",
  badgeInactive: "Fitness Club",
  title: "Work Hard To Get Better Life",
  description:
    "Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.",
  buttonText: "Get Started",
  buttonUrl: "/",

  images: {
    main: {
      src: "/images/banner/hero-banner.png",
      alt: "Fitness trainer workout banner",
    },
    circleOne: {
      src: "/images/banner/hero-circle-one.png",
      alt: "Decorative circle shape",
    },
    circleTwo: {
      src: "/images/banner/hero-circle-two.png",
      alt: "Decorative circle background",
    },
    heartRate: {
      src: "/images/banner/heart-rate.svg",
      alt: "Heart rate icon",
    },
    calories: {
      src: "/images/banner/calories.svg",
      alt: "Calories burn icon",
    },
  },
};

export const aboutData = {
  subtitle: "About Us",
  title: "Welcome To Our Fitness Gym",
  paragraphs: [
    "Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.",
    "Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.",
  ],
  button: {
    text: "Explore More",
    url: "/",
  },
  images: {
    main: { src: "/images/about/about-banner.png", alt: "Gym main banner" },
    circleOne: {
      src: "/images/about/about-circle-one.png",
      alt: "Decorative circle 1",
    },
    circleTwo: {
      src: "/images/about/about-circle-two.png",
      alt: "Decorative circle 2",
    },
    fitnessText: {
      src: "/images/about/about-fitness.png",
      alt: "Fitness text banner",
    },
    coach: {
      src: "/images/about/about-coach.jpg",
      alt: "Coach Denis Robinson",
    },
  },
  coach: {
    name: "Denis Robinson",
    role: "Our Coach",
  },
};

export const classesData = [
  {
    title: "Weight Lifting",
    para: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    image: "/images/classes/class-1.jpg",
    icon: "/images/classes/class-icon-1.png",
    targetProgress: 85,
  },
  {
    title: "Cardio & Strenght",
    para: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    image: "/images/classes/class-2.jpg",
    icon: "/images/classes/class-icon-2.png",
    targetProgress: 70,
  },
  {
    title: "Power Yoga",
    para: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    image: "/images/classes/class-3.jpg",
    icon: "/images/classes/class-icon-3.png",
    targetProgress: 90,
  },
  {
    title: "The Fitness Pack",
    para: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    image: "/images/classes/class-4.jpg",
    icon: "/images/classes/class-icon-4.png",
    targetProgress: 60,
  },
];

export const blogData = [
  {
    id: 1,
    image: "/images/blog/blog-1.jpg",
    date: "7 July 2025",
    title: "Going to the gym for the first time",
    description:
      "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam.",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.jpg",
    date: "10 July 2025",
    title: "Parturient accumsan cacus pulvinar magna",
    description:
      "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam.",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.jpg",
    date: "15 July 2025",
    title: "Risus purus namien parturient accumsan cacus",
    description:
      "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam.",
  },
];

export const footerLinks = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Classes", link: "#classes" },
  { name: "Blog", link: "#blog" },
  { name: "Contact Us", link: "#contact" },
];

export const contactInfo = [
  {
    icon: FaLocationDot,
    text: "1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad",
  },
  {
    icon: FaPhone,
    text: "+91 555 234-8765",
    link: "tel:+915552348765",
  },
  {
    icon: IoMdMail,
    text: "info@fitlife.com",
    link: "mailto:info@fitlife.com",
  },
];

export const socialLinks = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/fitgo.gym",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/fitgo.gym",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/fitgo_gym",
  },
];
export const openingHours = [
  {
    day: "Monday - Friday",
    time: "7:00Am - 10:00Pm",
  },
  {
    day: "Saturday - Sunday",
    time: "7:00Am - 3:00Pm",
  },
];
