import { FounderCardProps } from "@/types/about-us.types";
import { FiPhoneCall, FiMail, FiHome } from "react-icons/fi";

export const FoundersData: FounderCardProps[] = [
  {
    name: "John Doe",
    role: "Co-Founder & CEO",
    image: "/images/founders/john_doe.jpg"
  },
  {
    name: "Jane Smith",
    role: "Co-Founder & CTO",
    image: "/images/founders/jane_smith.jpg"
  }
]

export const contactInfoData = [
  {
    id: 1,
    icon: FiPhoneCall,
    title: "Hotline",
    details: ["+880 1325 875 955", "(24/7 WhatsApp Support)"],
  },
  {
    id: 2,
    icon: FiMail,
    title: "Email Us",
    details: [
      "info@hostfame.com (Management)",
      "Trade License ID: TRAD/CHTG/005863/2023",
    ],
  },
  {
    id: 3,
    icon: FiHome,
    title: "Address",
    details: [
      "Bangladesh Office : Kayobollodham R/A, Ferozshah, Akbarshah, Chattogram.",
      "USA Office : 75 E 3rd St, Sheridan, WY 82801, USA.",
    ],
  },
];



