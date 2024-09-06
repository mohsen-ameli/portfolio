import Container from "@/components/Container"
import Title from "@/components/Title"
import { Node } from "@/types/main.type"

export const metadata = {
  title: "Mohsen's Portfolio | About",
  description: "Some information about me.",
}

const Layout = ({ children }: Node) => {
  return (
    <Container className="pt-8 md:pt-32">
      <Title title="About Me" />
      {children}
    </Container>
  )
}

export default Layout
