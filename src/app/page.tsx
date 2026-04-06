"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmall"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "Collection",          id: "products"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Drip Hungary"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars"}}
      title="Step Into Authentic Drip Culture"
      description="Premium sneakers, curated streetwear, and expert guidance. Experience the culture that moves Budapest."
      tag="Authentic Curation"
      buttons={[
        {
          text: "Shop the Collection",          href: "#products"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-wearing-futuristic-sneakers_23-2151005687.jpg",          imageAlt: "Designer luxury sneaker product"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-friends-posing-stairs_23-2149534756.jpg",          imageAlt: "Streetwear enthusiast in urban setting"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by 500+ sneakerheads"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Air Jordan 1 Retro",          price: "€349",          variant: "Classic Blue",          imageSrc: "http://img.b2bpic.net/free-photo/empty-deluxe-ski-complex-winter_482257-76604.jpg",          imageAlt: "Air Jordan 1 Retro"},
        {
          id: "p2",          name: "Yeezy Boost 350",          price: "€299",          variant: "Earth Tone",          imageSrc: "http://img.b2bpic.net/free-photo/suitcase-packed-with-travel-paraphernalia_23-2149433945.jpg",          imageAlt: "Yeezy Boost 350"},
        {
          id: "p3",          name: "Nike Dunk Low",          price: "€249",          variant: "Neutral Grey",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-sitting-outdoors_23-2148950600.jpg",          imageAlt: "Nike Dunk Low"},
        {
          id: "p4",          name: "Off-White x Nike",          price: "€699",          variant: "Special Edition",          imageSrc: "http://img.b2bpic.net/free-photo/mens-shoes-elegant-clothes-holiday-theme-wedding_78826-2197.jpg",          imageAlt: "Off-White x Nike"},
        {
          id: "p5",          name: "New Balance 550",          price: "€189",          variant: "White/Green",          imageSrc: "http://img.b2bpic.net/free-photo/white-lather-loafer-mules-shoes-beige_53876-97143.jpg",          imageAlt: "New Balance 550"},
        {
          id: "p6",          name: "Travis Scott x Nike",          price: "€899",          variant: "Dark Mocha",          imageSrc: "http://img.b2bpic.net/free-photo/blonde-young-woman-sitting-stool-painting-sketch-workshop_23-2147889800.jpg",          imageAlt: "Travis Scott x Nike"},
      ]}
      title="Curated Exclusives"
      description="Explore our handpicked selection of limited edition sneakers and luxury streetwear."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "The Drip Experience"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/bar-concept_23-2147798086.jpg",          alt: "Drip Hungary Interior"},
        {
          type: "text",          content: "We don't just sell products; we curate culture. Located in the heart of Budapest, Drip Hungary is a destination for collectors and insiders who value authenticity and expert curation. Our staff are enthusiasts dedicated to helping you find the perfect fit, ensuring a digital-to-physical experience that bridges the gap between online convenience and in-store community."},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Markus V.",          handle: "@markusv",          testimonial: "Authentic products and amazing curation. The staff really know their culture.",          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-man-posing-outdoors_23-2149409719.jpg"},
        {
          id: "2",          name: "Elena K.",          handle: "@elenak",          testimonial: "Seamless shopping experience and delivery was faster than expected.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-smiling-brunette-model-dressed-summer-hipster-jacket-jeans-clothes-trendy-girl-sitting-bench-street-funny-positive-woman-sunglasses_158538-1655.jpg"},
        {
          id: "3",          name: "Peter S.",          handle: "@peters",          testimonial: "The place to be if you're looking for genuine, rare streetwear in Budapest.",          imageSrc: "http://img.b2bpic.net/free-photo/man-with-plant-posing-black-white-medium-shot_23-2149411401.jpg"},
        {
          id: "4",          name: "Anna Z.",          handle: "@annaz",          testimonial: "Professional, knowledgeable, and the selection is top-tier. Highly recommended.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-woman-with-plants_23-2149383704.jpg"},
        {
          id: "5",          name: "Bence L.",          handle: "@bencel",          testimonial: "Best sneaker retail spot in Hungary. Always genuine and always fresh.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5124.jpg"},
      ]}
      title="Culture Speaks"
      description="What our community says about their experience at Drip Hungary."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="Join the Drip Community"
      description="Sign up for exclusive drops, style insights, and the latest sneaker news straight to your inbox."
      tag="Stay Informed"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="DRIP HUNGARY"
      copyrightText="© 2025 Drip Hungary. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
