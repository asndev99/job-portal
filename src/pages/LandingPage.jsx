import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faq from "../data/faq.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-10">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl font-extrabold sm:text-4xl lg:text-8xl py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get <img src="logo.png" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of jobs listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center px-5 sm:px-0">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-jobs">
          <Button size="xl" variant="destructive">
            Post A Job
          </Button>
        </Link>
      </div>
      <Carousel className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <img src="/banner.jpeg" className="w-full rounded-2xl" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seeker</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            Search And Apply For Jobs, track applications, and more
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employeers</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            Post Job,manage applications and find the best candidate
          </CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible>
        {faq.map((item, index) => {
          return (
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;
