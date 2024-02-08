import * as React from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { buttonVariants } from '@/components/ui/button'

interface NavLink {
  title: string
  label?: string
  icon: LucideIcon
  href: string
  variant: 'default' | 'ghost'
  isExternal?: boolean
}
interface NavProps {
  isCollapsed: boolean
  links: NavLink[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathname = window.location.pathname
  const isActive = (href: string) => {
    if (href === '/')
      return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 gap-y-4 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed
            ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={link.href}
                    className={cn(
                      buttonVariants({ variant: link.variant, size: 'icon' }),
                      'h-9 w-9',
                      link.variant === 'default'
                      && 'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                      isActive(link.href) ? 'bg-secondary !dark:bg-background' : 'dark:text-muted-foreground',
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
              )
            : (
              <Link
                key={index}
                to={link.href}
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  link.variant === 'default'
                  && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start',
                  isActive(link.href) && 'bg-secondary !dark:bg-background ',
                  'py-5 rounded-md dark:text-muted-foreground',
                )}
              >
                <link.icon className="h-4 w-4 mr-2" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      'ml-auto',
                      link.variant === 'default' && 'text-background dark:text-white',
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
              ),
        )}
      </nav>
    </div>
  )
}
