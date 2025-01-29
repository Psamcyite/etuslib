import { onGetBlogPosts } from '@/actions/landing';
import NavBar from '@/components/navbar';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { pricingCards } from '../../constants/LandingPage';
import clsx from 'clsx';
import { ArrowRightCircleIcon, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import { getMonthName } from '@/lib/utils';

export default async function Home() {
  const posts = (await onGetBlogPosts()) || []; // Ensure fallback for posts if API fails

  return (
    <main>
      <NavBar />
      {/* Hero Section */}
      <section className="flex items-center justify-center flex-col mt-[80px] gap-4">
        <span className="text-sky bg-sky/20 px-4 py-2 rounded-full text-sm">
          An AI-powered sales assistant chatbot
        </span>
        <Image
          src="/assets/images/etusmail.png"
          width={500}
          height={100}
          alt="etusmail logo"
          className="max-w-lg object-contain"
        />
        <p className="text-center max-w-[500px]">
          Your AI-powered sales assistant! Embed EtusMail into any website with just a snippet of code!
        </p>
        <Button className="bg-sky font-bold text-white px-4 hover:bg-sky/80">
          Start For Free
          <ArrowRightCircleIcon size={20} />
        </Button>
        <Image
          src="/assets/images/gif/reverse.gif"
          width={400}
          height={100}
          alt="reverse gif"
          className="max-w-lg object-contain"
          unoptimized
        />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If you're not ready to commit, you can get started for free.
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-sky">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashboard?plan=${card.title}`}
                className="bg-skylight border-sky border-2 p-2 w-full text-center font-bold rounded-md hover:bg-sky/10"
              >
                Get Started
                <ArrowRightCircleIcon size={20} />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Blog Updates Section */}
      <section className="flex justify-center items-center flex-col gap-4 mt-28">
        <h2 className="text-4xl text-center">Updates</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>
      <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    alt={`${post.title} image`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()}, {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  <p>{parse(post.content.slice(0, 100))}...</p>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            No blog posts available at the moment. Please check back later.
          </p>
        )}
      </section>
    </main>
  );
}
