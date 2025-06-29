'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

export const FooterSection = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:anuragray28@gmail.com',
      name: 'email',
    },
    {
      icon: MessageCircle,
      href: 'https://t.me/anuragray',
      name: 'telegram',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/aray28',
      name: 'linkedin',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Anurag Ray. Building the future of Web3
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={`footer-social-${social.name}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 