import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export function BookingReminderEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your LuxeSalon appointment is coming up soon</Preview>
      <Body style={{ backgroundColor: "#0A0A0A", color: "#F5F0E8", fontFamily: "sans-serif" }}>
        <Container style={{ margin: "0 auto", maxWidth: "600px", padding: "32px 20px" }}>
          <Section style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "32px" }}>
            <Text style={{ color: "#F0B429", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Reminder
            </Text>
            <Heading style={{ color: "#F5F0E8", fontSize: "34px", lineHeight: "1.1" }}>
              Your beauty ritual is almost here
            </Heading>
            <Text style={{ color: "#A89B8A", lineHeight: "1.7" }}>
              This is a friendly reminder that your LuxeSalon booking is approaching. We cannot wait to see you.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default BookingReminderEmail;
