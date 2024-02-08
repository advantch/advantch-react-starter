import * as React from 'react'
import {
  Database,
  Home,
} from 'lucide-react'

import { Nav } from './components/nav'
import { cn } from '@/lib/utils'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { useLayoutState } from '@/layouts/state.js'

// Define the tabs, secondaryTabs, and learnTabs here
const tabs = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
    variant: 'ghost',
  },
  {
    title: 'Dashboard',
    href: '/dashboard/',
    icon: Home,
    variant: 'ghost',
  },
  {
    title: 'Emails',
    href: '/emails/',
    icon: Database,
    variant: 'ghost',
  },
]

export default function ResizableLayout({ children }) {
  const { isCollapsed, setIsCollapsed, setIsExpanded } = useLayoutState()
  const windowWidth = window.innerWidth
  const defaultLayout = [265, windowWidth - 265]
  const navCollapsedSize = 4

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                        sizes,
                    )}`
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
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
