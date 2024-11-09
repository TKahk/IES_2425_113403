import { createContext } from "react";
import { useContext } from "react";

const LevelContext = createContext(1);


function Section({ children }) {
    return (
      <section className="section">
        {children}
      </section>
    );
  }

function Heading({ children }) {
    const level = useContext(LevelContext);
    switch (level) {
      case 1:
        return <h1>{children}</h1>;
      case 2:
        return <h2>{children}</h2>;
      case 3:
        return <h3>{children}</h3>;
      case 4:
        return <h4>{children}</h4>;
      case 5:
        return <h5>{children}</h5>;
      case 6:
        return <h6>{children}</h6>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }

export default function Page() {
    return (
        <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
            </Section>
            </Section>
        </Section>
        </Section>
    );
}