const contactsTestData = [
  {
    name: 'Juan',
    lastName: 'García Pérez',
    email: 'juan.garcia@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Principal',
        number: '123',
        suburb: 'Centro',
        city: 'Ciudad de México',
        state: 'Ciudad de México',
        postalCode: '12345',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'móvil',
        phoneNumber: '555-1234',
      },
      {
        type: 'trabajo',
        phoneNumber: '555-5678',
      }
    ],
  },
  {
    name: 'María',
    lastName: 'Hernández López',
    email: 'maria.hernandez@example.com',
    addresses: [
      {
        type: 'oficina',
        street: 'Avenida Reforma',
        number: '456',
        suburb: 'Colonia Juárez',
        city: 'Ciudad de México',
        state: 'Ciudad de México',
        postalCode: '67890',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-9876',
      },
      {
        type: 'móvil',
        phoneNumber: '555-5432',
      }
    ],
  },
  {
    name: 'José',
    lastName: 'López Rodríguez',
    email: 'jose.lopez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Zaragoza',
        number: '789',
        suburb: 'Centro',
        city: 'Guadalajara',
        state: 'Jalisco',
        postalCode: '54321',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'trabajo',
        phoneNumber: '555-4321',
      },
      {
        type: 'casa',
        phoneNumber: '555-8765',
      }
    ],
  },
  {
    name: 'Ana',
    lastName: 'Martínez Sánchez',
    email: 'ana.martinez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Morelos',
        number: '101',
        suburb: 'San José',
        city: 'Monterrey',
        state: 'Nuevo León',
        postalCode: '98765',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'móvil',
        phoneNumber: '555-6543',
      },
      {
        type: 'trabajo',
        phoneNumber: '555-2109',
      }
    ],
  },
  {
    name: 'Carlos',
    lastName: 'Rodríguez Gómez',
    email: 'carlos.rodriguez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Hidalgo',
        number: '234',
        suburb: 'Reforma',
        city: 'Puebla',
        state: 'Puebla',
        postalCode: '13579',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-7890',
      },
      {
        type: 'móvil',
        phoneNumber: '555-1234',
      }
    ],
  },

  {
    name: 'Rosa',
    lastName: 'Díaz García',
    email: 'rosa.diaz@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Avenida Juárez',
        number: '567',
        suburb: 'Centro',
        city: 'Ciudad de México',
        state: 'Ciudad de México',
        postalCode: '54321',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-5678',
      },
      {
        type: 'móvil',
        phoneNumber: '555-1234',
      }
    ],
  },
  {
    name: 'Pedro',
    lastName: 'Martínez Hernández',
    email: 'pedro.martinez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Principal',
        number: '123',
        suburb: 'Centro',
        city: 'Guadalajara',
        state: 'Jalisco',
        postalCode: '12345',
        country: 'México',
      },
      {
        type: 'Oficina',
        street: 'Avenida Revolución',
        number: '456',
        suburb: 'Colonia Reforma',
        city: 'Guadalajara',
        state: 'Jalisco',
        postalCode: '67890',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'trabajo',
        phoneNumber: '555-4321',
      },
      {
        type: 'casa',
        phoneNumber: '555-8765',
      }
    ],
  },
  {
    name: 'Luis',
    lastName: 'González Martínez',
    email: 'luis.gonzalez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Morelos',
        number: '789',
        suburb: 'San José',
        city: 'Monterrey',
        state: 'Nuevo León',
        postalCode: '98765',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-8765',
      },
      {
        type: 'trabajo',
        phoneNumber: '555-4321',
      }
    ],
  },
  {
    name: 'Laura',
    lastName: 'Sánchez Rodríguez',
    email: 'laura.sanchez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Hidalgo',
        number: '234',
        suburb: 'Reforma',
        city: 'Puebla',
        state: 'Puebla',
        postalCode: '13579',
        country: 'México',
      },
      {
        type: 'Oficina',
        street: 'Avenida Insurgentes',
        number: '567',
        suburb: 'Colonia Centro',
        city: 'Puebla',
        state: 'Puebla',
        postalCode: '24680',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-7890',
      }
    ],
  },
  {
    name: 'Fernanda',
    lastName: 'Díaz González',
    email: 'fernanda.diaz@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Reforma',
        number: '101',
        suburb: 'Centro',
        city: 'Ciudad Juárez',
        state: 'Chihuahua',
        postalCode: '10101',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'móvil',
        phoneNumber: '555-5432',
      }
    ],
  },
  {
    name: 'Diego',
    lastName: 'Hernández Gómez',
    email: 'diego.hernandez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Independencia',
        number: '202',
        suburb: 'Centro',
        city: 'Tijuana',
        state: 'Baja California',
        postalCode: '20202',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-1234',
      },
      {
        type: 'móvil',
        phoneNumber: '555-9876',
      }
    ],
  },
  {
    name: 'Elena',
    lastName: 'Martínez Pérez',
    email: 'elena.martinez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Zaragoza',
        number: '303',
        suburb: 'Centro',
        city: 'Cancún',
        state: 'Quintana Roo',
        postalCode: '30303',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'móvil',
        phoneNumber: '555-9876',
      }
    ],
  },
  {
    name: 'Roberto',
    lastName: 'López García',
    email: 'roberto.lopez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Veracruz',
        number: '404',
        suburb: 'Centro',
        city: 'Mérida',
        state: 'Yucatán',
        postalCode: '40404',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-2345',
      }
    ],
  },
  {
    name: 'Sofía',
    lastName: 'Gómez Rodríguez',
    email: 'sofia.gomez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Chiapas',
        number: '505',
        suburb: 'Centro',
        city: 'Oaxaca',
        state: 'Oaxaca',
        postalCode: '50505',
        country: 'México',
      },
      {
        type: 'trabajo',
        street: 'Avenida Guerrero',
        number: '606',
        suburb: 'Colonia Reforma',
        city: 'Oaxaca',
        state: 'Oaxaca',
        postalCode: '60606',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'móvil',
        phoneNumber: '555-3456',
      }
    ],
  },
  {
    name: 'Javier',
    lastName: 'Martínez Gutiérrez',
    email: 'javier.martinez@example.com',
    addresses: [
      {
        type: 'casa',
        street: 'Calle Sonora',
        number: '707',
        suburb: 'Centro',
        city: 'Hermosillo',
        state: 'Sonora',
        postalCode: '70707',
        country: 'México',
      }
    ],
    phones: [
      {
        type: 'casa',
        phoneNumber: '555-8765',
      }
    ],
  }

];