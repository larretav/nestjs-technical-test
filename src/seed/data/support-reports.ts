import { CreateSupportReportDto } from "src/support-reports/dto/create-support-report.dto";

export const supportReportsTestData: CreateSupportReportDto[] = [
  {
    "type": "Cancelación",
    "user": "usuario13",
    "date": new Date("2024-08-14T10:00:00.000Z"),
    "problemDescription": "El cliente solicitó la cancelación del pedido",
    "solutionDescription": "Se procesó la cancelación y se inició el reembolso.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": new Date("2024-08-12T12:00:00.000Z"),
      "shipmentDestination": "Cancún, México",
      "shipmentOrigin": "Ciudad de México, México",
      "branchOffice": "Sucursal Ciudad de México",
      "shipmentState": "cancelado",
      "trackNumber": "4455667788"
    }
  },
  {
    "type": "Cancelación",
    "user": "usuario14",
    "date": new Date("2024-08-13T09:45:00.000Z"),
    "problemDescription": "El cliente cambió de opinión sobre el pedido",
    "solutionDescription": "El pedido fue cancelado y el cliente fue notificado.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": new Date("2024-08-11T11:00:00.000Z"),
      "shipmentDestination": "Guadalajara, México",
      "shipmentOrigin": "Monterrey, México",
      "branchOffice": "Sucursal Monterrey",
      "shipmentState": "cancelado",
      "trackNumber": "5566778899"
    }
  },
  {
    "type": "Cancelación",
    "user": "usuario15",
    "date": new Date("2024-08-14T08:30:00.000Z"),
    "problemDescription": "Problemas con la forma de pago",
    "solutionDescription": "Se canceló el pedido debido a problemas de pago.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": new Date("2024-08-12T15:00:00.000Z"),
      "shipmentDestination": "Tijuana, México",
      "shipmentOrigin": "Ciudad de México, México",
      "branchOffice": "Sucursal Ciudad de México",
      "shipmentState": "cancelado",
      "trackNumber": "6677889900"
    }
  },
  {
    "type": "Cancelación",
    "user": "usuario16",
    "date": new Date("2024-08-12T07:15:00.000Z"),
    "problemDescription": "El cliente decidió comprar en otro sitio",
    "solutionDescription": "Cancelación del pedido y reembolso procesado.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": new Date("2024-08-10T09:30:00.000Z"),
      "shipmentDestination": "Puebla, México",
      "shipmentOrigin": "Veracruz, México",
      "branchOffice": "Sucursal Veracruz",
      "shipmentState": "cancelado",
      "trackNumber": "7788990011"
    }
  },
  {
    "type": "Cancelación",
    "user": "usuario17",
    "date": new Date("2024-08-13T06:20:00.000Z"),
    "problemDescription": "El cliente encontró un mejor precio en otro lugar",
    "solutionDescription": "Pedido cancelado y se informó al cliente.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": new Date("2024-08-11T08:45:00.000Z"),
      "shipmentDestination": "León, México",
      "shipmentOrigin": "Querétaro, México",
      "branchOffice": "Sucursal Querétaro",
      "shipmentState": "cancelado",
      "trackNumber": "8899001122"
    }
  },
  {
    "type": "reclamo",
    "user": "usuario18",
    "date": new Date("2024-08-12T16:00:00.000Z"),
    "problemDescription": "Producto defectuoso",
    "solutionDescription": "Se acordó el reemplazo del producto.",
    "supportStatus": "en progreso",
    "shipmentDetails": {
      "shipmentDate": null,
      "shipmentDestination": null,
      "shipmentOrigin": null,
      "branchOffice": null,
      "shipmentState": null,
      "trackNumber": null,
    }
  },
  {
    "type": "queja",
    "user": "usuario19",
    "date": new Date("2024-08-14T14:00:00.000Z"),
    "problemDescription": "El paquete llegó tarde",
    "solutionDescription": "Se ofreció un descuento para la próxima compra.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": null,
      "shipmentDestination": null,
      "shipmentOrigin": null,
      "branchOffice": null,
      "shipmentState": null,
      "trackNumber": null,
    }
  },
  {
    "type": "devolución",
    "user": "usuario20",
    "date": new Date("2024-08-11T12:30:00.000Z"),
    "problemDescription": "No estaba satisfecho con el producto",
    "solutionDescription": "Se procesó la devolución y el reembolso.",
    "supportStatus": "completado",
    "shipmentDetails": {
      "shipmentDate": null,
      "shipmentDestination": null,
      "shipmentOrigin": null,
      "branchOffice": null,
      "shipmentState": null,
      "trackNumber": null,
    }
  },
  {
    "type": "reclamo",
    "user": "usuario21",
    "date": new Date("2024-08-13T15:00:00.000Z"),
    "problemDescription": "Producto no coincide con la descripción",
    "solutionDescription": "Se emitió un reembolso parcial.",
    "supportStatus": "en progreso",
    "shipmentDetails": {
      "shipmentDate": null,
      "shipmentDestination": null,
      "shipmentOrigin": null,
      "branchOffice": null,
      "shipmentState": null,
      "trackNumber": null,
    }
  },
  {
    "type": "queja",
    "user": "usuario22",
    "date": new Date("2024-08-14T11:15:00.000Z"),
    "problemDescription": "Recibí el producto equivocado",
    "solutionDescription": "Se ofreció un reenvío del producto correcto.",
    "supportStatus": "en progreso",
    "shipmentDetails": {
      "shipmentDate": null,
      "shipmentDestination": null,
      "shipmentOrigin": null,
      "branchOffice": null,
      "shipmentState": null,
      "trackNumber": null,
    }
  }
]
