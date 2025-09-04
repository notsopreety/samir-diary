---
title: My Journey of Creating DuckyFlix
author: Samir Badaila
pubDatetime: 2025-09-03T18:30:00Z
slug: journey-of-creating-duckyflix
featured: false
draft: false
tags:
  - DuckyFlix
  - Web Development
  - Journey
description:
  The story behind building DuckyFlix — from scraping IMDB and experimenting with APIs to improving UI, integrating AI search with Gemini, and deploying on Vercel.
---

Technology has always fascinated me because of its power to transform ideas into reality.  
Every project I take on feels like a new chapter — a chance to learn, to make mistakes, and to create something that didn’t exist before.  

A few months ago, I began a journey that would challenge me in new ways: building a movie streaming platform of my own. What started as inspiration from a friend’s small project gradually turned into **[DuckyFlix](https://ducky.samirb.com.np/)**, a platform that combines scraping, APIs, and AI-powered search.  

---

## How It Started  
Around three months ago, my friend **Milan Bhandari** created a simple movie streaming site by scraping **Soap2Day**. His project used:  

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js with Express.js, Cheerio, and Axios  
- **Extras:** Scraped some [IMDB](https://www.imdb.com/) data  

The project was simple but effective, and it inspired me. I thought, *why not try something bigger, cleaner, and cooler?*  

I already had some knowledge of scraping and reverse engineering, so I decided to take the challenge seriously.  

## Scraping IMDB and TMDB  
My first goal was to scrape the **entire [IMDB](https://www.imdb.com/) dataset** — not just basics, but:  

- Search functionality  
- Full details of every title  
- Trending and popular content  
- News and updates  

Since [IMDB](https://www.imdb.com/) is mostly static, **Cheerio** worked perfectly for scraping, giving me a lightweight backend.  

I also integrated the **[TMDB API](https://developer.themoviedb.org/docs/getting-started)**, which is the second biggest movie database. This made the backend even stronger.  

## Streaming Solution  
I wasn’t in a position to host every movie on my own CDN — the cost would have been impossible.  

Instead, I relied on public streaming providers:  

- [VidSrc](https://vidsrc.xyz/)  
- [SuperEmbed](https://www.superembed.stream/)  

They handle hosting for free, and I simply embed their players (with ads) for movies and series.  

## Choosing Next.js & Vercel  
For the frontend, I went with **Next.js**, hosted on **Vercel**. The reason was simple:  
Vercel provides the best support and stability for Next.js projects.  

At first, though, my **UI was awful**. People didn’t like it, and honestly, neither did I. I was too focused on backend logic.  

To improve, I used:  

- **[Cursor AI IDE](https://www.cursor.com/)**  
- **[V0 by Vercel](https://v0.dev/)**  

These helped me enhance the design and polish the user experience.  

## Continuous Updates & AI Features  
I committed to **constantly updating** the project. Every commit brought improvements, fixes, or experiments.  

One thing I noticed: most streaming sites had only a *basic search feature*.  

That gave me an idea — why not build something smarter?  

So, I integrated **[Google’s Gemini AI](https://ai.google.dev/tutorials/node_quickstart)** into [DuckyFlix](https://ducky.samirb.com.np/). By feeding it all my backend APIs, I designed an **AI-powered search and recommendation system**.  

👉 Check it here: [AI Recommendations](https://ducky.samirb.com.np/ai-recommendation)  

Now, instead of plain search results, users get **smart, context-aware suggestions**.  

## Still in Progress  
[DuckyFlix](https://ducky.samirb.com.np/) is far from finished. I’m still working on improving performance, polishing the UI, and exploring new features.  

But looking back, I’ve learned so much already — from scraping and APIs to frontend design, AI integration, and deployment.  

This journey started with inspiration from a friend’s small project, but it’s becoming something bigger: a platform where I can experiment, learn, and build.  

And the journey continues... 🚀  

— *Samir*  
