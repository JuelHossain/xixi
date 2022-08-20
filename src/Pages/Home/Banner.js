import { Carousel } from "@mantine/carousel";
import {
  BackgroundImage,
  Button,
  Container,
  createStyles,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import BannerCard from "./BannerCard";
export default function Banner() {
  const author = {
    name: "Bill Wormeater",
    image:
      "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  };

  return (
    <Carousel
      slideSize="25%"
      breakpoints={[
        { maxWidth: "lg", slideSize: "33%", slideGap: "lg" },
        { maxWidth: "md", slideSize: "33%", slideGap: "md" },
        { maxWidth: "sm", slideSize: "50%", slideGap: "sm" },
        { maxWidth: "xs", slideSize: "100%", slideGap: "xs" },
      ]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      <Carousel.Slide>
        <BannerCard
          title={"Lipstick Package"}
          link="/"
          description={
            "Hello Mr. How Are You.Please buy this product and make your wife happy"
          }
          rating="OutStanding"
          author={author}
          image={
            "https://images.unsplash.com/photo-1627384113817-b0180ad643c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <BannerCard
          title={"Lipstick Package"}
          link="/"
          description={
            "Hello Mr. How Are You.Please buy this product and make your wife happy"
          }
          rating="OutStanding"
          author={author}
          image={
            "https://images.unsplash.com/photo-1627384113817-b0180ad643c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <BannerCard
          title={"Lipstick Package"}
          link="/"
          description={
            "Hello Mr. How Are You.Please buy this product and make your wife happy"
          }
          rating="OutStanding"
          author={author}
          image={
            "https://images.unsplash.com/photo-1627384113817-b0180ad643c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
      </Carousel.Slide>
    </Carousel>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function HeroContent({ img, title, text }) {
  const { classes, cx } = useStyles();

  return (
    <BackgroundImage
      src={img}
      className="h-96 flex justify-center items-center"
    >
      <Overlay color="#000" opacity={0.6} zIndex={0} />
      <Stack className="z-10 items-center">
        <Title className={classes.title}>{title}</Title>

        <Container size={500}>
          <Text size="lg" className={classes.description}>
            {text}
          </Text>
        </Container>

        <Group>
          <Button className={"bg-blue-500"} size="md">
            Get started
          </Button>
          <Button className={"bg-blue-500"} size="md">
            Get started
          </Button>
        </Group>
      </Stack>
    </BackgroundImage>
  );
}
