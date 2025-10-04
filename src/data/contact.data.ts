import { FiCalendar, FiMessageCircle, FiPhoneCall } from "react-icons/fi";

export const ContactAskAQuestionData = {
  eyebrow: 'Got a question?',
  title: 'Talk to a real human, fast.',
  tagline:
    'Skip the long forms. Message us and we’ll match you to the right solution for your business, usually within minutes.',
   bullets: [
    { icon: FiPhoneCall, text: 'Free discovery call' },
    { icon: FiMessageCircle, text: 'No bots, experts only' },
    { icon: FiCalendar, text: 'Same-day scheduling' },
  ],
  stats: [
    { label: 'Avg. first response', value: '< 15 min' },
    { label: 'Customer satisfaction', value: '98%' },
    { label: 'Time zones covered', value: '24/7' },
  ],
  image: {
    src: '/uploads/2024/03/contact-form.png.webp',
    alt: 'Envelope and paper plane illustration',
  },
  cta: {
    label: 'Book a quick chat',
    href: 'https://tawk.to/chat/67f13177a1155b1916a6f189/1io32ifig',
  },
  preferText: "Prefer email? We’ll follow up wherever you like."
};