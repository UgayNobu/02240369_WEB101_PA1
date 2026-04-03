# Medium Clone - WEB101 Practical Assignment 1

**Student ID:** 02240369  
**Module:** WEB101  
**Date:** April 3, 2026  
**GitHub Repository:** https://github.com/UgayNobu/02240369_WEB101_PA1

---

## Overview
Here I tried my very best to remake the homepage of Medium by using next.js and Tailwind CSS. My goal was to learn how the fronend framework React works along with components and also the abelity to divide up large web pages in small parts that are reusable.

---

## Functionality
This web application has the following features:
- A bar whcih allows navigations that has search, write and sign-in buttons
- Similarly a left sidebar that contains links such as Home, Library, Profile, Stories and Stats
- A main home page that shows a blog posts like feeds in facebook.
- Similarly a right sidebar that contains links such as some recommended topics and Staff Picks.
- It is very responsive as the layout changes according to the size for desktop, tablet and mobile views.
- Like in tiktok the tabs can be swaped between ForYou and Following.

---

## Component Structure
Before doing anything, I first of all I made a planing to devide the web pages into smaller sections like the follwing:
- **index.js** - To display the main page containing all the blogs
- **Navbar.js** - To show the hearder navigation like the search buttons
- **Sidebar.js** - Similarly to show the left section like home link
- **PostList.js** - To show all the posts from data
- **PostCard.js** - For only one post display
- **RightSidebar.js** -  Similarly to show the right section like the recommended topics

---

## Why I Used These Components
I am using it bwause of a simple idea that one ccomponent must only do one job wehere:
- **Navbar** - only for the hearder top bar navigation
- **Sidebar** - only for the side links pagination
- **PostCard** - only to show one post at time which is reuseable
- **PostList** - only to loop the display of lots of PostCards as one
- **RightSidebar** - only a extra suggestions or topics
Thus, making the code very easy and simple to handle even by myself

---

## Data 
This is just the data or infromation for the posts that i kept in the data/posts.js for now since here is no DB connection which will be later coming where i will retrive the data from there.For now its just some sample post data about few bhutanese people that is in JSON format where each post contains id,title,description,author,date,read time,claps,comments and tag. This data will be later going to the DB after backend API connections.

---

## Responsive Design
This web application is a fully resposive design for desktop, tablet and mobile views as the layout changes according to the size.
For instance the Mobile has only one cloumn since I removed the sidebars, the Tablet is just a little bit adjusted with little less contents in it and finally the Desktop has all the 3 columns with full contents


---

## Tech Stack
The tech stack i used for the frontend framework is Next.js, for the styling part i used Tailwind CSS and for the programe language i used is JavaScript to make it dyanamic.

---

## Dependencies
The extra third party dependencies i used are the following:
- `next` - React framework
- `tailwindcss` - Utility-first CSS framework
- `eslint` - Code quality checker

---

## How to Run
Follow the following steps to run the web application:
```bash
git clone https://github.com/UgayNobu/02240369_WEB101_PA1.git
cd 02240369_WEB101_PA1/medium-clone
npm install
npm run dev
```
The open the http://localhost:3000

---

## Reference
- Original site recreated: https://medium.com
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs