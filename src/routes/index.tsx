import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import Hero from '@/components/hero'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div></div>
  )
}
