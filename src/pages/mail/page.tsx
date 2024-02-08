import { Mail } from '@/pages/mail/components/mail'
import { accounts, mails } from '@/pages/mail/data'

export default function MailPage() {
  return (
    <div className="flex">
      <Mail
        accounts={accounts}
        mails={mails}
      />
    </div>
  )
}
