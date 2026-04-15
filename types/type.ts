export interface NavLink {
  title: string
  href: string
}

export interface ContactButton {
  label?: string
  href?: string
}

export interface SiteHeader {
  logoUrl?: string | null
  navLinks?: NavLink[]
  contactButton?: ContactButton | null
}

export type { SiteHeader as HeaderProps }

// Footer Types
export interface SocialLink {
  platform: string
  url: string
}

export interface SiteFooter {
  companyName?: string
  logo?: {
    asset?: {
      url?: string
    }
  }
  socialLinks?: SocialLink[]
  copyright?: string
}

export type { SiteFooter as FooterProps }

export interface BannerCta {
  label: string
  href: string
}

export interface BannerSocialLink {
  platform: string
  href: string
}

export interface BannerProps {
  pretitle?: string
  title?: string
  description?: string
  primaryCta?: BannerCta
  secondaryCta?: BannerCta
  socialLinks?: BannerSocialLink[]
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  secondaryImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
}

export interface SkillSlideCard {
  heading?: string
  percent?: string
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
}

export interface SkillSliderProps {
  sectionTitle?: string
  sectionSubtitle?: string
  cards?: SkillSlideCard[]
}

