
// Importing the flexmonster module
import * as Flexmonster from "flexmonster";
import "flexmonster/flexmonster.min.css";
// You can use a different theme by specifying the corresponding path.
// For example, to load the Green theme:
// import "flexmonster/theme/green/flexmonster.min.css";
// See the full list of available themes: https://www.flexmonster.com/doc/customizing-appearance/#built-in-themes

const pivot = new Flexmonster({
    container: "pivot-container",
    toolbar: true,
    height: 600,
    // licenseKey: "XXXX-XXXX-XXXX-XXXX-XXXX",
    report: {
        "dataSource": {
            "type": "json",
            "mapping": {
                "Quantity": {
                    "type": "number"
                },
                "Price": {
                    "type": "number"
                },
                "Retail Category": {
                    "type": "string"
                },
                "Sales": {
                    "type": "number"
                },
                "Order Date": {
                    "type": "year/quarter/month/day"
                },
                "Date": {
                    "type": "date"
                },
                "Status": {
                    "type": "string"
                },
                "Product Code": {
                    "type": "string"
                },
                "Phone": {
                    "type": "string"
                },
                "Country": {
                    "type": "string",
                    "hierarchy": "Location"
                },
                "City": {
                    "type": "string",
                    "hierarchy": "Location",
                    "parent": "Country"
                },
                "CurrencyID": {
                    "type": "property",
                    "hierarchy": "Country"
                },
                "Contact Last Name": {
                    "type": "string"
                },
                "Contact First Name": {
                    "type": "string"
                },
                "Deal Size": {
                    "type": "string"
                }
            },
            "filename": "https://cdn.flexmonster.com/data/retail-data.json"
        },
        "slice": {
            "reportFilters": [{
                "uniqueName": "Date.Year",
                "filter": {
                    "members": [
                        "date.year.[2019]"
                    ]
                }
            },
            {
                "uniqueName": "Date.Month"
            }
            ],
            "rows": [{
                "uniqueName": "Location"
            },
            {
                "uniqueName": "Retail Category",
                "filter": {
                    "members": [
                        "retail category.[books & movies]",
                        "retail category.[cellphones & accessories]",
                        "retail category.[health & personal care]"
                    ]
                }
            }
            ],
            "columns": [{
                "uniqueName": "Order Date"
            },
            {
                "uniqueName": "[Measures]"
            }
            ],
            "measures": [{
                "uniqueName": "Price",
                "aggregation": "sum",
                "format": "-17j4ga3utwpe00"
            }],
            "expands": {
                "rows": [{
                    "tuple": [
                        "location.[norway]"
                    ]
                },
                {
                    "tuple": [
                        "location.[australia]"
                    ]
                }
                ]
            },
            "drills": {
                "columns": [{
                    "tuple": [
                        "order date.[2019]"
                    ]
                }]
            }
        },
        "conditions": [{
            "formula": "#value > 35000",
            // "isTotal": true,
            "measure": "Price",
            "format": {
                "backgroundColor": "#00A45A",
                "color": "#FFFFFF",
                "fontFamily": "Arial",
                "fontSize": "12px"
            }
        },
        {
            "formula": "#value < 700",
            // "isTotal": false,
            "measure": "Price",
            "format": {
                "backgroundColor": "#df3800",
                "color": "#FFFFFF",
                "fontFamily": "Arial",
                "fontSize": "12px"
            }
        }
        ],
        "formats": [{
            "name": "-17j4ga3utwpe00",
            "thousandsSeparator": ",",
            "decimalPlaces": 0,
            "currencySymbol": "$"
        }]
    }
});