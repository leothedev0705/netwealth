import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, CheckSquare, DollarSign, Briefcase } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <div className="space-y-8">
          <div className="image-glass-effect-wrapper relative w-full aspect-[4/3] shadow-lg">
            {/* == IMPORTANT: Add image to /public/images/about-1.jpg == */}
            {/* <Image src="/images/about-1.jpg" alt="Team discussion" layout="fill" objectFit="cover" /> */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 w-full h-full flex items-center justify-center text-gray-600">
              (About Image 1 Placeholder)
            </div>
            <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-800 text-xs p-4 rounded-full shadow-md z-20">
              Growth • Guidance • Care
            </div>
          </div>
          <div className="image-glass-effect-wrapper relative w-full aspect-[4/3] shadow-lg">
            {/* == IMPORTANT: Add image to /public/images/about-2.jpg == */}
            {/* <Image src="/images/about-2.jpg" alt="Client meeting" layout="fill" objectFit="cover" /> */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 w-full h-full flex items-center justify-center text-gray-600">
              (About Image 2 Placeholder)
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="space-y-8">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Trusted guidance for financial growth
          </h2>
          <p className="text-slate-600 leading-relaxed">
            With years of expertise in finance and consulting, we provide tailored strategies to help you achieve sustainable growth. Our commitment is to guide you with integrity, insight, and a personalized approach, structuring and planning portfolios to grow, protect, and preserve your wealth efficiently.
          </p>

          <div className="space-y-6 pt-4">
            {/* Financial Strategies */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-1">Financial Strategies</h4>
                <p className="text-slate-500 text-sm">Tailored plans to meet your unique financial needs and goals.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-1">Contact Us</h4>
                <p className="text-slate-500 text-sm">9949474099, 7981290540</p>
              </div>
            </div>
          </div>

          {/* Founder Card & Features */}
          <Card className="bg-white p-6 rounded-lg shadow-md border-slate-200">
            <CardContent className="flex flex-col md:flex-row gap-6 items-center">
              <Avatar className="h-20 w-20 border-4 border-primary/20">
                 {/* == IMPORTANT: Add image to /public/images/shrikant-agarwal.jpg == */}
                {/* <AvatarImage src="/images/shrikant-agarwal.jpg" alt="Shrikant Agarwal" /> */}
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">SA</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-bold text-lg text-slate-800">Shrikant Agarwal</h4>
                <p className="text-sm text-primary font-medium">Net Wealth India</p>
              </div>
              <div className="text-sm text-slate-600 space-y-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 mt-4 md:mt-0">
                <p className="flex items-center gap-2"><CheckSquare className="h-4 w-4 text-primary" /> Risk Management</p>
                <p className="flex items-center gap-2"><CheckSquare className="h-4 w-4 text-primary" /> Personalized Communication</p>
                <p className="flex items-center gap-2"><CheckSquare className="h-4 w-4 text-primary" /> Dedicated Support</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 