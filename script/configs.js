const config = {
  style: "mapbox://styles/haoyenlei/cl7494las000415o8prl5l11z",
  accessToken:
    "pk.eyJ1IjoiaGFveWVubGVpIiwiYSI6ImNsNzMweWdmbjEzZjIzb21qNG9pZno3eGkifQ.dEp4py09M6XAC0hNuneTUg",
  CSV: "./data/Assignment_3_Data_V1_icons.csv",
  center: [144.95906,-37.81723],
  zoom: 12,
  title: "Melbourne tourist guide",
  description:
    "Choose the categories to see their location on the map.Choose the categories to see their location on the map.Choose the categories to see their location on the map.",
  sideBarInfo: ["name", "categoryName","address", "phone"],
  popupInfo: ["name"],
//   filters: [
//     {
//       type: "checkbox",
//       title: "Categories:",
//       columnHeader: "categoryName",
//       listItems: [
//         "Hotel",
//         "Hostel",
//         "Serviced accommodation",
//         "Bar",
//         "Restaurant & Bar",
//         "Cafe",
//         "Takeout Restaurant",
//         "Shopping mall",
//         "Garden & Park",
//         "Tourist attraction",
//         "Zoo & Aquarium"
//       ],
//     }
//   ],
// };
filters: [
  {
    type: "checkbox",
    title: "Categories:",
    columnHeader: "icon",
    listItems: [
      "Hotel",
      "bar",
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
