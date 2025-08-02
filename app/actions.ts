"use server"

export async function submitMembershipApplication(prevState: any, formData: FormData) {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const commitment = formData.get("commitment") as string

  // Basic validation
  if (!name || !email || !commitment) {
    return { success: false, message: "Please fill in all required fields." }
  }

  // In a real application, you would save this data to a database
  // or send it to an external service (e.g., CRM, email list).
  console.log("New Membership Application:")
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Phone: ${phone || "N/A"}`)
  console.log(`Commitment: ${commitment}`)

  // Simulate a successful submission
  return {
    success: true,
    message: `Application submitted, ${name.split(" ")[0]}! We'll be in touch if you make the cut.`,
  }
}
