import { Mail } from '@/pages/mail/components/mail'
import { accounts, mails } from '@/pages/mail/data'
import ResizableLayout from '@/layouts/resizable.tsx'

export default function MailPage() {
  return (
    <ResizableLayout>
      <Mail
        accounts={accounts}
        mails={mails}
      />
    </ResizableLayout>
  )
}
