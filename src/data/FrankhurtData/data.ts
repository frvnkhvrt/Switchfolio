

// Centralized Frankhurt persona data
export const frankhurtData = {
  name: "Frankhurt",
  shortName: "Frankhurt",
  bio: "Gamer & Cinephile",
  about: `
    <p>
      Words conjurer and axiom arsonist.
    </p>
    <p>
      My nights: writing, hacks, and games.
    </p>
    <p>
    Driven by Coke and digital addiction.
    </p>
    <p>
    ロムっている。
    </p>`,
  image: "/assets/Images/profile-pictures/Frankhurt.jpg",
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
