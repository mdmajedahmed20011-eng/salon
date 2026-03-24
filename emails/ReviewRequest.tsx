import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export function ReviewRequestEmail() {
  return (
    <Html>
      <Head />
      <Preview>Tell us about your LuxeSalon visit</Preview>
      <Body style={{ backgroundColor: "#0A0A0A", color: "#F5F0E8", fontFamily: "sans-serif" }}>
        <Container style={{ margin: "0 auto", maxWidth: "600px", padding: "32px 20px" }}>
          <Section style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "32px" }}>
            <Text style={{ color: "#F0B429", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Review request
            </Text>
            <Heading style={{ color: "#F5F0E8", fontSize: "34px", lineHeight: "1.1" }}>
              We would love your feedback
            </Heading>
            <Text style={{ color: "#A89B8A", lineHeight: "1.7" }}>
              If you enjoyed your visit, please leave a review so future guests know what to expect.
            </Text>
            <Button
              href="https://luxesalon.com/dashboard/reviews"
              style={{
                backgroundColor: "#F0B429",
                borderRadius: "12px",
                color: "#000",
                padding: "14px 22px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Leave a Review
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ReviewRequestEmail;
