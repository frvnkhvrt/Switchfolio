

// Centralized Frankhurt persona data
export const frankhurtData = {
  name: "Frankhurt",
  bio: "Coder + Gamer + Cinephile",
  about: `
    <p>
      Code conjurer and axiom arsonist.
    </p>
    <p>
      My nights thrive on writing, hacking, and digital addiction.
    </p>
    <p>
    Driven by Coke sips and midnight dog walks.
    </p>
    <p>
    Lurking.
    </p>`,
  image: "/assets/Images/pfps/Frankhurt.png",
  contact: "",
  links: [
    {
      id: 1,
      name: "Twitter",
      link: "https://twitter.com/frvnkhvrt",
      icon: "simple-icons:x",
    },
    {
      id: 2,
      name: "Instagram",
      link: "https://instagram.com/frvnkhvrt",
      icon: "simple-icons:instagram",
    },
  ],
  contactLinks: [
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/frvnkhvrt",
      icon: "simple-icons:x",
    },
    {
      id: 3,
      name: "Instagram",
      link: "https://instagram.com/frvnkhvrt",
      icon: "simple-icons:instagram",
    },
  ],
  footerLinks: [
    // Add your footer links here
  ],
}

// Legacy exports for backward compatibility
export const {
  name: frankhurtName,
  bio: frankhurtBio,
  about: frankhurtAbout,
  image: frankhurtImage,
  contact: frankhurtContact,
  links: frankhurtLink,
  contactLinks: frankhurtContactLink,
  footerLinks: frankhurtFooterLink,
} = frankhurtData
