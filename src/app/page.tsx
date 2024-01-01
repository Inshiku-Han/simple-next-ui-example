import { Button } from '@nextui-org/react'
import { Header } from '@/components'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="custom-container">
        <Button>Click me</Button>
      </main>
    </div>
  )
}
