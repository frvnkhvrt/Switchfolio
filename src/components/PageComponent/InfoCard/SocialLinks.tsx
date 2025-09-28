import React from "react"
import { SocialLink } from "@/types"
import { InfoTip } from "../../InfoTip"
import { Icon } from "@iconify/react"
import { LINK_ATTRIBUTES, ARIA_LABELS } from "@/constants"

interface SocialLinksProps {
  links: SocialLink[]
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {links.map((link) => (
        <InfoTip key={link.id} text={`${link.name}`}>
          <a
            className="social-card"
            href={link.link}
            target={LINK_ATTRIBUTES.target}
            rel={LINK_ATTRIBUTES.rel}
            aria-label={ARIA_LABELS.socialLink(link.name)}
          >
            <Icon icon={link.icon} aria-hidden="true" className="text-inkBlack" />
          </a>
        </InfoTip>
      ))}
    </div>
  )
}