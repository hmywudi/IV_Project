const config = {
  style: "mapbox://styles/mapbox/streets-v10",
  accessToken:
    "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA",
  CSV: "./data/Assignment_3_Data_V1.csv",
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
      title: "Categories:",
      columnHeader: "categoryName",
      listItems: [
        "Hotel",
        "Hostel",
        "Serviced accommodation",
        "Bar",
        "Restaurant & Bar",
        "Cafe",
        "Takeout Restaurant",
        "Shopping mall",
        "Garden & Park",
        "Art, Museum & Theater",
        "Tourist attraction",
        "Zoo & Aquarium"
      ],
    }
  ],
};
