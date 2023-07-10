import Container from "@/components/Container"
import Title from "@/components/Title"
import { Node } from "@/types/main.type"

export const metadata = {
  title: "Mohsen's Portfolio | Contact",
  description: "This is the contact page of my portfolio.",
}

const Layout = ({ children }: Node) => {
  return (
    <Container>
      <Title title="Contact Me!" />
      {children}
    </Container>
  )
}

export default Layout
