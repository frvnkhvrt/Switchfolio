import React from "react"
import { SocialLink } from "@/types"
import { InfoTip } from "../../InfoTip"
import { Icon } from "@iconify/react"

interface SocialLinksProps {
  links: SocialLink[]
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {links.map((link) => (
        <InfoTip key={link.id} text={link.name}>
          <a
            className="social-card"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.name} (opens in new tab)`}
          >
            <Icon icon={link.icon} aria-hidden="true" className="text-inkBlack dark:text-inkBlack" />
          </a>
        </InfoTip>
      ))}
    </div>
  )
}