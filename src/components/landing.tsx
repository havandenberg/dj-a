import * as React from 'react';
import Typing from 'react-typing-animation';
import styled from '@emotion/styled';
import LandingImg from '../assets/images/landing.svg';
import { ContentLink, contentLinks } from '../content/links';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';

const Text = styled(ty.Text)({
  animation: 'color-change 1s infinite',
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
});

const Landing = () => (
  <l.FlexColumn justifyContent="center" height="100vh" px={[th.spacing.md, 0]}>
    <l.FlexCentered relative>
      <l.Img src={LandingImg} width={['100%', 'auto']} />
      <Typing loop>
        <Text
          bottom={[th.spacing.lg, 52]}
          fontSize={[th.fontSizes.xs, th.fontSizes.sm]}
          nowrap>
          under construction...
        </Text>
        <Typing.Delay ms={1500} />
        <Typing.Reset count={1} delay={500} />
      </Typing>
    </l.FlexCentered>
    <l.Grid
      justifyContent="center"
      gridColumnGap={th.spacing.md}
      gridRowGap={[th.spacing.lg, 0]}
      gridTemplateColumns={[`repeat(3, ${th.spacing.xl})`, `repeat(9, 1fr)`]}
      justifyItems="center"
      maxWidth={627}
      mt={th.spacing.xl}
      mx="auto">
      {contentLinks.map((contentLink: ContentLink, index: number) => (
        <ty.Anchor
          href={contentLink.href}
          key={`link-${index}`}
          rel="noopener noreferrer"
          target="_blank">
          <l.Img height={th.spacing.lg} src={contentLink.iconSrc} />
        </ty.Anchor>
      ))}
    </l.Grid>
  </l.FlexColumn>
);

export default Landing;
