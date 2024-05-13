import { ExamplesObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

export const updateContactBody: ExamplesObject = {
  "Example Body Request": {
    value: {
      name: "Javier",
      lastName: "Martínez Gutiérrez",
      email: "javier.martinez@example.com",
      addresses: [
        {
          type: "casa",
          street: "Calle Sonora",
          number: "707",
          suburb: "Centro",
          city: "Hermosillo",
          state: "Sonora",
          postalCode: "70707",
          country: "México"
        }
      ],
      phones: [
        {
          type: "casa",
          phoneNumber: "5558765"
        }
      ]
    }
  }
}