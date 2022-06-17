import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Sparsh Mehta <br />

      </SectionTitle>
      <SectionText>
        Frontend Developer || Hybrid Mobile Development
      </SectionText>
      <Button onClick={() => window.location = "https://drive.google.com/file/d/1Tv4fWjD1XyovsZl_yhdDr7UBGcz8SRIS/view?usp=sharing"}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;