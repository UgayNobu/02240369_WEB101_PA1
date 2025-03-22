# Inspirobot Recreation Project

## Project Overview

This is my recreation of the [Inspirobot](https://inspirobot.me/) website using React. Inspirobot is this cool AI that generates random "inspirational" quotes with images. I tried to implement the main features while learning React component architecture.

For this assignment, I chose Inspirobot because:
1. It has a simple but interesting UI
2. It has clear components that can be reused
3. It interacts with an API
4. I really like the concept of AI-generated quotes

## Component Structure

I broke down the site into these components:


### What Each Component Does

- **Header**: Just the logo and navigation stuff at the top
- **QuoteGenerator**: The main part where you generate quotes
  - **GenerateBtn**: The button you click to make a new quote
  - **QuoteDisplay**: Shows the quote image after its generated
  - **ShareBtns**: Buttons to share on social media
- **InfoSection**: Just some text about what Inspirobot is
  - **InfoCard**: Reusable card component for different info sections
- **Footer**: Links and copyright info at the bottom
  - **FooterLinks**: Navigation links in the footer
  - **SocialIcons**: Social media icons

## Implementation Decisions

### Why Next.js?

I chose Next.js because:
- It has routing built-in
- It's easier to deploy
- Create React App is deprecated now
- It has good documentation

### State Management

I just used useState and useEffect hooks since the app is pretty simple. Didn't need Redux or anything complicated. The main state I needed to track was:

- The current quote image URL
- Loading state while generating a quote
- Error state if the API call fails
- Whether the mobile menu is open or closed

### Data Source

The app gets data from the Inspirobot API. When you click the generate button, it calls their API and gets back an image URL with a quote on it. The API endpoint is:


This returns a simple text string with the URL to the generated image. I use this URL to display the image in the QuoteDisplay component.

### Styling

I used Tailwind CSS because:
- It's faster to build UIs
- I don't have to switch between files
- It handles responsive design well
- I'm still learning CSS and Tailwind makes it easier

I tried to match the original Inspirobot color scheme, which is mainly dark with purple/pink accents. I used Tailwind's gradient classes for the buttons and headings to match the original site's aesthetic.

## Third-Party Dependencies

- **Next.js** - The React framework
- **Tailwind CSS** - For styling
- **Lucide React** - For icons
- **Axios** - For API calls
- **React-Share** - For the social media buttons

## Responsive Design

I made the site work on different screen sizes:

- **Mobile** (phones): Everything stacks vertically, hamburger menu for navigation
- **Tablet**: Some things go side by side, info cards in a 2-column grid
- **Desktop**: Full layout with more space, horizontal navigation

I used Tailwind's responsive classes (sm:, md:, lg:) to handle most of this. Some parts were tricky to get right, especially the quote display on small screens.

Here's how I handled specific responsive challenges:

1. **Navigation**: Hamburger menu on mobile, horizontal links on desktop
2. **Quote Display**: Smaller image on mobile, larger on desktop
3. **Info Section**: Single column on mobile, 2 columns on tablet/desktop
4. **Buttons**: Larger touch targets on mobile

## Testing

I tested the site on:
- Chrome and Firefox (didn't have time to test Safari properly)
- My iPhone and my friend's Android
- My laptop and desktop

There's still a small issue with the footer on some mobile screens that I need to fix. The social icons sometimes overlap with the text on very small screens.

I also found and fixed these issues during testing:
- The API call sometimes failed on slow connections
- The share buttons didn't work properly on mobile
- The quote image was too large on some screens

## Functionality

The main functionality of my application includes:

1. **Quote Generation**: Users can click the "Generate" button to create a new inspirational quote with image
2. **Responsive Navigation**: The menu adapts to different screen sizes
3. **Share Functionality**: Users can share quotes on social media or download them
4. **Information Display**: Users can learn about Inspirobot through the info section

## Setup and Installation

Thought for 1 second```markdown project="Inspirobot Recreation" file="README.md"
...
```

App
├── Header
│   ├── Logo
│   └── Nav
├── QuoteGenerator
│   ├── GenerateBtn
│   └── QuoteDisplay
│       ├── Image
│       └── ShareBtns
├── InfoSection
│   └── InfoCard
└── Footer
├── FooterLinks
└── SocialIcons

```plaintext

### What Each Component Does

- **Header**: Just the logo and navigation stuff at the top
- **QuoteGenerator**: The main part where you generate quotes
  - **GenerateBtn**: The button you click to make a new quote
  - **QuoteDisplay**: Shows the quote image after its generated
  - **ShareBtns**: Buttons to share on social media
- **InfoSection**: Just some text about what Inspirobot is
  - **InfoCard**: Reusable card component for different info sections
- **Footer**: Links and copyright info at the bottom
  - **FooterLinks**: Navigation links in the footer
  - **SocialIcons**: Social media icons

## Implementation Decisions

### Why Next.js?

I chose Next.js because:
- It has routing built-in
- It's easier to deploy
- Create React App is deprecated now
- It has good documentation

### State Management

I just used useState and useEffect hooks since the app is pretty simple. Didn't need Redux or anything complicated. The main state I needed to track was:

- The current quote image URL
- Loading state while generating a quote
- Error state if the API call fails
- Whether the mobile menu is open or closed

### Data Source

The app gets data from the Inspirobot API. When you click the generate button, it calls their API and gets back an image URL with a quote on it. The API endpoint is:

```

[https://inspirobot.me/api?generate=true](https://inspirobot.me/api?generate=true)

```plaintext

This returns a simple text string with the URL to the generated image. I use this URL to display the image in the QuoteDisplay component.

### Styling

I used Tailwind CSS because:
- It's faster to build UIs
- I don't have to switch between files
- It handles responsive design well
- I'm still learning CSS and Tailwind makes it easier

I tried to match the original Inspirobot color scheme, which is mainly dark with purple/pink accents. I used Tailwind's gradient classes for the buttons and headings to match the original site's aesthetic.

## Third-Party Dependencies

- **Next.js** - The React framework
- **Tailwind CSS** - For styling
- **Lucide React** - For icons
- **Axios** - For API calls
- **React-Share** - For the social media buttons

## Responsive Design

I made the site work on different screen sizes:

- **Mobile** (phones): Everything stacks vertically, hamburger menu for navigation
- **Tablet**: Some things go side by side, info cards in a 2-column grid
- **Desktop**: Full layout with more space, horizontal navigation

I used Tailwind's responsive classes (sm:, md:, lg:) to handle most of this. Some parts were tricky to get right, especially the quote display on small screens.

Here's how I handled specific responsive challenges:

1. **Navigation**: Hamburger menu on mobile, horizontal links on desktop
2. **Quote Display**: Smaller image on mobile, larger on desktop
3. **Info Section**: Single column on mobile, 2 columns on tablet/desktop
4. **Buttons**: Larger touch targets on mobile

## Testing

I tested the site on:
- Chrome and Firefox (didn't have time to test Safari properly)
- My iPhone and my friend's Android
- My laptop and desktop

There's still a small issue with the footer on some mobile screens that I need to fix. The social icons sometimes overlap with the text on very small screens.

I also found and fixed these issues during testing:
- The API call sometimes failed on slow connections
- The share buttons didn't work properly on mobile
- The quote image was too large on some screens

## Functionality

The main functionality of my application includes:

1. **Quote Generation**: Users can click the "Generate" button to create a new inspirational quote with image
2. **Responsive Navigation**: The menu adapts to different screen sizes
3. **Share Functionality**: Users can share quotes on social media or download them
4. **Information Display**: Users can learn about Inspirobot through the info section

## Setup and Installation

1. Clone the repo
```

git clone [https://github.com/myusername/inspirobot-react.git](https://github.com/myusername/inspirobot-react.git)
cd inspirobot-react

```plaintext

2. Install dependencies
```

npm install

```plaintext

3. Run the dev server
```

npm run dev

```plaintext

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build and Deploy

To build for production:
```

npm run build

```plaintext

I deployed it to Vercel by connecting my GitHub repo. The live demo is available at: [https://inspirobot-recreation.vercel.app](https://inspirobot-recreation.vercel.app)

## Challenges I Faced

- Getting the API to work was tricky at first
- Making the quote display look good on all screen sizes
- Understanding how to structure components properly
- Figuring out how to handle the loading state while waiting for the API
- Implementing the share functionality across different platforms

## Future Improvements

If I had more time, I would:
- Add a gallery to save favorite quotes
- Make the animations smoother
- Add more customization options
- Fix the mobile footer issue
- Implement the "Mindfulness Mode" feature from the original site
- Add unit tests for the components

## What I Learned

This project helped me understand:
- How to break a site down into React components
- Working with APIs
- Responsive design
- How to structure a React project
- The importance of testing across different devices

Overall, this was a fun project to work on and I learned a lot about React and front-end development! The most valuable lesson was understanding how to identify reusable components and create a proper component hierarchy.

## Component Architecture Diagram

Here's a simple diagram of how the components interact:

```

+-------------+
|    App      |
+------+------+
|
+---------------+---------------+
|               |               |
+------v------+ +------v------+ +------v------+
|   Header    | |QuoteGenerator| |   Footer    |
+------+------+ +------+------+ +-------------+
|              |
+------v------+       |
|     Nav     |       |
+-------------+ +-----v------+
|QuoteDisplay|
+------------+

```plaintext

This structure allows for good separation of concerns and makes the code more maintainable. Each component has a single responsibility, following the Single Responsibility Principle.
```