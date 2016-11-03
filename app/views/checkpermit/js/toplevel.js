var firstQuestion = "What's the main thing you are doing?";

var topleveldata = {
  initial: [
    "q01",
    "q22",
    "q23",
    "q24",
    "q25",
    "q26",
    "q27",
    "q28"
  ],
  
  choices: {

     "q00": {
        "name": "FirstQuestion",
        "question": "What's the main thing you are doing?",
        "children": [
           "q01",
           "q22",
           "q23",
           "q24",
           "q25",
           "q26",
           "q27",
           "q28",
           null,
           null,
           null
        ]
     },
     "q01": {
        "name": "Running a site, factory, farm, shop or other 'installation'",
        "question": "What material are you dealing with?",
        "children": [
           "q02",
           "q03",
           "q04",
           "q05",
           "q17",
           "q18",
           "q19",
           "q20",
           "q21",
           null,
           null
        ]
     },
     "q02": {
        "name": "Ferrous metals",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q03": {
        "name": "Non-ferrous metals",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q04": {
        "name": "Surface-treating metals and plastics",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q05": {
        "name": "Cement and lime",
        "question": "Which type of cement or lime?",
        "children": [
           "q06",
           "q11",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q06": {
        "name": "Cement or cement clinker",
        "question": "What do you do with the cement?",
        "children": [
           "q07",
           "q08",
           "q09",
           "q10",
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q07": {
        "name": "Produce cement clinker in kilns",
        "question": "The permit you need",
        "description": "in rotary kilns with a capacity exceeding 500 tonnes a day or in other kilns with a capacity exceeding 50 tonnes a day",
        "children": [
           "a1",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q08": {
        "name": "Grind cement clinker",
        "question": "The permit you need",
        "children": [
           "a2",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q09": {
        "name": "Storing, loading or unloading cement or cement clinker in bulk",
        "question": "The permit you need",
        "description": "before further transportation in bulk",
        "children": [
           "b",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q10": {
        "name": "Blending cement in bulk or using cement in bulk not at a construction site",
        "question": "The permit you need",
        "description": "including the bagging of cement and cement mixtures, the batching of ready-mixed concrete and the manufacture of concrete blocks and other cement products",
        "children": [
           "b",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q11": {
        "name": "Lime or magnesium oxide",
        "question": "What do you do with the lime?",
        "children": [
           "q12",
           "q13",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q12": {
        "name": "Slake the lime",
        "question": "The permit you need",
        "description": "for making calcium hydroxide or calcium magnesium hydroxide",
        "children": [
           "b",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q13": {
        "name": "Produce lime or magnesium oxide in kilns",
        "question": "What is the capacity of the kilns?",
        "children": [
           "q14",
           "q15",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q14": {
        "name": "No more than 50 tonnes a day of calcium carbonate or calcium magnesium carbonate or both together",
        "question": "The permit you need",
        "children": [
           "b",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q15": {
        "name": "More than 50 tonnes a day",
        "question": "The permit you need",
        "children": [
           "a1",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q16": {
        "name": "Other",
        "question": "The permit you need",
        "children": [
           "nopermit",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q17": {
        "name": "Asbestos",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q18": {
        "name": "Glass and glass fibre production",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q19": {
        "name": "Mineral fibre production",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q20": {
        "name": "Other minerals",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q21": {
        "name": "Ceramics",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q22": {
        "name": "Handling waste",
        "question": "Is the waste hazardous?",
        "description": "where waste is recycled, stored, treated or disposed of",
        "children": [
           "w02",
           "w14",
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q23": {
        "name": "Mining or handling mining waste",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q24": {
        "name": "Mobile plant machinery",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q25": {
        "name": "Solvent emission",
        "description": "releasing organic solvents into the air",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q26": {
        "name": "Discharge to surface or groundwater",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q27": {
        "name": "Working with radioactive substances",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "q28": {
        "name": "Work near a river or flood defence",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "a1": {
        "name": "You need to apply for an <a href=\"https://www.gov.uk/guidance/a1-installations-environmental-permits\">A1 installation environmental permit</a>",
        "description": "You must apply to the Environment Agency if you operate a facility which is classed as an ‘A1 installation’.",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "a2": {
        "name": "You need to <a href=\"https://www.gov.uk/local-authority-environmental-permit\">apply for an environmental permit from your local council</a>",
        "description": "Your installation is classed as ‘B’, so you have to apply to your local authority",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "b": {
        "name": "You need to <a href=\"https://www.gov.uk/local-authority-environmental-permit\">apply for an environmental permit from your local council</a>",
        "description": "Your installation is classed as ‘A2’, so you have to apply to your local authority",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "nopermit": {
        "name": "You don't need an environmental permit",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     "a1-anaerobic": {
        "name": "You need to apply for an <a href=\"https://www.gov.uk/guidance/a1-installations-environmental-permits\">A1 installation environmental permit</a>",
        "description": "<p>You might be able to get a <a href=\"https://www.gov.uk/government/collections/standard-rules-environmental-permitting\">standard rules permit</a>. This might save you time and money.</p>\n<p>For anaerobic processes, the standard rules permits are:</p>\n<ul class=\"list list-bullet\">\n<li><a href=\"https://www.gov.uk/government/publications/sr2010-no15-anaerobic-digestion-facility-including-use-of-the-resultant-biogas\">anaerobic digestion facility including use of the resultant biogas SR2010 No15</a></li>\n<li><a href=\"https://www.gov.uk/government/publications/sr2010-no16-on-farm-anaerobic-digestion-facility\">on-farm anaerobic digestion facility SR2010 No16</a></li>\n<li><a href=\"https://www.gov.uk/government/publications/sr2010-no17-storage-of-digestate-from-anaerobic-digestion-plants\">storage of digestate from anaerobic digestion plants SR2010 No17</a></li>\n<li><a href=\"https://www.gov.uk/government/publications/sr2012-no10-on-farm-anaerobic-digestion-facility-using-farm-wastes-only-including-use-of-the-resultant-biogas\">on-farm anaerobic digestion facility using farm wastes only, including use of the resultant biogas SR2012 No 10</a></li>\n<li><a href=\"https://www.gov.uk/government/publications/sr2012-no12-anaerobic-digestion-facility-including-use-of-the-resultant-biogas-waste-recovery-operation\">anaerobic digestion facility including use of the resultant biogas (waste recovery operation) SR2012 No 12</a></li>\n</ul>\n<p>If you can't meet the conditions for a standard rules permit, you'll have to apply for a bespoke permit instead.</p>\n\n",
        "children": [
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null,
           null
        ]
     },
     

        "w02": {
           "name": "Yes, it is hazardous",
           "question": "What are you doing with the hazardous waste?",
           "children": [
              "w03",
              "w06",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w03": {
           "name": "Incinerating it",
           "question": "What's the capacity of your incinerators?",
           "children": [
              "w04",
              "w05",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w04": {
           "name": "10 tonnes or less",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w05": {
           "name": "More than 10 tonnes",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w06": {
           "name": "Storing it",
           "question": "How much are you storing?",
           "children": [
              "w07",
              "w13",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w07": {
           "name": "50 tonnes or more",
           "question": "Where is it stored?",
           "children": [
              "w08",
              "w09",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w08": {
           "name": "Underground",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w09": {
           "name": "Above ground",
           "question": "Why is it stored?",
           "children": [
              "w10",
              "w11",
              "w12",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w10": {
           "name": "Temporary storage on same site as it is generated",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w11": {
           "name": "Temporary storage before incineration or landfill",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w12": {
           "name": "Other purpose",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w13": {
           "name": "Less than 50 tonnes",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w14": {
           "name": "No, it's not hazardous",
           "question": "What do you do with the waste?",
           "children": [
              "w15",
              "w22",
              "w26",
              "w30",
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w15": {
           "name": "Incineration or co-incineration",
           "question": "What are you incinerating?",
           "children": [
              "w16",
              "w17",
              "w18",
              "w19",
              "w20",
              "w21",
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w16": {
           "name": "non-hazardous waste with a capacity of more than 3 tonnes an hour",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w17": {
           "name": "any gaseous compound containing halogens (except incidentally)",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w18": {
           "name": "vegetable, cork or wood waste in plant with a capacity of 50kg or more an hour",
           "question": "The permit you need",
           "children": [
              "b",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w19": {
           "name": "animal carcasses in plant with a capacity of 50kg or more an hour",
           "question": "The permit you need",
           "children": [
              "b",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w20": {
           "name": "cremating human remains",
           "question": "The permit you need",
           "children": [
              "b",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w21": {
           "name": "other materials or less than 50kg an hour capacity",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w22": {
           "name": "Disposal to landfill",
           "question": "Do any of these appply to your landfill activity?",
           "children": [
              "w23",
              "w24",
              "w25",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w23": {
           "name": "it receives more than 10 tonnes of waste in any day",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w24": {
           "name": "it has a total capacity of more than 25,000 tonnes",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w25": {
           "name": "neither of these apply",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w26": {
           "name": "Produce fuel from waste",
           "children": [
              "w27",
              "w28",
              "w29",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w27": {
           "name": "make solid fuel from waste by any process involving heat",
           "question": "The permit you need",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w28": {
           "name": "make charcoal",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w29": {
           "name": "another fuel",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w30": {
           "name": "Disposal or recovery",
           "question": "Do any of these apply?",
           "children": [
              "w31",
              "w32",
              "w33",
              "w34",
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w31": {
           "name": "disposal and/or recovery by anaerobic digestion with capacity more than 100 tonnes a day",
           "question": "The permit you need",
           "children": [
              "a1-anaerobic",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w32": {
           "name": "disposal with capacity of more than 50 tonnes a day",
           "question": "The permit you need",
           "description": "involving: biological treatment; physico-chemical treatment; pre-treatment of waste for incineration; treatment of slags and ashes; treatment in shredders of metal waste, including waste electrical and electronic equipment and end-of-life vehicles and their components",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w33": {
           "name": "recovery and/or disposal with capacity of more than 75 tonnes a day",
           "question": "The permit you need",
           "description": "involving: biological treatment; pre-treatment of waste for incineration or co-incineration; treatment of slags and ashes; treatment in shredders of metal waste, including waste electrical and electronic equipment and end-of-life vehicles and their components.",
           "children": [
              "a1",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        },
        "w34": {
           "name": "smaller capacity or other activity",
           "question": "The permit you need",
           "children": [
              "nopermit",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
           ]
        }
     }
  
};
