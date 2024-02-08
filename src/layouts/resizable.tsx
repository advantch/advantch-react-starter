import * as React from 'react'
import {
  Database,
  Home,
} from 'lucide-react'

import { Nav } from './components/nav'
import { cn } from '@/lib/utils'
import { routes } from '@/lib/routes'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { useLayoutState } from '@/layouts/state.js'

// Define the tabs, secondaryTabs, and learnTabs here
const tabs = [
  {
    title: 'Home',
    href: routes.home,
    icon: Home,
    variant: 'ghost',
  },
  {
    title: 'Dashboard',
    href: routes.dashboard,
    icon: Home,
    variant: 'ghost',
  },
  {
    title: 'Emails',
    href: routes.mail,
    icon: Database,
    variant: 'ghost',
  },
]

export default function ResizableLayout({ children }) {
  const { isCollapsed, setIsCollapsed, setIsExpanded } = useLayoutState()
  const windowWidth = window.innerWidth
  const defaultLayout = [200, windowWidth - 200]
  const navCollapsedSize = 4

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={10}
          maxSize={15}
          onCollapse={() => {
            setIsCollapsed()
          }}
          onExpand={() => {
            setIsExpanded()
          }}
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
        >
          <Nav
            isCollapsed={isCollapsed}
            links={tabs}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
