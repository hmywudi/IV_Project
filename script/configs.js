const config = {
  style: "mapbox://styles/mapbox/streets-v10",
  accessToken:
    "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA",
  CSV: "./data/Assignment_3_Data_V1_icons.csv",
  center: [144.95906,-37.81723],
  zoom: 12,
  title: "Melbourne tourist guide",
  description:
    "Choose the categories to see their location on the map.Choose the categories to see their location on the map.Choose the categories to see their location on the map.",
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
        "Tourist attraction",
        "Zoo & Aquarium"
      ],
    }
  ],
};
