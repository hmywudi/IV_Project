const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA",
  CSV: "./data/Hotel_V2.csv",
  center: [144.95906,-37.81723],
  zoom: 10,
  title: "Replace with your title",
  description:
    "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
  sideBarInfo: ["name", "address", "phone"],
  popupInfo: ["name"],
  filters: [
    {
      type: "checkbox",
      title: "categories: ",
      columnHeader: "categories/0",
      listItems: [
        "Hotel",
        "Serviced accommodation",
        "Indoor accommodation",
        "Extended stay hotel",
        "Sports bar"
      ],
    },
    {
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    }
  ],
};
