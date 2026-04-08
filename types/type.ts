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

