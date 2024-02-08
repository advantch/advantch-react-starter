import { Link } from 'react-router-dom'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Page() {
  return (
    <div className="p-4 prose prose-sm w-full mx-auto max-w-5xl">
      <h1>Starer repo for advantch react frontends</h1>
      <p>
        This is the starter repo for react frontend projects.
      </p>
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Dashboard Page example</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link to="/dashboard">
                Go to dashboard
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mail</CardTitle>
            <CardDescription>Mail</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link to="/dashboard">
                Go to emails page
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
