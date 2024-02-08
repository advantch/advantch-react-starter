import { atom, useAtom } from 'jotai'

import type { Mail } from '@/pages/mail/data'
import { mails } from '@/pages/mail/data'

interface Config {
  selected: Mail['id'] | null
}

const configAtom = atom<Config>({
  selected: mails[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
