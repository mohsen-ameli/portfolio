import Container from "@/components/Container"
import Title from "@/components/Title"

const Credits = () => {
  return (
    <Container className="flex flex-col gap-8">
      <Title title="Credits" />

      <div>
        &quot;Hammer of Dwarf&quot; (https://skfb.ly/ooHYo) by RomanGurd is
        licensed under Creative Commons Attribution
        (http://creativecommons.org/licenses/by/4.0/).
      </div>

      <div>
        &quot;Stylized Battle Hammer&quot; (https://skfb.ly/6X8UM) by em_kei is
        licensed under Creative Commons Attribution
        (http://creativecommons.org/licenses/by/4.0/).
      </div>

      <div>
        Stormtrooper by https://sketchfab.com/strykerdoesgames,
        https://creativecommons.org/licenses/by/4.0/
      </div>
    </Container>
  )
}

export default Credits
