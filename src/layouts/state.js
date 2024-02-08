import { create } from 'zustand'

export const useLayoutState = create(set => ({
  sidebarOpen: false,
  collapseSideNav: false,
  showNavbar: true,
  isCollapsed: false,
  setIsCollapsed: () => set({ isCollapsed: true }),
  setIsExpanded: () => set({ isCollapsed: false }),
}))
