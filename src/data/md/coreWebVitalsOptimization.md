---
title: "Improving Core Web Vitals in Large Applications"
description: "Optimize LCP, CLS, and INP using realistic techniques: hydration strategy, caching, images, and performance budgets."
date: "2023-11-11"
tags: ["Performance", "Core Web Vitals", "SEO"]
readTime: 7
cover: "/images/blog/web-vitals.jpg"
---

# Improving Core Web Vitals in Large Applications

Core Web Vitals are UX signals. They also impact SEO and conversions.

## LCP (Largest Contentful Paint)
- optimize hero images
- reduce render-blocking scripts
- stream or pre-render content

## CLS (Cumulative Layout Shift)
- reserve space for images and embeds
- avoid injecting layout-changing banners
- load fonts responsibly

## INP (Interaction to Next Paint)
- reduce JS execution time
- split bundles
- avoid expensive re-renders

## Performance budgets
Set limits:
- JS size
- image weight
- route load time

## Final thoughts
Treat performance like a feature with measurable targets.
