# CodesmithSoloProject

## General Goals

1. Create a React-based site using Next.js for SSR.
2. Have a navbar on left that links to different pages...uses the cool globe library for ISS and auto load/scroll for Mars API.
3. Use Tailwind to do the CSS.
4. Have users login to see their favorite saved space photos - use planetscale for postgres db. (stretch)
5. D3 Animations to spruce it up. (stretch)

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
