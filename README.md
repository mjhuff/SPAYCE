# CodesmithSoloProject

## Lessons Learned

NOTE: These points are things you should emphasize you know, so make sure to thoroughly understand them by the time of interview. 

Techs Learned (New):
1) Next.js (about SSG vs SSR, image/video quality and best practices for making things faster)
2) Tailwind (bootstrapping CSS and in-line styling)
3) Planetscape (connecting to a serverless platform, getting some more CRUD practice with postgres)
4) Prisma (as an extension of planetscale -- using this for the first time)
5) Importing and utilizing custom fonts (and the common limitations of custom fonts, specifically respecting container elements, being mobile/non-first design platform unfriendly)
NOTE: Figure out why front-end and back-end need to run on different ports?

Techs Practiced
1) React (lots of work with components, passing around state, thinking about which components are stateful vs. dumb, using hooks, getting into useMemo, useCallback a little bit)
2) Infinite Scrolling (how to implement, general way it works. Find a more reactive solution to your infinite scrolling).
3) Importing/Utilizing 3rd party libraries (and conflicts with next.js). Specifically the globe. A globe.gl dependency required document.window, which doesn't work with Next.js, since it renders on the server first)
4) Suspense/Rendering pages without data fully present. Best practices with using the Suspense hook. Problems with using useEffect (but doing it anyways)
5) Linking a front-end to a backend. It's really a challenge.
6) UI/UX -- interesting not doing getStaticProps and doing it the suspensful way. I really need to look into if my solution was better. I'm not too sure it is, because getStaticProps() likely caches.
7) Bloat --- thinking about if dependencies are really worth the TTL (and other buzzwords besides TTL)

Major Technical Problems:
1) Iframes - specifically how you can't specifiically select and manipulate elements -- double check this, but I'm pretty sure it's true.
2) Modal -- working with top level components in Next.js is tricky, especially conditionally rendering a div on certain pages. SOLUTION: How do you actually work around this? I came up with a hacky solution by rendering it lower.  
3) Working with Next.js. Just how under the hood a lot of stuff is, and you really have to dive into documentation and go down a paper trail to learn more about it.
4) Balancing pumping out features vs. writing clean code vs. learning when under a deadline. Being able to pivot is definitely a skill. General flowchart of getting out MVP features -> making things look presentable -> refactoring/optimizing -> reflecting on challenges/documenting -> learning. 
5) Connecting the backend to the frontend. Documentation/guides is VERY helpful here. Being very slow and intentional. 
6) I learned several  major overarching lessons during this first project. 1) Build something small, test that it works, then continue. Never write code too long without testing. Always think of a way to test what you're doing each step of the way. The best way to isolate problems is to build in an isolated sequence. 2) Always map out your strategy before you code. Think about what's MVP, draw out websites, think about state/databases from a user-first perspective (at least as a full-stack engineer, it helped me). 3) Have a strategy for pivoting. Learn to balance full on doing scrapping and trying a different approach vs. trying to code it through vs. taking a break by working on something else then coming back to it. Also think about the priority of what's important to revisit.

Minor Technical Problems:

PROBLEM: Video encoding -learned that firefox does not use h.264, which is what I recorded my video on (using OBS). SOLUTION:

## General Goals

[x] Create a React-based site using Next.js for SSR.\n

[x] Have a navbar on left that links to different pages...uses the cool globe library for ISS and auto load/scroll for Mars API.

[x] Use Tailwind to do the CSS. For page loaders, use animate-pulse! Can do this over fade in.

[?] Use webpack and optimize? (might not be very needed with Next.js) 5. Have users login to see their favorite saved space photos - use planetscale for postgres db. (stretch) 

[]. D3 Animations to spruce it up. (stretch) 

[x]. Custom fonts (stretch) 

[]. Style iframes (stretch) 

9. Move more data to database (stretch)

# Notes

I believe Next.js has a specific folder and file name scheme to get things to work. I'd double check this before delving in too deep.
I'd avoid redux/redux toolkit unless you have time. There's very little state management in this application outside of a form or two.

# Landing Page

Would be cool to have some space video background (options saved to mjhuff/videos folder) and then links to the different pages.

# ISS Page (Create First)

Have the globe with ISS, people count, and the ability to click on each person's name to open up an iframe to wikipedia for their page.

# Mars Rover (Create Second) (stretch)

Have Mars (Photo) Rover API. Impliment with infinite scrolling.

# Space Bodies Page (Create Third) (stretch+)

Maybe some cool interactive map that loads API data. You may have to hard code which bodies are selectable.
