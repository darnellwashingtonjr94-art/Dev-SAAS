model User {
  id               String    @id @default(cuid())
  email            String    @unique
  name             String?
  emailVerified    DateTime?
  stripeCustomerId String?
  role             String    @default("user") // Add this field
  createdAt        DateTime  @default(now())
  updatedAt        DateTime  @updatedAt
}
