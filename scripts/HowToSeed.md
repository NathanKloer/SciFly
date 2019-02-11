## How to Seed your Data

1. Open the Robo 3T app
2. Make sure you are connected to the server
3. Select the database `scifly`
4. Select `products` collection
5. Copy and paste the following code/query in the Scripts Area and execute the script.

+++++++++++

db.products.insertMany([
{
  productName: "Culture Flasks",
  description: "175 mL",
  stockQuantity: 110,
  uom: "Box",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Incubator Flask Clamp",
  description: "30 mL",
  stockQuantity: 220,
  uom: "Box",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Glass Fiber filter",
  description: "2 cm",
  stockQuantity: 400,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Magnetic Filter Funnel",
  description: "200 cm",
  stockQuantity: 1000,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Membrane Filter",
  description: "66 mm",
  stockQuantity: 1400,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Microfunnel Filter Funnel",
  description: "60 mm",
  stockQuantity: 600,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "ZapCap Bottle-Top Filters",
  description: "20 mm",
  stockQuantity: 700,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Culture Flasks",
  description: "275 mL",
  stockQuantity: 100,
  uom: "Unit",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Spin Dryer",
  description: "200 mL",
  stockQuantity: 100,
  uom: "Unit",
  category: "Dryer",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Blank Computer Labels",
  description: "11x14",
  stockQuantity: 3000,
  uom: "Box",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Clamp",
  description: "70 cm",
  stockQuantity: 100,
  uom: "Box",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Dilution Vials",
  description: "20 cc",
  stockQuantity: 1000,
  uom: "Box",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Fiber Glass",
  description: "12 mm",
  stockQuantity: 1000,
  uom: "Box",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Test Tube Cleaners",
  description: "300 micro",
  stockQuantity: 4000,
  uom: "Carton",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Aerosol Resistant Tips",
  description: "10 uL",
  stockQuantity: 4000,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Silicone Tubing",
  description: "75 feet",
  stockQuantity: "100",
  uom: "Unit",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Aerosol Resistant Tips",
  description: "1000 uL",
  stockQuantity: 5000,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Pasteur Pipettes",
  description: "5 3/4\"",
  stockQuantity: 500,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Pipettes Tips",
  description: "1000 uL",
  stockQuantity: 1300,
  uom: "Unit",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Racked Tip Refills",
  description: "10 uL",
  stockQuantity: 1100,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Pasteur Pipettes",
  description: "9\"",
  stockQuantity: 800,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Racked Tip Refills",
  description: "1000 uL",
  stockQuantity: 1300,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Racked Tips",
  description: "10 uL",
  stockQuantity: 1000,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Racked Tips",
  description: "2 uL",
  stockQuantity: 1050,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Racked Tips",
  description: "20 uL",
  stockQuantity: 1000,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Serological Pipettes",
  description: "1 mL",
  stockQuantity: 2000,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Serological Pipettes",
  description: "10 mL",
  stockQuantity: 1300,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Test Tubes",
  description: "10 cc",
  stockQuantity: 130,
  uom: "Box",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Culture Flasks",
  description: "40 mL",
  stockQuantity: 100,
  uom: "Box",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Glass Fiber Filter",
  description: "150 mm",
  stockQuantity: 3000,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Circle Filter Paper",
  description: "150 mm",
  stockQuantity: 1040,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Circle Filter Paper",
  description: "90 mm",
  stockQuantity: 5000,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Gel Staining Tray",
  description: "2 x4 inch",
  stockQuantity: 100,
  uom: "Unit",
  category: "Electrophoresis",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Beverage Monior/micro Filter Funnel",
  description: "50 mL",
  stockQuantity: 600,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Bottle Top Filter Funnel",
  description: "125 uL",
  stockQuantity: 300,
  uom: "Box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Tip Refills",
  description: "10 uL",
  stockQuantity: 4000,
  uom: "Bag",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Volumetric Pipets",
  description: "10 mL",
  stockQuantity: 2000,
  uom: "Box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Gloves - Large",
  description: "L",
  stockQuantity: 400,
  uom: "Box",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Gloves - Medium",
  description: "M",
  stockQuantity: 2000,
  uom: "Box",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Gloves - Small",
  description: "S",
  stockQuantity: 200,
  uom: "Box",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Goggles",
  description: "Adult",
  stockQuantity: 100,
  uom: "Box",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "96 Well Plates",
  description: "Square",
  stockQuantity: 110,
  uom: "Box",
  category: "Protein Assays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Petri Dishes",
  description: "20 cc",
  stockQuantity: 300,
  uom: "Sleeves",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Gloves - Extra Large",
  description: "XL",
  stockQuantity: 200,
  uom: "Box",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Cuvette Trays",
  description: "Titanium",
  stockQuantity: 400,
  uom: "Box",
  category: "Protein Assays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Microplate Rotor",
  description: "Mechanical",
  stockQuantity: 400,
  uom: "Box",
  category: "Protein Assays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Acrylic Water Bottles",
  description: "60 oz",
  stockQuantity: 800,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Centrifuge Tubes",
  description: "1 mL",
  stockQuantity: 100,
  uom: "Bag",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Centrifuge Tubes Filter",
  description: "0.01 mm",
  stockQuantity: 399,
  uom: "Bag",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Disposable Cups",
  description: "8 oz",
  stockQuantity: 1000,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Falcon Tubes",
  description: "50 mL",
  stockQuantity: 700,
  uom: "Tray",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Flat Bottom Vials",
  description: "20 mL",
  stockQuantity: 500,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Glass Amber Collection Bottles",
  description: "30 oz",
  stockQuantity: 300,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Field Sample Collection Tubes",
  description: "10 cc",
  stockQuantity: 2000,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Glass Baking Tray",
  description: "10x9 inch",
  stockQuantity: 10,
  uom: "Unit",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "ELISA Tubes",
  description: "2 mL",
  stockQuantity: 100,
  uom: "Box",
  category: "Immunoassays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Bottle Racks",
  description: "5 cc",
  stockQuantity: 300,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Microcentrifuge Tubes",
  description: "0.5 mL",
  stockQuantity: 120,
  uom: "Bag",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Plastic Clear Collection Jars",
  description: "1000 mL",
  stockQuantity: 1000,
  uom: "Box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Round Bottom Vials",
  description: "12 mL",
  stockQuantity: 800,
  uom: "Bag",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Luer Lock Syringes",
  description: "20 mL",
  stockQuantity: 700,
  uom: "Box",
  category: "Syringes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Tool Tray",
  description: "Round",
  stockQuantity: 80,
  uom: "Unit",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Pd Syringe Tips",
  description: "50 mL",
  stockQuantity: 200,
  uom: "Box",
  category: "Syringes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Syringes",
  description: "1 mL",
  stockQuantity: 400,
  uom: "Box",
  category: "Syringes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Peerless Transaxle",
  description: " 10 lb",
  stockQuantity: 100,
  uom: " Unit",
  category: " Axles",
  organization: " Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Peerless Transaxle",
  description:" 10 lb",
  stockQuantity: 100,
  uom:" Unit",
  category:" Axles",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Lossless Pro Axle",
  description:" 7 lb",
  stockQuantity: 150,
  uom:" Unit",
  category:" Axles",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Guidance Wheels",
  description:" 1.5 lb",
  stockQuantity: 180,
  uom:" Unit",
  category:" Axles",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Pillow Block Bearings",
  description:" 1 lb",
  stockQuantity: 1000,
  uom:" Box",
  category:" Spares",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Flange Bearings",
  description:" 0.5 lb",
  stockQuantity: 1095,
  uom:" Box",
  category:" Spares",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Fuel Shut-off V-Belt",
  description:" 10x10m",
  stockQuantity: 1000,
  uom:" Unit",
  category:" Spares",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Spark Plug Wire Set",
  description:" 2 pcs",
  stockQuantity: 1000,
  uom:" Kit",
  category:" Spares",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Condensed Capacitor",
  description:" 30 oz",
  stockQuantity: 1800,
  uom:" Box",
  category:" Spares",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Tie Rod Ends",
  description:" 10 m",
  stockQuantity: 1000,
  uom:"Unit",
  category:" Spares",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Solenoid",
  description:" 10 oz",
  stockQuantity:2000,
  uom:" Unit",
  category:" Tractor Supply",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Throttle Control",
  description:" 8.99 oz",
  stockQuantity: 1500,
  uom:" Unit",
  category:" Tractor Supply",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Turnbuckles",
  description:" 0.99 oz",
  stockQuantity:600,
  uom:" Unit",
  category:" Tractor Supply",
  organization:" Specialty Charity",
  date: new Date(Date.now())
},
{
  productName:"Excel Alternator",
  description:" 100 lb",
  stockQuantity: 12350,
  uom:" Box",
  category:" Tractor Supply",
  organization:" Specialty Charity",
  date: new Date(Date.now())
}
])
