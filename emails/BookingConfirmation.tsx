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

export function BookingConfirmationEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your LuxeSalon booking is confirmed</Preview>
      <Body style={{ backgroundColor: "#0A0A0A", color: "#F5F0E8", fontFamily: "sans-serif" }}>
        <Container style={{ margin: "0 auto", maxWidth: "600px", padding: "32px 20px" }}>
          <Section style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "32px" }}>
            <Text style={{ color: "#F0B429", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              LuxeSalon
            </Text>
            <Heading style={{ color: "#F5F0E8", fontSize: "34px", lineHeight: "1.1" }}>
              Your appointment is confirmed
            </Heading>
            <Text style={{ color: "#A89B8A", lineHeight: "1.7" }}>
              We are looking forward to welcoming you for a polished, premium salon experience.
            </Text>
            <Button
              href="https://luxesalon.com/dashboard/bookings"
              style={{
                backgroundColor: "#F0B429",
                borderRadius: "12px",
                color: "#000",
                padding: "14px 22px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Booking
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default BookingConfirmationEmail;
