import Contact from '../../src/views/Contact/Contact'

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with KentallTech to find the best GPS tracking solution for your boat, car, motorcycle or fleet. Email us at info@kentall-tech.com.',
  alternates: { canonical: '/contact' },
}

export default function Page() {
  return <Contact />
}
