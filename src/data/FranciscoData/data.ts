

// Centralized Francisco persona data
export const franciscoData = {
  name: "Francisco",
  shortName: "Francisco",
  bio: "Engineer & Marketer",
  about: `
    <p>
      Tech wizard and status quo saboteur.
    </p>
    <p>
      My days: reading, coding, and movies.
    </p>
    <p>
      Fueled by cappuccinos and dog walks.
    </p>
    <p>
      🇨🇴 Bogotá-based.
    </p>`,
  image: "/assets/Images/profile-pictures/Francisco.jpg",
  contact: "",
  links: [
    {
      id: 1,
      name: "Email",
      link: "mailto:franciscoahurtado@icloud.com",
      icon: "simple-icons:maildotru",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/franciscoahm",
      icon: "simple-icons:linkedin",
    },
  ],
  contactLinks: [
    {
      id: 1,
      name: "Email",
      link: "mailto:franciscoahurtado@icloud.com",
      icon: "simple-icons:maildotru",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/franciscoahm",
      icon: "simple-icons:linkedin",
    },
  ],
  footerLinks: [
    // Add your footer links here
  ],
}

// Legacy exports for backward compatibility
export const {
  name: franciscoName,
  shortName: franciscoShortName,
  bio: franciscoBio,
  about: franciscoAbout,
  image: franciscoImage,
  contact: franciscoContact,
  links: franciscoLink,
  contactLinks: franciscoContactLink,
  footerLinks: franciscoFooterLink,
} = franciscoData
