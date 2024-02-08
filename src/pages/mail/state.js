import { create } from 'zustand'

export const useMailLayoutState = create(set => ({
  collapseSideNav: false,
  showNavbar: true,
  isCollapsed: false,
  setIsCollapsed: () => set({ isCollapsed: true }),
  setIsExpanded: () => set({ isCollapsed: false }),
}))
