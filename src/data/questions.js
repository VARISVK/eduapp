export const questionPools = {
  TX: [
    {
      number: 1,
      text: "Said has made a number of investments during the tax year. Tick the appropriate box to show which of the following investments will generate taxable income and which will generate exempt income.",
      type: "categorization",
      options: ["Taxable", "Exempt"],
      items: [
        { id: "A", text: "£400 in shares in the company he works for", answer: "Taxable" },
        { id: "B", text: "£1,000 in an Individual Savings Account", answer: "Exempt" },
        { id: "C", text: "£800 in a NS&I investment account", answer: "Taxable" },
        { id: "D", text: "£500 purchasing a NS&I certificate", answer: "Exempt" }
      ]
    },
    {
      number: 2,
      text: "Identify, by ticking the appropriate box, the treatment of each of the following forms of savings income.",
      type: "categorization",
      options: ["Taxable", "Exempt"],
      items: [
        { id: "A", text: "NS&I investment account interest", answer: "Taxable" },
        { id: "B", text: "Gilt edged security interest", answer: "Taxable" },
        { id: "C", text: "NS&I savings certificate interest", answer: "Exempt" }
      ]
    },
    {
      number: 3,
      text: "Samuel is planning to leave the UK to live overseas... What is the maximum number of ties which Samuel could keep with the UK without being treated as resident in the UK?",
      type: "mcq",
      choices: { A: "One", B: "Four", C: "Two", D: "Three" },
      answer: "C"
    },
    {
      number: 4,
      text: "The main purpose of tax is to...",
      type: "mcq",
      choices: { A: "Raise revenue", B: "Reduce consumption", C: "Redistribute wealth", D: "All of the above" },
      answer: "A"
    },
    {
      number: 5,
      text: "Corporation tax is a...",
      type: "mcq",
      choices: { A: "Direct tax on income", B: "Indirect tax on expenditure", C: "Direct tax on expenditure", D: "Indirect tax on income" },
      answer: "A"
    },
    {
      number: 6,
      text: "VAT is a...",
      type: "mcq",
      choices: { A: "Direct tax", B: "Indirect tax", C: "Progressive tax", D: "Regressive tax" },
      answer: "B"
    },
    {
      number: 7,
      text: "An accountant who discovers a client has not disclosed income to HMRC should...",
      type: "mcq",
      choices: { A: "Inform HMRC immediately", B: "Advise the client to disclose and if they refuse, resign", C: "Do nothing", D: "Help the client hide the income" },
      answer: "B"
    },
    {
       number: 8,
       text: "Tax avoidance is...",
       type: "mcq",
       choices: { A: "Legal", B: "Illegal", C: "Ethical", D: "Unethical" },
       answer: "A"
    },
    {
      number: 9,
      text: "Tax evasion is...",
      type: "mcq",
      choices: { A: "Legal", B: "Illegal", C: "Ethical", D: "Unethical" },
      answer: "B"
    },
    {
      number: 10,
      text: "The tax year 2024/25 runs from...",
      type: "mcq",
      choices: { A: "1 Jan 2024 to 31 Dec 2024", B: "6 April 2024 to 5 April 2025", C: "1 April 2024 to 31 March 2025", D: "5 April 2024 to 6 April 2025" },
      answer: "B"
    },
    {
      number: 11,
      text: "In the 2024/25 tax year, the personal allowance is...",
      type: "input",
      answer: "12570"
    },
    {
      number: 12,
      text: "For a higher rate taxpayer, the personal savings allowance is...",
      type: "input",
      answer: "500"
    },
    {
      number: 13,
      text: "The dividend allowance for 2024/25 is...",
      type: "input",
      answer: "500"
    },
    {
      number: 14,
      text: "National Insurance Class 1 is paid by...",
      type: "mcq",
      choices: { A: "Employers only", B: "Employees only", C: "Both employers and employees", D: "Self-employed only" },
      answer: "C"
    },
    {
      number: 15,
      text: "Self-employed individuals pay Class 2 and Class 4 NICs.",
      type: "mcq",
      choices: { A: "True", B: "False" },
      answer: "A"
    },
    {
      number: 16,
      text: "The due date for a paper tax return is...",
      type: "mcq",
      choices: { A: "31 Oct following the tax year", B: "31 Jan following the tax year", C: "5 April following the tax year", D: "30 Sept following the tax year" },
      answer: "A"
    },
    {
      number: 17,
      text: "The due date for an electronic tax return is...",
      type: "mcq",
      choices: { A: "31 Oct following the tax year", B: "31 Jan following the tax year", C: "5 April following the tax year", D: "30 Sept following the tax year" },
      answer: "B"
    },
    {
      number: 18,
      text: "Under the PAYE system, the K code indicates...",
      type: "mcq",
      choices: { A: "Tax free pay", B: "Untaxed income exceeds allowances", C: "Emergency tax", D: "No tax is due" },
      answer: "B"
    },
    {
      number: 19,
      text: "The standard VAT rate in the UK is...",
      type: "input",
      answer: "20"
    },
    {
      number: 20,
      text: "Inheritance tax is usually paid at...",
      type: "input",
      answer: "40"
    },
    {
      number: 21,
      text: "The nil rate band for inheritance tax is currently...",
      type: "input",
      answer: "325000"
    },
    {
      number: 22,
      text: "Capital gains tax annual exempt amount for 2024/25 is...",
      type: "input",
      answer: "3000"
    },
    {
      number: 23,
      text: "Which of the following is an exempt asset for CGT?",
      type: "mcq",
      choices: { A: "Shares", B: "Gold sovereigns", C: "Investment property", D: "Antiques" },
      answer: "B"
    },
    {
      number: 24,
      text: "A gift to a spouse is usually exempt for IHT.",
      type: "mcq",
      choices: { A: "True", B: "False" },
      answer: "A"
    },
    {
      number: 25,
      text: "Christos benefits: Canteen, Private medical insurance 650, 5/week WFH cost. Taxable value?",
      type: "input",
      answer: "650"
    },
    {
      number: 26,
      text: "Elin provided accommodation. Not job-related. Taxable benefit?",
      type: "mcq",
      choices: {
        A: "50",
        B: "5,975",
        C: "6,088",
        D: "2,600"
      },
      answer: "A"
    },
    {
      number: 27,
      text: "Thiago new diesel car (RDE2). Car benefit?",
      type: "input",
      answer: "9240"
    },
    {
      number: 28,
      text: "Enzo electric car (zero CO2). Car benefit?",
      type: "input",
      answer: "1350"
    },
    {
      number: 29,
      text: "Olayide provided van + fuel. Total benefit?",
      type: "input",
      answer: "4789"
    },
    {
      number: 30,
      text: "Woojin beneficial loan (1% interest). Benefit using average method?",
      type: "mcq",
      choices: {
        A: "3,000",
        B: "2,267",
        C: "2,017",
        D: "2,200"
      },
      answer: "B"
    }
]
,
  FM: [
    {
      number: 1,
      text: "In relation to the financial management of a company, which of the following provides the best definition of a firm's primary financial objective?",
      type: "mcq",
      choices: {
        A: "To achieve long- term growth in earnings",
        B: "To maximise the level of annual dividends",
        C: "To maximise the wealth of its ordinary shareholders",
        D: "To maximise the level of annual profits"
      },
      answer: "C"
    },
    {
      number: 3,
      text: "Which THREE of the following are the main types of decision facing the financial manager in a company?",
      type: "multi-select",
      choices: {
        A: "Income decision",
        B: "Investment decision",
        C: "Dividend decision",
        D: "Financing decision",
        E: "Appraisal decision",
        F: "Budget decision"
      },
      answer: ["B", "C", "D"]
    },
    {
      number: 4,
      text: "Which TWO of the following are examples of financial objectives that a company might choose to pursue?",
      type: "multi-select",
      choices: {
        A: "Dealing honestly and fairly with customers on all occasions",
        B: "Provision of good working conditions and industrial relations",
        C: "Earning above a particular level of return on capital employed",
        D: "Producing environmentally friendly products",
        E: "Restricting the level of gearing to below a specified target level"
      },
      answer: ["C", "E"]
    },
    {
      number: 6,
      text: "Which of the following is LEAST likely to fall within financial management?",
      type: "mcq",
      choices: {
        A: "The dividend payment to shareholders is increased",
        B: "Funds are raised to finance an investment project",
        C: "Surplus assets are sold off",
        D: "A report is produced comparing actual results to budget"
      },
      answer: "D"
    },
    {
      number: 8,
      text: "Which of the following tasks would typically be carried out by a member of the financial management team?",
      type: "mcq",
      choices: {
        A: "Evaluating proposed expansion plans",
        B: "Review of overtime spending",
        C: "Depreciation of non- current assets",
        D: "Apportioning overheads to cost units"
      },
      answer: "A"
    },
    {
      number: 10,
      text: "What is the main purpose of corporate governance?",
      type: "mcq",
      choices: {
        A: "To separate ownership and management control of organisations",
        B: "To maximise shareholder value",
        C: "To facilitate effective management of organisations and to make organisations more visibly accountable to a wider range of stakeholders",
        D: "To ensure that regulatory frameworks are adhered to"
      },
      answer: "C"
    },
    {
      number: 12,
      text: "Which TWO of the following statements are correct? 1 Maximising market share is an example of a financial objective 2 Shareholder wealth maximisation is the primary financial objective for a company listed on a stock exchange 3 Financial objectives should be quantitative so that their achievement can be measured 4 Three E's are used as a performance measure to assess value of money in not for profit organisations. The three E's stand for economy, efficiency and environment",
      type: "mcq",
      choices: {
        A: "1 and 2",
        B: "2 and 3",
        C: "1 and 4",
        D: "3 and 4"
      },
      answer: "B"
    },
    {
      number: 24,
      text: "Which of the following is/are among the elements of fiscal policy? 1 Government actions to raise or lower taxes 2 Government actions to raise or lower the size of the money supply 3 Government actions to raise or lower the amount it spends",
      type: "mcq",
      choices: {
        A: "1 only",
        B: "1 and 3 only",
        C: "2 and 3 only",
        D: "1,2 and 3"
      },
      answer: "B"
    },
    {
      number: 27,
      text: "The principal objectives of macroeconomic policy include which of the following? 1 Full employment of resources 2 Price stability 3 Economic growth 4 Balancing the government budget",
      type: "mcq",
      choices: {
        A: "1 and 2 only",
        B: "1 and 3 only",
        C: "1, 2 and 3 only",
        D: "1, 2, 3 and 4"
      },
      answer: "C"
    },
    {
      number: 29,
      text: "Which THREE of the following are key roles played by money markets?",
      type: "multi-select",
      choices: {
        A: "Providing short- term liquidity to companies, banks and the public sector",
        B: "Providing short term trade finance",
        C: "Allowing an organisation to manage its exposure to foreign currency risk and interest rate risk",
        D: "Dealing in long- term funds and transactions",
        E: "Allowing companies to issue shares to raise money"
      },
      answer: ["A", "B", "C"]
    },
    {
      number: 32,
      text: "Which of the following is a difference between primary and secondary capital markets?",
      type: "mcq",
      choices: {
        A: "Primary capital markets relate to the sale of new securities, while secondary capital markets are where securities trade after their initial offering",
        B: "Both primary and secondary capital markets relate to where securities are traded after their initial offering",
        C: "Both primary and secondary capital markets relate to the sale of new securities",
        D: "Primary markets are where stocks trade and secondary markets are where loan notes trade"
      },
      answer: "A"
    },
    {
      number: 38,
      text: "Which of the following statements is correct?",
      type: "mcq",
      choices: {
        A: "Direct taxes are levied on one set of individuals or organisations but may be partly or wholly passed on to others and are largely related to consumption not income",
        B: "Indirect taxes are levied directly on income receivers whether they are individuals or organisations",
        C: "A balanced budget occurs when total expenditure is matched by total taxation",
        D: "A deficit budget occurs when total expenditure is less than total taxation income"
      },
      answer: "C"
    },
    {
      number: 45,
      text: "Indicate, by clicking in the relevant boxes, which market the following financial instruments would be traded on. (Commercial paper, Convertible loan notes, Treasury bills, Certificates of deposit)",
      type: "mcq",
      choices: {
        A: "Stock market for all",
        B: "Money market for all",
        C: "Money market for commercial paper, treasury bills, and certificates of deposit; Stock market for convertible loan notes",
        D: "Stock market for commercial paper and convertible loan notes; Money market for treasury bills and certificates of deposit"
      },
      answer: "C"
    },
    {
      number: 58,
      text: "Indicate, by clicking in the relevant boxes, whether the following statements are true or false. Statement: Working capital should increase as sales increase.",
      type: "mcq",
      choices: {
        A: "True",
        B: "False"
      },
      answer: "A"
    },
    {
      number: 59,
      text: "Which of the following might be associated with a shortening working capital cycle?",
      type: "mcq",
      choices: {
        A: "Lower net operating cash flow",
        B: "Increasing tax- allowable depreciation expenditure",
        C: "Slower inventory turnover",
        D: "Taking longer to pay suppliers"
      },
      answer: "D"
    },
    {
      number: 73,
      text: "Andrew Co is a large listed company financed by both equity and debt. In which of the following areas of financial management will the impact of working capital management be smallest?",
      type: "mcq",
      choices: {
        A: "Liquidity management",
        B: "Interest rate management",
        C: "Management of relationship with the bank",
        D: "Dividend policy"
      },
      answer: "D"
    },
    {
      number: 93,
      text: "A company is considering investing in a two- year project. Machine set- up costs will be $125,000, payable immediately. Working capital of $4,000 is required at the beginning of the contract and will be released at the end. Given a cost of capital of 10%, what is the minimum acceptable contract price (to the nearest thousand dollar) to be received at the end of the contract?",
      type: "mcq",
      choices: {
        A: "$125,000",
        B: "$129,000",
        C: "$152,000",
        D: "$175,000"
      },
      answer: "C"
    },
    {
      number: 97,
      text: "A company has a 'money' cost of capital of 21% per year. The general rate of inflation is currently estimated at 8% per year. What is the 'real' cost of capital (to the nearest whole number)?",
      type: "mcq",
      choices: {
        A: "12%",
        B: "13%",
        C: "29%",
        D: "11%"
      },
      answer: "A"
    },
    {
      number: 102,
      text: "Sudan Co wishes to undertake a project requiring an investment of $732,000 which will generate equal annual inflows of $146,400 in perpetuity. If the first inflow from the investment is a year after the initial investment, what is the IRR of the project?",
      type: "mcq",
      choices: {
        A: "20%",
        B: "25%",
        C: "400%",
        D: "500%"
      },
      answer: "A"
    },
    {
      number: 123,
      text: "The equity shares of Nice Co have a beta value of 0.80. The risk free rate of return is 6% and the market risk premium is 4%. Corporation tax is 30%. What is the required return on the shares of Nice Co (to one decimal place)?",
      type: "mcq",
      choices: {
        A: "6.0%",
        B: "7.2%",
        C: "9.2%",
        D: "10.0%"
      },
      answer: "C"
    },
    {
      number: 128,
      text: "Ingham Co's capital structure is as follows: 50c ordinary shares 12 $m, 8% $1 preference shares 6 $m, 12.5% loan notes 20X6 8 $m. The current market prices: 50c ordinary shares 250c, 8% $1 preference shares 92c, 12.5% loan notes 20X6 $100. The company is paying corporation tax at the rate of 30%. The cost of the company's ordinary equity capital has been estimated at 18% per year. What is the company's weighted average cost of capital (to the nearest whole %) for capital investment appraisal purposes?",
      type: "mcq",
      choices: {
        A: "10%",
        B: "14%",
        C: "16%",
        D: "17%"
      },
      answer: "C"
    },
    {
      number: 132,
      text: "Which of the following statements is correct?",
      type: "mcq",
      choices: {
        A: "There must be taxes",
        B: "There must exist a minimum WACC",
        C: "Cost of debt increases as gearing decreases",
        D: "Cost of equity increases as gearing decreases"
      },
      answer: "B"
    },
    {
      number: 145,
      text: "Which of the following ratios is used to measure a company's liquidity?",
      type: "mcq",
      choices: {
        A: "Current ratio",
        B: "Interest cover",
        C: "Gross profit margin",
        D: "Return on capital employed"
      },
      answer: "A"
    },
    {
      number: 162,
      text: "Mrs Mays has been left $30,000 which she plans to invest on the Stock Exchange. A friend has told her that the London Stock Exchange shows strong form market efficiency. If this is the case, which of the following investment strategies should Mrs Mays follow?",
      type: "mcq",
      choices: {
        A: "Study the company reports in the press and try to spot under- valued shares in which to invest",
        B: "Invest in two or three blue chip companies and hold the shares for as long as possible",
        C: "Build up a good spread of shares in different industry sectors",
        D: "Study the company reports in the press and try to spot strongly growing companies in which to invest"
      },
      answer: "C"
    },
    {
      number: 166,
      text: "An investor believes that they can make abnormal returns by studying past share price movements. In terms of capital market efficiency, to which of the following does the investor's belief relate?",
      type: "mcq",
      choices: {
        A: "Fundamental analysis",
        B: "Operational efficiency",
        C: "Technical analysis",
        D: "Semi- strong form efficiency"
      },
      answer: "C"
    },
    {
      number: 176,
      text: "Asset- based business valuations using net realisable values are useful in which of the following situations?",
      type: "mcq",
      choices: {
        A: "When the company is being bought for the earnings/cash flow that all of its assets can produce in the future",
        B: "For asset stripping",
        C: "To identify a maximum price in a takeover",
        D: "When the company has a highly skilled workforce"
      },
      answer: "B"
    },
    {
      number: 195,
      text: "What does the term 'matching' refer to?",
      type: "mcq",
      choices: {
        A: "The coupling of two simple financial instruments to create a more complex one",
        B: "The mechanism whereby a company balances its foreign currency inflows and outflows",
        C: "The adjustment of credit terms between companies",
        D: "Contracts not yet offset by futures contracts or fulfilled by delivery"
      },
      answer: "B"
    },
    {
      number: 203,
      text: "Which of the following statements is correct?",
      type: "mcq",
      choices: {
        A: "Once purchased, currency futures have a range of close- out dates",
        B: "Currency swaps can be used to hedge exchange rate risk over longer periods than the forward market",
        C: "Banks will allow forward exchange contracts to lapse if they are not used by a company",
        D: "Currency options are paid for when they are exercised"
      },
      answer: "B"
    },
    {
      number: 207,
      text: "Which of the following statements is true of a put option?",
      type: "mcq",
      choices: {
        A: "It is the right to sell an asset at a fixed price",
        B: "It is an obligation to sell an asset at a fixed price",
        C: "It is the right to buy an asset at a fixed price",
        D: "It is an obligation to buy an asset at a fixed price"
      },
      answer: "A"
    },
    {
      number: 214,
      text: "Interest Rate Parity Theory generally holds true in practice. However, it suffers from several limitations. Which of the following is NOT a limitation of Interest Rate Parity Theory?",
      type: "mcq",
      choices: {
        A: "Government controls on capital markets",
        B: "Controls on currency trading",
        C: "Intervention in foreign exchange markets",
        D: "Future inflation rates are only estimates"
      },
      answer: "D"
    },
  ],
  PM: [
    {
  "number": 1,
  "text": "A government department generates information which should not be disclosed to anyone who works outside of the department. There are many other government departments working within the same building. Which of the following would NOT be an effective control procedure for the generation and distribution of the information within the government department?",
  "type": "mcq",
  "choices": {
    "A": "If working from home, departmental employees must use a memory stick to transfer data, as laptop computers are not allowed to leave the department.",
    "B": "All departmental employees must enter non-disclosed and regularly updated passwords to access their computers.",
    "C": "All authorised employees must swipe an officially issued, personal identity card at the entrance to the department before they can gain access.",
    "D": "All hard copies of confidential information must be shredded at the end of each day or locked overnight in a safe if needed again."
  },
  "answer": "A"
},
    {
  "number": 2,
  "text": "Which of the following statements regarding technologies and systems are correct? (1) Networked computers can save costs by sharing hardware, software and data. (2) An intranet provides quick, effective communication with suppliers. (3) Wireless networks allow businesses to expand with less disruption than wired networks. (4) The internet can be used to monitor and measure customer interest.",
  "type": "mcq",
  "choices": {
    "A": "(2), (3) and (4)",
    "B": "(1) and (2)",
    "C": "(1), (3) and (4)",
    "D": "(1) and (4) only"
  },
  "answer": "C"
},
    {
  "number": 3,
  "text": "Which TWO of the following are characteristics of effective data visualisation?",
  "type": "multi-select",
  "choices": {
    "A": "Presented only on screen",
    "B": "Real time information",
    "C": "High level only",
    "D": "Presents all data obtained",
    "E": "User friendly",
    "F": "Guarantees good management decisions"
  },
  "answer": [
    "B",
    "E"
  ]
},
    {
  "number": 4,
  "text": "Which of the following statements about data visualisation is true?",
  "type": "mcq",
  "choices": {
    "A": "The most common use of data visualisation is the creation of a dashboard displaying real time KPIs",
    "B": "Data is always displayed in standardised formats to ensure consistency",
    "C": "Data visualisation refers to data that is mainly analysed and presented using basic spreadsheet software",
    "D": "Increased use of data visualisation within organisations increases the need for more IT experts"
  },
  "answer": "A"
},
    {
  "number": 5,
  "text": "A company's board of directors were recently embarrassed when a very unhappy junior human resources employee emailed details of their salaries to the entire company. An investigation revealed that the human resources director had lent his username and password to the junior employee so that routine maintenance of the human resources database could be conducted whilst the director was on vacation. During the director's vacation, the junior employee had used the director's username and password to access the board's salary records. Which of the following controls could have helped to prevent this breach of confidential information?",
  "type": "mcq",
  "choices": {
    "A": "Monitoring the database system logs on a regular basis to see what information is being accessed",
    "B": "Building levels of access into the database so that only senior staff have access to board records",
    "C": "Keeping all the human resource records for salaries on a separate server",
    "D": "Having a policy of regularly updating the passwords required to access the system"
  },
  "answer": "A"
},
    {
  "number": 6,
  "text": "The qualities of good information contained in reports are more easily remembered using the mnemonic ACCURATE. Which one of the following is NOT normally associated with a quality of good information?",
  "type": "mcq",
  "choices": {
    "A": "Adaptable to the needs of the user",
    "B": "Acceptable to the user",
    "C": "Accurate",
    "D": "Understandable by the user"
  },
  "answer": "B"
},
    {
  "number": 7,
  "text": "Local managers within organisations often use operational reports. Which of the following features of reports would be most true of an operational report?",
  "type": "mcq",
  "choices": {
    "A": "Summarised information",
    "B": "Mainly external information on local competition",
    "C": "Accurate information on current position",
    "D": "Infrequent"
  },
  "answer": "C"
},
    {
  "number": 8,
  "text": "Strategic reports have many features, which of the following is the most likely feature of a strategic report?",
  "type": "mcq",
  "choices": {
    "A": "Prepared regularly",
    "B": "Total accuracy of past and forecast data",
    "C": "Highly summarised showing overall trends",
    "D": "Demonstrates only the company's current position"
  },
  "answer": "C"
},
    {
  "number": 9,
  "text": "Long-term sales forecasts are an example of accounting information used at which level of control in an organisation?",
  "type": "mcq",
  "choices": {
    "A": "Strategic planning",
    "B": "Management control",
    "C": "Tactical control",
    "D": "Operational control"
  },
  "answer": "A"
},
    {
  "number": 10,
  "text": "Information systems described below may or may not be suited to all levels of management. Identify by placing a tick in the relevant boxes in the table below the suitability of the systems for all levels of management. (A) A Management Information System producing management accounts showing margins for individual customers (B) A Customer Relationship Management system tracking the acquisition, retention and extension of all customers (C) An Executive Information System giving access to internal and external information in summarised form, with the option to drill down to a greater level of activity",
  "type": "mcq",
  "choices": {
    "A": "Only A is suited to all levels",
    "B": "Only B is suited to all levels",
    "C": "A and B are suited, C is not",
    "D": "None are suited to all levels"
  },
  "answer": "C"
},
    {
  "number": 11,
  "text": "A manufacturer and retailer of kitchens introduces an enterprise resource planning system. Which of the following is NOT likely to be a potential benefit of introducing this system?",
  "type": "mcq",
  "choices": {
    "A": "Schedules of labour are prepared for manufacturing",
    "B": "Inventory records are updated automatically",
    "C": "Sales are recorded into the financial ledgers",
    "D": "Critical strategic information can be summarised"
  },
  "answer": "D"
},
    {
  "number": 12,
  "text": "Which of the following is an example of an Executive Information System (EIS)?",
  "type": "mcq",
  "choices": {
    "A": "Software to identify customer trends and marketing opportunities",
    "B": "A database management system",
    "C": "A system summarising sales to assist in identifying trends and hiring new workers",
    "D": "A system providing internal and external information to help senior managers monitor the performance of the entire organisation"
  },
  "answer": "D"
},
    {
  "number": 13,
  "text": "You have been presented with a summary report of sales in the last month, with a breakdown of totals per product, and with variances from the corresponding monthly sales plan. Which of the following systems would generate such a report?",
  "type": "mcq",
  "choices": {
    "A": "A transaction processing system",
    "B": "A management information system",
    "C": "An executive Information system",
    "D": "None of the above"
  },
  "answer": "B"
},
    {
  "number": 14,
  "text": "Which of the following could be described as an Enterprise Resource Planning system (EPRS)?",
  "type": "mcq",
  "choices": {
    "A": "A system that identifies trends and patterns in large sets of data.",
    "B": "A system integrating data from all operations within the organisation",
    "C": "A marketing database holding records of past advertising campaigns and the sales generated by those campaigns",
    "D": "A system that captures, processes, and stores low level transaction data."
  },
  "answer": "B"
},
    {
  "number": 15,
  "text": "Which TWO of the following statements regarding big data are true?",
  "type": "multi-select",
  "choices": {
    "A": "It is more reliable than other sources of data",
    "B": "It can change very quickly",
    "C": "It can take multiple forms",
    "D": "It involves dealing with large financial numbers"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 16,
  "text": "It is often said that big data enhances business decisions. Which of the following statements regarding big data and decision making is/are true? (i) Decisions which include big data analytics can lead to a competitive edge over rivals. (ii) Big data analytics cannot account for competitors' expected actions.",
  "type": "mcq",
  "choices": {
    "A": "Statement (i) only",
    "B": "Statement (ii) only",
    "C": "Both statements",
    "D": "Neither statement"
  },
  "answer": "A"
},
    {
  "number": 17,
  "text": "Which TWO of the following statements are thought to be benefits when using big data to enhance business decisions?",
  "type": "multi-select",
  "choices": {
    "A": "There is no need to have a deep understanding of the industry in order to interpret the data",
    "B": "Customer relationship management can be improved resulting in better repeat business and customer loyalty",
    "C": "Business performance can be better tracked and analysed against a wider set of criteria",
    "D": "All available big data will create value for an organisation when analysed"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 18,
  "text": "Which of the following is NOT considered a risk when using big data to enhance business decision making?",
  "type": "mcq",
  "choices": {
    "A": "The veracity of the data is difficult to assess",
    "B": "Traditional sources of data are ignored",
    "C": "The data may be distorted by data outliers",
    "D": "The benefits may be outweighed by the financial costs"
  },
  "answer": "B"
},
    {
  "number": 19,
  "text": "A company which makes two products, Alpha and Zeta, uses activity-based costing to absorb its overheads. It has recently identified a new overhead cost pool for inspection costs and has decided that the cost driver is the number of inspections. Total inspection costs $250,000. Production volume: Alpha 2,500 units, Zeta 8,000 units. Machine hours per unit: Alpha 1, Zeta 1.5. Units per batch: Alpha 500, Zeta 1,000. Inspections per batch: Alpha 4, Zeta 1. What is the inspection cost per unit of product Alpha?",
  "type": "mcq",
  "choices": {
    "A": "$23.81",
    "B": "$17.24",
    "C": "$71.43",
    "D": "$80.00"
  },
  "answer": "C"
},
    {
  "number": 20,
  "text": "Which of the following statements are true regarding activity-based costing (ABC) and cost drivers? (1) A cost driver is any factor that causes a change in the cost of an activity. (2) For long-term variable overhead costs, the cost driver will be the volume of activity. (3) Traditional absorption costing tends to under-allocate overhead costs to low-volume products.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (3) only",
    "B": "(2) and (3) only",
    "C": "(1) and (2) only",
    "D": "(1), (2) and (3)"
  },
  "answer": "D"
},
    {
  "number": 21,
  "text": "A company makes products A and B. It is experimenting with activity-based costing. Production set-up costs are $12,000; total production will be 20,000 units of each of products A and B. Each run is 1,000 units of A or 5,000 units of B. Using activity-based costing, what is the set-up cost per unit of A? (Give your answer to the nearest cent.)",
  "type": "mcq",
  "choices": {
    "A": "$0.25",
    "B": "$0.50",
    "C": "$0.75",
    "D": "$1.00"
  },
  "answer": "B"
},
    {
  "number": 22,
  "text": "Which of the following statement(s) is/are true regarding activity-based costing? (1) A cost pool is an activity which consumes resources and for which overhead costs are identified and allocated. (2) An activity-based costing overhead absorption rate (OAR) is calculated in the same way as an absorption costing OAR, and will result in the same OAR being calculated for each cost pool.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "A"
},
    {
  "number": 23,
  "text": "A company uses activity-based costing to calculate the unit cost of its products. The figures for Period 3 are as follows: production set-up costs are $84,000. Total production is 40,000 units of each of products A and B, and each run is 2,000 units of A or 5,000 units of B. What is the set-up cost per unit of B (to 2 decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$0.30",
    "B": "$0.60",
    "C": "$0.90",
    "D": "$1.20"
  },
  "answer": "B"
},
    {
  "number": 24,
  "text": "The ABC Company manufactures two products, product Alpha and Product Beta. Both are produced in a very labour-intensive environment and use similar processes. Alpha and Beta differ by volume. Beta is a high-volume product, while Alpha is a low-volume product. Details: Direct labour hours/unit: 5 for both. Annual output: Alpha 1,200, Beta 12,000. Purchase orders: Alpha 75, Beta 85. Set-ups: Alpha 40, Beta 60. Fixed overhead costs total $420,000 analysed as: Volume-related $100,000, Purchasing related $145,000, Set-up related $175,000. Using a traditional method of overhead absorption based on labour hours, what is the overhead cost per unit for each unit of product Alpha (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$6.36",
    "B": "$22.75",
    "C": "$31.82",
    "D": "$122.55"
  },
  "answer": "C"
},
    {
  "number": 25,
  "text": "The ABC Company manufactures two products, product Alpha and Product Beta. (Same data as Q54). Using a traditional method of overhead absorption based on labour hours, what is the overhead cost per unit for each unit of product Beta (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$6.36",
    "B": "$22.75",
    "C": "$31.82",
    "D": "$122.55"
  },
  "answer": "C"
},
    {
  "number": 26,
  "text": "The ABC Company manufactures two products, product Alpha and Product Beta. (Same data as Q54). Using Activity-based costing as the method of overhead absorption, what is the overhead cost per unit for each unit of product Alpha (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$6.36",
    "B": "$22.75",
    "C": "$122.55",
    "D": "Cannot be determined without more information"
  },
  "answer": "C"
},
    {
  "number": 27,
  "text": "A company makes two products using the same type of materials and skilled workers. Product A: Budgeted volume 1,000 units, Material per unit $10, Labour per unit $5. Product B: Budgeted volume 2,000 units, Material per unit $20, Labour per unit $20. Fixed costs relating to material handling amount to $100,000. The cost driver for these costs is the volume of material purchased. General fixed costs, absorbed on the basis of labour hours, amount to $180,000. Using activity-based costing, what is the total fixed overhead amount to be absorbed into each unit of product B (to the nearest whole $)?",
  "type": "mcq",
  "choices": {
    "A": "$113",
    "B": "$120",
    "C": "$40",
    "D": "$105"
  },
  "answer": "B"
},
    {
  "number": 28,
  "text": "A company is changing its costing system from traditional absorption costing based on labour hours to activity-based costing. It has overheads of $156,000 which are related to taking material deliveries. Product X: Total units required 1,000, Delivery size 200. Product Y: 2,000 units, Delivery size 400. Product Z: 3,000 units, Delivery size 1,000. Total labour costs are $360,000 for 45,000 hours. Each unit of each product takes the same number of direct hours. Assuming that the company uses the number of deliveries as its cost driver, what will be the effect on the costs per unit following the change from absorption costing to activity-based costing?",
  "type": "mcq",
  "choices": {
    "A": "Product X: Increase, Product Y: Increase, Product Z: Decrease",
    "B": "Product X: Decrease, Product Y: Increase, Product Z: Increase",
    "C": "Product X: Increase, Product Y: Decrease, Product Z: Decrease",
    "D": "Product X: Decrease, Product Y: Decrease, Product Z: Increase"
  },
  "answer": "A"
},
    {
  "number": 29,
  "text": "DRP Ltd has recently introduced an activity-based costing (ABC) system. It manufactures three products. Budgeted annual production: D 100,000 units, R 100,000 units, P 50,000 units. Batch size: D 100, R 50, P 25. Machine set-ups per batch: D 3, R 4, P 6. Purchase orders per batch: D 2, R 1, P 1. Processing time per unit (minutes): D 2, R 3, P 3. Three cost pools: Machine set-up costs $150,000, Purchase of materials $70,000, Processing $80,000. What is the budgeted machine set-up cost per unit of product R?",
  "type": "mcq",
  "choices": {
    "A": "$6.52",
    "B": "$0.52",
    "C": "$18.75",
    "D": "$1.82"
  },
  "answer": "B"
},
    {
  "number": 30,
  "text": "Which of the following strategies would be an immediately acceptable method to reduce an identified cost gap?",
  "type": "mcq",
  "choices": {
    "A": "Reduce the desired margin without discussion with business owners",
    "B": "Reduce the predicted selling price",
    "C": "Source similar quality materials from another supplier at reduced cost",
    "D": "Increase the predicted selling price"
  },
  "answer": "C"
},
    {
  "number": 31,
  "text": "The predicted selling price for a product has been set at $56 per unit. The desired mark-up on cost is 25% and the material cost for the product is estimated to be $16 before allowing for additional materials to allow for shrinkage of 20% (for every 10kg of material going in only 8kg comes out). If labour is the only other cost and 2 hours are needed what is the most the business can pay per hour if a cost gap is to be avoided?",
  "type": "mcq",
  "choices": {
    "A": "$10.00",
    "B": "$11.20",
    "C": "$12.40",
    "D": "$13.60"
  },
  "answer": "C"
},
    {
  "number": 32,
  "text": "Which of the following techniques is NOT relevant to target costing?",
  "type": "mcq",
  "choices": {
    "A": "Value analysis",
    "B": "Variance analysis",
    "C": "Functional analysis",
    "D": "Activity analysis"
  },
  "answer": "B"
},
    {
  "number": 33,
  "text": "The selling price of product Zigma is set to be $250 for each unit and sales for the coming year are expected to be 500 units. The company requires a return of 15% in the coming year on its investment of $250,000 in product Zigma. What is the target cost for each unit of Zigma for the coming year?",
  "type": "mcq",
  "choices": {
    "A": "$145",
    "B": "$155",
    "C": "$165",
    "D": "$175"
  },
  "answer": "D"
},
    {
  "number": 34,
  "text": "VC Co is a company of opticians. It provides a range of services to the public, such as eye tests and contact lens consultations, and has a separate dispensary selling glasses and contact lenses. Patients book appointments with an optician in advance. A standard appointment is 30 minutes long, during which an optician will assess the patient's specific requirements and provide them with the eye care services they need. After the appointment, patients are offered the chance to buy contact lenses or glasses from the dispensary. Which of the following describes a characteristic of the services provided by an optician at VC Co during a standard appointment?",
  "type": "mcq",
  "choices": {
    "A": "Tangible",
    "B": "Homogeneous",
    "C": "Non-perishable",
    "D": "Simultaneous"
  },
  "answer": "D"
},
    {
  "number": 35,
  "text": "A company has produced the following information for a product it is about to launch. The product is expected to have a life of three years. Year 1: Sales 2,000 units, Variable production cost $2.30, Fixed production costs $3,000, Variable selling cost $0.50, Fixed selling costs $1,500, Administrative costs $700. Year 2: Sales 5,000 units, Variable production cost $1.80, Fixed production costs $3,500, Variable selling cost $0.40, Fixed selling costs $1,600, Administrative costs $700. Year 3: Sales 7,000 units, Variable production cost $1.20, Fixed production costs $4,000, Variable selling cost $0.40, Fixed selling costs $1,600, Administrative costs $700. What is the life-cycle cost per unit?",
  "type": "mcq",
  "choices": {
    "A": "$2.81",
    "B": "$2.32",
    "C": "$3.22",
    "D": "$3.07"
  },
  "answer": "C"
},
    {
  "number": 36,
  "text": "A manufacturing company which produces a range of products has developed a budget for the life-cycle of a new product, P. Lifetime total: Design costs $800,000, Direct manufacturing costs $20 per unit, Depreciation costs $500,000, Decommissioning costs $20,000, Machine hours 4 per unit, Production and sales units 300,000. The company's total fixed production overheads are budgeted to be $72 million each year and total machine hours are budgeted to be 96 million hours. The company absorbs overheads on a machine hour basis. What is the budgeted life-cycle cost per unit for product P?",
  "type": "mcq",
  "choices": {
    "A": "$24.40",
    "B": "$25.73",
    "C": "$27.40",
    "D": "$22.73"
  },
  "answer": "C"
},
    {
  "number": 37,
  "text": "SNT is a Japanese electronics giant specialising in the production of game consoles. SNT is planning to introduce the latest 'next-generation' console. The new console is expected to incur costs: 20X0: Manufactured 10,000 units, R&D $950,000, Marketing $230,000, Production cost $450, Warranty $30. 20X1: 12,000 units, Marketing $120,000, Production cost $430, Warranty $30. 20X2: 11,100 units, Marketing $20,000, Production cost $290, Warranty $40. 20X3: 3,000 units, Marketing $5,000, Production cost $290, Warranty $45, End of life costs $125,000. Market research indicates customers will pay $420 per console. Which of the following statements made by the Chief Executive are true? (1) The cost per console using life-cycle costing is higher than the price customers are prepared to pay. (2) More attention to R&D costs in 20X0 could reduce warranty costs in later years.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 38,
  "text": "Which FOUR of the following are said to be benefits of life-cycle costing?",
  "type": "multi-select",
  "choices": {
    "A": "It provides the true financial cost of a product",
    "B": "The length of the life-cycle can be shortened",
    "C": "Expensive errors can be avoided in that potentially failing products can be avoided",
    "D": "Lower costs can be achieved earlier by designing out costs",
    "E": "Better selling prices can be set",
    "F": "Decline stages of the life-cycle can be avoided"
  },
  "answer": [
    "A",
    "C",
    "D",
    "E"
  ]
},
    {
  "number": 39,
  "text": "Which of the following statements are true regarding the justification of the use of life cycle costing? (1) Product life cycles are becoming increasingly short. This means that the initial costs are an increasingly important component in the product's overall costs. (2) Product costs are increasingly weighted to the start of a product's life cycle, and to properly understand the profitability of a product these costs must be matched to the ultimate revenues. (3) The high costs of (for example) research, design and marketing in the early stages in a product's life cycle necessitate a high initial selling price. (4) Traditional capital budgeting techniques do not attempt to minimise the costs or maximise the revenues over the product life cycle.",
  "type": "mcq",
  "choices": {
    "A": "(1), (2) and (4) only",
    "B": "(2) and (3) only",
    "C": "(1) and (3) only",
    "D": "(1), (2), (3) and (4)"
  },
  "answer": "A"
},
    {
  "number": 40,
  "text": "Which of the following statement(s) is/are true regarding life-cycle costing? (1) Life cycle costing takes into account all costs incurred in a product life cycle with exception of sunk costs incurred on research and development. (2) Life cycle costing ensures a profit is generated over the life of the product. (3) Life cycle costing is most useful for products with an even weighting of costs over their life.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (3) only",
    "B": "(2) only",
    "C": "(2) and (3) only",
    "D": "(1), (2) and (3)"
  },
  "answer": "B"
},
    {
  "number": 41,
  "text": "Company B is about to start developing a new product for launch in its existing market. They have forecast sales of 20,000 units and the marketing department suggest a selling price of $43/unit. The company seeks to make a mark-up of 40% product cost. It is estimated that the lifetime costs of the product will be as follows: Design and development costs $43,000, Manufacturing costs $15/unit, Plant decommissioning costs $30,000. What is the life cycle cost per unit of the new product?",
  "type": "mcq",
  "choices": {
    "A": "$18.65",
    "B": "$22",
    "C": "$22.87",
    "D": "$24"
  },
  "answer": "A"
},
    {
  "number": 42,
  "text": "Skye Limited operates in an environment where products go through two processes. Process P: 8 machines at 90% capacity, each producing 6 units per hour. Process Q: 6 machines at 85% capacity, each producing 9 units per hour. Skye produces 'Cloud' with a 15% discount on selling price of $20 per unit. Material cost $5 per unit, direct labour cost twice material cost. It takes 0.2 hours in process P and 0.3 hours in process Q. What is the Cloud's throughput per hour of the bottleneck resource (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$40.00",
    "B": "$50.00",
    "C": "$60.00",
    "D": "$70.00"
  },
  "answer": "C"
},
    {
  "number": 43,
  "text": "A manufacturing company uses machine C for five hours a day to manufacture four products: W, X, Y and Z. Factory costs are $150,000 per day. Production rate per machine hour: W 200 units, X 500, Y 400, Z 350. Selling price: W $350, X $190, Y $270, Z $215. Material cost: W $120, X $95, Y $160, Z $75. Conversion cost: W $40, X $25, Y $20, Z $35. If the company cannot increase machine C's operational hours, what is the production ranking of product Y?",
  "type": "mcq",
  "choices": {
    "A": "First",
    "B": "Second",
    "C": "Third",
    "D": "Fourth"
  },
  "answer": "D"
},
    {
  "number": 44,
  "text": "A manufacturing company uses three processes. Process 1: 22 hours available, Product X needs 1.00 hour, Product Y needs 0.75 hours. Process 2: 22 hours available, Product X needs 0.75 hours, Product Y needs 1.00 hour. Process 3: 18 hours available, Product X needs 1.00 hour, Product Y needs 0.50 hours. Daily demand: X 10 units, Y 16 units. Which of the following will improve throughput?",
  "type": "mcq",
  "choices": {
    "A": "Increasing the efficiency of the maintenance routine for Process 2",
    "B": "Increasing the demand for both products",
    "C": "Reducing the time taken for rest breaks on Process 3",
    "D": "Reducing the time product X requires for Process 1"
  },
  "answer": "A"
},
    {
  "number": 45,
  "text": "Which ONE of the below statements is NOT true of throughput accounting?",
  "type": "mcq",
  "choices": {
    "A": "Throughput accounting considers that the only variable costs in the short run are materials and components.",
    "B": "Throughput accounting considers that time at a bottleneck resource has value, not elsewhere.",
    "C": "Throughput accounting views stock building as a non-value-adding activity, and therefore discourages it.",
    "D": "Throughput accounting was designed as a decision-making tool for situations where there is a bottleneck in the production process."
  },
  "answer": "D"
},
    {
  "number": 46,
  "text": "The movie budget for process X shows input/output analysis. INPUTS: Materials 1,000kg ($50,000), System costs ($30,000). OUTPUTS: Good output 700kg ($84,000), Waste 100kg ($1,000), Scrap 200kg ($3,000). Monthly profit is $6,000. The company is looking at introducing new quality systems that will increase system costs by $5,000 per month but will reduce waste from 10% to 4% of input. Scrap is expected to stay at 20% of input. What would be the impact on monthly profit of implementing the proposal?",
  "type": "mcq",
  "choices": {
    "A": "$4,400 reduction in profit",
    "B": "$200 increase in profit",
    "C": "$2,200 increase in profit",
    "D": "$2,800 increase in profit"
  },
  "answer": "D"
},
    {
  "number": 47,
  "text": "Different management accounting techniques can be used to account for environmental costs. One of these techniques involves analysing costs under three distinct categories: material, system, and delivery and disposal. What is this technique known as?",
  "type": "mcq",
  "choices": {
    "A": "Activity-based costing",
    "B": "Life-cycle costing",
    "C": "Input-output analysis",
    "D": "Flow cost accounting"
  },
  "answer": "D"
},
    {
  "number": 48,
  "text": "Which TWO of the following statements about the advantages of using Activity-based costing for Environmental Management Accounting are correct?",
  "type": "multi-select",
  "choices": {
    "A": "Higher environmental costs can be reflected in higher prices",
    "B": "Cost savings achieved through environmental policies can be measured",
    "C": "It is simple to determine the environmental costs and cost drivers",
    "D": "It considers all environmental effects of the company's actions"
  },
  "answer": [
    "A",
    "B"
  ]
},
    {
  "number": 49,
  "text": "The monthly budget for process X (same data as Q76). The company is looking at adopting environmental flow cost accounting, in which all material and system costs will be apportioned on the basis of weight. Calculate the total net cost of waste and scrap using flow cost accounting. Give your answer to the nearest $5.",
  "type": "mcq",
  "choices": {
    "A": "$15,000",
    "B": "$18,000",
    "C": "$22,000",
    "D": "$25,000"
  },
  "answer": "C"
},
    {
  "number": 50,
  "text": "Which TWO of the following statements about flow cost accounting are correct?",
  "type": "multi-select",
  "choices": {
    "A": "Manufacturing costs are categorised into material costs, system costs and delivery and disposal costs",
    "B": "Flow cost accounting records material inflows and balances this with outflows both in terms of physical quantities and, at the end of the process, in monetary terms too",
    "C": "In flow cost accounting, output costs are allocated between positive and negative product costs",
    "D": "The aim of flow cost accounting is to increase the quantity of materials which, as well as having a positive effect on the environment, should have a positive effect on a company's total costs in the long run"
  },
  "answer": [
    "A",
    "C"
  ]
},
    {
  "number": 51,
  "text": "Which of the following statements is/are true regarding the issues faced by businesses in the management of their environmental costs? (1) The costs involved are difficult to define. (2) Environmental costs can be categorised as quality related costs. (3) Cost control can be an issue, in particular if costs have been identified incorrectly in the first place.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) and (3) only",
    "C": "None of them",
    "D": "All of them"
  },
  "answer": "D"
},
    {
  "number": 52,
  "text": "Flow cost accounting is a technique which can be used to account for environmental costs. Inputs and outputs are measured through each individual process of production. Which of the following is NOT a category used within flow cost accounting?",
  "type": "mcq",
  "choices": {
    "A": "Material flows",
    "B": "System flows",
    "C": "Delivery and disposal flows",
    "D": "Waste flows"
  },
  "answer": "D"
},
    {
  "number": 53,
  "text": "Accountants usually find it difficult to deal with environmental costs. Which of the following is NOT a reason for this?",
  "type": "mcq",
  "choices": {
    "A": "Costs are often hidden",
    "B": "Costs are mostly minor",
    "C": "Costs are often very long term",
    "D": "Accounting systems rarely split off these costs automatically"
  },
  "answer": "B"
},
    {
  "number": 54,
  "text": "Which of the following statements are true regarding Triple Bottom Line (TBL) reporting as part of accounting for sustainability factors? (1) Triple bottom line reporting would involve measuring the organisation's profit, as well as the impact on people and the planet. (2) Measuring the impact on people, planet, and profit is very straightforward for most businesses. (3) It could be a useful way for an organisation to encourage staff to make efficiency cost savings and could even help them attract ethically aware staff and customers.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (2) only",
    "B": "(2) and (3) only",
    "C": "(1) and (3) only",
    "D": "(1), (2) and (3)"
  },
  "answer": "C"
},
    {
  "number": 55,
  "text": "UU Company has been asked to quote for a special contract. Material X: Original cost $5.00 per kg, Scrap value $0.50 per kg, Replacement cost $5.50 per kg. The contract requires 10 kgs of Material X. There are 250 kgs of this material in inventory which was purchased in error over two years ago. If Material X is modified, at a cost of $2 per kg, it could then be used as a substitute for material Y which is in regular use and currently costs $6 per kg. What is the relevant cost of the materials for the special contract?",
  "type": "mcq",
  "choices": {
    "A": "$5",
    "B": "$40",
    "C": "$50",
    "D": "$55"
  },
  "answer": "B"
},
    {
  "number": 56,
  "text": "VV Company has been asked to quote for a special contract. The contract requires 100 hours of labour. Labourers are paid $15 per hour and are working at full capacity. There is a shortage of labour. The labour would have to be taken from contract Z, which currently utilises 500 hours of labour and generates $5,000 worth of contribution. If labour was taken from contract Z, then the whole of contract Z would have to be delayed, incurring a penalty fee of $1,000. What is the relevant cost of the labour for the special contract?",
  "type": "mcq",
  "choices": {
    "A": "$1,000",
    "B": "$1,500",
    "C": "$2,500",
    "D": "$7,500"
  },
  "answer": "C"
},
    {
  "number": 57,
  "text": "In order to utilise some spare capacity, K is preparing a quotation for a special order which requires 2,000 kgs of material J. K has 800 kgs of material J in inventory (original cost $7.00 per kg). Material J is used in product L. Each unit of L uses 5 kgs of material J and yields contribution of $10.00. Resale value of J is $5.50 per kg. Replacement price is $8.00 per kg. J is readily available. What is the relevant cost of the 2,000 kgs of material J?",
  "type": "mcq",
  "choices": {
    "A": "$11,000",
    "B": "$14,000",
    "C": "$16,000",
    "D": "$18,000"
  },
  "answer": "C"
},
    {
  "number": 58,
  "text": "A company is calculating the relevant cost of material for a contract requiring 4,200 kgs of material H. It can be bought for $6.30 per kg. The company has 3,700 kgs in inventory bought at $4.50 per kg. The inventory could be sold for $3.20 per kg. It could be modified at $3.70 per kg and used as substitute for material J, which costs $7.50 per kg. What is the relevant cost?",
  "type": "mcq",
  "choices": {
    "A": "$17,210",
    "B": "$19,800",
    "C": "$26,460",
    "D": "$30,900"
  },
  "answer": "A"
},
    {
  "number": 59,
  "text": "Ace Limited is considering a new project that will require a currently idle machine. Book value $12,000, disposal value $10,500 (before $200 disposal costs). To be fit for purpose, relocation cost $500 and refit cost $800. What is the relevant cost of using the machine?",
  "type": "mcq",
  "choices": {
    "A": "$9,000",
    "B": "$10,300",
    "C": "$11,600",
    "D": "$13,300"
  },
  "answer": "C"
},
    {
  "number": 60,
  "text": "Blunt is considering a new project. Existing fixed overheads absorbed at $8 per hour. Project involves 500 incremental labour hours. Variable overheads cost $4 per hour for 450 machine hours (50 hours idle time). Temporary space rental $1,200. What is the overhead to be charged to the project?",
  "type": "mcq",
  "choices": {
    "A": "$3,000",
    "B": "$3,200",
    "C": "$7,000",
    "D": "$7,200"
  },
  "answer": "A"
},
    {
  "number": 61,
  "text": "Cleverclogs needs 600 hours of labour. Option 1: Agency at $9 per hour. Option 2: Recruit new staff: advertising $1,200 plus $6 per hour. Option 3: Redirect staff paid $7 per hour who make sandals generating contribution of $3 per hour. What is the relevant cash flow?",
  "type": "mcq",
  "choices": {
    "A": "$1,800",
    "B": "$3,600",
    "C": "$4,200",
    "D": "$4,800"
  },
  "answer": "D"
},
    {
  "number": 62,
  "text": "Drippy is producing a list of relevant cash flows. They have a standing advertising contract for the next twelve months. Payment is made in the month following an advert. Drippy is going to use the magazine to advertise a new USB stick. What is the best description for the cost of the advertising space?",
  "type": "mcq",
  "choices": {
    "A": "Sunk cost",
    "B": "Historic cost",
    "C": "Relevant cost",
    "D": "Committed cost"
  },
  "answer": "D"
},
    {
  "number": 63,
  "text": "Which of the following terms would NOT normally be used to describe a relevant cost for a decision?",
  "type": "mcq",
  "choices": {
    "A": "Incremental",
    "B": "Future",
    "C": "Material",
    "D": "Cash flow"
  },
  "answer": "C"
},
    {
  "number": 64,
  "text": "X plc intends to use relevant costs for a special order printing a brochure requiring 250 reams of paper. X has 100 reams in inventory bought at $15 per ream. Current market price $26 per ream, resale value $10 per ream. What is the relevant cost of the paper?",
  "type": "mcq",
  "choices": {
    "A": "$2,500",
    "B": "$4,900",
    "C": "$5,400",
    "D": "$6,500"
  },
  "answer": "B"
},
    {
  "number": 65,
  "text": "Betis Limited is considering changing its employed staff to freelance. Employees currently paid fixed salary $240,000 per annum, would instead be paid $200 per working day producing 40 units per day. Other fixed costs $400,000 per annum. Selling price $60, material costs $20 per unit. What will be the effect on breakeven point and operating risk?",
  "type": "mcq",
  "choices": {
    "A": "Breakeven reduces by 6,000 units, operating gearing goes down",
    "B": "Breakeven reduces by 4,571 units, operating gearing goes down",
    "C": "Breakeven reduces by 4,571 units, operating gearing goes up",
    "D": "Breakeven reduces by 6,000 units, operating gearing goes up"
  },
  "answer": "B"
},
    {
  "number": 66,
  "text": "P Co makes two products - P1 and P2. P1: Selling price $10, Direct materials $3.50, Direct labour $1.50, Variable overhead $0.60, Fixed overhead $1.20, Profit $3.20. P2: Selling price $8, Direct materials $4, Direct labour $1, Variable overhead $0.40, Fixed overhead $1, Profit $1.60. Budgeted production: P1 10,000 units, P2 12,500 units. P2 includes specific fixed overheads totalling $2,500. If only product P1 were to be made, how many units would need to be sold to achieve a profit of $60,000 each year?",
  "type": "mcq",
  "choices": {
    "A": "15,000",
    "B": "16,875",
    "C": "18,637",
    "D": "20,000"
  },
  "answer": "C"
},
    {
  "number": 67,
  "text": "An organisation manufactures and sells a single product. Budget: Sales revenue (20,000 units) $5,000,000. Manufacturing costs: Fixed $1,600,000, Variable $1,400,000. Selling costs: Fixed $1,200,000, Variable $400,000. If inventory levels are negligible, what is the breakeven point in units?",
  "type": "mcq",
  "choices": {
    "A": "13,634",
    "B": "13,750",
    "C": "17,500",
    "D": "28,000"
  },
  "answer": "C"
},
    {
  "number": 68,
  "text": "A company manufactures a single product with variable cost per unit $36. Contribution to sales ratio is 25%. Weekly fixed costs $18,000. Which of the following is the weekly breakeven point in units?",
  "type": "mcq",
  "choices": {
    "A": "1,500",
    "B": "1,600",
    "C": "1,800",
    "D": "2,000"
  },
  "answer": "A"
},
    {
  "number": 69,
  "text": "A company makes a single product: Selling price $25, Material $5, Labour $7, Variable overhead $3, Fixed overhead $4, Profit $6. Budgeted output 30,000 units. Which statement is correct?",
  "type": "mcq",
  "choices": {
    "A": "The margin of safety is 40%",
    "B": "The contribution to sales ratio is 24%",
    "C": "The volume of sales needed to make a profit of $270,000 is 45,000 units",
    "D": "If budgeted sales increase to 40,000 units, budgeted profit will increase by $100,000"
  },
  "answer": "D"
},
    {
  "number": 70,
  "text": "The management accountant of Caroline plc calculated breakeven point: Selling price $20, Variable costs $8, Fixed overheads $79,104. It is now expected that selling price will increase by 8% and variable cost by 5.2%. By how much will Caroline's breakeven point change?",
  "type": "mcq",
  "choices": {
    "A": "Rise by 9.0%",
    "B": "Rise by 2.8%",
    "C": "Fall by 2.8%",
    "D": "Fall by 9%"
  },
  "answer": "D"
},
    {
  "number": 71,
  "text": "Edwards sells two products: Product F: Selling price $40, Contribution $10, Budgeted sales 150,000 units. Product G: Selling price $20, Contribution $4, Budgeted sales 100,000 units. Fixed costs $1,400,000 per year. What is Edwards' current breakeven revenue (to the nearest $)?",
  "type": "mcq",
  "choices": {
    "A": "$100,000",
    "B": "$200,000",
    "C": "$5,600,000",
    "D": "$5,894,737"
  },
  "answer": "D"
},
    {
  "number": 72,
  "text": "Edwards (same data as Q101) now anticipates budgeted sales will be 150,000 units for each product. What would be the impact on the break-even revenue if the sales volume of G increases?",
  "type": "mcq",
  "choices": {
    "A": "Increase by the extra revenue from G of 50,000 x $20 = $1,000,000",
    "B": "Decrease by the extra revenue from G of $1,000,000",
    "C": "Increase by a different amount",
    "D": "Decrease by a different amount"
  },
  "answer": "C"
},
    {
  "number": 73,
  "text": "A company has produced a Profit/Volume (P/V) chart for its sole product. The profit line crosses the vertical axis at -$2,000 and crosses the horizontal axis at 10,000 units. What are the total fixed costs for the product?",
  "type": "mcq",
  "choices": {
    "A": "$0",
    "B": "$2,000",
    "C": "$8,000",
    "D": "$10,000"
  },
  "answer": "B"
},
    {
  "number": 74,
  "text": "A breakeven chart shows: Sales line from 0 to $100,000 at 10,000 units. Total cost line from $30,000 at 0 units to $80,000 at 10,000 units. Which statements are correct? (1) Selling price is $10 per unit. (2) Variable cost is $8 per unit. (3) Fixed costs are $30,000 per period. (4) Profit at 10,000 units is $70,000.",
  "type": "mcq",
  "choices": {
    "A": "(2) and (3)",
    "B": "(1) and (3)",
    "C": "(1) and (4) only",
    "D": "(1), (2) and (4)"
  },
  "answer": "B"
},
    {
  "number": 75,
  "text": "Hubbard Ltd manufactures a single product: Selling price $199, Direct material $54, Direct labour $50, Variable overhead $20, Fixed overhead $22. Fixed overhead absorption based on normal capacity of 6,200 units per month. Which TWO statements about next month are correct?",
  "type": "multi-select",
  "choices": {
    "A": "1,921 units are required to breakeven next month",
    "B": "3,152 units of sales are required to achieve a profit of $100,000 next month",
    "C": "Monthly fixed costs amount to $136,400",
    "D": "The margin of safety next month is 75%"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 76,
  "text": "The contribution to sales (C/S) ratio for a business is 0.4 and its fixed costs are $1,600,000. Budget revenue has been set at 6 times the amount of the fixed costs. What is the margin of safety % measured in revenue (to 1 decimal place)?",
  "type": "mcq",
  "choices": {
    "A": "41.7%",
    "B": "58.3%",
    "C": "62.5%",
    "D": "75.0%"
  },
  "answer": "B"
},
    {
  "number": 77,
  "text": "An organisation has contribution function: Contribution = 5X + 10Y. Constraints: Skilled labour: 6X + 4Y ≤ 62,000, Unskilled labour: 2X + 5Y ≤ 50,000. Maximum demand 12,000 units of each product. What is the number of units of Product Y produced to maximise contribution?",
  "type": "mcq",
  "choices": {
    "A": "6,000",
    "B": "8,000",
    "C": "10,000",
    "D": "12,000"
  },
  "answer": "B"
},
    {
  "number": 78,
  "text": "A jewellery company makes rings (R) and necklaces (N). Constraints: Labour time 3R + 2N ≤ 2,400 hours, Machine time 0.5R + 0.4N ≤ 410 hours. Management accountant determined R=500 and N=400. Which is/are slack resources? (1) Labour time available (2) Machine time available",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Both (1) and (2)",
    "D": "Neither (1) nor (2)"
  },
  "answer": "A"
},
    {
  "number": 79,
  "text": "Q plc makes Quone and Qutwo. Quone: Selling price $20, Direct material ($2 per kg) $6, Direct labour $4, Variable overhead $2, Contribution $8. Qutwo: Selling price $18, Direct material $5, Direct labour $3, Variable overhead $1.50, Contribution $8.50. Maximum demand: Quone 500 units, Qutwo unlimited. Material limited to 2,000 kgs per week. What is the shadow price of these materials?",
  "type": "mcq",
  "choices": {
    "A": "$nil",
    "B": "$2.00 per kg",
    "C": "$2.66 per kg",
    "D": "$3.40 per kg"
  },
  "answer": "D"
},
    {
  "number": 80,
  "text": "The following details relate to three services: Service R: Fee $100, Direct materials $15, Direct labour $20, Variable overhead $15, Fixed overhead $25. Service S: Fee $150, Direct materials $30, Direct labour $35, Variable overhead $20, Fixed overhead $50. Service T: Fee $160, Direct materials $25, Direct labour $30, Variable overhead $22, Fixed overhead $50. All services use same direct labour paid $25 per hour. Fixed overheads absorbed on machine hours. What are the most and least profitable uses of direct labour?",
  "type": "mcq",
  "choices": {
    "A": "Most: S, Least: R",
    "B": "Most: R, Least: S",
    "C": "Most: T, Least: R",
    "D": "Most: T, Least: S"
  },
  "answer": "D"
},
    {
  "number": 81,
  "text": "A linear programming model for products X and Y: C = 5X + 6Y. Each unit of X uses 2kg of material Z, each unit of Y uses 3kg. Standard cost $2 per kg. Shadow price for material Z is $2.80 per kg. If an extra 20kg becomes available at $2 per kg, what will the maximum increase in contribution be?",
  "type": "mcq",
  "choices": {
    "A": "Increase of $96",
    "B": "Increase of $56",
    "C": "Increase of $16",
    "D": "No change"
  },
  "answer": "B"
},
    {
  "number": 82,
  "text": "An organisation is experiencing a shortage of resources and has graphed a linear programming solution with televisions on horizontal axis and tablet computers on vertical axis. The iso-contribution line is very flat and downward sloping. Which statement is likely true?",
  "type": "mcq",
  "choices": {
    "A": "Contribution per unit for tablet computers must be higher than that for televisions",
    "B": "Contribution per unit for televisions must be higher than that for tablet computers",
    "C": "Contribution per unit for each type of product is very similar",
    "D": "Contribution per unit for one of the products must be negative"
  },
  "answer": "A"
},
    {
  "number": 83,
  "text": "An organisation has contribution function: Contribution = 12A + 8B. Constraints: Material X: A + 2B ≤ 8,000, Material Y: 2A + B ≤ 13,000. Maximum demand 10,000 units of each product. How many units of Product A are produced to maximise contribution?",
  "type": "mcq",
  "choices": {
    "A": "0",
    "B": "1,000",
    "C": "6,000",
    "D": "10,000"
  },
  "answer": "C"
},
    {
  "number": 84,
  "text": "An organisation has graphed a linear programming model. All constraints have less than or equal to constraints. The feasible region is bounded by lines at B=60, A=40, and a diagonal line from (0,40) to (60,0). What is the maximum number of units of Product B which can be produced?",
  "type": "mcq",
  "choices": {
    "A": "40",
    "B": "50",
    "C": "60",
    "D": "70"
  },
  "answer": "C"
},
    {
  "number": 85,
  "text": "An organisation has created a linear programming solution. The point marked B has been determined as the optimal production plan. At point B, direct labour line and line R intersect. Which resources will have a shadow price greater than 0?",
  "type": "mcq",
  "choices": {
    "A": "Direct labour hours only",
    "B": "Material A and Material B only",
    "C": "Machine hours only",
    "D": "Direct labour hours and Machine hours"
  },
  "answer": "A"
},
    {
  "number": 86,
  "text": "Which of the following statements is true of pricing?",
  "type": "mcq",
  "choices": {
    "A": "Discrimination is always illegal so everyone should pay the same amount",
    "B": "Early adopters get a discount for being first in the market",
    "C": "Pricing against a similar competitor is important in the Internet age",
    "D": "Price to make the most sales in that way you will always get the most profit"
  },
  "answer": "C"
},
    {
  "number": 87,
  "text": "The demand for product S is 50,000 units at current price of $1,000. Demand function: P = 1,500 - 0.01Q. Variable cost $200 per unit, fixed costs $20 million. What is the maximum total profit for product S?",
  "type": "mcq",
  "choices": {
    "A": "$13,000,000",
    "B": "$22,250,000",
    "C": "$42,250,000",
    "D": "$55,250,000"
  },
  "answer": "B"
},
    {
  "number": 88,
  "text": "A product has prime cost $12, variable overheads $3 per unit, fixed overheads $6 per unit. Which pricing policy gives the highest price?",
  "type": "mcq",
  "choices": {
    "A": "Prime cost + 80%",
    "B": "Marginal cost + 60%",
    "C": "Total absorption cost + 20%",
    "D": "Net margin of 14% on selling price"
  },
  "answer": "C"
},
    {
  "number": 89,
  "text": "The demand for a product is 5,000 units at price $400 and 6,000 units at price $380. Variable cost $200. What is the optimum price to maximise profit?",
  "type": "mcq",
  "choices": {
    "A": "$150",
    "B": "$200",
    "C": "$350",
    "D": "$700"
  },
  "answer": "C"
},
    {
  "number": 90,
  "text": "The following price and demand combinations: P1=$400, Q1=5,000 units; P2=$380, Q2=5,500 units. Variable cost $80 per unit, fixed costs $600,000 per annum. What is the demand function?",
  "type": "mcq",
  "choices": {
    "A": "P = 200 - 0.04Q",
    "B": "P = 600 - 0.04Q",
    "C": "P = 600 + 0.04Q",
    "D": "P = 200 - 20Q"
  },
  "answer": "B"
},
    {
  "number": 91,
  "text": "Same data as Q120. The optimal price is (to the nearest $):",
  "type": "mcq",
  "choices": {
    "A": "$240",
    "B": "$280",
    "C": "$340",
    "D": "$400"
  },
  "answer": "C"
},
    {
  "number": 92,
  "text": "Which FOUR of the following are correctly included in considerations in a make or buy decision?",
  "type": "multi-select",
  "choices": {
    "A": "The amount of re-allocated rent costs caused by using the production space differently",
    "B": "The variable costs of purchase from the new supplier",
    "C": "The level of discount available from the new supplier",
    "D": "The redundancy payments to the supervisor of the product in question",
    "E": "The saved labour costs of the production staff re-directed to other work",
    "F": "The materials no longer bought to manufacture the product"
  },
  "answer": [
    "B",
    "C",
    "D",
    "F"
  ]
},
    {
  "number": 93,
  "text": "Appler needs 500kg of Material A (has 200kg in stock bought at $5/kg with 10% shrinkage). Material A not regularly used, disposal cost $400 total. Current purchase price $6.25/kg. Also needs 800kg of Material B (in stock, bought at $4/kg, can be bought now at $3.75/kg). What is total cost of material A and B for minimum price calculation?",
  "type": "mcq",
  "choices": {
    "A": "$3,875",
    "B": "$4,475",
    "C": "$5,000",
    "D": "$5,500"
  },
  "answer": "B"
},
    {
  "number": 94,
  "text": "Same scenario as Q123. Processing energy costs $200, supervisor would allocate $150 of weekly salary. What is total cost for processing and supervision to be included?",
  "type": "mcq",
  "choices": {
    "A": "$200",
    "B": "$350",
    "C": "$150",
    "D": "$0"
  },
  "answer": "A"
},
    {
  "number": 95,
  "text": "Jorioz Co makes joint products X and Y. $120,000 joint processing costs. At split-off: 10,000 units of X at $1.20, 9,000 units of Y at $1.50. X could be processed further to make 8,000 units of Z. Extra costs: fixed $1,600, variable $0.50 per unit input. Selling price of Z $2.25. What profit or loss arises if product X is further processed?",
  "type": "mcq",
  "choices": {
    "A": "$600 loss",
    "B": "$400 gain",
    "C": "$3,900 gain",
    "D": "$1,600 loss"
  },
  "answer": "A"
},
    {
  "number": 96,
  "text": "P is considering whether to make or buy a component. Uses 12,000 components per year. Internal manufacturing cost: Direct materials $3.00, Direct labour $4.00, Variable overhead $1.00, Specific fixed cost $2.50, Other fixed costs $2.00. If direct labour not used for component, it would be used to increase production of another item with contribution $10.00 per unit requiring $8.00 of labour per unit. What is maximum price per component at which buying is preferable?",
  "type": "mcq",
  "choices": {
    "A": "$8.00",
    "B": "$10.50",
    "C": "$12.50",
    "D": "$15.50"
  },
  "answer": "D"
},
    {
  "number": 97,
  "text": "Shuffles Co uses fork-lift trucks. Pay-off table: Growth rate 15%: A series $2,400, B series $1,800, C series $3,600. 30%: A $1,400, B $1,900, C $4,500. 40%: A $4,900, B $2,800, C $3,900. If Shuffles Co is risk averse, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "C"
},
    {
  "number": 98,
  "text": "Same data as Q127. If Shuffles Co is risk seeking, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "A"
},
    {
  "number": 99,
  "text": "Same data as Q127. If Shuffles Co adopts the minimax regret approach, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "C"
},
    {
  "number": 100,
  "text": "Same data as Q127. Probabilities: 15%: 0.4, 30%: 0.25, 40%: 0.35. If Shuffles Co is risk neutral, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "C"
},
    {
  "number": 101,
  "text": "Which TWO of the following statements about sensitivity analysis are correct? (1) Sensitivity analysis can be used to gain insight into which assumptions or variables in a situation are critical. (2) Sensitivity analysis provides information on the basis of which decisions can be made but it does not point to the correct decision directly. (3) As well as identifying how far a variable needs to change, sensitivity analysis looks at the probability of such a change. (4) Sensitivity analysis not only assumes that variables can change independently, it also allows to change more than one variable at a time.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (2) only",
    "B": "(2) and (3) only",
    "C": "(1) and (4) only",
    "D": "(2) and (4) only"
  },
  "answer": "A"
},
    {
  "number": 102,
  "text": "Indicate whether the following statements about simulation are true or not true: (1) Simulation models the behaviour of a system. (2) Simulation models can be used to study alternative solutions to a problem. (3) The equations describing the operating characteristics of the system are known. (4) A simulation model cannot prescribe what should be done about a problem.",
  "type": "mcq",
  "choices": {
    "A": "All true",
    "B": "All not true",
    "C": "1,2,4 true; 3 not true",
    "D": "1,2,3 true; 4 not true"
  },
  "answer": "C"
},
    {
  "number": 103,
  "text": "Tree Co is considering employing a sales manager. Good manager increases profit by 30% (35% probability), average by 20% (45%), poor by 10% (20%). Normal profits $180,000, salary $40,000. Based on expected value criterion, which advice should be given?",
  "type": "mcq",
  "choices": {
    "A": "Do not employ as profits would fall by $1,300",
    "B": "Employ as profits will increase by $38,700",
    "C": "Employ as profits are expected to increase by $100",
    "D": "Do not employ as profits are expected to fall by $39,900"
  },
  "answer": "A"
},
    {
  "number": 104,
  "text": "Which of the following is the correct definition of IMPERFECT information?",
  "type": "mcq",
  "choices": {
    "A": "Information which costs more to collect than its value to the business",
    "B": "Information which is available only after preliminary decisions on a business venture have been taken",
    "C": "Information which does not take into account all factors affecting a business",
    "D": "Information which may contain inaccurate predictions"
  },
  "answer": "D"
},
    {
  "number": 105,
  "text": "A company is considering development of a new product. Development costs $2m. 75% probability of success. If successful: Product very successful $6.0m (0.4 probability), moderately successful $1.8m (0.4), unsuccessful ($5.0m) (0.2). What is expected value of profit?",
  "type": "mcq",
  "choices": {
    "A": "($0.41m)",
    "B": "$2.12m",
    "C": "$1.59m",
    "D": "$0.41m"
  },
  "answer": "A"
},
    {
  "number": 106,
  "text": "A company can make either product X or Y. Profit from X: Good market $20,000 (0.2 prob), Fair $15,000 (0.5), Poor $6,000 (0.3). Profit from Y: Good $17,000, Fair $16,000, Poor $7,000. What is expected value of perfect information?",
  "type": "mcq",
  "choices": {
    "A": "$200",
    "B": "$400",
    "C": "$600",
    "D": "$800"
  },
  "answer": "C"
},
    {
  "number": 107,
  "text": "A business is considering a project dependent on government grant. Grant received: 30% probability, expected profit $200,000. Grant not received: 70% probability, expected loss $80,000. Overall expected value $4,000. What would the expected loss when grant not received have to increase to for the project to no longer be worthwhile?",
  "type": "mcq",
  "choices": {
    "A": "$84,000",
    "B": "$85,714",
    "C": "$114,286",
    "D": "$200,000"
  },
  "answer": "B"
},
    {
  "number": 108,
  "text": "Which of the following is considered to be a form of secondary research?",
  "type": "mcq",
  "choices": {
    "A": "Desk research",
    "B": "Motivational research",
    "C": "Measurement research",
    "D": "Field research"
  },
  "answer": "A"
},
    {
  "number": 109,
  "text": "Which of the following statement(s) is/are true regarding budgetary systems in the performance hierarchy? (1) Developing new products in response to changes in technology is a budgeting activity that would fall within operational planning and control. (2) Budgetary systems at strategic planning levels look at the business as a whole and define resource requirements.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "B"
},
    {
  "number": 110,
  "text": "What is the purpose of a flexible budget?",
  "type": "mcq",
  "choices": {
    "A": "To allow budgets to be produced for virtually any level of production",
    "B": "To reduce the total time in preparing the annual budget",
    "C": "To allow management some latitude in meeting goals",
    "D": "To eliminate cyclical fluctuations in production reports by ignoring variable costs"
  },
  "answer": "A"
},
    {
  "number": 111,
  "text": "Which of the following statement(s) is/are true regarding feed-forward control budgetary systems? (1) Feed-forward control systems have an advantage over other types of control in that it establishes how effective planning was. (2) Feed-forward control can start as soon as actual results become available.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 112,
  "text": "Which of the following is an advantage of non-participative budgeting as compared to participative budgeting?",
  "type": "mcq",
  "choices": {
    "A": "It increases motivation",
    "B": "It is less time consuming",
    "C": "It increases acceptance",
    "D": "The budgets produced are more attainable"
  },
  "answer": "B"
},
    {
  "number": 113,
  "text": "Which of the following is a common feature of a beyond budgeting approach?",
  "type": "mcq",
  "choices": {
    "A": "A greater use of rolling budgets",
    "B": "A greater use of top-down budgets",
    "C": "A greater emphasis on financial targets",
    "D": "A greater focus on standardization"
  },
  "answer": "A"
},
    {
  "number": 114,
  "text": "EFG uses activity-based budgeting. Product E: 75,000 units, batch size 200, set-ups per batch 5, purchase orders per batch 4, processing time 3 min. Product F: 120,000 units, batch size 60, set-ups per batch 3, purchase orders per batch 2, processing time 4 min. Product G: 60,000 units, batch size 30, set-ups per batch 9, purchase orders per batch 2, processing time 4 min. Cost pools: Machine set-up $180,000, Purchasing $95,000, Processing $110,000. What is budgeted machine set-up cost per unit of product F?",
  "type": "mcq",
  "choices": {
    "A": "$0.1739",
    "B": "$0.35",
    "C": "$6.96",
    "D": "Cannot be determined"
  },
  "answer": "B"
},
    {
  "number": 115,
  "text": "Which of the following best describes a master budget?",
  "type": "mcq",
  "choices": {
    "A": "Budgeted Statement of profit or loss and budgeted cash flow only",
    "B": "Budgeted Statement of profit or loss and budgeted Statement of financial position only",
    "C": "Budgeted Statement of profit or loss and budgeted capital expenditure",
    "D": "Budgeted Statement of profit or loss, budgeted Statement of financial position and budgeted cash flow"
  },
  "answer": "D"
},
    {
  "number": 116,
  "text": "Which TWO of the following are expected benefits from a beyond budgeting approach?",
  "type": "multi-select",
  "choices": {
    "A": "Coordination between activities becomes easier",
    "B": "It is cheap and easy to introduce",
    "C": "Innovation and continuous improvement become more likely",
    "D": "The organisation becomes more customer focused"
  },
  "answer": [
    "C",
    "D"
  ]
},
    {
  "number": 117,
  "text": "X Co uses rolling budgeting. After the last quarter's update to cash budget, it projected a forecast cash deficit of $400,000. Consequently, planned purchase of new capital equipment has been postponed. Which type of control is this an example of?",
  "type": "mcq",
  "choices": {
    "A": "Feedforward control",
    "B": "Negative feedback control",
    "C": "Positive feedback control",
    "D": "Double loop feedback control"
  },
  "answer": "A"
},
    {
  "number": 118,
  "text": "Which of the following statement(s) is/are true regarding different types of budget? (1) A flexible budget can be used to control operational efficiency. (2) Incremental budgeting can be defined as a system of budgetary planning and control that measures the additional costs that are incurred when there are unplanned extra units of activity. (3) Rolling budgets review and, if necessary, revise the budget for the next quarter to ensure that budgets remain relevant for the remainder of the accounting period.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (3)",
    "B": "(2) and (3)",
    "C": "(3) only",
    "D": "(1) only"
  },
  "answer": "D"
},
    {
  "number": 119,
  "text": "Which TWO of the following statements regarding zero-based budgeting are correct?",
  "type": "multi-select",
  "choices": {
    "A": "It is best applied to support expenses rather than to direct costs",
    "B": "It can link strategic goals to specific functional areas",
    "C": "It carries forward inefficiencies from previous budget periods",
    "D": "It is consistent with a top-down budgeting approach"
  },
  "answer": [
    "A",
    "B"
  ]
},
    {
  "number": 120,
  "text": "Which of the following statement(s) regarding the drawbacks of activity-based budgeting (ABB) is/are true? (1) It is not always useful or applicable, as in the short term many overhead costs are not controllable and do not vary directly with changes in the volume of activity for the cost driver. (2) ABB will not be able to provide useful information for a total quality management programme (TQM).",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "A"
},
    {
  "number": 121,
  "text": "The following table shows number of clients and total costs: Week 1: 400 clients, $36,880. Week 2: 440 clients, $39,840. Week 3: 420 clients, $36,800. Week 4: 460 clients, $40,000. Applying the high low method, which could be used to forecast total cost?",
  "type": "mcq",
  "choices": {
    "A": "7,280 + 74x",
    "B": "16,080 + 52x",
    "C": "3,200 + 80x",
    "D": "40,000/x"
  },
  "answer": "B"
},
    {
  "number": 122,
  "text": "PT has a learning curve with 75% rate for first 12 customer assignments. First assignment took 6 hours. Index for 75% is -0.415. Calculate time for 7th assignment to nearest 0.01 hours.",
  "type": "mcq",
  "choices": {
    "A": "1.52 hours",
    "B": "1.62 hours",
    "C": "2.68 hours",
    "D": "18.73 hours"
  },
  "answer": "B"
},
    {
  "number": 123,
  "text": "First unit of product A takes 50 hours. Learning rate 85%, b = -0.234. What is total time taken to produce 17 units (to nearest 0.01 hours)?",
  "type": "mcq",
  "choices": {
    "A": "19.88 hours",
    "B": "25.77 hours",
    "C": "418.14 hours",
    "D": "438.02 hours"
  },
  "answer": "D"
},
    {
  "number": 124,
  "text": "Time taken for first batch of 50 units was 500 hours. Total time for first 16 batches of 50 units was 5,731 hours. What is the learning rate (to nearest %)?",
  "type": "mcq",
  "choices": {
    "A": "90%",
    "B": "92%",
    "C": "95%",
    "D": "97%"
  },
  "answer": "B"
},
    {
  "number": 125,
  "text": "Budgeted electricity cost is $30,000 based on production of 1,000 units. If 1,400 units were produced, budgeted cost would rise to $31,600. Using high/low approach, what would be budgeted electricity cost if 2,100 units were produced?",
  "type": "mcq",
  "choices": {
    "A": "$33,200",
    "B": "$34,400",
    "C": "$35,600",
    "D": "$36,800"
  },
  "answer": "B"
},
    {
  "number": 126,
  "text": "Time taken for first unit was 100 hours, second unit 90 hours. What is learning rate (to nearest %)?",
  "type": "mcq",
  "choices": {
    "A": "90%",
    "B": "95%",
    "C": "85%",
    "D": "80%"
  },
  "answer": "B"
},
    {
  "number": 127,
  "text": "Time for first batch of 50 units was 400 hours. Learning rate 90%, b = -0.152. Pay rate $12 per hour. Order for 600 units received, then second order for 800 units. What will be labour cost for second order?",
  "type": "mcq",
  "choices": {
    "A": "$38,000",
    "B": "$39,500",
    "C": "$41,509",
    "D": "$43,000"
  },
  "answer": "C"
},
    {
  "number": 128,
  "text": "Times for first four batches: 1st 100 min, 2nd 70 min, 3rd 59 min, 4th 55 min. What was rate of learning closest to (1 d.p)?",
  "type": "mcq",
  "choices": {
    "A": "82.5%",
    "B": "84.3%",
    "C": "86.1%",
    "D": "88.0%"
  },
  "answer": "B"
},
    {
  "number": 129,
  "text": "Kim Co has 80% learning effect. First unit took 22 minutes, b = -0.3219. How long to make the fourth unit?",
  "type": "mcq",
  "choices": {
    "A": "17.6 minutes",
    "B": "14.08 minutes",
    "C": "15.45 minutes",
    "D": "9.98 minutes"
  },
  "answer": "D"
},
    {
  "number": 130,
  "text": "Z plc has trend equation: y = 25,000 + 6,500x. Seasonal variation indices: Q1 70%, Q2 90%, Q3 150%, Q4 90%. First quarter of year 1 is x=1. What is forecast sales for third quarter of year 7?",
  "type": "mcq",
  "choices": {
    "A": "174,500 units",
    "B": "200,500 units",
    "C": "261,750 units",
    "D": "300,750 units"
  },
  "answer": "D"
},
    {
  "number": 131,
  "text": "Hi-Tech plc has regression equation y = 150 + 7x, where y is total sales revenue and x is advertising spend (in $000s). Which statement is correct?",
  "type": "mcq",
  "choices": {
    "A": "If $7,000 is spent on advertising, sales revenue would be $150,000",
    "B": "If no money is spent on advertising, sales revenue would be $7,000",
    "C": "If $150,000 is spent on advertising, $7,000 sales revenue will be generated",
    "D": "If no money is spent on advertising, sales revenue would be $150,000"
  },
  "answer": "D"
},
    {
  "number": 132,
  "text": "A company has budgeted sales of $10m and actual sales of $9.5m. The correlation between sales and the economic index is calculated to be 0.85. What can be concluded about the company's sales performance?",
  "type": "mcq",
  "choices": {
    "A": "Poor performance as sales are $0.5m below budget",
    "B": "Good performance as sales are in line with market conditions",
    "C": "Cannot determine without additional information",
    "D": "Sales are exactly as expected"
  },
  "answer": "C"
},
    {
  "number": 133,
  "text": "Which of the following statements about the coefficient of determination is correct?",
  "type": "mcq",
  "choices": {
    "A": "It measures the strength of the relationship between two variables",
    "B": "It is the square root of the correlation coefficient",
    "C": "It measures the proportion of variation in one variable explained by the other",
    "D": "It is always negative for inverse relationships"
  },
  "answer": "C"
},
    {
  "number": 134,
  "text": "Which of the following best describes a 'basic standard' within the context of budgeting?",
  "type": "mcq",
  "choices": {
    "A": "A standard which is kept unchanged over a period of time",
    "B": "A standard which is based on current price levels",
    "C": "A standard set at an ideal level, which makes no allowance for normal losses, waste and machine downtime",
    "D": "A standard which assumes an efficient level of operation, but which includes allowances for factors such as normal loss, waste and machine downtime"
  },
  "answer": "A"
},
    {
  "number": 135,
  "text": "Which TWO of the following statements about budgets and standards are true?",
  "type": "multi-select",
  "choices": {
    "A": "Budgets can be used in situations where output cannot be measured, but standards cannot be used in such situations",
    "B": "Budgets can include allowances for inefficiencies in operations, but standards use performance targets which are attainable under the most favourable conditions",
    "C": "Budgets are used for planning purposes, standards are used only for control purposes",
    "D": "Standards which remain unaltered for long periods of time are referred to as basic standards"
  },
  "answer": [
    "A",
    "D"
  ]
},
    {
  "number": 136,
  "text": "Which one of the following best defines standard costing in a system of budgeting?",
  "type": "mcq",
  "choices": {
    "A": "all activities are examined without reference to history each year",
    "B": "output level and costs are predetermined, actual results then compared with these predetermined costs and variances analysed",
    "C": "actual costs are compared with predetermined costs for the level of activity",
    "D": "costs are assigned to a manager in order that controllable and non-controllable costs are accounted for"
  },
  "answer": "C"
},
    {
  "number": 137,
  "text": "When considering setting standards for costing, which of the following would NOT be appropriate?",
  "type": "mcq",
  "choices": {
    "A": "The normal level of activity should always be used for absorbing overheads",
    "B": "Average prices for materials should be used, encompassing any discounts that are regularly available",
    "C": "The labour rate used will be the rate at which the labour is paid",
    "D": "Average material usage should be established based on generally-accepted working practices"
  },
  "answer": "C"
},
    {
  "number": 138,
  "text": "Which of the following statements is/are true regarding standard costing and total quality management (TQM)? (1) They focus on assigning responsibility solely to senior managers. (2) They work well in rapidly changing environments.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 139,
  "text": "Which of the following statements is/are true regarding the material mix variance? (1) A favourable total mix variance would suggest that a higher proportion of a cheaper material is being used instead of a more expensive one. (2) A favourable total mix variance will usually result in a favourable material yield variance.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "Both (1) and (2)",
    "C": "(2) only",
    "D": "Neither (1) nor (2)"
  },
  "answer": "A"
},
    {
  "number": 140,
  "text": "Which of the following concerning a labour planning variance is true?",
  "type": "mcq",
  "choices": {
    "A": "A labour planning variance will always be adverse if actual labour rates increase",
    "B": "A labour planning variance will be caused by a manager changing the labour mix during the year",
    "C": "A labour planning variance will be caused by an unexpected government policy to increase labour rates",
    "D": "A labour planning variance will always lead to a variable overhead planning variance"
  },
  "answer": "C"
},
    {
  "number": 141,
  "text": "Which of the following statements is/are true regarding the materials yield variance? (1) An adverse total yield variance would suggest that less output has been achieved for a given input. (2) A favourable total mix variance will usually result in an adverse material yield variance.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "Both (1) and (2)",
    "C": "(2) only",
    "D": "Neither (1) nor (2)"
  },
  "answer": "B"
},
    {
  "number": 142,
  "text": "Product GX consists of mix of materials J, K and L. Standard: J 5kg at $4, K 2kg at $12, L 3kg at $8. March: produced 3,000 units, actual usage: J 13,200kg, K 6,500kg, L 9,300kg. What was the materials yield variance?",
  "type": "mcq",
  "choices": {
    "A": "$6,800 favourable",
    "B": "$6,800 adverse",
    "C": "$1,000 favourable",
    "D": "$1,000 adverse"
  },
  "answer": "A"
},
    {
  "number": 143,
  "text": "JC Ltd mixes three materials for chemical SGR. Standard for 100kg: A 50kg at $10, B 40kg at $5, C 20kg at $9. October: produced 23,180kg using A 13,200kg, B 7,600kg, C 5,600kg. What is total material mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$1,984 adverse",
    "B": "$7,216 adverse",
    "C": "$9,200 adverse",
    "D": "$16,416 adverse"
  },
  "answer": "C"
},
    {
  "number": 144,
  "text": "Mr. Green makes salads. Standard plate: 30g lettuce ($0.2/kg), 50g peppers ($0.4/kg), 80g beetroot ($0.8/kg). July: 1,500 plates with 62,000g lettuce, 81,000g peppers, 102,000g beetroot. What is total favourable material mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$9.50",
    "B": "$10.25",
    "C": "$11.41",
    "D": "$12.50"
  },
  "answer": "C"
},
    {
  "number": 145,
  "text": "Same data as Q174. What is total material yield variance?",
  "type": "mcq",
  "choices": {
    "A": "$2.8125 favourable",
    "B": "$2.8125 adverse",
    "C": "$2,812.5 favourable",
    "D": "$2,812.5 adverse"
  },
  "answer": "B"
},
    {
  "number": 146,
  "text": "A company has a process for producing 9 litres output: D 4 litres at $9, E 3.5 litres at $5, F 2.5 litres at $2. Standard loss 10% of inputs. Actual inputs: D 4,300 litres at $9, E 3,600 litres at $5.50, F 2,100 litres at $2.20. Actual output 9,100 litres. What is total material mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$2,400 adverse",
    "B": "$2,400 favourable",
    "C": "$3,970 adverse",
    "D": "$3,970 favourable"
  },
  "answer": "A"
},
    {
  "number": 147,
  "text": "Operation B has standard time 15 minutes, standard rate $10 per hour. Budget for 350 operations. Standard time should have been 12 minutes due to new machinery. Actual: 370 operations in 80 hours, paid $850. The operational labour efficiency variance was:",
  "type": "mcq",
  "choices": {
    "A": "$60 adverse",
    "B": "$75 favourable",
    "C": "$100 adverse",
    "D": "$125 adverse"
  },
  "answer": "A"
},
    {
  "number": 148,
  "text": "Bloom Limited press story: maintained market share despite market size increase of 10%. Forced to reduce prices by $1.50 per bunch on budget volume of 12,000 bunches. Standard variable cost $20, standard contribution $5. What is the adverse sales price variance?",
  "type": "mcq",
  "choices": {
    "A": "$12,000",
    "B": "$15,000",
    "C": "$18,000",
    "D": "$21,000"
  },
  "answer": "C"
},
    {
  "number": 149,
  "text": "Same data as Q178. What is the favourable sales volume variance?",
  "type": "mcq",
  "choices": {
    "A": "$6,000",
    "B": "$12,000",
    "C": "$18,000",
    "D": "$24,000"
  },
  "answer": "A"
},
    {
  "number": 150,
  "text": "Yellow sells type A and B squash balls. Standard contribution: A $4, B $5. Budget: 5 A for every 3 B. Actual sales: 240,000 balls (20,000 higher than budget), including 200,000 of type A. What is the adverse sales mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$30,000",
    "B": "$40,000",
    "C": "$50,000",
    "D": "$60,000"
  },
  "answer": "C"
},
    {
  "number": 151,
  "text": "Same data as Q180. What is the favourable sales quantity variance?",
  "type": "mcq",
  "choices": {
    "A": "$67,500",
    "B": "$77,500",
    "C": "$87,500",
    "D": "$97,500"
  },
  "answer": "C"
},
    {
  "number": 152,
  "text": "Jones' absorption costing report includes sales mix variance. Data: Product X: Selling price $6, Variable cost $1, Fixed cost $2, Standard net profit $3. Product Y: Selling price $12, Variable cost $1, Fixed cost $3, Standard net profit $8. July budget: X 3,000 units, Y 6,000 units. Actual: X 2,000 units, Y 8,000 units. Which best gives the favourable sales mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$8,000",
    "B": "$5,333",
    "C": "$4,000",
    "D": "$2,667"
  },
  "answer": "D"
},
    {
  "number": 153,
  "text": "Information for three products: Product X: Demand 1,000, Selling price $15, Profit $2. Product Y: Demand 2,000, Selling price $20, Profit $5. Product Z: Demand 3,000, Selling price $30, Profit $2. Actual sales: X 1,100 units ($17,050 revenue, $3,080 profit), Y 2,050 units ($38,950 revenue, $10,455 profit), Z 2,800 units ($86,800 revenue, $6,160 profit). What is the sales quantity variance?",
  "type": "mcq",
  "choices": {
    "A": "$150 adverse",
    "B": "$50 favourable",
    "C": "$1,208 adverse",
    "D": "$1,695 favourable"
  },
  "answer": "A"
},
    {
  "number": 154,
  "text": "Which of the following statements are true regarding material price planning variances? (1) The publication of material price planning variances should always lead to automatic updates of standard costs. (2) The causes of material price planning variances do not need to be investigated by managers at any level in the organisation.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 155,
  "text": "Leaf Limited: market share improved 2% to 20%, overall market contracted by 5%. Budgeted sales 504,000 units, standard contribution $12 per unit. What is the level of actual sales?",
  "type": "mcq",
  "choices": {
    "A": "Two percentage points up on budget at 510,080 units",
    "B": "Three percent down overall on budget at 488,880 units",
    "C": "Three percent up on budget at 519,120 units",
    "D": "Up by 5.55% to 532,000 units"
  },
  "answer": "D"
},
    {
  "number": 156,
  "text": "Same data as Q185. The sales market size variance is:",
  "type": "mcq",
  "choices": {
    "A": "$1,680,000 favourable",
    "B": "$1,680,000 adverse",
    "C": "$302,400 adverse",
    "D": "$302,400 favourable"
  },
  "answer": "C"
},
    {
  "number": 157,
  "text": "A company holds 2% market share, total market demand constant at 250,000 machines. Budgeted selling price $10,000, standard contribution 10% of selling price. Actual sales volume 5,600 machines. Total market demand rose to 300,000 units. What is the market share variance?",
  "type": "mcq",
  "choices": {
    "A": "$200,000 favourable",
    "B": "$400,000 adverse",
    "C": "$600,000 favourable",
    "D": "$1,000,000 adverse"
  },
  "answer": "B"
},
    {
  "number": 158,
  "text": "PlasBas Co: standard price $0.50 per kg, standard usage 0.2kg per basket. Budgeted production 80,000 baskets. Due to government incentives, standard price expected to reduce to $0.40. Actual price $0.42, 100,000 baskets manufactured using 20,000 kg. What is the materials operational price variance?",
  "type": "mcq",
  "choices": {
    "A": "$2,000 favourable",
    "B": "$1,600 favourable",
    "C": "$400 adverse",
    "D": "$320 adverse"
  },
  "answer": "C"
},
    {
  "number": 159,
  "text": "A profit centre manager claims poor performance due to external factors. Budget: Sales volume 500 units, revenue $50,000, material cost $10,000. Actual: Sales volume 300 units, revenue $28,500, material cost $6,500. Market expert notes: entire market decreased 25%, selling prices fell 10%, suppliers lowered prices 5%. After adjusting for external factors, in which category/categories is there evidence of poor performance?",
  "type": "mcq",
  "choices": {
    "A": "Material cost only",
    "B": "Sales volume and sales price",
    "C": "Sales price and material cost",
    "D": "Sales price only"
  },
  "answer": "D"
},
    {
  "number": 160,
  "text": "Which of the following statement(s) is/are true regarding planning and operational variances? (1) Planning and operational variances are calculated when it is necessary to assess a manager on results that are within his/her control. (2) Revised standards are required because variances may arise partly due to an unrealistic budget, and not solely due to operational factors.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 161,
  "text": "The finance director of Paint Mixers Ltd produced variance results: Jan: Material price $3,000 A, Mix $2,000 A, Yield $4,000 A. Feb: Price $2,000 A, Mix $750 A, Yield $2,000 A. Mar: Price $1,000 A, Mix $100 F, Yield $50 F. Which interpretation is NOT correct?",
  "type": "mcq",
  "choices": {
    "A": "The purchasing manager should be able to threaten to switch suppliers to get better deals",
    "B": "The materials mix variance is entirely under the control of the production manager",
    "C": "The favourable yield variance in March could be the result of operational efficiency",
    "D": "The responsibility for the initial poor performance must be borne by both the purchasing manager and the production manager"
  },
  "answer": "B"
},
    {
  "number": 162,
  "text": "Which of the following statement(s) regarding the use of standard costs in rapidly changing environments is/are true? (1) Variance analysis results will take into account important criteria such as customer satisfaction or quality of production. (2) Achieving standards is suitable in most modern manufacturing environments.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 163,
  "text": "Why would a company want to encourage the use of non-financial performance indicators?",
  "type": "mcq",
  "choices": {
    "A": "To encourage short-termism",
    "B": "To look at the fuller picture of the business",
    "C": "To enable results to be easily manipulated to the benefit of the manager",
    "D": "To prevent goal congruence"
  },
  "answer": "B"
},
    {
  "number": 164,
  "text": "Quotations have been sent to clients either late or containing errors. The department is understaffed with many new staff. Which ONE non-financial performance indicator would NOT be appropriate to monitor and improve performance?",
  "type": "mcq",
  "choices": {
    "A": "Percentage of quotations found to contain errors when checked",
    "B": "Percentage of quotations not issued within company policy of three working days",
    "C": "Percentage of department's quota of staff actually employed",
    "D": "Percentage of budgeted number of quotations actually issued"
  },
  "answer": "D"
},
    {
  "number": 165,
  "text": "Which TWO of the following key performance indicators would be appropriate to assess the customer perspective within a traditional balanced scorecard?",
  "type": "multi-select",
  "choices": {
    "A": "Customer profitability analysis",
    "B": "Customer retention rates",
    "C": "Customer satisfaction ratings",
    "D": "Customer ordering processing times"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 166,
  "text": "HH plc monitors the percentage of total sales that derives from products developed in the last year. How would this be classified in the balanced scorecard?",
  "type": "mcq",
  "choices": {
    "A": "Financial perspective",
    "B": "Customer perspective",
    "C": "Internal business process perspective",
    "D": "Innovation and learning perspective"
  },
  "answer": "D"
},
    {
  "number": 167,
  "text": "Which of the following is the best measure of quality to be included within a building block model in a rapidly growing clothing business?",
  "type": "mcq",
  "choices": {
    "A": "Number of returns in the month",
    "B": "Number of faulty goods returned as a percentage of number of orders received in the month",
    "C": "Average customer satisfaction rating where customers were asked a range of questions including quality, delivery and customer service",
    "D": "Number of faulty goods returned as a percentage of deliveries made in the month"
  },
  "answer": "D"
},
    {
  "number": 168,
  "text": "Companies A and B are both involved in retailing. A: Sales revenue $50,000, Profit $10,000, Capital employed $50,000. B: Sales revenue $200,000, Profit $10,000, Capital employed $50,000. Which statement is true?",
  "type": "mcq",
  "choices": {
    "A": "The profit margin of both companies is the same",
    "B": "Company B is generating more profit from every $1 of asset employed than Company A",
    "C": "Company B is using its assets more efficiently",
    "D": "Company B is controlling its costs better than Company A"
  },
  "answer": "C"
},
    {
  "number": 169,
  "text": "Which TWO of the following matters would the manager of an investment centre have the power to make decisions over?",
  "type": "multi-select",
  "choices": {
    "A": "Granting credit to customers",
    "B": "Settling inter-departmental disputes",
    "C": "The apportionment of head office costs",
    "D": "Inventory carrying decisions"
  },
  "answer": [
    "A",
    "D"
  ]
},
    {
  "number": 170,
  "text": "Binny Co has annual sales $960,000, current ratio 3.2:1. All sales for cash, marked up 50% on cost. Average cash balance $40,000, inventory holding period 90 days (360 days/year). What is Binny Co's quick ratio (acid test ratio)?",
  "type": "mcq",
  "choices": {
    "A": "0.64",
    "B": "0.53",
    "C": "0.80",
    "D": "1.56"
  },
  "answer": "A"
},
    {
  "number": 171,
  "text": "Oxco has two divisions A and B. Division A makes component for air conditioning units sold only to Division B. Marginal cost $100, transfer price $165, total production 2,200 units, specific fixed costs $10,000. Cold Co offers to sell component to Division B for $140. If Division B accepts, Division A shuts down. What is impact on group profits per year?",
  "type": "mcq",
  "choices": {
    "A": "Increase of $65,000",
    "B": "Decrease of $78,000",
    "C": "Decrease of $88,000",
    "D": "Increase of $55,000"
  },
  "answer": "B"
},
    {
  "number": 172,
  "text": "Dust Co has divisions A and B. Division A: Capital required $32.6m, Sales $14.4m, Operating profit margin 30%, Cost of capital 10%, Current ROI 15%. Division B: Capital $22.2m, Sales $8.8m, Operating profit margin 24%, Cost of capital 10%, Current ROI 9%. If residual income is used for investment decisions, what decision is each division likely to make?",
  "type": "mcq",
  "choices": {
    "A": "Both would invest",
    "B": "Neither would invest",
    "C": "Division A would invest, Division B would not",
    "D": "Division A would not invest, Division B would invest"
  },
  "answer": "C"
},
    {
  "number": 173,
  "text": "JB Ltd has divisions A and B. Division A sells product externally at $12, variable cost $8, fixed cost $3. Maximum capacity 10,000 units. Division B wants 500 units. If transferred internally, packaging saving $1.50 per unit. What transfer price per unit should Division A quote to maximise group profit?",
  "type": "mcq",
  "choices": {
    "A": "$8.00",
    "B": "$9.50",
    "C": "$10.50",
    "D": "$12.00"
  },
  "answer": "C"
},
    {
  "number": 174,
  "text": "Pro is a division of Mo. Statement of financial position shows net assets $4,500m. Management accounts: Revenue $3,500m, Cost of sales $1,800m, Local administration $250m, IT costs $50m, Distribution $80m, Central administration $30m, Interest charges $90m, Net profit $1,200m. Cost of capital 12%. What is the division's residual income (to nearest $m)?",
  "type": "mcq",
  "choices": {
    "A": "$660m",
    "B": "$690m",
    "C": "$830m",
    "D": "$860m"
  },
  "answer": "C"
},
    {
  "number": 175,
  "text": "Summary financial statements for a division: Statement of profit or loss: Operating profit $500, Interest paid $?, Profit before tax $? Statement of financial position: Non-current assets $2,400, Current assets $1,000, Total assets $3,400, Divisional equity $1,500, Long-term borrowings $900, Current liabilities $1,000. Cost of capital 11%, interest on long-term loans 9%. Capital structure decisions by central management. What is divisional return on capital employed (ROCE)?",
  "type": "mcq",
  "choices": {
    "A": "18.2%",
    "B": "20.8%",
    "C": "22.5%",
    "D": "25.0%"
  },
  "answer": "A"
},
    {
  "number": 176,
  "text": "Same data as Q205. What is the divisional residual income (RI)?",
  "type": "mcq",
  "choices": {
    "A": "-$84,000",
    "B": "$180,000",
    "C": "$236,000",
    "D": "$284,000"
  },
  "answer": "C"
},
    {
  "number": 177,
  "text": "Pro is a division of Mo (same data as Q204 but with closing net assets $4,890m). What is the divisional ROI (1 d.p)?",
  "type": "mcq",
  "choices": {
    "A": "26.5%",
    "B": "27.2%",
    "C": "28.0%",
    "D": "29.1%"
  },
  "answer": "C"
},
    {
  "number": 178,
  "text": "At end of 20X1, investment centre has net assets $1m, operating profit $190,000. A machine with carrying value $40,000 was sold at start of year for $50,000 and replaced with machine costing $250,000. No depreciation in year of purchase/disposal. ROI calculated on closing net assets. What is the ROI for the year (to 1 decimal place)?",
  "type": "mcq",
  "choices": {
    "A": "18.5%",
    "B": "19.8%",
    "C": "20.5%",
    "D": "21.2%"
  },
  "answer": "B"
},
    {
  "number": 179,
  "text": "Division B makes units transferred to other divisions. Has no spare capacity, sells externally and internally. Which statement(s) regarding minimum transfer price is/are true? (1) Any price above variable cost will generate positive contribution and will therefore be accepted. (2) The division will need to give up a unit sold externally; transfer is only worthwhile if income is greater than net income of external sale.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "B"
},
    {
  "number": 180,
  "text": "Perrin Co has divisions A and B. Division A has limited skilled labour, operating at full capacity making product Y. Asked to supply product X to division B. Division B currently sources externally for $700. Cost cards: Product Y: Selling price $600, Direct materials ($50/kg) $200, Direct labour ($20/hr) $80, Apportioned fixed overheads ($15/hr) $60. Product X: Direct materials $150, Direct labour $120, Apportioned fixed overheads $90. Using opportunity cost approach, what is minimum transfer price?",
  "type": "mcq",
  "choices": {
    "A": "$270",
    "B": "$750",
    "C": "$590",
    "D": "$840"
  },
  "answer": "B"
},
    {
  "number": 181,
  "text": "TM plc sells components internally to subsidiary RM Ltd and externally. External market price $24.00, contribution 40% of sales. For external sales, variable costs include $1.50 for distribution (not incurred on internal sales). TM has sufficient capacity. To maximise group profit, at what unit price should component be transferred?",
  "type": "mcq",
  "choices": {
    "A": "$12.90",
    "B": "$14.40",
    "C": "$15.60",
    "D": "$16.80"
  },
  "answer": "A"
},
    {
  "number": 182,
  "text": "Which of the following statements regarding measurement of performance in not-for-profit organisations is/are true? (1) Output does not usually have a market value, and it is therefore more difficult to measure effectiveness. (2) Control over the performance can only be satisfactorily achieved by assessments of 'value for money'.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 183,
  "text": "Def Co provides accounting services to government. Targets: (1) Cutting departmental expenditure by 5% (2) Increasing chargeable hours to 6.2 per day (3) Customer satisfaction score of 4.7 or above. Which targets assess economy, efficiency and effectiveness?",
  "type": "mcq",
  "choices": {
    "A": "1=Economy, 2=Efficiency, 3=Effectiveness",
    "B": "1=Efficiency, 2=Economy, 3=Effectiveness",
    "C": "1=Economy, 2=Effectiveness, 3=Efficiency",
    "D": "1=Efficiency, 2=Effectiveness, 3=Economy"
  },
  "answer": "A"
},
    {
  "number": 184,
  "text": "A government is assessing hospitals by survival rates for heart bypass operations and 'cost per successfully treated patient'. Which of the three E's in the Value For Money framework is NOT measured here?",
  "type": "mcq",
  "choices": {
    "A": "Economy",
    "B": "Effectiveness",
    "C": "Efficiency",
    "D": "Externality"
  },
  "answer": "A"
},
    {
  "number": 185,
  "text": "Which of the following statements regarding multiple objectives in not-for-profit organisations is/are correct? (1) They ensure goal congruence between stakeholders. (2) Compromise between objectives can be problematic.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Both (1) and (2)",
    "D": "Neither (1) nor (2)"
  },
  "answer": "B"
},
    {
  "number": 186,
  "text": "A government is assessing schools by percentage of students passing five exams or more. Which of the three Es is being measured?",
  "type": "mcq",
  "choices": {
    "A": "Economy",
    "B": "Efficiency",
    "C": "Effectiveness",
    "D": "Expertise"
  },
  "answer": "A"
},
    {
  "number": 187,
  "text": "Which of the following statement(s) about measuring effectiveness in not-for-profit organisations is/are true? (1) Effectiveness targets cannot usually be expressed financially, and therefore non-financial targets must be used. (2) The effective level of achievement could be measured by comparing actual performance against target.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 188,
  "text": "The senior manager is suspicious that profit performance may have been overstated. Which would be a plausible explanation of an overstatement of profit?",
  "type": "mcq",
  "choices": {
    "A": "Delaying payments to payables",
    "B": "Shortening the useful economic life of a non-current asset",
    "C": "Overstatement of a prepayment",
    "D": "Overstatement of an accrual"
  },
  "answer": "C"
},
    {
  "number": 189,
  "text": "Which of the following statements regarding standard setting is correct?",
  "type": "mcq",
  "choices": {
    "A": "Imposed standards are more likely to be achieved",
    "B": "Managers across the organisation should be targeted using the same standards",
    "C": "Standards should be set at an ideal level with no built in stretch",
    "D": "Participation in standard setting is more motivating than where standards are imposed"
  },
  "answer": "D"
},
    {
  "number": 190,
  "text": "When setting performance measurement targets, which would assist in overcoming problems of short-termism and manipulation of results?",
  "type": "mcq",
  "choices": {
    "A": "Rewards should be linked to a wider variety of performance measures including some non-financial measures",
    "B": "Managers should only be rewarded for the results achieved in their own departments",
    "C": "Any capital investment decision should be judged using the payback method",
    "D": "Setting targets involving overall company performance will be more motivating for managers"
  },
  "answer": "A"
},
    {
  "number": 191,
  "text": "Which of the following statements is true in relation to stakeholders?",
  "type": "mcq",
  "choices": {
    "A": "The aim of all performance measures should be to increase short term profit",
    "B": "The only interest of the government is that companies pay their taxes",
    "C": "Shareholders will be looking for increasing dividends and increased share price",
    "D": "Only internal stakeholders need to be considered by companies"
  },
  "answer": "C"
},
    {
      number: 192,
      text: "Which TWO of the following are typical advantages of investing in a new information system?",
      type: "multi-select",
      choices: {
        A: "Enhanced compatibility with other systems",
        B: "Enhanced information processing capacity",
        C: "Enhanced information processing efficiency",
        D: "Enhanced staff training needs"
      },
      answer: ["B", "C"]
    },
    {
      number: 193,
      text: "An airline wants to provide access to a select group of travel agents to real time information held by the airline regarding flights which may have the potential for passenger seat upgrades. Which of the following is likely to be used to achieve this?",
      type: "mcq",
      choices: {
        A: "Intranet",
        B: "Extranet",
        C: "Internet",
        D: "Email"
      },
      answer: "B"
    },
    {
      number: 194,
      text: "A small doctors' surgery is considering providing a wireless network for use by nurses to access patient data in real time. Which of the following is a DISADVANTAGE of using a wireless network in this way?",
      type: "mcq",
      choices: {
        A: "Access to the network cannot be limited",
        B: "The network cannot match the coverage of a wired network",
        C: "The network will be less stable than a wired network",
        D: "It will be necessary to buy lots of new user devices"
      },
      answer: "C"
    },
    {
      number: 195,
      text: "Which of the following methods would be LEAST effective in ensuring the security of confidential information?",
      type: "mcq",
      choices: {
        A: "Monitoring emails",
        B: "Encryption of files",
        C: "Dial back facility",
        D: "Universal passwords"
      },
      answer: "D"
    },
    {
      number: 196,
      text: "Which ONE of the following is NOT a benefit of effective data visualisation?",
      type: "mcq",
      choices: {
        A: "Reports can be more user friendly",
        B: "Improves the accuracy of the data being analysed",
        C: "The use of dashboards can highlight and summarise key information",
        D: "Allows for headline figures to be presented with an option to drill down into the detail"
      },
      answer: "B"
    },
    {
      number: 197,
      text: "Which of the following is a disadvantage of cloud computing?",
      type: "mcq",
      choices: {
        A: "Reduced flexibility around working arrangements",
        B: "More reliance on third party suppliers",
        C: "Higher maintenance costs",
        D: "Harder to integrate systems"
      },
      answer: "B"
    },
    {
      number: 198,
      text: "An accountant wants to determine the increase in average usage of paper per employee from printing out of emails. She is concerned that paper usage in her business has risen by 10% in the last year to $40,400. She has estimated that it will take 4 weeks of her time to prepare the report. As well as other incremental costs she has estimated that the total cost of preparing the report will be $28,000. This report is an example of bad information. Which one of the principles of good information does it breach?",
      type: "mcq",
      choices: {
        A: "Relevant",
        B: "Complete",
        C: "Cost beneficial",
        D: "Understandable"
      },
      answer: "C"
    },
    {
      number: 199,
      text: "Which of the following statements regarding planning and control as described in the three tiers of Robert Anthony's decision-making hierarchy is/are true? (1) Strategic planning is concerned with making decisions about the efficient and effective use of existing resources. (2) Operational control is about ensuring that specific tasks are carried out efficiently and effectively.",
      type: "mcq",
      choices: {
        A: "(1) only",
        B: "(2) only",
        C: "Neither (1) nor (2)",
        D: "Both (1) and (2)"
      },
      answer: "B"
    },
    {
      number: 200,
      text: "Which of the following is NOT normally considered to be a feature of big data?",
      type: "mcq",
      choices: {
        A: "Volume",
        B: "Velocity",
        C: "Variety",
        D: "Vicinity"
      },
      answer: "D"
    },
    {
      number: 201,
      text: "Which of the following statements regarding big data is true?",
      type: "mcq",
      choices: {
        A: "It is only useful for big organisations",
        B: "It is all contained on the internet",
        C: "It is all generated external to the organisation",
        D: "It can lead to a competitive advantage"
      },
      answer: "D"
    },
    {
      number: 202,
      text: "A company produces a range of products and uses an absorption costing system. Which two of the following are UNLIKELY to be a consequence of the company switching to an activity based costing (ABC) system?",
      type: "multi-select",
      choices: {
        A: "Indirect overheads will be shared between products on fairer bases",
        B: "Product pricing decisions will be improved",
        C: "The prime production cost of each product will fall",
        D: "Cost control on indirect overheads will be harder to achieve",
        E: "Total production cost of each product will change"
      },
      answer: ["C", "D"]
    },
    {
      number: 203,
      text: "In target costing, which of the following would be an appropriate strategy to reduce a cost gap for a product that existed in a competitive industry with demanding shareholders?",
      type: "mcq",
      choices: {
        A: "Increase the selling price",
        B: "Reduce the expectation gap by reducing the selling price",
        C: "Reducing the desired margin on the product",
        D: "Mechanising production in order to reduce average production cost"
      },
      answer: "D"
    },
    {
      number: 204,
      text: "When demand exceeds supply, which one of the following situations would increase the throughput accounting ratio?",
      type: "mcq",
      choices: {
        A: "An increase in the speed of the fastest machine in the production process",
        B: "An unexpected increase in the factory rent",
        C: "A 5% wage increase linked to an 8% improvement in productivity",
        D: "A 10% sales discount to stimulate demand by 20%"
      },
      answer: "C"
    },
    {
      number: 205,
      text: "Which of the following is a definition of the throughput accounting ratio?",
      type: "mcq",
      choices: {
        A: "Throughput contribution/hours on bottleneck",
        B: "Costs per factory hour/return per factory hour",
        C: "Return per factory hour/costs per factory hour",
        D: "Total costs/total throughput"
      },
      answer: "C"
    },
    {
      number: 206,
      text: "Which TWO of the following activities are environmental INTERNAL failure costs?",
      type: "multi-select",
      choices: {
        A: "Quality control inspections to monitor pollution levels in water leaving a production process.",
        B: "Water purification treatment to clean waste water before it leaves the factory",
        C: "Fitting of carbon filters to machine processes to reduce carbon emissions",
        D: "Power usage measuring system to monitor energy consumption within the factory",
        E: "Payment of fines for breaching environmental regulations in the industry",
        F: "Insulation of heating pipes in the factory to reduce heat loss",
        G: "Public relations costs to remedy reputational damage caused by accidental river pollution",
        H: "Capturing and recycling of waste exhaust gases to generate energy"
      },
      answer: ["B", "H"]
    },
    {
      number: 207,
      text: "An organisation is considering the costs to be incurred in respect of a special order opportunity. The order would require 1,250 kgs of material D, that is readily available and regularly used by the organisation on its normal products. There are 265 kgs of material D in inventory which cost $795 last week. The current market price is $3.24 per kg. Material D is normally used to make product X. Each unit of X requires 3 kgs of material D, and if material D is costed at $3 per kg, each unit of X yields a contribution of $15. What is the relevant cost of material D to be included in the costing of the special order?",
      type: "mcq",
      choices: {
        A: "$3,990",
        B: "$4,050",
        C: "$10,000",
        D: "$10,300"
      },
      answer: "B"
    },
    {
      number: 208,
      text: "A company makes and sells product X and product Y. Twice as many units of product Y are made and sold as that of product X. Each unit of product X makes a contribution of $10 and each unit of product Y makes a contribution of $4. Fixed costs are $90,000. What is the total number of units which must be made and sold to make a profit of $45,000?",
      type: "mcq",
      choices: {
        A: "7,500",
        B: "22,500",
        C: "15,000",
        D: "16,875"
      },
      answer: "B"
    },
    {
      number: 209,
      text: "A company has the following production planned for the next four weeks. The figures reflect the full capacity level of operations. Planned output is equal to the maximum demand per product. The direct labour force is threatening to go on strike for two weeks out of the coming four. This means that only 2,160 hours will be available for production, rather than the usual 4,320 hours. If the strike goes ahead, which product or products should be produced if profits are to be maximised?",
      type: "mcq",
      choices: {
        A: "Product A and B",
        B: "Product B and C",
        C: "Product A and D",
        D: "Product C and D"
      },
      answer: "C"
    },
    {
      number: 210,
      text: "The shadow price of skilled labour for CBV is currently $8 per hour. What does this mean?",
      type: "mcq",
      choices: {
        A: "The cost of obtaining additional skilled labour resources is $8 per hour",
        B: "There is a hidden cost of $8 for each hour of skilled labour actively worked",
        C: "Contribution will be increased by $8 per hour for each extra hour of skilled labour that can be obtained",
        D: "Total costs will be reduced by $8 for each additional hour of skilled labour that can be obtained"
      },
      answer: "C"
    },
    {
      number: 211,
      text: "Which of the following statements regarding market penetration as a pricing strategy is/are correct? (1) It is useful if significant economies of scale can be achieved. (2) It is useful if demand for a product is highly elastic.",
      type: "mcq",
      choices: {
        A: "(1) only",
        B: "(2) only",
        C: "Neither (1) nor (2)",
        D: "Both (1) and (2)"
      },
      answer: "D"
    },
    {
      number: 212,
      text: "Which of the following conditions would need to be true for a price skimming strategy to be effective?",
      type: "mcq",
      choices: {
        A: "An existing product where the owners have decided to increase prices to move the product up market",
        B: "Where the product has a long life-cycle",
        C: "Where the product has a short life-cycle",
        D: "Where only modest development costs had been incurred"
      },
      answer: "C"
    },
    {
      number: 213,
      text: "A company has used expected values to evaluate a one-off project. The expected value calculation assumed two possible profit outcomes which were assigned probabilities of 0.4 and 0.6. Which TWO of the following statements about this approach are correct?",
      type: "multi-select",
      choices: {
        A: "The expected value profit is the profit which has the highest probability of being achieved",
        B: "The expected value gives no indication of the dispersion of the possible outcomes",
        C: "Expected values are relatively insensitive to assumptions about probability",
        D: "The expected value may not correspond to any of the actual possible outcomes"
      },
      answer: ["B", "D"]
    },
    {
      number: 214,
      text: "Which of the following statements are true regarding activity-based budgeting (ABB)? (1) The costs determined using activity-based costing (ABC) are used as a basis for preparing budgets. (2) The aim of ABB is to control the number of units output rather than the costs themselves.",
      type: "mcq",
      choices: {
        A: "(1) only",
        B: "(2) only",
        C: "Neither (1) nor (2)",
        D: "Both (1) and (2)"
      },
      answer: "A"
    },
    {
      number: 215,
      text: "Which of the following best describes an incremental budgeting system?",
      type: "mcq",
      choices: {
        A: "a system that budgets only for the extra costs associated with a particular plan",
        B: "a system that budgets for the variable manufacturing costs only",
        C: "a system that prepares budgets only after the manager responsible has justified the continuation of the relevant activity",
        D: "a system that prepares budgets by adjusting the previous year's values by expected changes in volumes of activity and price/inflation effects"
      },
      answer: "D"
    },
    {
      number: 216,
      text: "Which one of the following best defines standard costing in a system of budgeting?",
      type: "mcq",
      choices: {
        A: "all activities are examined without reference to history each year",
        B: "output level and costs are predetermined, actual results then compared with these predetermined costs and variances analysed",
        C: "actual costs are compared with predetermined costs for the level of activity",
        D: "costs are assigned to a manager in order that controllable and non-controllable costs are accounted for"
      },
      answer: "C"
    },
    {
      number: 217,
      text: "Which of the following statements is/are true regarding the material mix variance? (1) A favourable total mix variance would suggest that a higher proportion of a cheaper material is being used instead of a more expensive one. (2) A favourable total mix variance will usually result in a favourable material yield variance.",
      type: "mcq",
      choices: {
        A: "(1) only",
        B: "Both (1) and (2)",
        C: "(2) only",
        D: "Neither (1) nor (2)"
      },
      answer: "A"
    },
    {
      number: 218,
      text: "Which of the following statements regarding measurement of performance in not-for-profit organisations is/are true? (1) Output does not usually have a market value, and it is therefore more difficult to measure effectiveness. (2) Control over the performance can only be satisfactorily achieved by assessments of 'value for money'.",
      type: "mcq",
      choices: {
        A: "(1) only",
        B: "(2) only",
        C: "Neither (1) nor (2)",
        D: "Both (1) and (2)"
      },
      answer: "D"
    },
    {
      number: 219,
      text: "Why would a company want to encourage the use of non-financial performance indicators?",
      type: "mcq",
      choices: {
        A: "To encourage short-termism",
        B: "To look at the fuller picture of the business",
        C: "To enable results to be easily manipulated to the benefit of the manager",
        D: "To prevent goal congruence"
      },
      answer: "B"
    },
    {
      number: 220,
      text: "The following are types of key performance indicators (KPIs): (i) Return on capital employed (ii) Gross profit percentage (iii) Acid test ratio (iv) Gearing ratio. Which of the above KPIs would be used to assess the liquidity of a company?",
      type: "mcq",
      choices: {
        A: "(i) and (ii)",
        B: "(iii) only",
        C: "(iv) only",
        D: "(iii) and (iv)"
      },
      answer: "B"
    },
    {
      number: 221,
      text: "When setting performance measures, external factors should be taken into account. Which THREE of the following statements regarding external factors is/are true?",
      type: "multi-select",
      choices: {
        A: "Stakeholders will have different objectives and companies may deal with this by having a range of performance measures to assess the achievement of these objectives",
        B: "A downturn in the industry or in the economy as a whole could have a negative impact on performance",
        C: "It is only important for companies to take account of internal stakeholders when setting performance targets",
        D: "Company performance could be affected if a competitor reduces its prices or launches a successful advertising campaign",
        E: "Changes to government policy are irrelevant to measuring internal company performance, as they are an external factor"
      },
      answer: ["A", "B", "D"]
    }
  ,
    {
  "number": 222,
  "text": "A government department generates information which should not be disclosed to anyone who works outside of the department. There are many other government departments working within the same building. Which of the following would NOT be an effective control procedure for the generation and distribution of the information within the government department?",
  "type": "mcq",
  "choices": {
    "A": "If working from home, departmental employees must use a memory stick to transfer data, as laptop computers are not allowed to leave the department.",
    "B": "All departmental employees must enter non-disclosed and regularly updated passwords to access their computers.",
    "C": "All authorised employees must swipe an officially issued, personal identity card at the entrance to the department before they can gain access.",
    "D": "All hard copies of confidential information must be shredded at the end of each day or locked overnight in a safe if needed again."
  },
  "answer": "A"
},
    {
  "number": 223,
  "text": "Which of the following statements regarding technologies and systems are correct? (1) Networked computers can save costs by sharing hardware, software and data. (2) An intranet provides quick, effective communication with suppliers. (3) Wireless networks allow businesses to expand with less disruption than wired networks. (4) The internet can be used to monitor and measure customer interest.",
  "type": "mcq",
  "choices": {
    "A": "(2), (3) and (4)",
    "B": "(1) and (2)",
    "C": "(1), (3) and (4)",
    "D": "(1) and (4) only"
  },
  "answer": "C"
},
    {
  "number": 224,
  "text": "Which TWO of the following are characteristics of effective data visualisation?",
  "type": "multi-select",
  "choices": {
    "A": "Presented only on screen",
    "B": "Real time information",
    "C": "High level only",
    "D": "Presents all data obtained",
    "E": "User friendly",
    "F": "Guarantees good management decisions"
  },
  "answer": [
    "B",
    "E"
  ]
},
    {
  "number": 225,
  "text": "Which of the following statements about data visualisation is true?",
  "type": "mcq",
  "choices": {
    "A": "The most common use of data visualisation is the creation of a dashboard displaying real time KPIs",
    "B": "Data is always displayed in standardised formats to ensure consistency",
    "C": "Data visualisation refers to data that is mainly analysed and presented using basic spreadsheet software",
    "D": "Increased use of data visualisation within organisations increases the need for more IT experts"
  },
  "answer": "A"
},
    {
  "number": 226,
  "text": "A company's board of directors were recently embarrassed when a very unhappy junior human resources employee emailed details of their salaries to the entire company. An investigation revealed that the human resources director had lent his username and password to the junior employee so that routine maintenance of the human resources database could be conducted whilst the director was on vacation. During the director's vacation, the junior employee had used the director's username and password to access the board's salary records. Which of the following controls could have helped to prevent this breach of confidential information?",
  "type": "mcq",
  "choices": {
    "A": "Monitoring the database system logs on a regular basis to see what information is being accessed",
    "B": "Building levels of access into the database so that only senior staff have access to board records",
    "C": "Keeping all the human resource records for salaries on a separate server",
    "D": "Having a policy of regularly updating the passwords required to access the system"
  },
  "answer": "A"
},
    {
  "number": 227,
  "text": "The qualities of good information contained in reports are more easily remembered using the mnemonic ACCURATE. Which one of the following is NOT normally associated with a quality of good information?",
  "type": "mcq",
  "choices": {
    "A": "Adaptable to the needs of the user",
    "B": "Acceptable to the user",
    "C": "Accurate",
    "D": "Understandable by the user"
  },
  "answer": "B"
},
    {
  "number": 228,
  "text": "Local managers within organisations often use operational reports. Which of the following features of reports would be most true of an operational report?",
  "type": "mcq",
  "choices": {
    "A": "Summarised information",
    "B": "Mainly external information on local competition",
    "C": "Accurate information on current position",
    "D": "Infrequent"
  },
  "answer": "C"
},
    {
  "number": 229,
  "text": "Strategic reports have many features, which of the following is the most likely feature of a strategic report?",
  "type": "mcq",
  "choices": {
    "A": "Prepared regularly",
    "B": "Total accuracy of past and forecast data",
    "C": "Highly summarised showing overall trends",
    "D": "Demonstrates only the company's current position"
  },
  "answer": "C"
},
    {
  "number": 230,
  "text": "Long-term sales forecasts are an example of accounting information used at which level of control in an organisation?",
  "type": "mcq",
  "choices": {
    "A": "Strategic planning",
    "B": "Management control",
    "C": "Tactical control",
    "D": "Operational control"
  },
  "answer": "A"
},
    {
  "number": 231,
  "text": "Information systems described below may or may not be suited to all levels of management. Identify by placing a tick in the relevant boxes in the table below the suitability of the systems for all levels of management. (A) A Management Information System producing management accounts showing margins for individual customers (B) A Customer Relationship Management system tracking the acquisition, retention and extension of all customers (C) An Executive Information System giving access to internal and external information in summarised form, with the option to drill down to a greater level of activity",
  "type": "mcq",
  "choices": {
    "A": "Only A is suited to all levels",
    "B": "Only B is suited to all levels",
    "C": "A and B are suited, C is not",
    "D": "None are suited to all levels"
  },
  "answer": "C"
},
    {
  "number": 232,
  "text": "A manufacturer and retailer of kitchens introduces an enterprise resource planning system. Which of the following is NOT likely to be a potential benefit of introducing this system?",
  "type": "mcq",
  "choices": {
    "A": "Schedules of labour are prepared for manufacturing",
    "B": "Inventory records are updated automatically",
    "C": "Sales are recorded into the financial ledgers",
    "D": "Critical strategic information can be summarised"
  },
  "answer": "D"
},
    {
  "number": 233,
  "text": "Which of the following is an example of an Executive Information System (EIS)?",
  "type": "mcq",
  "choices": {
    "A": "Software to identify customer trends and marketing opportunities",
    "B": "A database management system",
    "C": "A system summarising sales to assist in identifying trends and hiring new workers",
    "D": "A system providing internal and external information to help senior managers monitor the performance of the entire organisation"
  },
  "answer": "D"
},
    {
  "number": 234,
  "text": "You have been presented with a summary report of sales in the last month, with a breakdown of totals per product, and with variances from the corresponding monthly sales plan. Which of the following systems would generate such a report?",
  "type": "mcq",
  "choices": {
    "A": "A transaction processing system",
    "B": "A management information system",
    "C": "An executive Information system",
    "D": "None of the above"
  },
  "answer": "B"
},
    {
  "number": 235,
  "text": "Which of the following could be described as an Enterprise Resource Planning system (EPRS)?",
  "type": "mcq",
  "choices": {
    "A": "A system that identifies trends and patterns in large sets of data.",
    "B": "A system integrating data from all operations within the organisation",
    "C": "A marketing database holding records of past advertising campaigns and the sales generated by those campaigns",
    "D": "A system that captures, processes, and stores low level transaction data."
  },
  "answer": "B"
},
    {
  "number": 236,
  "text": "Which TWO of the following statements regarding big data are true?",
  "type": "multi-select",
  "choices": {
    "A": "It is more reliable than other sources of data",
    "B": "It can change very quickly",
    "C": "It can take multiple forms",
    "D": "It involves dealing with large financial numbers"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 237,
  "text": "It is often said that big data enhances business decisions. Which of the following statements regarding big data and decision making is/are true? (i) Decisions which include big data analytics can lead to a competitive edge over rivals. (ii) Big data analytics cannot account for competitors' expected actions.",
  "type": "mcq",
  "choices": {
    "A": "Statement (i) only",
    "B": "Statement (ii) only",
    "C": "Both statements",
    "D": "Neither statement"
  },
  "answer": "A"
},
    {
  "number": 238,
  "text": "Which TWO of the following statements are thought to be benefits when using big data to enhance business decisions?",
  "type": "multi-select",
  "choices": {
    "A": "There is no need to have a deep understanding of the industry in order to interpret the data",
    "B": "Customer relationship management can be improved resulting in better repeat business and customer loyalty",
    "C": "Business performance can be better tracked and analysed against a wider set of criteria",
    "D": "All available big data will create value for an organisation when analysed"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 239,
  "text": "Which of the following is NOT considered a risk when using big data to enhance business decision making?",
  "type": "mcq",
  "choices": {
    "A": "The veracity of the data is difficult to assess",
    "B": "Traditional sources of data are ignored",
    "C": "The data may be distorted by data outliers",
    "D": "The benefits may be outweighed by the financial costs"
  },
  "answer": "B"
},
    {
  "number": 240,
  "text": "A company which makes two products, Alpha and Zeta, uses activity-based costing to absorb its overheads. It has recently identified a new overhead cost pool for inspection costs and has decided that the cost driver is the number of inspections. Total inspection costs $250,000. Production volume: Alpha 2,500 units, Zeta 8,000 units. Machine hours per unit: Alpha 1, Zeta 1.5. Units per batch: Alpha 500, Zeta 1,000. Inspections per batch: Alpha 4, Zeta 1. What is the inspection cost per unit of product Alpha?",
  "type": "mcq",
  "choices": {
    "A": "$23.81",
    "B": "$17.24",
    "C": "$71.43",
    "D": "$80.00"
  },
  "answer": "C"
},
    {
  "number": 241,
  "text": "Which of the following statements are true regarding activity-based costing (ABC) and cost drivers? (1) A cost driver is any factor that causes a change in the cost of an activity. (2) For long-term variable overhead costs, the cost driver will be the volume of activity. (3) Traditional absorption costing tends to under-allocate overhead costs to low-volume products.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (3) only",
    "B": "(2) and (3) only",
    "C": "(1) and (2) only",
    "D": "(1), (2) and (3)"
  },
  "answer": "D"
},
    {
  "number": 242,
  "text": "A company makes products A and B. It is experimenting with activity-based costing. Production set-up costs are $12,000; total production will be 20,000 units of each of products A and B. Each run is 1,000 units of A or 5,000 units of B. Using activity-based costing, what is the set-up cost per unit of A? (Give your answer to the nearest cent.)",
  "type": "mcq",
  "choices": {
    "A": "$0.25",
    "B": "$0.50",
    "C": "$0.75",
    "D": "$1.00"
  },
  "answer": "B"
},
    {
  "number": 243,
  "text": "Which of the following statement(s) is/are true regarding activity-based costing? (1) A cost pool is an activity which consumes resources and for which overhead costs are identified and allocated. (2) An activity-based costing overhead absorption rate (OAR) is calculated in the same way as an absorption costing OAR, and will result in the same OAR being calculated for each cost pool.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "A"
},
    {
  "number": 244,
  "text": "A company uses activity-based costing to calculate the unit cost of its products. The figures for Period 3 are as follows: production set-up costs are $84,000. Total production is 40,000 units of each of products A and B, and each run is 2,000 units of A or 5,000 units of B. What is the set-up cost per unit of B (to 2 decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$0.30",
    "B": "$0.60",
    "C": "$0.90",
    "D": "$1.20"
  },
  "answer": "B"
},
    {
  "number": 245,
  "text": "The ABC Company manufactures two products, product Alpha and Product Beta. Both are produced in a very labour-intensive environment and use similar processes. Alpha and Beta differ by volume. Beta is a high-volume product, while Alpha is a low-volume product. Details: Direct labour hours/unit: 5 for both. Annual output: Alpha 1,200, Beta 12,000. Purchase orders: Alpha 75, Beta 85. Set-ups: Alpha 40, Beta 60. Fixed overhead costs total $420,000 analysed as: Volume-related $100,000, Purchasing related $145,000, Set-up related $175,000. Using a traditional method of overhead absorption based on labour hours, what is the overhead cost per unit for each unit of product Alpha (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$6.36",
    "B": "$22.75",
    "C": "$31.82",
    "D": "$122.55"
  },
  "answer": "C"
},
    {
  "number": 246,
  "text": "The ABC Company manufactures two products, product Alpha and Product Beta. (Same data as Q54). Using a traditional method of overhead absorption based on labour hours, what is the overhead cost per unit for each unit of product Beta (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$6.36",
    "B": "$22.75",
    "C": "$31.82",
    "D": "$122.55"
  },
  "answer": "C"
},
    {
  "number": 247,
  "text": "The ABC Company manufactures two products, product Alpha and Product Beta. (Same data as Q54). Using Activity-based costing as the method of overhead absorption, what is the overhead cost per unit for each unit of product Alpha (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$6.36",
    "B": "$22.75",
    "C": "$122.55",
    "D": "Cannot be determined without more information"
  },
  "answer": "C"
},
    {
  "number": 248,
  "text": "A company makes two products using the same type of materials and skilled workers. Product A: Budgeted volume 1,000 units, Material per unit $10, Labour per unit $5. Product B: Budgeted volume 2,000 units, Material per unit $20, Labour per unit $20. Fixed costs relating to material handling amount to $100,000. The cost driver for these costs is the volume of material purchased. General fixed costs, absorbed on the basis of labour hours, amount to $180,000. Using activity-based costing, what is the total fixed overhead amount to be absorbed into each unit of product B (to the nearest whole $)?",
  "type": "mcq",
  "choices": {
    "A": "$113",
    "B": "$120",
    "C": "$40",
    "D": "$105"
  },
  "answer": "B"
},
    {
  "number": 249,
  "text": "A company is changing its costing system from traditional absorption costing based on labour hours to activity-based costing. It has overheads of $156,000 which are related to taking material deliveries. Product X: Total units required 1,000, Delivery size 200. Product Y: 2,000 units, Delivery size 400. Product Z: 3,000 units, Delivery size 1,000. Total labour costs are $360,000 for 45,000 hours. Each unit of each product takes the same number of direct hours. Assuming that the company uses the number of deliveries as its cost driver, what will be the effect on the costs per unit following the change from absorption costing to activity-based costing?",
  "type": "mcq",
  "choices": {
    "A": "Product X: Increase, Product Y: Increase, Product Z: Decrease",
    "B": "Product X: Decrease, Product Y: Increase, Product Z: Increase",
    "C": "Product X: Increase, Product Y: Decrease, Product Z: Decrease",
    "D": "Product X: Decrease, Product Y: Decrease, Product Z: Increase"
  },
  "answer": "A"
},
    {
  "number": 250,
  "text": "DRP Ltd has recently introduced an activity-based costing (ABC) system. It manufactures three products. Budgeted annual production: D 100,000 units, R 100,000 units, P 50,000 units. Batch size: D 100, R 50, P 25. Machine set-ups per batch: D 3, R 4, P 6. Purchase orders per batch: D 2, R 1, P 1. Processing time per unit (minutes): D 2, R 3, P 3. Three cost pools: Machine set-up costs $150,000, Purchase of materials $70,000, Processing $80,000. What is the budgeted machine set-up cost per unit of product R?",
  "type": "mcq",
  "choices": {
    "A": "$6.52",
    "B": "$0.52",
    "C": "$18.75",
    "D": "$1.82"
  },
  "answer": "B"
},
    {
  "number": 251,
  "text": "Which of the following strategies would be an immediately acceptable method to reduce an identified cost gap?",
  "type": "mcq",
  "choices": {
    "A": "Reduce the desired margin without discussion with business owners",
    "B": "Reduce the predicted selling price",
    "C": "Source similar quality materials from another supplier at reduced cost",
    "D": "Increase the predicted selling price"
  },
  "answer": "C"
},
    {
  "number": 252,
  "text": "The predicted selling price for a product has been set at $56 per unit. The desired mark-up on cost is 25% and the material cost for the product is estimated to be $16 before allowing for additional materials to allow for shrinkage of 20% (for every 10kg of material going in only 8kg comes out). If labour is the only other cost and 2 hours are needed what is the most the business can pay per hour if a cost gap is to be avoided?",
  "type": "mcq",
  "choices": {
    "A": "$10.00",
    "B": "$11.20",
    "C": "$12.40",
    "D": "$13.60"
  },
  "answer": "C"
},
    {
  "number": 253,
  "text": "Which of the following techniques is NOT relevant to target costing?",
  "type": "mcq",
  "choices": {
    "A": "Value analysis",
    "B": "Variance analysis",
    "C": "Functional analysis",
    "D": "Activity analysis"
  },
  "answer": "B"
},
    {
  "number": 254,
  "text": "The selling price of product Zigma is set to be $250 for each unit and sales for the coming year are expected to be 500 units. The company requires a return of 15% in the coming year on its investment of $250,000 in product Zigma. What is the target cost for each unit of Zigma for the coming year?",
  "type": "mcq",
  "choices": {
    "A": "$145",
    "B": "$155",
    "C": "$165",
    "D": "$175"
  },
  "answer": "D"
},
    {
  "number": 255,
  "text": "VC Co is a company of opticians. It provides a range of services to the public, such as eye tests and contact lens consultations, and has a separate dispensary selling glasses and contact lenses. Patients book appointments with an optician in advance. A standard appointment is 30 minutes long, during which an optician will assess the patient's specific requirements and provide them with the eye care services they need. After the appointment, patients are offered the chance to buy contact lenses or glasses from the dispensary. Which of the following describes a characteristic of the services provided by an optician at VC Co during a standard appointment?",
  "type": "mcq",
  "choices": {
    "A": "Tangible",
    "B": "Homogeneous",
    "C": "Non-perishable",
    "D": "Simultaneous"
  },
  "answer": "D"
},
    {
  "number": 256,
  "text": "A company has produced the following information for a product it is about to launch. The product is expected to have a life of three years. Year 1: Sales 2,000 units, Variable production cost $2.30, Fixed production costs $3,000, Variable selling cost $0.50, Fixed selling costs $1,500, Administrative costs $700. Year 2: Sales 5,000 units, Variable production cost $1.80, Fixed production costs $3,500, Variable selling cost $0.40, Fixed selling costs $1,600, Administrative costs $700. Year 3: Sales 7,000 units, Variable production cost $1.20, Fixed production costs $4,000, Variable selling cost $0.40, Fixed selling costs $1,600, Administrative costs $700. What is the life-cycle cost per unit?",
  "type": "mcq",
  "choices": {
    "A": "$2.81",
    "B": "$2.32",
    "C": "$3.22",
    "D": "$3.07"
  },
  "answer": "C"
},
    {
  "number": 257,
  "text": "A manufacturing company which produces a range of products has developed a budget for the life-cycle of a new product, P. Lifetime total: Design costs $800,000, Direct manufacturing costs $20 per unit, Depreciation costs $500,000, Decommissioning costs $20,000, Machine hours 4 per unit, Production and sales units 300,000. The company's total fixed production overheads are budgeted to be $72 million each year and total machine hours are budgeted to be 96 million hours. The company absorbs overheads on a machine hour basis. What is the budgeted life-cycle cost per unit for product P?",
  "type": "mcq",
  "choices": {
    "A": "$24.40",
    "B": "$25.73",
    "C": "$27.40",
    "D": "$22.73"
  },
  "answer": "C"
},
    {
  "number": 258,
  "text": "SNT is a Japanese electronics giant specialising in the production of game consoles. SNT is planning to introduce the latest 'next-generation' console. The new console is expected to incur costs: 20X0: Manufactured 10,000 units, R&D $950,000, Marketing $230,000, Production cost $450, Warranty $30. 20X1: 12,000 units, Marketing $120,000, Production cost $430, Warranty $30. 20X2: 11,100 units, Marketing $20,000, Production cost $290, Warranty $40. 20X3: 3,000 units, Marketing $5,000, Production cost $290, Warranty $45, End of life costs $125,000. Market research indicates customers will pay $420 per console. Which of the following statements made by the Chief Executive are true? (1) The cost per console using life-cycle costing is higher than the price customers are prepared to pay. (2) More attention to R&D costs in 20X0 could reduce warranty costs in later years.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 259,
  "text": "Which FOUR of the following are said to be benefits of life-cycle costing?",
  "type": "multi-select",
  "choices": {
    "A": "It provides the true financial cost of a product",
    "B": "The length of the life-cycle can be shortened",
    "C": "Expensive errors can be avoided in that potentially failing products can be avoided",
    "D": "Lower costs can be achieved earlier by designing out costs",
    "E": "Better selling prices can be set",
    "F": "Decline stages of the life-cycle can be avoided"
  },
  "answer": [
    "A",
    "C",
    "D",
    "E"
  ]
},
    {
  "number": 260,
  "text": "Which of the following statements are true regarding the justification of the use of life cycle costing? (1) Product life cycles are becoming increasingly short. This means that the initial costs are an increasingly important component in the product's overall costs. (2) Product costs are increasingly weighted to the start of a product's life cycle, and to properly understand the profitability of a product these costs must be matched to the ultimate revenues. (3) The high costs of (for example) research, design and marketing in the early stages in a product's life cycle necessitate a high initial selling price. (4) Traditional capital budgeting techniques do not attempt to minimise the costs or maximise the revenues over the product life cycle.",
  "type": "mcq",
  "choices": {
    "A": "(1), (2) and (4) only",
    "B": "(2) and (3) only",
    "C": "(1) and (3) only",
    "D": "(1), (2), (3) and (4)"
  },
  "answer": "A"
},
    {
  "number": 261,
  "text": "Which of the following statement(s) is/are true regarding life-cycle costing? (1) Life cycle costing takes into account all costs incurred in a product life cycle with exception of sunk costs incurred on research and development. (2) Life cycle costing ensures a profit is generated over the life of the product. (3) Life cycle costing is most useful for products with an even weighting of costs over their life.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (3) only",
    "B": "(2) only",
    "C": "(2) and (3) only",
    "D": "(1), (2) and (3)"
  },
  "answer": "B"
},
    {
  "number": 262,
  "text": "Company B is about to start developing a new product for launch in its existing market. They have forecast sales of 20,000 units and the marketing department suggest a selling price of $43/unit. The company seeks to make a mark-up of 40% product cost. It is estimated that the lifetime costs of the product will be as follows: Design and development costs $43,000, Manufacturing costs $15/unit, Plant decommissioning costs $30,000. What is the life cycle cost per unit of the new product?",
  "type": "mcq",
  "choices": {
    "A": "$18.65",
    "B": "$22",
    "C": "$22.87",
    "D": "$24"
  },
  "answer": "A"
},
    {
  "number": 263,
  "text": "Skye Limited operates in an environment where products go through two processes. Process P: 8 machines at 90% capacity, each producing 6 units per hour. Process Q: 6 machines at 85% capacity, each producing 9 units per hour. Skye produces 'Cloud' with a 15% discount on selling price of $20 per unit. Material cost $5 per unit, direct labour cost twice material cost. It takes 0.2 hours in process P and 0.3 hours in process Q. What is the Cloud's throughput per hour of the bottleneck resource (to two decimal places)?",
  "type": "mcq",
  "choices": {
    "A": "$40.00",
    "B": "$50.00",
    "C": "$60.00",
    "D": "$70.00"
  },
  "answer": "C"
},
    {
  "number": 264,
  "text": "A manufacturing company uses machine C for five hours a day to manufacture four products: W, X, Y and Z. Factory costs are $150,000 per day. Production rate per machine hour: W 200 units, X 500, Y 400, Z 350. Selling price: W $350, X $190, Y $270, Z $215. Material cost: W $120, X $95, Y $160, Z $75. Conversion cost: W $40, X $25, Y $20, Z $35. If the company cannot increase machine C's operational hours, what is the production ranking of product Y?",
  "type": "mcq",
  "choices": {
    "A": "First",
    "B": "Second",
    "C": "Third",
    "D": "Fourth"
  },
  "answer": "D"
},
    {
  "number": 265,
  "text": "A manufacturing company uses three processes. Process 1: 22 hours available, Product X needs 1.00 hour, Product Y needs 0.75 hours. Process 2: 22 hours available, Product X needs 0.75 hours, Product Y needs 1.00 hour. Process 3: 18 hours available, Product X needs 1.00 hour, Product Y needs 0.50 hours. Daily demand: X 10 units, Y 16 units. Which of the following will improve throughput?",
  "type": "mcq",
  "choices": {
    "A": "Increasing the efficiency of the maintenance routine for Process 2",
    "B": "Increasing the demand for both products",
    "C": "Reducing the time taken for rest breaks on Process 3",
    "D": "Reducing the time product X requires for Process 1"
  },
  "answer": "A"
},
    {
  "number": 266,
  "text": "Which ONE of the below statements is NOT true of throughput accounting?",
  "type": "mcq",
  "choices": {
    "A": "Throughput accounting considers that the only variable costs in the short run are materials and components.",
    "B": "Throughput accounting considers that time at a bottleneck resource has value, not elsewhere.",
    "C": "Throughput accounting views stock building as a non-value-adding activity, and therefore discourages it.",
    "D": "Throughput accounting was designed as a decision-making tool for situations where there is a bottleneck in the production process."
  },
  "answer": "D"
},
    {
  "number": 267,
  "text": "The movie budget for process X shows input/output analysis. INPUTS: Materials 1,000kg ($50,000), System costs ($30,000). OUTPUTS: Good output 700kg ($84,000), Waste 100kg ($1,000), Scrap 200kg ($3,000). Monthly profit is $6,000. The company is looking at introducing new quality systems that will increase system costs by $5,000 per month but will reduce waste from 10% to 4% of input. Scrap is expected to stay at 20% of input. What would be the impact on monthly profit of implementing the proposal?",
  "type": "mcq",
  "choices": {
    "A": "$4,400 reduction in profit",
    "B": "$200 increase in profit",
    "C": "$2,200 increase in profit",
    "D": "$2,800 increase in profit"
  },
  "answer": "D"
},
    {
  "number": 268,
  "text": "Different management accounting techniques can be used to account for environmental costs. One of these techniques involves analysing costs under three distinct categories: material, system, and delivery and disposal. What is this technique known as?",
  "type": "mcq",
  "choices": {
    "A": "Activity-based costing",
    "B": "Life-cycle costing",
    "C": "Input-output analysis",
    "D": "Flow cost accounting"
  },
  "answer": "D"
},
    {
  "number": 269,
  "text": "Which TWO of the following statements about the advantages of using Activity-based costing for Environmental Management Accounting are correct?",
  "type": "multi-select",
  "choices": {
    "A": "Higher environmental costs can be reflected in higher prices",
    "B": "Cost savings achieved through environmental policies can be measured",
    "C": "It is simple to determine the environmental costs and cost drivers",
    "D": "It considers all environmental effects of the company's actions"
  },
  "answer": [
    "A",
    "B"
  ]
},
    {
  "number": 270,
  "text": "The monthly budget for process X (same data as Q76). The company is looking at adopting environmental flow cost accounting, in which all material and system costs will be apportioned on the basis of weight. Calculate the total net cost of waste and scrap using flow cost accounting. Give your answer to the nearest $5.",
  "type": "mcq",
  "choices": {
    "A": "$15,000",
    "B": "$18,000",
    "C": "$22,000",
    "D": "$25,000"
  },
  "answer": "C"
},
    {
  "number": 271,
  "text": "Which TWO of the following statements about flow cost accounting are correct?",
  "type": "multi-select",
  "choices": {
    "A": "Manufacturing costs are categorised into material costs, system costs and delivery and disposal costs",
    "B": "Flow cost accounting records material inflows and balances this with outflows both in terms of physical quantities and, at the end of the process, in monetary terms too",
    "C": "In flow cost accounting, output costs are allocated between positive and negative product costs",
    "D": "The aim of flow cost accounting is to increase the quantity of materials which, as well as having a positive effect on the environment, should have a positive effect on a company's total costs in the long run"
  },
  "answer": [
    "A",
    "C"
  ]
},
    {
  "number": 272,
  "text": "Which of the following statements is/are true regarding the issues faced by businesses in the management of their environmental costs? (1) The costs involved are difficult to define. (2) Environmental costs can be categorised as quality related costs. (3) Cost control can be an issue, in particular if costs have been identified incorrectly in the first place.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) and (3) only",
    "C": "None of them",
    "D": "All of them"
  },
  "answer": "D"
},
    {
  "number": 273,
  "text": "Flow cost accounting is a technique which can be used to account for environmental costs. Inputs and outputs are measured through each individual process of production. Which of the following is NOT a category used within flow cost accounting?",
  "type": "mcq",
  "choices": {
    "A": "Material flows",
    "B": "System flows",
    "C": "Delivery and disposal flows",
    "D": "Waste flows"
  },
  "answer": "D"
},
    {
  "number": 274,
  "text": "Accountants usually find it difficult to deal with environmental costs. Which of the following is NOT a reason for this?",
  "type": "mcq",
  "choices": {
    "A": "Costs are often hidden",
    "B": "Costs are mostly minor",
    "C": "Costs are often very long term",
    "D": "Accounting systems rarely split off these costs automatically"
  },
  "answer": "B"
},
    {
  "number": 275,
  "text": "Which of the following statements are true regarding Triple Bottom Line (TBL) reporting as part of accounting for sustainability factors? (1) Triple bottom line reporting would involve measuring the organisation's profit, as well as the impact on people and the planet. (2) Measuring the impact on people, planet, and profit is very straightforward for most businesses. (3) It could be a useful way for an organisation to encourage staff to make efficiency cost savings and could even help them attract ethically aware staff and customers.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (2) only",
    "B": "(2) and (3) only",
    "C": "(1) and (3) only",
    "D": "(1), (2) and (3)"
  },
  "answer": "C"
},
    {
  "number": 276,
  "text": "UU Company has been asked to quote for a special contract. Material X: Original cost $5.00 per kg, Scrap value $0.50 per kg, Replacement cost $5.50 per kg. The contract requires 10 kgs of Material X. There are 250 kgs of this material in inventory which was purchased in error over two years ago. If Material X is modified, at a cost of $2 per kg, it could then be used as a substitute for material Y which is in regular use and currently costs $6 per kg. What is the relevant cost of the materials for the special contract?",
  "type": "mcq",
  "choices": {
    "A": "$5",
    "B": "$40",
    "C": "$50",
    "D": "$55"
  },
  "answer": "B"
},
    {
  "number": 277,
  "text": "VV Company has been asked to quote for a special contract. The contract requires 100 hours of labour. Labourers are paid $15 per hour and are working at full capacity. There is a shortage of labour. The labour would have to be taken from contract Z, which currently utilises 500 hours of labour and generates $5,000 worth of contribution. If labour was taken from contract Z, then the whole of contract Z would have to be delayed, incurring a penalty fee of $1,000. What is the relevant cost of the labour for the special contract?",
  "type": "mcq",
  "choices": {
    "A": "$1,000",
    "B": "$1,500",
    "C": "$2,500",
    "D": "$7,500"
  },
  "answer": "C"
},
    {
  "number": 278,
  "text": "In order to utilise some spare capacity, K is preparing a quotation for a special order which requires 2,000 kgs of material J. K has 800 kgs of material J in inventory (original cost $7.00 per kg). Material J is used in product L. Each unit of L uses 5 kgs of material J and yields contribution of $10.00. Resale value of J is $5.50 per kg. Replacement price is $8.00 per kg. J is readily available. What is the relevant cost of the 2,000 kgs of material J?",
  "type": "mcq",
  "choices": {
    "A": "$11,000",
    "B": "$14,000",
    "C": "$16,000",
    "D": "$18,000"
  },
  "answer": "C"
},
    {
  "number": 279,
  "text": "A company is calculating the relevant cost of material for a contract requiring 4,200 kgs of material H. It can be bought for $6.30 per kg. The company has 3,700 kgs in inventory bought at $4.50 per kg. The inventory could be sold for $3.20 per kg. It could be modified at $3.70 per kg and used as substitute for material J, which costs $7.50 per kg. What is the relevant cost?",
  "type": "mcq",
  "choices": {
    "A": "$17,210",
    "B": "$19,800",
    "C": "$26,460",
    "D": "$30,900"
  },
  "answer": "A"
},
    {
  "number": 280,
  "text": "Ace Limited is considering a new project that will require a currently idle machine. Book value $12,000, disposal value $10,500 (before $200 disposal costs). To be fit for purpose, relocation cost $500 and refit cost $800. What is the relevant cost of using the machine?",
  "type": "mcq",
  "choices": {
    "A": "$9,000",
    "B": "$10,300",
    "C": "$11,600",
    "D": "$13,300"
  },
  "answer": "C"
},
    {
  "number": 281,
  "text": "Blunt is considering a new project. Existing fixed overheads absorbed at $8 per hour. Project involves 500 incremental labour hours. Variable overheads cost $4 per hour for 450 machine hours (50 hours idle time). Temporary space rental $1,200. What is the overhead to be charged to the project?",
  "type": "mcq",
  "choices": {
    "A": "$3,000",
    "B": "$3,200",
    "C": "$7,000",
    "D": "$7,200"
  },
  "answer": "A"
},
    {
  "number": 282,
  "text": "Cleverclogs needs 600 hours of labour. Option 1: Agency at $9 per hour. Option 2: Recruit new staff: advertising $1,200 plus $6 per hour. Option 3: Redirect staff paid $7 per hour who make sandals generating contribution of $3 per hour. What is the relevant cash flow?",
  "type": "mcq",
  "choices": {
    "A": "$1,800",
    "B": "$3,600",
    "C": "$4,200",
    "D": "$4,800"
  },
  "answer": "D"
},
    {
  "number": 283,
  "text": "Drippy is producing a list of relevant cash flows. They have a standing advertising contract for the next twelve months. Payment is made in the month following an advert. Drippy is going to use the magazine to advertise a new USB stick. What is the best description for the cost of the advertising space?",
  "type": "mcq",
  "choices": {
    "A": "Sunk cost",
    "B": "Historic cost",
    "C": "Relevant cost",
    "D": "Committed cost"
  },
  "answer": "D"
},
    {
  "number": 284,
  "text": "Which of the following terms would NOT normally be used to describe a relevant cost for a decision?",
  "type": "mcq",
  "choices": {
    "A": "Incremental",
    "B": "Future",
    "C": "Material",
    "D": "Cash flow"
  },
  "answer": "C"
},
    {
  "number": 285,
  "text": "X plc intends to use relevant costs for a special order printing a brochure requiring 250 reams of paper. X has 100 reams in inventory bought at $15 per ream. Current market price $26 per ream, resale value $10 per ream. What is the relevant cost of the paper?",
  "type": "mcq",
  "choices": {
    "A": "$2,500",
    "B": "$4,900",
    "C": "$5,400",
    "D": "$6,500"
  },
  "answer": "B"
},
    {
  "number": 286,
  "text": "Betis Limited is considering changing its employed staff to freelance. Employees currently paid fixed salary $240,000 per annum, would instead be paid $200 per working day producing 40 units per day. Other fixed costs $400,000 per annum. Selling price $60, material costs $20 per unit. What will be the effect on breakeven point and operating risk?",
  "type": "mcq",
  "choices": {
    "A": "Breakeven reduces by 6,000 units, operating gearing goes down",
    "B": "Breakeven reduces by 4,571 units, operating gearing goes down",
    "C": "Breakeven reduces by 4,571 units, operating gearing goes up",
    "D": "Breakeven reduces by 6,000 units, operating gearing goes up"
  },
  "answer": "B"
},
    {
  "number": 287,
  "text": "P Co makes two products - P1 and P2. P1: Selling price $10, Direct materials $3.50, Direct labour $1.50, Variable overhead $0.60, Fixed overhead $1.20, Profit $3.20. P2: Selling price $8, Direct materials $4, Direct labour $1, Variable overhead $0.40, Fixed overhead $1, Profit $1.60. Budgeted production: P1 10,000 units, P2 12,500 units. P2 includes specific fixed overheads totalling $2,500. If only product P1 were to be made, how many units would need to be sold to achieve a profit of $60,000 each year?",
  "type": "mcq",
  "choices": {
    "A": "15,000",
    "B": "16,875",
    "C": "18,637",
    "D": "20,000"
  },
  "answer": "C"
},
    {
  "number": 288,
  "text": "An organisation manufactures and sells a single product. Budget: Sales revenue (20,000 units) $5,000,000. Manufacturing costs: Fixed $1,600,000, Variable $1,400,000. Selling costs: Fixed $1,200,000, Variable $400,000. If inventory levels are negligible, what is the breakeven point in units?",
  "type": "mcq",
  "choices": {
    "A": "13,634",
    "B": "13,750",
    "C": "17,500",
    "D": "28,000"
  },
  "answer": "C"
},
    {
  "number": 289,
  "text": "A company manufactures a single product with variable cost per unit $36. Contribution to sales ratio is 25%. Weekly fixed costs $18,000. Which of the following is the weekly breakeven point in units?",
  "type": "mcq",
  "choices": {
    "A": "1,500",
    "B": "1,600",
    "C": "1,800",
    "D": "2,000"
  },
  "answer": "A"
},
    {
  "number": 290,
  "text": "A company makes a single product: Selling price $25, Material $5, Labour $7, Variable overhead $3, Fixed overhead $4, Profit $6. Budgeted output 30,000 units. Which statement is correct?",
  "type": "mcq",
  "choices": {
    "A": "The margin of safety is 40%",
    "B": "The contribution to sales ratio is 24%",
    "C": "The volume of sales needed to make a profit of $270,000 is 45,000 units",
    "D": "If budgeted sales increase to 40,000 units, budgeted profit will increase by $100,000"
  },
  "answer": "D"
},
    {
  "number": 291,
  "text": "The management accountant of Caroline plc calculated breakeven point: Selling price $20, Variable costs $8, Fixed overheads $79,104. It is now expected that selling price will increase by 8% and variable cost by 5.2%. By how much will Caroline's breakeven point change?",
  "type": "mcq",
  "choices": {
    "A": "Rise by 9.0%",
    "B": "Rise by 2.8%",
    "C": "Fall by 2.8%",
    "D": "Fall by 9%"
  },
  "answer": "D"
},
    {
  "number": 292,
  "text": "Edwards sells two products: Product F: Selling price $40, Contribution $10, Budgeted sales 150,000 units. Product G: Selling price $20, Contribution $4, Budgeted sales 100,000 units. Fixed costs $1,400,000 per year. What is Edwards' current breakeven revenue (to the nearest $)?",
  "type": "mcq",
  "choices": {
    "A": "$100,000",
    "B": "$200,000",
    "C": "$5,600,000",
    "D": "$5,894,737"
  },
  "answer": "D"
},
    {
  "number": 293,
  "text": "Edwards (same data as Q101) now anticipates budgeted sales will be 150,000 units for each product. What would be the impact on the break-even revenue if the sales volume of G increases?",
  "type": "mcq",
  "choices": {
    "A": "Increase by the extra revenue from G of 50,000 x $20 = $1,000,000",
    "B": "Decrease by the extra revenue from G of $1,000,000",
    "C": "Increase by a different amount",
    "D": "Decrease by a different amount"
  },
  "answer": "C"
},
    {
  "number": 294,
  "text": "A company has produced a Profit/Volume (P/V) chart for its sole product. The profit line crosses the vertical axis at -$2,000 and crosses the horizontal axis at 10,000 units. What are the total fixed costs for the product?",
  "type": "mcq",
  "choices": {
    "A": "$0",
    "B": "$2,000",
    "C": "$8,000",
    "D": "$10,000"
  },
  "answer": "B"
},
    {
  "number": 295,
  "text": "A breakeven chart shows: Sales line from 0 to $100,000 at 10,000 units. Total cost line from $30,000 at 0 units to $80,000 at 10,000 units. Which statements are correct? (1) Selling price is $10 per unit. (2) Variable cost is $8 per unit. (3) Fixed costs are $30,000 per period. (4) Profit at 10,000 units is $70,000.",
  "type": "mcq",
  "choices": {
    "A": "(2) and (3)",
    "B": "(1) and (3)",
    "C": "(1) and (4) only",
    "D": "(1), (2) and (4)"
  },
  "answer": "B"
},
    {
  "number": 296,
  "text": "Hubbard Ltd manufactures a single product: Selling price $199, Direct material $54, Direct labour $50, Variable overhead $20, Fixed overhead $22. Fixed overhead absorption based on normal capacity of 6,200 units per month. Which TWO statements about next month are correct?",
  "type": "multi-select",
  "choices": {
    "A": "1,921 units are required to breakeven next month",
    "B": "3,152 units of sales are required to achieve a profit of $100,000 next month",
    "C": "Monthly fixed costs amount to $136,400",
    "D": "The margin of safety next month is 75%"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 297,
  "text": "The contribution to sales (C/S) ratio for a business is 0.4 and its fixed costs are $1,600,000. Budget revenue has been set at 6 times the amount of the fixed costs. What is the margin of safety % measured in revenue (to 1 decimal place)?",
  "type": "mcq",
  "choices": {
    "A": "41.7%",
    "B": "58.3%",
    "C": "62.5%",
    "D": "75.0%"
  },
  "answer": "B"
},
    {
  "number": 298,
  "text": "An organisation has contribution function: Contribution = 5X + 10Y. Constraints: Skilled labour: 6X + 4Y ≤ 62,000, Unskilled labour: 2X + 5Y ≤ 50,000. Maximum demand 12,000 units of each product. What is the number of units of Product Y produced to maximise contribution?",
  "type": "mcq",
  "choices": {
    "A": "6,000",
    "B": "8,000",
    "C": "10,000",
    "D": "12,000"
  },
  "answer": "B"
},
    {
  "number": 299,
  "text": "A jewellery company makes rings (R) and necklaces (N). Constraints: Labour time 3R + 2N ≤ 2,400 hours, Machine time 0.5R + 0.4N ≤ 410 hours. Management accountant determined R=500 and N=400. Which is/are slack resources? (1) Labour time available (2) Machine time available",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Both (1) and (2)",
    "D": "Neither (1) nor (2)"
  },
  "answer": "A"
},
    {
  "number": 300,
  "text": "Q plc makes Quone and Qutwo. Quone: Selling price $20, Direct material ($2 per kg) $6, Direct labour $4, Variable overhead $2, Contribution $8. Qutwo: Selling price $18, Direct material $5, Direct labour $3, Variable overhead $1.50, Contribution $8.50. Maximum demand: Quone 500 units, Qutwo unlimited. Material limited to 2,000 kgs per week. What is the shadow price of these materials?",
  "type": "mcq",
  "choices": {
    "A": "$nil",
    "B": "$2.00 per kg",
    "C": "$2.66 per kg",
    "D": "$3.40 per kg"
  },
  "answer": "D"
},
    {
  "number": 301,
  "text": "The following details relate to three services: Service R: Fee $100, Direct materials $15, Direct labour $20, Variable overhead $15, Fixed overhead $25. Service S: Fee $150, Direct materials $30, Direct labour $35, Variable overhead $20, Fixed overhead $50. Service T: Fee $160, Direct materials $25, Direct labour $30, Variable overhead $22, Fixed overhead $50. All services use same direct labour paid $25 per hour. Fixed overheads absorbed on machine hours. What are the most and least profitable uses of direct labour?",
  "type": "mcq",
  "choices": {
    "A": "Most: S, Least: R",
    "B": "Most: R, Least: S",
    "C": "Most: T, Least: R",
    "D": "Most: T, Least: S"
  },
  "answer": "D"
},
    {
  "number": 302,
  "text": "A linear programming model for products X and Y: C = 5X + 6Y. Each unit of X uses 2kg of material Z, each unit of Y uses 3kg. Standard cost $2 per kg. Shadow price for material Z is $2.80 per kg. If an extra 20kg becomes available at $2 per kg, what will the maximum increase in contribution be?",
  "type": "mcq",
  "choices": {
    "A": "Increase of $96",
    "B": "Increase of $56",
    "C": "Increase of $16",
    "D": "No change"
  },
  "answer": "B"
},
    {
  "number": 303,
  "text": "An organisation is experiencing a shortage of resources and has graphed a linear programming solution with televisions on horizontal axis and tablet computers on vertical axis. The iso-contribution line is very flat and downward sloping. Which statement is likely true?",
  "type": "mcq",
  "choices": {
    "A": "Contribution per unit for tablet computers must be higher than that for televisions",
    "B": "Contribution per unit for televisions must be higher than that for tablet computers",
    "C": "Contribution per unit for each type of product is very similar",
    "D": "Contribution per unit for one of the products must be negative"
  },
  "answer": "A"
},
    {
  "number": 304,
  "text": "An organisation has contribution function: Contribution = 12A + 8B. Constraints: Material X: A + 2B ≤ 8,000, Material Y: 2A + B ≤ 13,000. Maximum demand 10,000 units of each product. How many units of Product A are produced to maximise contribution?",
  "type": "mcq",
  "choices": {
    "A": "0",
    "B": "1,000",
    "C": "6,000",
    "D": "10,000"
  },
  "answer": "C"
},
    {
  "number": 305,
  "text": "An organisation has graphed a linear programming model. All constraints have less than or equal to constraints. The feasible region is bounded by lines at B=60, A=40, and a diagonal line from (0,40) to (60,0). What is the maximum number of units of Product B which can be produced?",
  "type": "mcq",
  "choices": {
    "A": "40",
    "B": "50",
    "C": "60",
    "D": "70"
  },
  "answer": "C"
},
    {
  "number": 306,
  "text": "An organisation has created a linear programming solution. The point marked B has been determined as the optimal production plan. At point B, direct labour line and line R intersect. Which resources will have a shadow price greater than 0?",
  "type": "mcq",
  "choices": {
    "A": "Direct labour hours only",
    "B": "Material A and Material B only",
    "C": "Machine hours only",
    "D": "Direct labour hours and Machine hours"
  },
  "answer": "A"
},
    {
  "number": 307,
  "text": "Which of the following statements is true of pricing?",
  "type": "mcq",
  "choices": {
    "A": "Discrimination is always illegal so everyone should pay the same amount",
    "B": "Early adopters get a discount for being first in the market",
    "C": "Pricing against a similar competitor is important in the Internet age",
    "D": "Price to make the most sales in that way you will always get the most profit"
  },
  "answer": "C"
},
    {
  "number": 308,
  "text": "The demand for product S is 50,000 units at current price of $1,000. Demand function: P = 1,500 - 0.01Q. Variable cost $200 per unit, fixed costs $20 million. What is the maximum total profit for product S?",
  "type": "mcq",
  "choices": {
    "A": "$13,000,000",
    "B": "$22,250,000",
    "C": "$42,250,000",
    "D": "$55,250,000"
  },
  "answer": "B"
},
    {
  "number": 309,
  "text": "A product has prime cost $12, variable overheads $3 per unit, fixed overheads $6 per unit. Which pricing policy gives the highest price?",
  "type": "mcq",
  "choices": {
    "A": "Prime cost + 80%",
    "B": "Marginal cost + 60%",
    "C": "Total absorption cost + 20%",
    "D": "Net margin of 14% on selling price"
  },
  "answer": "C"
},
    {
  "number": 310,
  "text": "The demand for a product is 5,000 units at price $400 and 6,000 units at price $380. Variable cost $200. What is the optimum price to maximise profit?",
  "type": "mcq",
  "choices": {
    "A": "$150",
    "B": "$200",
    "C": "$350",
    "D": "$700"
  },
  "answer": "C"
},
    {
  "number": 311,
  "text": "The following price and demand combinations: P1=$400, Q1=5,000 units; P2=$380, Q2=5,500 units. Variable cost $80 per unit, fixed costs $600,000 per annum. What is the demand function?",
  "type": "mcq",
  "choices": {
    "A": "P = 200 - 0.04Q",
    "B": "P = 600 - 0.04Q",
    "C": "P = 600 + 0.04Q",
    "D": "P = 200 - 20Q"
  },
  "answer": "B"
},
    {
  "number": 312,
  "text": "Same data as Q120. The optimal price is (to the nearest $):",
  "type": "mcq",
  "choices": {
    "A": "$240",
    "B": "$280",
    "C": "$340",
    "D": "$400"
  },
  "answer": "C"
},
    {
  "number": 313,
  "text": "Which FOUR of the following are correctly included in considerations in a make or buy decision?",
  "type": "multi-select",
  "choices": {
    "A": "The amount of re-allocated rent costs caused by using the production space differently",
    "B": "The variable costs of purchase from the new supplier",
    "C": "The level of discount available from the new supplier",
    "D": "The redundancy payments to the supervisor of the product in question",
    "E": "The saved labour costs of the production staff re-directed to other work",
    "F": "The materials no longer bought to manufacture the product"
  },
  "answer": [
    "B",
    "C",
    "D",
    "F"
  ]
},
    {
  "number": 314,
  "text": "Appler needs 500kg of Material A (has 200kg in stock bought at $5/kg with 10% shrinkage). Material A not regularly used, disposal cost $400 total. Current purchase price $6.25/kg. Also needs 800kg of Material B (in stock, bought at $4/kg, can be bought now at $3.75/kg). What is total cost of material A and B for minimum price calculation?",
  "type": "mcq",
  "choices": {
    "A": "$3,875",
    "B": "$4,475",
    "C": "$5,000",
    "D": "$5,500"
  },
  "answer": "B"
},
    {
  "number": 315,
  "text": "Same scenario as Q123. Processing energy costs $200, supervisor would allocate $150 of weekly salary. What is total cost for processing and supervision to be included?",
  "type": "mcq",
  "choices": {
    "A": "$200",
    "B": "$350",
    "C": "$150",
    "D": "$0"
  },
  "answer": "A"
},
    {
  "number": 316,
  "text": "Jorioz Co makes joint products X and Y. $120,000 joint processing costs. At split-off: 10,000 units of X at $1.20, 9,000 units of Y at $1.50. X could be processed further to make 8,000 units of Z. Extra costs: fixed $1,600, variable $0.50 per unit input. Selling price of Z $2.25. What profit or loss arises if product X is further processed?",
  "type": "mcq",
  "choices": {
    "A": "$600 loss",
    "B": "$400 gain",
    "C": "$3,900 gain",
    "D": "$1,600 loss"
  },
  "answer": "A"
},
    {
  "number": 317,
  "text": "P is considering whether to make or buy a component. Uses 12,000 components per year. Internal manufacturing cost: Direct materials $3.00, Direct labour $4.00, Variable overhead $1.00, Specific fixed cost $2.50, Other fixed costs $2.00. If direct labour not used for component, it would be used to increase production of another item with contribution $10.00 per unit requiring $8.00 of labour per unit. What is maximum price per component at which buying is preferable?",
  "type": "mcq",
  "choices": {
    "A": "$8.00",
    "B": "$10.50",
    "C": "$12.50",
    "D": "$15.50"
  },
  "answer": "D"
},
    {
  "number": 318,
  "text": "Shuffles Co uses fork-lift trucks. Pay-off table: Growth rate 15%: A series $2,400, B series $1,800, C series $3,600. 30%: A $1,400, B $1,900, C $4,500. 40%: A $4,900, B $2,800, C $3,900. If Shuffles Co is risk averse, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "C"
},
    {
  "number": 319,
  "text": "Same data as Q127. If Shuffles Co is risk seeking, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "A"
},
    {
  "number": 320,
  "text": "Same data as Q127. If Shuffles Co adopts the minimax regret approach, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "C"
},
    {
  "number": 321,
  "text": "Same data as Q127. Probabilities: 15%: 0.4, 30%: 0.25, 40%: 0.35. If Shuffles Co is risk neutral, which grade of truck will it purchase?",
  "type": "mcq",
  "choices": {
    "A": "A series",
    "B": "B series",
    "C": "C series",
    "D": "Cannot determine"
  },
  "answer": "C"
},
    {
  "number": 322,
  "text": "Which TWO of the following statements about sensitivity analysis are correct? (1) Sensitivity analysis can be used to gain insight into which assumptions or variables in a situation are critical. (2) Sensitivity analysis provides information on the basis of which decisions can be made but it does not point to the correct decision directly. (3) As well as identifying how far a variable needs to change, sensitivity analysis looks at the probability of such a change. (4) Sensitivity analysis not only assumes that variables can change independently, it also allows to change more than one variable at a time.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (2) only",
    "B": "(2) and (3) only",
    "C": "(1) and (4) only",
    "D": "(2) and (4) only"
  },
  "answer": "A"
},
    {
  "number": 323,
  "text": "Indicate whether the following statements about simulation are true or not true: (1) Simulation models the behaviour of a system. (2) Simulation models can be used to study alternative solutions to a problem. (3) The equations describing the operating characteristics of the system are known. (4) A simulation model cannot prescribe what should be done about a problem.",
  "type": "mcq",
  "choices": {
    "A": "All true",
    "B": "All not true",
    "C": "1,2,4 true; 3 not true",
    "D": "1,2,3 true; 4 not true"
  },
  "answer": "C"
},
    {
  "number": 324,
  "text": "Tree Co is considering employing a sales manager. Good manager increases profit by 30% (35% probability), average by 20% (45%), poor by 10% (20%). Normal profits $180,000, salary $40,000. Based on expected value criterion, which advice should be given?",
  "type": "mcq",
  "choices": {
    "A": "Do not employ as profits would fall by $1,300",
    "B": "Employ as profits will increase by $38,700",
    "C": "Employ as profits are expected to increase by $100",
    "D": "Do not employ as profits are expected to fall by $39,900"
  },
  "answer": "A"
},
    {
  "number": 325,
  "text": "Which of the following is the correct definition of IMPERFECT information?",
  "type": "mcq",
  "choices": {
    "A": "Information which costs more to collect than its value to the business",
    "B": "Information which is available only after preliminary decisions on a business venture have been taken",
    "C": "Information which does not take into account all factors affecting a business",
    "D": "Information which may contain inaccurate predictions"
  },
  "answer": "D"
},
    {
  "number": 326,
  "text": "A company is considering development of a new product. Development costs $2m. 75% probability of success. If successful: Product very successful $6.0m (0.4 probability), moderately successful $1.8m (0.4), unsuccessful ($5.0m) (0.2). What is expected value of profit?",
  "type": "mcq",
  "choices": {
    "A": "($0.41m)",
    "B": "$2.12m",
    "C": "$1.59m",
    "D": "$0.41m"
  },
  "answer": "A"
},
    {
  "number": 327,
  "text": "A company can make either product X or Y. Profit from X: Good market $20,000 (0.2 prob), Fair $15,000 (0.5), Poor $6,000 (0.3). Profit from Y: Good $17,000, Fair $16,000, Poor $7,000. What is expected value of perfect information?",
  "type": "mcq",
  "choices": {
    "A": "$200",
    "B": "$400",
    "C": "$600",
    "D": "$800"
  },
  "answer": "C"
},
    {
  "number": 328,
  "text": "A business is considering a project dependent on government grant. Grant received: 30% probability, expected profit $200,000. Grant not received: 70% probability, expected loss $80,000. Overall expected value $4,000. What would the expected loss when grant not received have to increase to for the project to no longer be worthwhile?",
  "type": "mcq",
  "choices": {
    "A": "$84,000",
    "B": "$85,714",
    "C": "$114,286",
    "D": "$200,000"
  },
  "answer": "B"
},
    {
  "number": 329,
  "text": "Which of the following is considered to be a form of secondary research?",
  "type": "mcq",
  "choices": {
    "A": "Desk research",
    "B": "Motivational research",
    "C": "Measurement research",
    "D": "Field research"
  },
  "answer": "A"
},
    {
  "number": 330,
  "text": "Which of the following statement(s) is/are true regarding budgetary systems in the performance hierarchy? (1) Developing new products in response to changes in technology is a budgeting activity that would fall within operational planning and control. (2) Budgetary systems at strategic planning levels look at the business as a whole and define resource requirements.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "B"
},
    {
  "number": 331,
  "text": "What is the purpose of a flexible budget?",
  "type": "mcq",
  "choices": {
    "A": "To allow budgets to be produced for virtually any level of production",
    "B": "To reduce the total time in preparing the annual budget",
    "C": "To allow management some latitude in meeting goals",
    "D": "To eliminate cyclical fluctuations in production reports by ignoring variable costs"
  },
  "answer": "A"
},
    {
  "number": 332,
  "text": "Which of the following statement(s) is/are true regarding feed-forward control budgetary systems? (1) Feed-forward control systems have an advantage over other types of control in that it establishes how effective planning was. (2) Feed-forward control can start as soon as actual results become available.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 333,
  "text": "Which of the following is an advantage of non-participative budgeting as compared to participative budgeting?",
  "type": "mcq",
  "choices": {
    "A": "It increases motivation",
    "B": "It is less time consuming",
    "C": "It increases acceptance",
    "D": "The budgets produced are more attainable"
  },
  "answer": "B"
},
    {
  "number": 334,
  "text": "Which of the following is a common feature of a beyond budgeting approach?",
  "type": "mcq",
  "choices": {
    "A": "A greater use of rolling budgets",
    "B": "A greater use of top-down budgets",
    "C": "A greater emphasis on financial targets",
    "D": "A greater focus on standardization"
  },
  "answer": "A"
},
    {
  "number": 335,
  "text": "EFG uses activity-based budgeting. Product E: 75,000 units, batch size 200, set-ups per batch 5, purchase orders per batch 4, processing time 3 min. Product F: 120,000 units, batch size 60, set-ups per batch 3, purchase orders per batch 2, processing time 4 min. Product G: 60,000 units, batch size 30, set-ups per batch 9, purchase orders per batch 2, processing time 4 min. Cost pools: Machine set-up $180,000, Purchasing $95,000, Processing $110,000. What is budgeted machine set-up cost per unit of product F?",
  "type": "mcq",
  "choices": {
    "A": "$0.1739",
    "B": "$0.35",
    "C": "$6.96",
    "D": "Cannot be determined"
  },
  "answer": "B"
},
    {
  "number": 336,
  "text": "Which of the following best describes a master budget?",
  "type": "mcq",
  "choices": {
    "A": "Budgeted Statement of profit or loss and budgeted cash flow only",
    "B": "Budgeted Statement of profit or loss and budgeted Statement of financial position only",
    "C": "Budgeted Statement of profit or loss and budgeted capital expenditure",
    "D": "Budgeted Statement of profit or loss, budgeted Statement of financial position and budgeted cash flow"
  },
  "answer": "D"
},
    {
  "number": 337,
  "text": "Which TWO of the following are expected benefits from a beyond budgeting approach?",
  "type": "multi-select",
  "choices": {
    "A": "Coordination between activities becomes easier",
    "B": "It is cheap and easy to introduce",
    "C": "Innovation and continuous improvement become more likely",
    "D": "The organisation becomes more customer focused"
  },
  "answer": [
    "C",
    "D"
  ]
},
    {
  "number": 338,
  "text": "X Co uses rolling budgeting. After the last quarter's update to cash budget, it projected a forecast cash deficit of $400,000. Consequently, planned purchase of new capital equipment has been postponed. Which type of control is this an example of?",
  "type": "mcq",
  "choices": {
    "A": "Feedforward control",
    "B": "Negative feedback control",
    "C": "Positive feedback control",
    "D": "Double loop feedback control"
  },
  "answer": "A"
},
    {
  "number": 339,
  "text": "Which of the following statement(s) is/are true regarding different types of budget? (1) A flexible budget can be used to control operational efficiency. (2) Incremental budgeting can be defined as a system of budgetary planning and control that measures the additional costs that are incurred when there are unplanned extra units of activity. (3) Rolling budgets review and, if necessary, revise the budget for the next quarter to ensure that budgets remain relevant for the remainder of the accounting period.",
  "type": "mcq",
  "choices": {
    "A": "(1) and (3)",
    "B": "(2) and (3)",
    "C": "(3) only",
    "D": "(1) only"
  },
  "answer": "D"
},
    {
  "number": 340,
  "text": "Which TWO of the following statements regarding zero-based budgeting are correct?",
  "type": "multi-select",
  "choices": {
    "A": "It is best applied to support expenses rather than to direct costs",
    "B": "It can link strategic goals to specific functional areas",
    "C": "It carries forward inefficiencies from previous budget periods",
    "D": "It is consistent with a top-down budgeting approach"
  },
  "answer": [
    "A",
    "B"
  ]
},
    {
  "number": 341,
  "text": "Which of the following statement(s) regarding the drawbacks of activity-based budgeting (ABB) is/are true? (1) It is not always useful or applicable, as in the short term many overhead costs are not controllable and do not vary directly with changes in the volume of activity for the cost driver. (2) ABB will not be able to provide useful information for a total quality management programme (TQM).",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "A"
},
    {
  "number": 342,
  "text": "The following table shows number of clients and total costs: Week 1: 400 clients, $36,880. Week 2: 440 clients, $39,840. Week 3: 420 clients, $36,800. Week 4: 460 clients, $40,000. Applying the high low method, which could be used to forecast total cost?",
  "type": "mcq",
  "choices": {
    "A": "7,280 + 74x",
    "B": "16,080 + 52x",
    "C": "3,200 + 80x",
    "D": "40,000/x"
  },
  "answer": "B"
},
    {
  "number": 343,
  "text": "PT has a learning curve with 75% rate for first 12 customer assignments. First assignment took 6 hours. Index for 75% is -0.415. Calculate time for 7th assignment to nearest 0.01 hours.",
  "type": "mcq",
  "choices": {
    "A": "1.52 hours",
    "B": "1.62 hours",
    "C": "2.68 hours",
    "D": "18.73 hours"
  },
  "answer": "B"
},
    {
  "number": 344,
  "text": "First unit of product A takes 50 hours. Learning rate 85%, b = -0.234. What is total time taken to produce 17 units (to nearest 0.01 hours)?",
  "type": "mcq",
  "choices": {
    "A": "19.88 hours",
    "B": "25.77 hours",
    "C": "418.14 hours",
    "D": "438.02 hours"
  },
  "answer": "D"
},
    {
  "number": 345,
  "text": "Time taken for first batch of 50 units was 500 hours. Total time for first 16 batches of 50 units was 5,731 hours. What is the learning rate (to nearest %)?",
  "type": "mcq",
  "choices": {
    "A": "90%",
    "B": "92%",
    "C": "95%",
    "D": "97%"
  },
  "answer": "B"
},
    {
  "number": 346,
  "text": "Budgeted electricity cost is $30,000 based on production of 1,000 units. If 1,400 units were produced, budgeted cost would rise to $31,600. Using high/low approach, what would be budgeted electricity cost if 2,100 units were produced?",
  "type": "mcq",
  "choices": {
    "A": "$33,200",
    "B": "$34,400",
    "C": "$35,600",
    "D": "$36,800"
  },
  "answer": "B"
},
    {
  "number": 347,
  "text": "Time taken for first unit was 100 hours, second unit 90 hours. What is learning rate (to nearest %)?",
  "type": "mcq",
  "choices": {
    "A": "90%",
    "B": "95%",
    "C": "85%",
    "D": "80%"
  },
  "answer": "B"
},
    {
  "number": 348,
  "text": "Time for first batch of 50 units was 400 hours. Learning rate 90%, b = -0.152. Pay rate $12 per hour. Order for 600 units received, then second order for 800 units. What will be labour cost for second order?",
  "type": "mcq",
  "choices": {
    "A": "$38,000",
    "B": "$39,500",
    "C": "$41,509",
    "D": "$43,000"
  },
  "answer": "C"
},
    {
  "number": 349,
  "text": "Times for first four batches: 1st 100 min, 2nd 70 min, 3rd 59 min, 4th 55 min. What was rate of learning closest to (1 d.p)?",
  "type": "mcq",
  "choices": {
    "A": "82.5%",
    "B": "84.3%",
    "C": "86.1%",
    "D": "88.0%"
  },
  "answer": "B"
},
    {
  "number": 350,
  "text": "Kim Co has 80% learning effect. First unit took 22 minutes, b = -0.3219. How long to make the fourth unit?",
  "type": "mcq",
  "choices": {
    "A": "17.6 minutes",
    "B": "14.08 minutes",
    "C": "15.45 minutes",
    "D": "9.98 minutes"
  },
  "answer": "D"
},
    {
  "number": 351,
  "text": "Z plc has trend equation: y = 25,000 + 6,500x. Seasonal variation indices: Q1 70%, Q2 90%, Q3 150%, Q4 90%. First quarter of year 1 is x=1. What is forecast sales for third quarter of year 7?",
  "type": "mcq",
  "choices": {
    "A": "174,500 units",
    "B": "200,500 units",
    "C": "261,750 units",
    "D": "300,750 units"
  },
  "answer": "D"
},
    {
  "number": 352,
  "text": "Hi-Tech plc has regression equation y = 150 + 7x, where y is total sales revenue and x is advertising spend (in $000s). Which statement is correct?",
  "type": "mcq",
  "choices": {
    "A": "If $7,000 is spent on advertising, sales revenue would be $150,000",
    "B": "If no money is spent on advertising, sales revenue would be $7,000",
    "C": "If $150,000 is spent on advertising, $7,000 sales revenue will be generated",
    "D": "If no money is spent on advertising, sales revenue would be $150,000"
  },
  "answer": "D"
},
    {
  "number": 353,
  "text": "A company has budgeted sales of $10m and actual sales of $9.5m. The correlation between sales and the economic index is calculated to be 0.85. What can be concluded about the company's sales performance?",
  "type": "mcq",
  "choices": {
    "A": "Poor performance as sales are $0.5m below budget",
    "B": "Good performance as sales are in line with market conditions",
    "C": "Cannot determine without additional information",
    "D": "Sales are exactly as expected"
  },
  "answer": "C"
},
    {
  "number": 354,
  "text": "Which of the following statements about the coefficient of determination is correct?",
  "type": "mcq",
  "choices": {
    "A": "It measures the strength of the relationship between two variables",
    "B": "It is the square root of the correlation coefficient",
    "C": "It measures the proportion of variation in one variable explained by the other",
    "D": "It is always negative for inverse relationships"
  },
  "answer": "C"
},
    {
  "number": 355,
  "text": "Which of the following best describes a 'basic standard' within the context of budgeting?",
  "type": "mcq",
  "choices": {
    "A": "A standard which is kept unchanged over a period of time",
    "B": "A standard which is based on current price levels",
    "C": "A standard set at an ideal level, which makes no allowance for normal losses, waste and machine downtime",
    "D": "A standard which assumes an efficient level of operation, but which includes allowances for factors such as normal loss, waste and machine downtime"
  },
  "answer": "A"
},
    {
  "number": 356,
  "text": "Which TWO of the following statements about budgets and standards are true?",
  "type": "multi-select",
  "choices": {
    "A": "Budgets can be used in situations where output cannot be measured, but standards cannot be used in such situations",
    "B": "Budgets can include allowances for inefficiencies in operations, but standards use performance targets which are attainable under the most favourable conditions",
    "C": "Budgets are used for planning purposes, standards are used only for control purposes",
    "D": "Standards which remain unaltered for long periods of time are referred to as basic standards"
  },
  "answer": [
    "A",
    "D"
  ]
},
    {
  "number": 357,
  "text": "Which one of the following best defines standard costing in a system of budgeting?",
  "type": "mcq",
  "choices": {
    "A": "all activities are examined without reference to history each year",
    "B": "output level and costs are predetermined, actual results then compared with these predetermined costs and variances analysed",
    "C": "actual costs are compared with predetermined costs for the level of activity",
    "D": "costs are assigned to a manager in order that controllable and non-controllable costs are accounted for"
  },
  "answer": "C"
},
    {
  "number": 358,
  "text": "When considering setting standards for costing, which of the following would NOT be appropriate?",
  "type": "mcq",
  "choices": {
    "A": "The normal level of activity should always be used for absorbing overheads",
    "B": "Average prices for materials should be used, encompassing any discounts that are regularly available",
    "C": "The labour rate used will be the rate at which the labour is paid",
    "D": "Average material usage should be established based on generally-accepted working practices"
  },
  "answer": "C"
},
    {
  "number": 359,
  "text": "Which of the following statements is/are true regarding standard costing and total quality management (TQM)? (1) They focus on assigning responsibility solely to senior managers. (2) They work well in rapidly changing environments.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 360,
  "text": "Which of the following statements is/are true regarding the material mix variance? (1) A favourable total mix variance would suggest that a higher proportion of a cheaper material is being used instead of a more expensive one. (2) A favourable total mix variance will usually result in a favourable material yield variance.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "Both (1) and (2)",
    "C": "(2) only",
    "D": "Neither (1) nor (2)"
  },
  "answer": "A"
},
    {
  "number": 361,
  "text": "Which of the following concerning a labour planning variance is true?",
  "type": "mcq",
  "choices": {
    "A": "A labour planning variance will always be adverse if actual labour rates increase",
    "B": "A labour planning variance will be caused by a manager changing the labour mix during the year",
    "C": "A labour planning variance will be caused by an unexpected government policy to increase labour rates",
    "D": "A labour planning variance will always lead to a variable overhead planning variance"
  },
  "answer": "C"
},
    {
  "number": 362,
  "text": "Which of the following statements is/are true regarding the materials yield variance? (1) An adverse total yield variance would suggest that less output has been achieved for a given input. (2) A favourable total mix variance will usually result in an adverse material yield variance.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "Both (1) and (2)",
    "C": "(2) only",
    "D": "Neither (1) nor (2)"
  },
  "answer": "B"
},
    {
  "number": 363,
  "text": "Product GX consists of mix of materials J, K and L. Standard: J 5kg at $4, K 2kg at $12, L 3kg at $8. March: produced 3,000 units, actual usage: J 13,200kg, K 6,500kg, L 9,300kg. What was the materials yield variance?",
  "type": "mcq",
  "choices": {
    "A": "$6,800 favourable",
    "B": "$6,800 adverse",
    "C": "$1,000 favourable",
    "D": "$1,000 adverse"
  },
  "answer": "A"
},
    {
  "number": 364,
  "text": "JC Ltd mixes three materials for chemical SGR. Standard for 100kg: A 50kg at $10, B 40kg at $5, C 20kg at $9. October: produced 23,180kg using A 13,200kg, B 7,600kg, C 5,600kg. What is total material mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$1,984 adverse",
    "B": "$7,216 adverse",
    "C": "$9,200 adverse",
    "D": "$16,416 adverse"
  },
  "answer": "C"
},
    {
  "number": 365,
  "text": "Mr. Green makes salads. Standard plate: 30g lettuce ($0.2/kg), 50g peppers ($0.4/kg), 80g beetroot ($0.8/kg). July: 1,500 plates with 62,000g lettuce, 81,000g peppers, 102,000g beetroot. What is total favourable material mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$9.50",
    "B": "$10.25",
    "C": "$11.41",
    "D": "$12.50"
  },
  "answer": "C"
},
    {
  "number": 366,
  "text": "Same data as Q174. What is total material yield variance?",
  "type": "mcq",
  "choices": {
    "A": "$2.8125 favourable",
    "B": "$2.8125 adverse",
    "C": "$2,812.5 favourable",
    "D": "$2,812.5 adverse"
  },
  "answer": "B"
},
    {
  "number": 367,
  "text": "A company has a process for producing 9 litres output: D 4 litres at $9, E 3.5 litres at $5, F 2.5 litres at $2. Standard loss 10% of inputs. Actual inputs: D 4,300 litres at $9, E 3,600 litres at $5.50, F 2,100 litres at $2.20. Actual output 9,100 litres. What is total material mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$2,400 adverse",
    "B": "$2,400 favourable",
    "C": "$3,970 adverse",
    "D": "$3,970 favourable"
  },
  "answer": "A"
},
    {
  "number": 368,
  "text": "Operation B has standard time 15 minutes, standard rate $10 per hour. Budget for 350 operations. Standard time should have been 12 minutes due to new machinery. Actual: 370 operations in 80 hours, paid $850. The operational labour efficiency variance was:",
  "type": "mcq",
  "choices": {
    "A": "$60 adverse",
    "B": "$75 favourable",
    "C": "$100 adverse",
    "D": "$125 adverse"
  },
  "answer": "A"
},
    {
  "number": 369,
  "text": "Bloom Limited press story: maintained market share despite market size increase of 10%. Forced to reduce prices by $1.50 per bunch on budget volume of 12,000 bunches. Standard variable cost $20, standard contribution $5. What is the adverse sales price variance?",
  "type": "mcq",
  "choices": {
    "A": "$12,000",
    "B": "$15,000",
    "C": "$18,000",
    "D": "$21,000"
  },
  "answer": "C"
},
    {
  "number": 370,
  "text": "Same data as Q178. What is the favourable sales volume variance?",
  "type": "mcq",
  "choices": {
    "A": "$6,000",
    "B": "$12,000",
    "C": "$18,000",
    "D": "$24,000"
  },
  "answer": "A"
},
    {
  "number": 371,
  "text": "Yellow sells type A and B squash balls. Standard contribution: A $4, B $5. Budget: 5 A for every 3 B. Actual sales: 240,000 balls (20,000 higher than budget), including 200,000 of type A. What is the adverse sales mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$30,000",
    "B": "$40,000",
    "C": "$50,000",
    "D": "$60,000"
  },
  "answer": "C"
},
    {
  "number": 372,
  "text": "Same data as Q180. What is the favourable sales quantity variance?",
  "type": "mcq",
  "choices": {
    "A": "$67,500",
    "B": "$77,500",
    "C": "$87,500",
    "D": "$97,500"
  },
  "answer": "C"
},
    {
  "number": 373,
  "text": "Jones' absorption costing report includes sales mix variance. Data: Product X: Selling price $6, Variable cost $1, Fixed cost $2, Standard net profit $3. Product Y: Selling price $12, Variable cost $1, Fixed cost $3, Standard net profit $8. July budget: X 3,000 units, Y 6,000 units. Actual: X 2,000 units, Y 8,000 units. Which best gives the favourable sales mix variance?",
  "type": "mcq",
  "choices": {
    "A": "$8,000",
    "B": "$5,333",
    "C": "$4,000",
    "D": "$2,667"
  },
  "answer": "D"
},
    {
  "number": 374,
  "text": "Information for three products: Product X: Demand 1,000, Selling price $15, Profit $2. Product Y: Demand 2,000, Selling price $20, Profit $5. Product Z: Demand 3,000, Selling price $30, Profit $2. Actual sales: X 1,100 units ($17,050 revenue, $3,080 profit), Y 2,050 units ($38,950 revenue, $10,455 profit), Z 2,800 units ($86,800 revenue, $6,160 profit). What is the sales quantity variance?",
  "type": "mcq",
  "choices": {
    "A": "$150 adverse",
    "B": "$50 favourable",
    "C": "$1,208 adverse",
    "D": "$1,695 favourable"
  },
  "answer": "A"
},
    {
  "number": 375,
  "text": "Which of the following statements are true regarding material price planning variances? (1) The publication of material price planning variances should always lead to automatic updates of standard costs. (2) The causes of material price planning variances do not need to be investigated by managers at any level in the organisation.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 376,
  "text": "Leaf Limited: market share improved 2% to 20%, overall market contracted by 5%. Budgeted sales 504,000 units, standard contribution $12 per unit. What is the level of actual sales?",
  "type": "mcq",
  "choices": {
    "A": "Two percentage points up on budget at 510,080 units",
    "B": "Three percent down overall on budget at 488,880 units",
    "C": "Three percent up on budget at 519,120 units",
    "D": "Up by 5.55% to 532,000 units"
  },
  "answer": "D"
},
    {
  "number": 377,
  "text": "Same data as Q185. The sales market size variance is:",
  "type": "mcq",
  "choices": {
    "A": "$1,680,000 favourable",
    "B": "$1,680,000 adverse",
    "C": "$302,400 adverse",
    "D": "$302,400 favourable"
  },
  "answer": "C"
},
    {
  "number": 378,
  "text": "A company holds 2% market share, total market demand constant at 250,000 machines. Budgeted selling price $10,000, standard contribution 10% of selling price. Actual sales volume 5,600 machines. Total market demand rose to 300,000 units. What is the market share variance?",
  "type": "mcq",
  "choices": {
    "A": "$200,000 favourable",
    "B": "$400,000 adverse",
    "C": "$600,000 favourable",
    "D": "$1,000,000 adverse"
  },
  "answer": "B"
},
    {
  "number": 379,
  "text": "PlasBas Co: standard price $0.50 per kg, standard usage 0.2kg per basket. Budgeted production 80,000 baskets. Due to government incentives, standard price expected to reduce to $0.40. Actual price $0.42, 100,000 baskets manufactured using 20,000 kg. What is the materials operational price variance?",
  "type": "mcq",
  "choices": {
    "A": "$2,000 favourable",
    "B": "$1,600 favourable",
    "C": "$400 adverse",
    "D": "$320 adverse"
  },
  "answer": "C"
},
    {
  "number": 380,
  "text": "A profit centre manager claims poor performance due to external factors. Budget: Sales volume 500 units, revenue $50,000, material cost $10,000. Actual: Sales volume 300 units, revenue $28,500, material cost $6,500. Market expert notes: entire market decreased 25%, selling prices fell 10%, suppliers lowered prices 5%. After adjusting for external factors, in which category/categories is there evidence of poor performance?",
  "type": "mcq",
  "choices": {
    "A": "Material cost only",
    "B": "Sales volume and sales price",
    "C": "Sales price and material cost",
    "D": "Sales price only"
  },
  "answer": "D"
},
    {
  "number": 381,
  "text": "Which of the following statement(s) is/are true regarding planning and operational variances? (1) Planning and operational variances are calculated when it is necessary to assess a manager on results that are within his/her control. (2) Revised standards are required because variances may arise partly due to an unrealistic budget, and not solely due to operational factors.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 382,
  "text": "The finance director of Paint Mixers Ltd produced variance results: Jan: Material price $3,000 A, Mix $2,000 A, Yield $4,000 A. Feb: Price $2,000 A, Mix $750 A, Yield $2,000 A. Mar: Price $1,000 A, Mix $100 F, Yield $50 F. Which interpretation is NOT correct?",
  "type": "mcq",
  "choices": {
    "A": "The purchasing manager should be able to threaten to switch suppliers to get better deals",
    "B": "The materials mix variance is entirely under the control of the production manager",
    "C": "The favourable yield variance in March could be the result of operational efficiency",
    "D": "The responsibility for the initial poor performance must be borne by both the purchasing manager and the production manager"
  },
  "answer": "B"
},
    {
  "number": 383,
  "text": "Which of the following statement(s) regarding the use of standard costs in rapidly changing environments is/are true? (1) Variance analysis results will take into account important criteria such as customer satisfaction or quality of production. (2) Achieving standards is suitable in most modern manufacturing environments.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "C"
},
    {
  "number": 384,
  "text": "Why would a company want to encourage the use of non-financial performance indicators?",
  "type": "mcq",
  "choices": {
    "A": "To encourage short-termism",
    "B": "To look at the fuller picture of the business",
    "C": "To enable results to be easily manipulated to the benefit of the manager",
    "D": "To prevent goal congruence"
  },
  "answer": "B"
},
    {
  "number": 385,
  "text": "Quotations have been sent to clients either late or containing errors. The department is understaffed with many new staff. Which ONE non-financial performance indicator would NOT be appropriate to monitor and improve performance?",
  "type": "mcq",
  "choices": {
    "A": "Percentage of quotations found to contain errors when checked",
    "B": "Percentage of quotations not issued within company policy of three working days",
    "C": "Percentage of department's quota of staff actually employed",
    "D": "Percentage of budgeted number of quotations actually issued"
  },
  "answer": "D"
},
    {
  "number": 386,
  "text": "Which TWO of the following key performance indicators would be appropriate to assess the customer perspective within a traditional balanced scorecard?",
  "type": "multi-select",
  "choices": {
    "A": "Customer profitability analysis",
    "B": "Customer retention rates",
    "C": "Customer satisfaction ratings",
    "D": "Customer ordering processing times"
  },
  "answer": [
    "B",
    "C"
  ]
},
    {
  "number": 387,
  "text": "HH plc monitors the percentage of total sales that derives from products developed in the last year. How would this be classified in the balanced scorecard?",
  "type": "mcq",
  "choices": {
    "A": "Financial perspective",
    "B": "Customer perspective",
    "C": "Internal business process perspective",
    "D": "Innovation and learning perspective"
  },
  "answer": "D"
},
    {
  "number": 388,
  "text": "Which of the following is the best measure of quality to be included within a building block model in a rapidly growing clothing business?",
  "type": "mcq",
  "choices": {
    "A": "Number of returns in the month",
    "B": "Number of faulty goods returned as a percentage of number of orders received in the month",
    "C": "Average customer satisfaction rating where customers were asked a range of questions including quality, delivery and customer service",
    "D": "Number of faulty goods returned as a percentage of deliveries made in the month"
  },
  "answer": "D"
},
    {
  "number": 389,
  "text": "Companies A and B are both involved in retailing. A: Sales revenue $50,000, Profit $10,000, Capital employed $50,000. B: Sales revenue $200,000, Profit $10,000, Capital employed $50,000. Which statement is true?",
  "type": "mcq",
  "choices": {
    "A": "The profit margin of both companies is the same",
    "B": "Company B is generating more profit from every $1 of asset employed than Company A",
    "C": "Company B is using its assets more efficiently",
    "D": "Company B is controlling its costs better than Company A"
  },
  "answer": "C"
},
    {
  "number": 390,
  "text": "Which TWO of the following matters would the manager of an investment centre have the power to make decisions over?",
  "type": "multi-select",
  "choices": {
    "A": "Granting credit to customers",
    "B": "Settling inter-departmental disputes",
    "C": "The apportionment of head office costs",
    "D": "Inventory carrying decisions"
  },
  "answer": [
    "A",
    "D"
  ]
},
    {
  "number": 391,
  "text": "Binny Co has annual sales $960,000, current ratio 3.2:1. All sales for cash, marked up 50% on cost. Average cash balance $40,000, inventory holding period 90 days (360 days/year). What is Binny Co's quick ratio (acid test ratio)?",
  "type": "mcq",
  "choices": {
    "A": "0.64",
    "B": "0.53",
    "C": "0.80",
    "D": "1.56"
  },
  "answer": "A"
},
    {
  "number": 392,
  "text": "Oxco has two divisions A and B. Division A makes component for air conditioning units sold only to Division B. Marginal cost $100, transfer price $165, total production 2,200 units, specific fixed costs $10,000. Cold Co offers to sell component to Division B for $140. If Division B accepts, Division A shuts down. What is impact on group profits per year?",
  "type": "mcq",
  "choices": {
    "A": "Increase of $65,000",
    "B": "Decrease of $78,000",
    "C": "Decrease of $88,000",
    "D": "Increase of $55,000"
  },
  "answer": "B"
},
    {
  "number": 393,
  "text": "Dust Co has divisions A and B. Division A: Capital required $32.6m, Sales $14.4m, Operating profit margin 30%, Cost of capital 10%, Current ROI 15%. Division B: Capital $22.2m, Sales $8.8m, Operating profit margin 24%, Cost of capital 10%, Current ROI 9%. If residual income is used for investment decisions, what decision is each division likely to make?",
  "type": "mcq",
  "choices": {
    "A": "Both would invest",
    "B": "Neither would invest",
    "C": "Division A would invest, Division B would not",
    "D": "Division A would not invest, Division B would invest"
  },
  "answer": "C"
},
    {
  "number": 394,
  "text": "JB Ltd has divisions A and B. Division A sells product externally at $12, variable cost $8, fixed cost $3. Maximum capacity 10,000 units. Division B wants 500 units. If transferred internally, packaging saving $1.50 per unit. What transfer price per unit should Division A quote to maximise group profit?",
  "type": "mcq",
  "choices": {
    "A": "$8.00",
    "B": "$9.50",
    "C": "$10.50",
    "D": "$12.00"
  },
  "answer": "C"
},
    {
  "number": 395,
  "text": "Pro is a division of Mo. Statement of financial position shows net assets $4,500m. Management accounts: Revenue $3,500m, Cost of sales $1,800m, Local administration $250m, IT costs $50m, Distribution $80m, Central administration $30m, Interest charges $90m, Net profit $1,200m. Cost of capital 12%. What is the division's residual income (to nearest $m)?",
  "type": "mcq",
  "choices": {
    "A": "$660m",
    "B": "$690m",
    "C": "$830m",
    "D": "$860m"
  },
  "answer": "C"
},
    {
  "number": 396,
  "text": "Summary financial statements for a division: Statement of profit or loss: Operating profit $500, Interest paid $?, Profit before tax $? Statement of financial position: Non-current assets $2,400, Current assets $1,000, Total assets $3,400, Divisional equity $1,500, Long-term borrowings $900, Current liabilities $1,000. Cost of capital 11%, interest on long-term loans 9%. Capital structure decisions by central management. What is divisional return on capital employed (ROCE)?",
  "type": "mcq",
  "choices": {
    "A": "18.2%",
    "B": "20.8%",
    "C": "22.5%",
    "D": "25.0%"
  },
  "answer": "A"
},
    {
  "number": 397,
  "text": "Same data as Q205. What is the divisional residual income (RI)?",
  "type": "mcq",
  "choices": {
    "A": "-$84,000",
    "B": "$180,000",
    "C": "$236,000",
    "D": "$284,000"
  },
  "answer": "C"
},
    {
  "number": 398,
  "text": "Pro is a division of Mo (same data as Q204 but with closing net assets $4,890m). What is the divisional ROI (1 d.p)?",
  "type": "mcq",
  "choices": {
    "A": "26.5%",
    "B": "27.2%",
    "C": "28.0%",
    "D": "29.1%"
  },
  "answer": "C"
},
    {
  "number": 399,
  "text": "At end of 20X1, investment centre has net assets $1m, operating profit $190,000. A machine with carrying value $40,000 was sold at start of year for $50,000 and replaced with machine costing $250,000. No depreciation in year of purchase/disposal. ROI calculated on closing net assets. What is the ROI for the year (to 1 decimal place)?",
  "type": "mcq",
  "choices": {
    "A": "18.5%",
    "B": "19.8%",
    "C": "20.5%",
    "D": "21.2%"
  },
  "answer": "B"
},
    {
  "number": 400,
  "text": "Division B makes units transferred to other divisions. Has no spare capacity, sells externally and internally. Which statement(s) regarding minimum transfer price is/are true? (1) Any price above variable cost will generate positive contribution and will therefore be accepted. (2) The division will need to give up a unit sold externally; transfer is only worthwhile if income is greater than net income of external sale.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "B"
},
    {
  "number": 401,
  "text": "Perrin Co has divisions A and B. Division A has limited skilled labour, operating at full capacity making product Y. Asked to supply product X to division B. Division B currently sources externally for $700. Cost cards: Product Y: Selling price $600, Direct materials ($50/kg) $200, Direct labour ($20/hr) $80, Apportioned fixed overheads ($15/hr) $60. Product X: Direct materials $150, Direct labour $120, Apportioned fixed overheads $90. Using opportunity cost approach, what is minimum transfer price?",
  "type": "mcq",
  "choices": {
    "A": "$270",
    "B": "$750",
    "C": "$590",
    "D": "$840"
  },
  "answer": "B"
},
    {
  "number": 402,
  "text": "TM plc sells components internally to subsidiary RM Ltd and externally. External market price $24.00, contribution 40% of sales. For external sales, variable costs include $1.50 for distribution (not incurred on internal sales). TM has sufficient capacity. To maximise group profit, at what unit price should component be transferred?",
  "type": "mcq",
  "choices": {
    "A": "$12.90",
    "B": "$14.40",
    "C": "$15.60",
    "D": "$16.80"
  },
  "answer": "A"
},
    {
  "number": 403,
  "text": "Which of the following statements regarding measurement of performance in not-for-profit organisations is/are true? (1) Output does not usually have a market value, and it is therefore more difficult to measure effectiveness. (2) Control over the performance can only be satisfactorily achieved by assessments of 'value for money'.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 404,
  "text": "Def Co provides accounting services to government. Targets: (1) Cutting departmental expenditure by 5% (2) Increasing chargeable hours to 6.2 per day (3) Customer satisfaction score of 4.7 or above. Which targets assess economy, efficiency and effectiveness?",
  "type": "mcq",
  "choices": {
    "A": "1=Economy, 2=Efficiency, 3=Effectiveness",
    "B": "1=Efficiency, 2=Economy, 3=Effectiveness",
    "C": "1=Economy, 2=Effectiveness, 3=Efficiency",
    "D": "1=Efficiency, 2=Effectiveness, 3=Economy"
  },
  "answer": "A"
},
    {
  "number": 405,
  "text": "A government is assessing hospitals by survival rates for heart bypass operations and 'cost per successfully treated patient'. Which of the three E's in the Value For Money framework is NOT measured here?",
  "type": "mcq",
  "choices": {
    "A": "Economy",
    "B": "Effectiveness",
    "C": "Efficiency",
    "D": "Externality"
  },
  "answer": "A"
},
    {
  "number": 406,
  "text": "Which of the following statements regarding multiple objectives in not-for-profit organisations is/are correct? (1) They ensure goal congruence between stakeholders. (2) Compromise between objectives can be problematic.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Both (1) and (2)",
    "D": "Neither (1) nor (2)"
  },
  "answer": "B"
},
    {
  "number": 407,
  "text": "A government is assessing schools by percentage of students passing five exams or more. Which of the three Es is being measured?",
  "type": "mcq",
  "choices": {
    "A": "Economy",
    "B": "Efficiency",
    "C": "Effectiveness",
    "D": "Expertise"
  },
  "answer": "A"
},
    {
  "number": 408,
  "text": "Which of the following statement(s) about measuring effectiveness in not-for-profit organisations is/are true? (1) Effectiveness targets cannot usually be expressed financially, and therefore non-financial targets must be used. (2) The effective level of achievement could be measured by comparing actual performance against target.",
  "type": "mcq",
  "choices": {
    "A": "(1) only",
    "B": "(2) only",
    "C": "Neither (1) nor (2)",
    "D": "Both (1) and (2)"
  },
  "answer": "D"
},
    {
  "number": 409,
  "text": "The senior manager is suspicious that profit performance may have been overstated. Which would be a plausible explanation of an overstatement of profit?",
  "type": "mcq",
  "choices": {
    "A": "Delaying payments to payables",
    "B": "Shortening the useful economic life of a non-current asset",
    "C": "Overstatement of a prepayment",
    "D": "Overstatement of an accrual"
  },
  "answer": "C"
},
    {
  "number": 410,
  "text": "Which of the following statements regarding standard setting is correct?",
  "type": "mcq",
  "choices": {
    "A": "Imposed standards are more likely to be achieved",
    "B": "Managers across the organisation should be targeted using the same standards",
    "C": "Standards should be set at an ideal level with no built in stretch",
    "D": "Participation in standard setting is more motivating than where standards are imposed"
  },
  "answer": "D"
},
    {
  "number": 411,
  "text": "When setting performance measurement targets, which would assist in overcoming problems of short-termism and manipulation of results?",
  "type": "mcq",
  "choices": {
    "A": "Rewards should be linked to a wider variety of performance measures including some non-financial measures",
    "B": "Managers should only be rewarded for the results achieved in their own departments",
    "C": "Any capital investment decision should be judged using the payback method",
    "D": "Setting targets involving overall company performance will be more motivating for managers"
  },
  "answer": "A"
},
    {
  "number": 412,
  "text": "Which of the following statements is true in relation to stakeholders?",
  "type": "mcq",
  "choices": {
    "A": "The aim of all performance measures should be to increase short term profit",
    "B": "The only interest of the government is that companies pay their taxes",
    "C": "Shareholders will be looking for increasing dividends and increased share price",
    "D": "Only internal stakeholders need to be considered by companies"
  },
  "answer": "C"
}
  ],
  AA: [
    {
      number: 1,
      text: "Which of the following should be included in the annual report regarding the work of the audit committee?",
      type: "mcq",
      choices: {
        A: "Responsibility for preparing the annual report and financial statements",
        B: "Significant issues considered relating to the financial statements",
        C: "A description of the principal risks the company faces",
        D: "The process used to make appointments to the board"
      },
      answer: "B",
      explanation: "The annual report should describe the work of the audit committee including significant issues considered relating to the financial statements."
    },
    {
      number: 2,
      text: "Which of the following options correctly describes the deficiency relating to NEDs' remuneration and makes a valid recommendation for improvement?",
      type: "mcq",
      choices: {
        A: "Deficiency: Compromises NED independence | Recommendation: NEDs should be remunerated on the same basis as the executive team",
        B: "Deficiency: Compromises the motivation of NEDs | Recommendation: NEDs' remuneration should be tied to profit targets",
        C: "Deficiency: Compromises NED independence | Recommendation: NEDs' remuneration should be a set amount based on time committed",
        D: "Deficiency: Compromises the motivation of NEDs | Recommendation: NEDs' remuneration should be linked to individual performance"
      },
      answer: "C",
      explanation: "NEDs' remuneration should not be tied to the performance of Sistar Co as this can compromise independence. NEDs' remuneration should be based on the time committed to carry out the role."
    },
    {
      number: 3,
      text: "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co. What is the most appropriate response to the suggestion that Jane Leaf takes on the role of Engagement Quality Reviewer?",
      type: "mcq",
      choices: {
        A: "Jane Leaf could take the review role immediately",
        B: "Jane Leaf could take the review role immediately but additional safeguards will be required",
        C: "Jane Leaf should not serve as the Engagement Quality Reviewer for a period of at least five years",
        D: "Bark & Co will need to consider resigning as auditor of Foliage Co"
      },
      answer: "C",
      explanation: "As Foliage Co is a listed company, Jane Leaf should not serve as the Engagement Quality Reviewer until a cooling-off period of five years has passed."
    },
    {
      number: 4,
      text: "Select which threat to objectivity is created by the information obtained from the review of the correspondence file (The partner and the finance director have known each other socially for many years).",
      type: "mcq",
      choices: {
        A: "Advocacy",
        B: "Familiarity",
        C: "Self-interest"
      },
      answer: "B",
      explanation: "The social relationship gives rise to a familiarity threat."
    },
    {
      number: 5,
      text: "Which is the MOST appropriate response with respect to the discount offered by Milberry Co to the audit team?",
      type: "mcq",
      choices: {
        A: "The discount may be accepted as it is the same as that offered to the client's employees",
        B: "The discount should be rejected as it is unlikely to be a trivial monetary amount",
        C: "The discount should be rejected as gifts or hospitality are not acceptable per the ACCA Code of Ethics and Conduct",
        D: "Audit manager approval must be obtained before the discount is accepted"
      },
      answer: "B",
      explanation: "A discount of 40% is unlikely to be a trivial sum and therefore the most appropriate option is to reject the discount."
    },
    {
      number: 6,
      text: "Which of the following statements is TRUE in respect of the audit of Winnie Co?",
      type: "mcq",
      choices: {
        A: "The audit engagement partner must be rotated",
        B: "Providing the additional services for Winnie Co will create a confidentiality threat",
        C: "Payroll and bookkeeping services cannot be provided to an external audit client",
        D: "Providing advice on accounting policies is acceptable as long as the client is responsible for choosing the specific policies used"
      },
      answer: "D",
      explanation: "Advice on accounting policies is acceptable as long as the client is responsible for making decisions on which accounting policies to use."
    },
    {
      number: 7,
      text: "Select whether the following matters in respect of board composition represent a corporate governance strength or deficiency (Ola Osbourne is the chair and chief executive).",
      type: "mcq",
      choices: {
        A: "Strength",
        B: "Deficiency"
      },
      answer: "B",
      explanation: "The chair and chief executive roles should be performed by different people to avoid too much power being held by one person."
    },
    {
      number: 8,
      text: "Which of the following statements correctly explains the possible threats to Horti & Co's independence and recommends an appropriate safeguard in relation to the audit of Tree Co?",
      type: "mcq",
      choices: {
        A: "1,2 and 3",
        B: "1 and 2 only",
        C: "2 only",
        D: "3 only"
      },
      answer: "D",
      explanation: "A self-interest threat would arise due to the personal relationship between the audit engagement partner and finance director. The partner should be removed."
    },
    {
      number: 9,
      text: "Which of the following statements is TRUE in respect of Goofy Co's request for the tax advice fee to be based on the tax saving achieved?",
      type: "mcq",
      choices: {
        A: "The fee basis is acceptable as it does not relate to the audit fee",
        B: "The fee basis is not acceptable as contingent fee arrangements are not acceptable for any accountancy work",
        C: "The fee basis is acceptable if both NAB & Co and Goofy Co agree to it",
        D: "The fee basis will not be acceptable as the fee is significant to the firm"
      },
      answer: "D",
      explanation: "Contingent fee arrangements are not allowed for non-assurance services provided to audit clients if the fee will be material (significant) to the firm."
    },
    {
      number: 10,
      text: "Audit engagements always provide reasonable assurance. Select whether this statement is true or false.",
      type: "mcq",
      choices: {
        A: "True",
        B: "False"
      },
      answer: "A",
      explanation: "Audits are required by ISAs to provide reasonable assurance."
    },
    {
      number: 11,
      text: "Which of the following is the LEAST significant audit risk to be considered when planning the audit of Veryan Co?",
      type: "mcq",
      choices: {
        A: "Non-compliance with laws and regulations",
        B: "Understatement of trade payables",
        C: "Adequacy of provisions and contingent liabilities",
        D: "Foreign currency transactions"
      },
      answer: "B",
      explanation: "Trade payables may be a risk for certain clients but in relation to the other risks stated (regulation, provisions, foreign currency), it is unlikely to be a significant risk for an oil & gas company."
    },
    {
      number: 12,
      text: "Which of the following statements is TRUE in relation to Flute Co being a new audit client of Woodwind & Co?",
      type: "mcq",
      choices: {
        A: "Inherent risk is increased as the firm has no cumulative knowledge or experience of Flute Co",
        B: "The auditor may not be competent to perform the audit and should consider resigning",
        C: "The auditor should contact the previous auditor to ask if there are any professional matters of which they should be aware",
        D: "The auditor will need to increase the quality management procedures performed due to the increased risk"
      },
      answer: "D",
      explanation: "Increased audit risk arising from increased detection risk will result in increased quality management procedures such as the need for an engagement quality review."
    },
    {
      number: 13,
      text: "Calculate the gross profit margin for Hawk Co for 20X5 and 20X4 using the financial information provided (20X5 GP: 5.5, Rev: 32.5; 20X4 GP: 7, Rev: 27).",
      type: "mcq",
      choices: {
        A: "17% and 26%",
        B: "26% and 17%",
        C: "32% and 26%",
        D: "26% and 32%"
      },
      answer: "A",
      explanation: "Gross profit margin = gross profit/revenue × 100. 20X5: (5.5/32.5)*100 = 16.9% (17%). 20X4: (7/27)*100 = 25.9% (26%)."
    },
    {
      number: 14,
      text: "Which TWO of the procedures included in the audit plan describe substantive procedures to confirm the completeness and accuracy of Swandive Co's payroll expense? (1. Recalculate gross/net pay, 2. Proof-in-total, 3. Review authorization, 4. Observe clock-in)",
      type: "multi-select",
      choices: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      answer: ["A", "B"],
      explanation: "Procedures 1 (recalculate gross/net pay) and 2 (proof-in-total) are substantive procedures. Procedures 3 and 4 are tests of control."
    },
    {
      number: 15,
      text: "Which of the following control objectives is addressed by 'Finance director reviews the bank transfer list and signs to authorise payments'?",
      type: "mcq",
      choices: {
        A: "To ensure payroll is classified correctly",
        B: "To ensure only valid employees are paid",
        C: "To ensure employees are paid for the correct hours",
        D: "To ensure employee's salaries have been calculated correctly"
      },
      answer: "B",
      explanation: "By reviewing the payment list, the finance director will be able to identify any unusual or duplicate names, ensuring only valid employees are paid."
    },
    {
      number: 16,
      text: "Which of the following is NOT an objective of Halestorm Co's sales and despatch system?",
      type: "mcq",
      choices: {
        A: "To ensure that orders are only accepted if goods are available",
        B: "To ensure that all orders are recorded completely and accurately",
        C: "To ensure discounts received are accounted for completely and accurately",
        D: "To ensure that all goods despatched are correctly invoiced"
      },
      answer: "C",
      explanation: "Discounts received relate to the purchases system, not the sales and despatch system."
    },
    {
      number: 17,
      text: "Which TWO of the following control objectives are addressed by the work of the asset expenditure committee?",
      type: "multi-select",
      choices: {
        A: "To ensure assets purchased are authorised",
        B: "To ensure assets purchased are for a valid business use",
        C: "To ensure the non-current asset register is complete",
        D: "To ensure assets purchased represent value for money",
        E: "To ensure all assets purchased are given a unique serial number"
      },
      answer: ["B", "D"],
      explanation: "The committee discusses requirements and approves requisitions based on budget and acceptable quotations, focusing on valid business use and value for money."
    },
    {
      number: 18,
      text: "Which of the following supplier balances would indicate a high risk in relation to the COMPLETENESS of the liability recorded at the year end?",
      type: "mcq",
      choices: {
        A: "A supplier with a high balance at the year end and with a low volume of transactions during the year",
        B: "A supplier with a low balance at the year end and with a high volume of transactions during the year",
        C: "A supplier with a low balance at the year end and with a low volume of transactions during the year",
        D: "A supplier with a high balance at the year end and with a high volume of transactions during the year"
      },
      answer: "B",
      explanation: "A low year-end balance but high transaction volume may indicate that not all liabilities have been recorded at the year-end date."
    },
    {
      number: 19,
      text: "Which THREE of the following items should you select for testing when performing supplier statement reconciliations?",
      type: "multi-select",
      choices: {
        A: "Suppliers with material balances at the year end",
        B: "Suppliers which have a high volume of business with Poppy Co",
        C: "Major suppliers of Poppy Co with nil balances at the year end",
        D: "Major suppliers of Poppy Co where the statement agrees to the balance on the list of individual suppliers"
      },
      answer: ["A", "B", "C"],
      explanation: "Where completeness is the key assertion, the sample should include suppliers with material balances, high volume of business, and major suppliers with nil balances (to test for understatement)."
    },
    {
      number: 20,
      text: "Which TWO of the following audit procedures would test for OVERSTATEMENT of Lancaster Co's non-current assets?",
      type: "multi-select",
      choices: {
        A: "Agree disposals recorded in the non-current asset register to the bank ledger account and sales invoice",
        B: "Physically inspect a sample of assets selected from the non-current asset register",
        C: "Inspect a sample of assets found at a location and agree to the non-current asset register",
        D: "Inspect the condition of assets held to determine the need for any impairment"
      },
      answer: ["B", "D"],
      explanation: "Selecting assets from the register and inspecting them tests existence (overstatement). Assessing impairment tests valuation (overstatement if impaired but not written down)."
    },
    {
      number: 21,
      text: "Which TWO of the following statements is TRUE in relation to the audit of Hightown (a local government authority)?",
      type: "multi-select",
      choices: {
        A: "As Hightown is a local government authority the risk of manipulation of the financial statements is lower",
        B: "Hightown requires an audit as it is funded by taxpayers",
        C: "The auditor's report of Hightown will not be publicly available once issued",
        D: "The audit of Hightown will take longer than the audit of a company",
        E: "The audit team should include staff with experience of public sector audits"
      },
      answer: ["B", "E"],
      explanation: "As it receives public money, an audit is required. The audit team should always be competent, so should include people with public sector experience."
    },
    {
      number: 22,
      text: "Which of the following would form part of the auditor's overall review of the financial statements? (1. Preconditions check, 2. Information reflected, 3. Working paper review, 4. Disclosure review)",
      type: "mcq",
      choices: {
        A: "1 and 2",
        B: "3 and 4",
        C: "1 and 3",
        D: "2 and 4"
      },
      answer: "D",
      explanation: "As part of the overall review, the auditor should assess whether information gathered during the audit and accounting policies are adequately reflected and disclosed."
    },
    {
      number: 23,
      text: "Which THREE of the issues identified could result in significant uncertainty over the going concern status of Oak Co? (1. Loss of customer, 2. Loan repayment, 3. Personnel left, 4. Supplier out of business, 5. Product unsuccessful, 6. Litigation)",
      type: "multi-select",
      choices: {
        A: "1", B: "2", C: "3", D: "4", E: "5", F: "6"
      },
      answer: ["B", "D", "E"],
      explanation: "If the loan is not renegotiated, loss of a major supplier, or poor results in a product line expected to account for 30% of revenue could have a significant impact on the company going forward."
    },
    {
      number: 24,
      text: "Which of the following statements best describes the auditor's responsibilities in respect of other information?",
      type: "mcq",
      choices: {
        A: "The auditor provides limited assurance over the completeness and accuracy of the other information",
        B: "The auditor must read the other information to ensure it is consistent with the financial statements and their knowledge of the entity obtained during the audit",
        C: "The auditor must audit the other information and obtain sufficient appropriate evidence that the other information is true and fair",
        D: "Other information only needs to be considered if it is made available at the start of the audit with the draft financial statements"
      },
      answer: "B",
      explanation: "The auditor must read the other information to ensure it is consistent with the financial statements and their knowledge of the entity. They do not audit it or provide assurance."
    },
    {
      number: 25,
      text: "Assuming the matter is considered material and Pacific's directors have refused to adjust the financial statements, what is the appropriate opinion to be issued?",
      type: "mcq",
      choices: {
        A: "Unmodified",
        B: "Qualified",
        C: "Adverse",
        D: "Disclaimer"
      },
      answer: "B",
      explanation: "The issue affects only receivables and is material but not pervasive. A qualified opinion is appropriate."
    },
    {
      number: 26,
      text: "Which of the issues identified during the audit is likely to lead to an adverse opinion on Paddington Co's financial statements?",
      type: "mcq",
      choices: {
        A: "Lawsuit",
        B: "Warranty provision",
        C: "Depreciation",
        D: "Intangible assets"
      },
      answer: "B",
      explanation: "Failure to recognise the warranty provision ($25m misstatement vs $29m profit) is likely to require an adverse opinion as the misstatement represents a substantial proportion of profit and is pervasive."
    },
    {
      number: 27,
      text: "Calculate the materiality level of the receivable (0.3 million) by reference to profit before income taxes ($7.5 million) and state whether it is material.",
      type: "mcq",
      choices: {
        A: "Material",
        B: "Not material"
      },
      answer: "A",
      explanation: "Materiality calculation: (0.3/7.5) * 100 = 4% of profit before income taxes, which is typically considered material."
    },
    {
      number: 28,
      text: "A written representation in respect of the warranty provision. This is because...",
      type: "mcq",
      choices: {
        A: "Is appropriate | The matter involves management judgement",
        B: "Is appropriate | The matter is not material",
        C: "Is not appropriate | The matter involves management judgement",
        D: "Is not appropriate | The matter is not material"
      },
      answer: "A",
      explanation: "The warranty provision is decided by management based on their experience and judgement. A written representation is appropriate as there are limited other procedures that would provide sufficient appropriate evidence."
    },
    {
      number: 29,
      text: "Which TWO of the following statements are TRUE with respect to the work performed by the expert?",
      type: "multi-select",
      choices: {
        A: "Daffy & Co must consider the competence and objectivity of the expert",
        B: "Daffy & Co must assess the expert's work to ensure it is appropriate for audit purposes",
        C: "Replaced: Experts are always required for valuations",
        D: "Replaced: Auditor must include Reliance statement",
        E: "Replaced: Audit fee is irrelevant"
      },
      answer: ["A", "B"],
      explanation: "ISA 500 requires consideration of the competence and objectivity of a management's expert and making sure the work is appropriate for audit purposes."
    },
    {
      number: 30,
      text: "ISA 560 Subsequent Events requires that auditors should perform audit procedures to identify subsequent events. The period covered by this review for Signal Co commenced on 1 April 20X5 (Year End). The auditor's report is due to be signed on 17 July 20X5. Which date is the end of the period covered by the subsequent events review?",
      type: "mcq",
      choices: {
        A: "7 July 20X5",
        B: "15 July 20X5",
        C: "17 July 20X5",
        D: "30 July 20X5"
      },
      answer: "C",
      explanation: "The correct answer is 17 July 20X5 as this is the date the auditor's report is due to be signed. Once the auditor's report has been signed, the auditor has no further responsibility to identify subsequent events."
    }
  ,
    {
  "number": 31,
  "text": "The board of directors of Sistar Co are concerned that they are not currently applying best practice...\n\nThe board is in the final stages of establishing the IA department. Select one option from each column which provides appropriate recommendations to improve the effectiveness and independence of the IA department. (Reports to: Finance director/Audit committee/Chief executive) (Head of IA: Maria Marquez/Paul Belling) (Remaining staff members: Appoint more senior staff with audit experience/No changes needed/All staff should be new to the company)",
  "type": "mcq",
  "choices": {
    "A": "Audit committee, Maria Marquez, Appoint more senior staff with audit experience",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "To ensure effectiveness of the internal audit function, it should report into the audit committee. Maria Marquez should be appointed as she has audit experience and is independent. More staff should be appointed with audit experience."
},
    {
  "number": 32,
  "text": "The board of directors of Sistar Co are concerned that they are not currently applying best practice...\n\nThe board has started to compile a list of tasks for the IA department. It has been agreed that the first assignment will be for IA to review Sistar Co's processes over asset expenditure to verify if the right items are purchased at an appropriate time and competitive price. What type of internal audit assignment does this represent?",
  "type": "mcq",
  "choices": {
    "A": "A value for money audit",
    "B": "A management audit",
    "C": "A financial audit",
    "D": "An IT audit"
  },
  "answer": "A",
  "explanation": "The assignment focuses on assessing the economy, efficiency and effectiveness of asset expenditure, which represents a value for money audit."
},
    {
  "number": 33,
  "text": "The board of directors of Sistar Co are concerned that they are not currently applying best practice...\n\nWhen deciding on the role of the IA department in undertaking operational audits, which TWO of the following should the team NOT be involved in?",
  "type": "multi-select",
  "choices": {
    "A": "Observing procedures carried out by Sistar Co's staff",
    "B": "Reperforming procedures documented in procedures manuals",
    "C": "Designing and implementing internal control procedures to address deficiencies",
    "D": "Reporting findings directly to the board of directors",
    "E": "Authorising transactions and performing reconciliations"
  },
  "answer": [
    "C",
    "E"
  ],
  "explanation": "Authorising transactions and performing reconciliations are control procedures. Internal audit should not design and implement internal control procedures as this creates a self-review threat."
},
    {
  "number": 34,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nWhich of the following is the LEAST appropriate response in relation to fee income received by Bark & Co from Foliage Co?",
  "type": "mcq",
  "choices": {
    "A": "Bark & Co should assess whether audit and non-audit fees would represent more than 15% of gross practice income for two consecutive years",
    "B": "If the recurring fees are likely to exceed 15% of annual practice income this year Bark will need to resign as auditors of Foliage Co",
    "C": "If the recurring fees are likely to exceed 15% of annual practice income this year, additional consideration should be given as to whether the taxation and audit-related services should be undertaken by the firm",
    "D": "If the fees do exceed 15% this should be disclosed to those charged with governance at Foliage Co"
  },
  "answer": "B",
  "explanation": "Resigning as auditor would only be required if all other options do not reduce the threat to an acceptable level."
},
    {
  "number": 35,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nWhat action should Kim Baum have taken when the possibility of employment with Foliage Co arose?",
  "type": "mcq",
  "choices": {
    "A": "Kim should have notified Bark & Co of the potential employment so he could be removed from the audit team",
    "B": "Kim should have declined the offer of employment",
    "C": "Kim should not have applied for employment with an audit client while employed by Bark & Co",
    "D": "Kim should have asked for permission from Bark & Co before applying for a job with Foliage Co"
  },
  "answer": "A",
  "explanation": "The ACCA Code of Ethics and Conduct requires individuals to notify the firm of the possibility of employment with an audit client so they can be removed from the audit team."
},
    {
  "number": 36,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nWhich ethical threat will be created when Kim Baum commences employment with the client and what action should be taken to manage the threat?",
  "type": "mcq",
  "choices": {
    "A": "Option A (Intimidation - The manager should not be allowed to take the role)",
    "B": "Option B (Familiarity - The composition of the audit team must be reviewed and changed)",
    "C": "Option C (Confidentiality - The manager should not be allowed to take the role)",
    "D": "Option D (Self-review - The composition of the audit team must be reviewed and changed)"
  },
  "answer": "B",
  "explanation": "There will be a familiarity threat because of Kim Baum's relationship with the audit team. The audit team composition must be reviewed and changed as appropriate."
},
    {
  "number": 37,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nSelect whether the following statements describe a rulebook approach or a conceptual framework approach to ethics. (Clearly defined laws for the auditor to follow)",
  "type": "mcq",
  "choices": {
    "A": "Rule book approach",
    "B": "Conceptual framework approach"
  },
  "answer": "A",
  "explanation": "Laws clearly outline what is acceptable and not acceptable in specific circumstances, which is a rulebook approach."
},
    {
  "number": 38,
  "text": "You are an audit manager in Miranda & Co and you are planning the audit of Milberry Co...\n\nWhich is the MOST appropriate response to the outstanding fees from Milberry Co?",
  "type": "mcq",
  "choices": {
    "A": "The auditor should resign from the client",
    "B": "The auditor should report the client to the ACCA",
    "C": "The auditor can continue working for the client but should ensure that the audit firm's credit control department are informed of the outstanding fees",
    "D": "The auditor's report for this year should not be issued until the fees have been paid"
  },
  "answer": "D",
  "explanation": "The audit firm must request that the fees are paid and must not issue this year's auditor's report until the fees have been paid."
},
    {
  "number": 39,
  "text": "You are an audit manager in Miranda & Co and you are planning the audit of Milberry Co...\n\nWhich of the following statements in respect of the relationship between the new financial controller and the audit firm are TRUE?",
  "type": "mcq",
  "choices": {
    "A": "The audit approach should be revised to ensure procedures and items to be tested are not predictable",
    "B": "The audit team should comprise people who know the audit senior as this will make the audit run more smoothly and increase efficiency",
    "C": "The firm must resign as auditor as the threat to objectivity is too significant to safeguard",
    "D": "The audit senior should not be allowed to be the financial controller and should resign"
  },
  "answer": "A",
  "explanation": "The audit will need to be planned carefully to ensure that the work is not predictable, especially as the new financial controller is an ex-employee of the firm and will know the firm's procedures."
},
    {
  "number": 40,
  "text": "You are an audit manager in Miranda & Co and you are planning the audit of Milberry Co...\n\nSelect the option which correctly identifies whether or not a self-review threat is likely to arise in relation to the tax services requested. (Tax return: Yes/No, Tax advice: Yes/No)",
  "type": "mcq",
  "choices": {
    "A": "Option A (Yes, Yes)",
    "B": "Option B (No, No)",
    "C": "Option C (Yes, No)",
    "D": "Option D (No, Yes)"
  },
  "answer": "D",
  "explanation": "Preparation of tax returns does not generally create a self-review threat as it is mechanical. Provision of tax advice could create a significant self-review threat."
},
    {
  "number": 41,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nWhich TWO of the following statements are TRUE in respect of the conflict of interest between Winnie Co and Piglet Co?",
  "type": "multi-select",
  "choices": {
    "A": "Tigger & Co must decline the audit engagement of Piglet Co",
    "B": "Winnie Co and Piglet Co may be concerned that commercially sensitive information may be disclosed by Tigger & Co to their competitor",
    "C": "Tigger & Co must ask permission of ACCA before accepting the audit of Piglet Co",
    "D": "Tigger & Co must obtain consent of both clients before continuing with the engagements"
  },
  "answer": [
    "B",
    "D"
  ],
  "explanation": "The audit firm must obtain consent from both firms. If consent is not given, the firm must decide which client to keep."
},
    {
  "number": 42,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nWhich of the following is NOT an action that your firm should take to manage the conflict of interest between Winnie Co and Piglet Co?",
  "type": "mcq",
  "choices": {
    "A": "Monitoring of safeguards by an engagement quality reviewer",
    "B": "Require every employee of Tigger & Co to sign a confidentiality agreement",
    "C": "Use separate engagement teams and engagement partners for each client",
    "D": "Operate secure data filing of all audit information"
  },
  "answer": "B",
  "explanation": "The audit teams of each client would sign a confidentiality agreement but it would not be necessary to have all employees of the firm sign confidentiality agreements."
},
    {
  "number": 43,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nIn relation to the proposal that 20% of the audit fee is based on the profit for the year of the company, which of the following statements is TRUE?",
  "type": "mcq",
  "choices": {
    "A": "This will lead to fee-dependency which is a self-interest threat. The proposal should be rejected.",
    "B": "This is a contingent fee arrangement which creates an advocacy threat. The proposal should only be accepted if no more than 15% of the audit fee is based on profit.",
    "C": "This is a contingent fee arrangement which creates a self-interest threat. The proposal should be rejected.",
    "D": "This will lead to fee-dependency which is a self-interest threat. The proposal should only be accepted if no more than 15% of the audit fee is based on profit."
  },
  "answer": "C",
  "explanation": "A contingent fee arrangement creates a self-interest threat. The proposal must be rejected as the ACCA Code does not allow contingent fee arrangements for assurance work."
},
    {
  "number": 44,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nSelect whether the following statements are true or false in respect of the issue with Eeyore Co. (Senior management is correct that reporting the company will constitute a breach of confidentiality)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "B",
  "explanation": "In accordance with ISA 250, the auditor has increased responsibility when non-compliance is identified. If the client refuses to report and the breach is in the public interest, the auditor must report to the appropriate authority."
},
    {
  "number": 45,
  "text": "Cameron Co has recently become a listed company...\n\nWhich of the following can be a member of the audit committee once established?",
  "type": "mcq",
  "choices": {
    "A": "Ola Osbourne",
    "B": "Lindsay Lewis",
    "C": "Jules Jardine",
    "D": "Taylor Tahir"
  },
  "answer": "D",
  "explanation": "The audit committee must comprise independent NEDs. Taylor Tahir is the only independent NED listed."
},
    {
  "number": 46,
  "text": "Cameron Co has recently become a listed company...\n\nMatch the two issues given to the most appropriate response. (Issue 1: The board is not balanced / Issue 2: Executive directors are paid a fixed salary which increases annually in line with inflation)",
  "type": "mcq",
  "choices": {
    "A": "Issue 1: D (Appoint three more independent NEDs), Issue 2: C (Introduce share options)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "At least half the board should be independent NEDs. Executive directors' remuneration should include performance related pay linked with long-term success, such as share options."
},
    {
  "number": 47,
  "text": "Cameron Co has recently become a listed company...\n\nWhich of the following would NOT ensure Cameron Co is compliant with corporate governance principles?",
  "type": "mcq",
  "choices": {
    "A": "Jules Jardine should replace Ola Osbourne as chair",
    "B": "All directors should be subject to re-election this year",
    "C": "A Nomination Committee should be established",
    "D": "Directors contracts should be reviewed to ensure notice periods are one year or less"
  },
  "answer": "A",
  "explanation": "The chair must be independent on appointment. Jules Jardine has been a member of the board for ten years and independence is deemed compromised after more than nine years."
},
    {
  "number": 48,
  "text": "Cameron Co has recently become a listed company...\n\nSelect whether the following statements in relation to directors' remuneration are true or false. (Remuneration of directors should be set by the Nomination Committee)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "B",
  "explanation": "Remuneration should be set by the remuneration committee to ensure a fair and transparent process."
},
    {
  "number": 49,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nIn relation to the composition of the current audit team, select which of the fundamental principles is at risk and select an appropriate safeguard. (Fundamental principle options: 1 Integrity, 2 Professional competence and due care, 3 Confidentiality, 4 Objectivity) (Safeguard options: A Reinstate previous partner, B Resign from engagement, C Assign completely new audit team, D Provide industry training)",
  "type": "mcq",
  "choices": {
    "A": "2 (Professional competence and due care), D (Provide industry training)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Professional competence and due care is at risk as the audit team lacks relevant experience. The firm should offer appropriate training."
},
    {
  "number": 50,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nSelect the type of threat which could arise as a result of the finance director's relationship with the audit manager and select an appropriate safeguard. (Threat options: 1 Self-review, 2 Familiarity, 3 Advocacy) (Safeguard options: A Finance director must not have contact, B Firm should resign, C Different audit manager should be appointed)",
  "type": "mcq",
  "choices": {
    "A": "2 (Familiarity), C (Different audit manager should be appointed)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "There is a familiarity threat due to the ongoing relationship. A new audit manager should be appointed."
},
    {
  "number": 51,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nIdentify the threat created by each of the following non-audit services. (Routine maintenance of payroll records / Assistance with selection of new non-executive director / Tax services liaising with tax authority)",
  "type": "mcq",
  "choices": {
    "A": "Payroll: Self-review, Recruitment: Self-interest, Tax: Advocacy",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Payroll creates self-review as the auditor audits wages. Recruitment creates self-interest as the auditor selects an officer. Tax creates advocacy as the auditor represents the client's interest."
},
    {
  "number": 52,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nWhich of the following actions should the firm take to reduce the threat caused by the level of fees from Fir Co?",
  "type": "multi-select",
  "choices": {
    "A": "Use separate teams for audit and non-audit work",
    "B": "Obtain a pre-issuance review by an external accountant",
    "C": "Discuss the fee level with those charged with governance of Fir Co",
    "D": "Use separate teams, obtain a pre-issuance review, and discuss with those charged with governance"
  },
  "answer": [
    "A",
    "B",
    "D"
  ],
  "explanation": "All three actions should be taken to address the self-interest threat from fee levels."
},
    {
  "number": 53,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nWhich of the following is an appropriate action in relation to the requirement to provide tax services?",
  "type": "mcq",
  "choices": {
    "A": "The firm should not provide tax services as it will always create an advocacy threat",
    "B": "The firm should resign from the engagement to avoid the advocacy threat",
    "C": "The firm may provide tax services but an engagement quality review must be performed",
    "D": "The firm may provide tax services as long as it does not involve making management decisions"
  },
  "answer": "D",
  "explanation": "Tax services may be provided to an audit client if appropriate safeguards are applied and management decisions are not made."
},
    {
  "number": 54,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nTaking into account the concern of the ethics partner, which of the partners identified as potential replacements should take over the audit of Bush Co for the year ended 31 March 20X5?",
  "type": "mcq",
  "choices": {
    "A": "Brian Smith",
    "B": "Monty Nod",
    "C": "Cassie Dixon",
    "D": "Pete Russo"
  },
  "answer": "C",
  "explanation": "Cassie Dixon has no ongoing relationship with Bush Co and would be the most appropriate replacement to maintain independence."
},
    {
  "number": 55,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nWhich of the following correctly identifies the threats to Horti & Co's independence and proposes an appropriate course of action for the firm if Alan Marshlow accepts appointment as a non-executive director of Plant Co?",
  "type": "mcq",
  "choices": {
    "A": "Self-interest and familiarity - Can continue with appropriate safeguards",
    "B": "Self-interest and self-review - Must resign as auditor",
    "C": "Self-review and familiarity - Must resign as auditor",
    "D": "Familiarity only - Can continue with appropriate safeguards"
  },
  "answer": "B",
  "explanation": "Self-interest and self-review threats are created which are so significant that no safeguards can be implemented. Horti & Co would need to resign as auditor."
},
    {
  "number": 56,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nYou are separately considering Plant Co's request to provide internal audit services. Which of the following would result in Horti & Co assuming a management responsibility?",
  "type": "mcq",
  "choices": {
    "A": "1 and 3 (Designing internal controls / Determining reliance on IA for external audit)",
    "B": "2, 3 and 4 (Determining recommendations priority / Determining reliance on IA / Setting scope)",
    "C": "1, 2 and 4 (Designing controls / Determining priorities / Setting scope)",
    "D": "3 and 4 only (Determining reliance / Setting scope)"
  },
  "answer": "C",
  "explanation": "Designing internal controls, determining which recommendations to implement, and setting scope are decisions which should be taken by management, thus assuming management responsibility."
},
    {
  "number": 57,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nWhich of the following actions should Horti & Co take to maintain its objectivity in relation to the level of fee income from Weed Co?",
  "type": "mcq",
  "choices": {
    "A": "1 and 4 only (Communicate to governance / Pre-issuance review)",
    "B": "3 and 4 only (Request advance payment / Pre-issuance review)",
    "C": "2 and 3 only (Separate teams / Advance payment)",
    "D": "1, 2, 3 and 4"
  },
  "answer": "A",
  "explanation": "Matters affecting independence must be disclosed to those charged with governance and a pre-issuance review should be carried out."
},
    {
  "number": 58,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following correctly identifies the threats to independence and proposes an appropriate course of action for the firm if any of the audit team takes advantage of the discount?",
  "type": "mcq",
  "choices": {
    "A": "Self-interest - Decline the offer",
    "B": "Advocacy - The offer can be accepted",
    "C": "Familiarity - Consider whether discount is given to employees",
    "D": "Intimidation - Continue with appropriate safeguards"
  },
  "answer": "A",
  "explanation": "The offer of gifts from an audit client can create threats of self-interest and familiarity. As the finance director commented that the offer is intended to influence behaviour, the offer is an inducement and must be declined."
},
    {
  "number": 59,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following actions should CL & Co take to maintain its objectivity in relation to the level of fee income from LV Fones Co?",
  "type": "mcq",
  "choices": {
    "A": "1 and 2 only (Ensure partner compensation not influenced by fees / Increase client base)",
    "B": "1, 2 and 3 (Plus pre or post-issuance review if fees exceed 30% for 5 years)",
    "C": "2 and 3 only",
    "D": "1 and 3 only"
  },
  "answer": "B",
  "explanation": "When fees from a non-listed client represent 30% of total fees for five consecutive years, the firm must take all three actions stated."
},
    {
  "number": 60,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following correctly identifies the threats to independence and proposes an appropriate course of action for the firm in respect of the audit senior's secondment to LV Fones Co?",
  "type": "mcq",
  "choices": {
    "A": "Self-interest and self-review - The audit senior should not have been seconded",
    "B": "Self-interest only - Assign audit senior to audit team to increase efficiency",
    "C": "Self-review only - Perform engagement quality review",
    "D": "Familiarity and self-review - Audit senior must not be assigned to the audit"
  },
  "answer": "D",
  "explanation": "A self-review threat will be created as the audit senior may audit areas they were responsible for. A familiarity threat may also be created from friendships developed during secondment."
},
    {
  "number": 61,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following actions should CL & Co take to maintain its objectivity in relation to the outstanding fees from LV Fones Co?",
  "type": "mcq",
  "choices": {
    "A": "1 and 3 only (Ask client to pay / Do not issue auditor's report)",
    "B": "2 and 3 only (Independent review / Do not issue report)",
    "C": "1, 2 and 3",
    "D": "1 only"
  },
  "answer": "B",
  "explanation": "All three actions should be taken by the audit firm if fees remain outstanding."
},
    {
  "number": 62,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nSelect one option from each column which identifies the type of ethical threat arising from the engagement partner's friendship with the finance director, and identifies an appropriate course of action.",
  "type": "mcq",
  "choices": {
    "A": "Familiarity, Remove audit partner from audit",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Friendships create a familiarity threat. The audit engagement partner has the most influence, so the only way to reduce the impact is to remove the partner from the audit."
},
    {
  "number": 63,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co... Mickey Co has approached NAB & Co to become its auditor...\n\nMatch the acceptance considerations with the MOST appropriate reason. (1. Previous audit firm resigned without notice / 2. Audit must be completed before 30 Sep / 3. Mickey Co is main competitor of Goofy Co)",
  "type": "mcq",
  "choices": {
    "A": "1: E (Management may lack integrity), 2: D (Firm may not have enough resource), 3: A (Threats to objectivity/confidentiality)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Difficulties retaining auditors may indicate lack of integrity. Tight deadline requires sufficient resources. Main competitor creates conflict of interest."
},
    {
  "number": 64,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co...\n\nWhat is the correct order of the steps that NAB & Co should take in respect of the conflict of interest arising? (1. Perform engagement quality review / 2. Obtain consent to act / 3. Implement safeguards / 4. Inform both clients)",
  "type": "mcq",
  "choices": {
    "A": "a) 3,1,4,2",
    "B": "b) 4,2,3,1",
    "C": "c) 2,4,3,1",
    "D": "d) 4,2,1,3"
  },
  "answer": "A",
  "explanation": "To manage the conflict: 1. Inform both clients, 2. Obtain consent, 3. Implement safeguards, 4. Perform engagement quality review."
},
    {
  "number": 65,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co...\n\nSelect one option which identifies the SIGNIFICANT ethical threat arising from the audit engagement partner's son working for Goofy Co, and identifies an appropriate course of action.",
  "type": "mcq",
  "choices": {
    "A": "Intimidation - Remove audit engagement partner from the audit",
    "B": "Familiarity - Structure partner's responsibilities",
    "C": "Self-interest - Inform Goofy Co it should not employ the partner's son"
  },
  "answer": "C",
  "explanation": "A significant self-interest threat is created by the son receiving shares. The partner will need to be removed from the audit."
},
    {
  "number": 66,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co...\n\nWhich of the following statements is TRUE in respect of the request for assistance with recruitment of independent non-executive directors for Goofy Co?",
  "type": "mcq",
  "choices": {
    "A": "No threat arises and no safeguards are required",
    "B": "The audit engagement partner cannot provide assistance and another partner must provide assistance",
    "C": "The audit firm cannot provide assistance and the request must be declined",
    "D": "The audit engagement partner can provide the assistance but an engagement quality review must be performed"
  },
  "answer": "A",
  "explanation": "Reviewing qualifications and assessing competence does not generally create a threat to objectivity as the auditor is not making management decisions."
},
    {
  "number": 67,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhich of the following statements about the non-audit services that the directors of Kamari Co have asked Thira & Co to provide is TRUE?",
  "type": "mcq",
  "choices": {
    "A": "Thira & Co cannot accept both engagements for ethical reasons",
    "B": "Limited assurance will be provided by the review of the financial forecasts",
    "C": "The intended users in the engagement to review the financial forecasts will be Kamari Co's shareholders",
    "D": "Both engagements will be conducted under International Standards on Auditing"
  },
  "answer": "B",
  "explanation": "The projections are looking into the future, so only moderate (limited) assurance can be given."
},
    {
  "number": 68,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhich TWO of the following are potential DISADVANTAGES of Kamari Co outsourcing internal audit to Thira & Co?",
  "type": "multi-select",
  "choices": {
    "A": "A greater range of experience would be brought to the internal audit team",
    "B": "It could create a self-review threat during the external audit",
    "C": "It could create a conflict of interest with the financial forecast review",
    "D": "The internal audit function would have less understanding of the business"
  },
  "answer": [
    "B",
    "D"
  ],
  "explanation": "Outsourcing to the external audit provider creates a self-review threat. External staff visit periodically and would not understand the business as well."
},
    {
  "number": 69,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhich TWO of the following procedures would Thira & Co carry out if it was to accept the engagement to review the financial forecasts of Kamari Co?",
  "type": "multi-select",
  "choices": {
    "A": "Enquire with Kamari Co's bank as to the format of financial forecasts needed",
    "B": "Perform analytical review on previous year financial statements",
    "C": "Obtain a written representation from management",
    "D": "Enquire of Kamari Co's directors as to any assumptions made"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "The review of forecasts requires discussions with management to understand assumptions and obtaining written representations."
},
    {
  "number": 70,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhat type of internal audit assignment does the review of procedures around sales orders and the processing of sales invoices represent?",
  "type": "mcq",
  "choices": {
    "A": "An operational audit",
    "B": "A financial audit",
    "C": "A value for money audit",
    "D": "An IT audit"
  },
  "answer": "B",
  "explanation": "Sales orders and sales invoice processing are part of the financial reporting process, therefore this is a financial audit."
},
    {
  "number": 71,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nWhich TWO of the following are appropriate responses to address the increased detection risk due to Veryan Co being a new audit client?",
  "type": "multi-select",
  "choices": {
    "A": "Extended controls testing should be performed",
    "B": "Obtain an understanding of Veryan Co",
    "C": "Consideration should be given to relying on the work of an independent expert",
    "D": "Reduce reliance on tests of controls",
    "E": "Contact the previous auditor to request working papers"
  },
  "answer": [
    "B",
    "E"
  ],
  "explanation": "To address increased detection risk, the auditor must spend time obtaining an understanding of the client and can request working papers from the previous auditor."
},
    {
  "number": 72,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nWhich of the following is the LEAST appropriate materiality level to be used in the audit of Veryan Co?",
  "type": "mcq",
  "choices": {
    "A": "$1.5 million",
    "B": "$1.0 million",
    "C": "$750,000",
    "D": "$475,000"
  },
  "answer": "A",
  "explanation": "Materiality ranges: Revenue (0.5-1% = $620k-$1,240k), Profit (5-10% = $475k-$950k). $1.5m is 16% of profit and 1.2% of revenue, too high."
},
    {
  "number": 73,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nSelect whether the following statements are consistent or not consistent with the movement in revenue. (Cut-off of revenue is an audit risk)",
  "type": "mcq",
  "choices": {
    "A": "Consistent",
    "B": "Not consistent"
  },
  "answer": "A",
  "explanation": "Revenue has increased by 24% compared with 12% previously. Revenue may be overstated due to cut-off errors where sales relating to next year are included in this year."
},
    {
  "number": 74,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nMatch the audit risks given in the scenario with the MOST appropriate response. (1 Receivables / 2 Non-current assets / 3 Intangible assets (licences))",
  "type": "mcq",
  "choices": {
    "A": "Receivables: E (Review correspondence with customers), Non-current assets: G (Review management's impairment test), Intangible assets: F (Calculate expected amortisation)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Receivables recoverability is assessed by reviewing correspondence. Non-current asset damage requires reviewing impairment test results. Intangible asset amortisation can be checked by calculating expected amortisation."
},
    {
  "number": 75,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nWhich of the following is an appropriate explanation of the audit risk relating to the bonus for Flute Co's sales team?",
  "type": "mcq",
  "choices": {
    "A": "There is an increased risk of a reduction in profit as a result of irrecoverable debts",
    "B": "There is an increased risk of inappropriate cut-off of revenue",
    "C": "There is an increased risk of understatement of revenue",
    "D": "There is an increased risk of non-response from customers following direct confirmation testing"
  },
  "answer": "B",
  "explanation": "The risk of revenue cut-off errors increases with employees aiming to maximise their current year bonus."
},
    {
  "number": 76,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nUsing the financial information provided, calculate the receivables collection period for 20X5. (Revenue $1,267,000, Receivables $121,000)",
  "type": "mcq",
  "choices": {
    "A": "35 days",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Receivables collection period = receivables/revenue × 365 = 121/1267 × 365 = 35 days."
},
    {
  "number": 77,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nWhich of the following is NOT an appropriate audit response to the significant risks relating to inventory and receivables?",
  "type": "mcq",
  "choices": {
    "A": "Inventory: Extend cut-off testing, Receivables: Extend cut-off testing",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Cut-off testing would not provide relevant evidence to the potential valuation issues."
},
    {
  "number": 78,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nWhich TWO of the following statements BEST describe the purpose of using analytical procedures during the planning stage of Flute Co's audit?",
  "type": "multi-select",
  "choices": {
    "A": "To help form an overall conclusion on the financial statements",
    "B": "To obtain relevant and reliable audit evidence",
    "C": "To assist with identification of risks of material misstatement",
    "D": "To assist in identifying unusual transactions and events"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "Analytical procedures at the planning stage help identify areas of potential risk and unusual transactions. Forming conclusions is for the completion stage, and obtaining evidence is for fieldwork."
},
    {
  "number": 79,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nIn relation to the movement in the payables payment period, which of the following statements is most relevant to the auditor's consideration of audit risk?",
  "type": "mcq",
  "choices": {
    "A": "The payables payment period has decreased which could indicate understatement of payables",
    "B": "The payables payment period has decreased which could indicate Epica Co is taking advantage of early payment discounts",
    "C": "The payables payment period has increased which could indicate Epica Co has cash flow problems",
    "D": "The payables payment period has increased which could indicate Epica Co is managing its working capital cycle"
  },
  "answer": "C",
  "explanation": "The payables payment period has increased by 28 days (from 55 to 83 days). This could indicate cash flow problems which the auditor will need to consider as part of its going concern assessment."
},
    {
  "number": 80,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich THREE of the following describe audit risks that should be addressed during the audit of Epica Co?",
  "type": "multi-select",
  "choices": {
    "A": "Inventory may be overstated if sales prices have fallen below cost",
    "B": "Provisions for the return of goods may be understated",
    "C": "Epica Co has experienced difficult trading conditions causing revenue to fall",
    "D": "Sales prices have been reduced which will impact profitability",
    "E": "Lower quality goods have been purchased resulting in complaints from customers",
    "F": "Inventory may be misstated if returned goods have not been recorded back into inventory"
  },
  "answer": [
    "A",
    "B",
    "F"
  ],
  "explanation": "These three describe how the financial statements may be materially misstated. The other options are business risks."
},
    {
  "number": 81,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich TWO of the following describe appropriate auditor responses to the audit risk related to the increase in the useful life of tangible non-current assets of Epica Co?",
  "type": "multi-select",
  "choices": {
    "A": "Calculate whether the change in depreciation charge is material. If not material, no further action is necessary",
    "B": "Discuss with the directors the reason for the change in useful life",
    "C": "Compare the actual useful life of tangible non-current assets recently disposed of to the new depreciation policy",
    "D": "Compare the fixtures and fittings depreciation rate this year to last year"
  },
  "answer": [
    "B",
    "C"
  ],
  "explanation": "These procedures will allow the auditor to assess the appropriateness of the change. Option 4 is of no audit value as the policy has changed. Option 1 ignores the need to assess appropriateness."
},
    {
  "number": 82,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich of the following correctly describes the term performance materiality?",
  "type": "mcq",
  "choices": {
    "A": "An amount which would affect the economic decisions of the users",
    "B": "The maximum amount of misstatement the auditor is willing to accept",
    "C": "An amount which reduces the probability that the aggregate of uncorrected and undetected misstatements exceeds materiality",
    "D": "An amount below which misstatements would be clearly trivial"
  },
  "answer": "C",
  "explanation": "Option 1 describes materiality. Option 2 describes tolerable misstatement. Option 4 describes a clearly trivial threshold."
},
    {
  "number": 83,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich of the following is the most appropriate action in respect of the financial controller being on long-term sick leave?",
  "type": "mcq",
  "choices": {
    "A": "Resign from the audit",
    "B": "Increase the use of management experts",
    "C": "Brief the audit team to exercise professional scepticism and request the finance director's assistance",
    "D": "Contact the previous auditor to request their working papers"
  },
  "answer": "C",
  "explanation": "There is no suggestion of any issue that would cause resignation. The team should be vigilant and request the finance director's assistance."
},
    {
  "number": 84,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich THREE of the following statements are TRUE in relation to the lack of supplier statement reconciliations?",
  "type": "multi-select",
  "choices": {
    "A": "The auditor should perform the supplier statement reconciliations for Hawk Co",
    "B": "There is an increased risk of misstatement of trade payables",
    "C": "Misstatements in the purchase accrual balance may go undetected",
    "D": "The auditor will need to send requests for confirmation of balances to suppliers",
    "E": "Increased substantive testing will need to be performed over purchases and payables"
  },
  "answer": [
    "B",
    "C",
    "E"
  ],
  "explanation": "Lack of reconciliations means misstatements may go undetected. Increased substantive testing is required. The auditor should not perform reconciliations as this is management's responsibility."
},
    {
  "number": 85,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nIn respect of the unfair dismissal claim, which of the following audit procedures is NOT appropriate?",
  "type": "mcq",
  "choices": {
    "A": "Review correspondence between the financial controller and the company",
    "B": "Review board meeting minutes",
    "C": "Review correspondence between the company and its lawyer",
    "D": "Discuss the claim with the financial controller"
  },
  "answer": "D",
  "explanation": "It would not be appropriate or professional for the auditor to discuss the claim with the financial controller, especially when legal proceedings are ongoing."
},
    {
  "number": 86,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich audit risks can be identified from the preliminary analytical procedures performed? (Gross profit margin decreased from 26% to 17%, Payables payment period decreased from 75 to 40 days, Receivables collection period increased from 29 to 38 days)",
  "type": "mcq",
  "choices": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "D",
  "explanation": "Gross margin decrease indicates website sales may not be completely recorded. Payables payment period decrease indicates understatement of payables. Receivables collection period increase indicates receivables may be overvalued."
},
    {
  "number": 87,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich of the following are reasons why analytical procedures will be performed during the planning of Hawk Co?",
  "type": "mcq",
  "choices": {
    "A": "1 only (Help identify areas of potential risk)",
    "B": "1 and 2 only (Help identify risks + Help obtain understanding)",
    "C": "1,2 and 3 (Plus detect material misstatements)",
    "D": "2 and 3 only"
  },
  "answer": "B",
  "explanation": "Analytical procedures at the planning stage are performed to help identify areas of potential risk and to obtain an understanding of the client. Detecting material misstatements is for substantive analytical procedures during fieldwork."
},
    {
  "number": 88,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nSelect which section of the audit strategy of Swandive Co the following matters would appear. (1 Risk of material misstatement including fraud / 2 Use of professional scepticism / 3 Selection of audit team / 4 Use of automated tools)",
  "type": "mcq",
  "choices": {
    "A": "1: C, 2: C, 3: D, 4: A",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Risk and scepticism are significant factors. Team selection relates to resources. Use of automated tools relates to characteristics of the engagement."
},
    {
  "number": 89,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nWith respect to the fraud at Swandive Co, which of the following statements is TRUE?",
  "type": "mcq",
  "choices": {
    "A": "This fraud is an example of fraudulent financial reporting",
    "B": "The auditor will need to reduce control risk",
    "C": "Detection risk will need to increase as a result of the fraud",
    "D": "The audit team should discuss the susceptibility of Swandive Co to fraud"
  },
  "answer": "D",
  "explanation": "The risk of fraud must always be discussed with the audit team in accordance with ISA 240. The fraud is misappropriation of assets, not financial reporting. Control risk is assessed, not reduced by auditor. Detection risk should decrease, not increase."
},
    {
  "number": 90,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nWhich of the following additional controls is most effective at preventing fraud of this type occurring again?",
  "type": "mcq",
  "choices": {
    "A": "An exception report should be generated when standing data is changed, reviewed by payroll manager",
    "B": "On a regular basis, department managers should be given a list of employees to check",
    "C": "The people working in the payroll department should not be related",
    "D": "The finance director should compare total payroll cost each month to prior month"
  },
  "answer": "C",
  "explanation": "If employees working together are related, there is an increased risk of collusion which would circumvent segregation of duties. This would help prevent frauds occurring."
},
    {
  "number": 91,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nWhich THREE of the following procedures would assist in the detection of further frauds of this type at Swandive Co?",
  "type": "mcq",
  "choices": {
    "A": "Discuss with management whether they are aware of further frauds",
    "B": "Report the fraud to the police to deter other employees",
    "C": "Trace the amounts per payroll records to bank statements to identify anomalies",
    "D": "Analyse the bank details of all employees to identify duplicate bank accounts",
    "E": "Review HR records for names of employees and reconcile to bank transfer lists"
  },
  "answer": "A",
  "explanation": "Discussion with management may identify other suspected frauds. Searching for duplicate bank accounts and reconciling HR records to bank transfer lists would identify fictitious employees."
},
    {
  "number": 92,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nSelect whether the following advantages and disadvantages relate to narrative notes, internal control questionnaires or both. (Advantages: Can be prepared in advance / Easy to understand) (Disadvantages: May overstate the controls / Some controls may be missed)",
  "type": "mcq",
  "choices": {
    "A": "Can be prepared in advance: Internal control questionnaires, Easy to understand: Narrative notes, May overstate controls: Internal control questionnaires, Some controls may be missed: Narrative notes",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "ICQs are prepared in advance. Narrative notes are simple and easy to understand. ICQs may lead to overstatement of controls as management states they have listed controls. Narrative notes may miss unusual controls."
},
    {
  "number": 93,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nSelect whether the features of the purchases and payroll systems described are a strength or deficiency of the internal control system of Coastal Co. (1 Goods counted and agreed to supplier's delivery note before signing)",
  "type": "mcq",
  "choices": {
    "A": "Strength",
    "B": "Deficiency"
  },
  "answer": "B",
  "explanation": "The goods received should be agreed to the authorised purchase order before signing the delivery note to ensure only goods actually ordered are accepted. The supplier's delivery note records what has been sent, not what was ordered."
},
    {
  "number": 94,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nYou have reviewed the work of the audit junior and concluded that reliance can be placed on the internal controls. What impact will this have on the nature and extent of substantive audit procedures to be performed at the final audit?",
  "type": "mcq",
  "choices": {
    "A": "Less importance can be placed on written representations from management",
    "B": "Greater use of tests of detail and less use of analytical procedures",
    "C": "Decreased sample sizes when performing substantive testing",
    "D": "Increased use of evidence from outside the entity"
  },
  "answer": "C",
  "explanation": "If reliance can be placed on internal controls, reduced substantive testing can be performed, including decreased sample sizes."
},
    {
  "number": 95,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nThe payroll section includes the following procedures. For each procedure select whether it is a test of control or a substantive procedure. (Recalculate the total of the bank transfer list)",
  "type": "mcq",
  "choices": {
    "A": "Test of control",
    "B": "Substantive procedure"
  },
  "answer": "B",
  "explanation": "Recalculating the total tests the payroll figure in the financial statements, therefore it is a substantive procedure."
},
    {
  "number": 96,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nMatch the control deficiencies to an appropriate explanation of the issue. (i Availability of inventory not checked at time of ordering)",
  "type": "mcq",
  "choices": {
    "A": "i: C, ii: A, iii: D, iv: B",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Not checking availability risks unfulfilled orders. Orders not recorded immediately risks incorrect despatch. No sequential numbering risks missing orders. Exceeding credit limits risks irrecoverable debts."
},
    {
  "number": 97,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nWhich TWO of the following are appropriate recommendations to address the credit limit system deficiency?",
  "type": "mcq",
  "choices": {
    "A": "Credit limits should be reviewed by a responsible official on a regular basis and amended as appropriate",
    "B": "Sales order clerks should be allowed to use discretion to raise credit limits to avoid losing revenue",
    "C": "The online ordering system should be programmed to allow orders up to a maximum of 5% in excess of credit limit",
    "D": "Orders which would cause a customer to exceed their credit limit should be sent to a responsible official for approval"
  },
  "answer": [],
  "explanation": "The system should not allow credit limits to be exceeded by any amount. Changes to credit limits should only be performed by a responsible senior official."
},
    {
  "number": 98,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nWhich of the following recommendations should be made to address deficiencies (ii) and (iii)? (Telephone orders not recorded immediately, Order forms not sequentially numbered)",
  "type": "mcq",
  "choices": {
    "A": "1 and 2",
    "B": "2 and 3 only",
    "C": "2,3 and 4",
    "D": "1,3 and 4"
  },
  "answer": "B",
  "explanation": "Orders should be sequentially pre-numbered with regular sequence checks, and orders should be entered directly into the system as the customer is placing the order."
},
    {
  "number": 99,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nWhich of the following statements is TRUE in respect of the review findings?",
  "type": "mcq",
  "choices": {
    "A": "The findings will be communicated to the shareholders at the annual general meeting",
    "B": "The recommendations will need to be actioned before the external audit commences",
    "C": "The findings should be reported directly to the board of directors rather than the finance director",
    "D": "The findings should be discussed with the external auditor before being communicated to the finance director"
  },
  "answer": "C",
  "explanation": "To increase independence, findings should be communicated to those charged with governance. Reporting to the finance director risks him perceiving deficiencies as criticism and not reporting to the board."
},
    {
  "number": 100,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich of the following is NOT a test of control in respect of Primrose Co's system?",
  "type": "mcq",
  "choices": {
    "A": "Trace a sample of purchase orders through to the approved supplier list",
    "B": "Trace a sales order through to the system and into the detailed sales listing to ensure it is recorded",
    "C": "Review a sample of purchases orders in the system to ensure they are authorised",
    "D": "Inspect copies of the back-ups taken to ensure these are taken on a daily basis"
  },
  "answer": "B",
  "explanation": "Tracing a transaction through the system to ensure it is recorded in the detailed sales listing is a substantive procedure testing completeness."
},
    {
  "number": 101,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nSelect whether the following controls identified in Primrose Co's systems are general or information processing controls. (Daily backups of the system)",
  "type": "mcq",
  "choices": {
    "A": "General",
    "B": "Information processing"
  },
  "answer": "A",
  "explanation": "Backups relate to the whole computer system, therefore they are general controls."
},
    {
  "number": 102,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich of the following procedures provides the MOST reliable evidence that the inventory system updates automatically once an order has been received?",
  "type": "multi-select",
  "choices": {
    "A": "Review inventory level, enter a sales order, and review inventory level again after the order has been placed",
    "B": "Count a sample of items of inventory and agree the quantities to the inventory system",
    "C": "Review the inventory report to identify unusually high or low quantities",
    "D": "Contact a sample of customers to enquire whether they have experienced delays"
  },
  "answer": [
    "A",
    "A",
    "A"
  ],
  "explanation": "Reviewing inventory levels immediately before and after a sales order has been processed enables the auditor to ensure the inventory level is updated automatically."
},
    {
  "number": 103,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich can be tested by placing a dummy sales order for a large quantity of goods into the system? Select all that apply.",
  "type": "mcq",
  "choices": {
    "A": "The inventory system is automatically updated to reflect inventory allocation",
    "B": "The system will flag if there is insufficient inventory to fulfil the order",
    "C": "When inventory falls to a minimum level a purchase order is automatically created",
    "D": "The purchase order is automatically sent electronically to the approved supplier"
  },
  "answer": "A",
  "explanation": "As all of the controls stated are computerised controls, a dummy order can be used to test them."
},
    {
  "number": 104,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich TWO of the following procedures should be performed by Marigold & Co to identify whether the work of Primrose Co's internal audit department can be relied upon?",
  "type": "multi-select",
  "choices": {
    "A": "Review the internal auditor's working papers to ensure sufficient appropriate evidence has been obtained",
    "B": "Engage an independent expert to assess the new system and validate the reliability of IA's work",
    "C": "Reperform a sample of procedures performed by the internal auditor to ensure the same conclusion is reached",
    "D": "Assess whether Primrose Co has an audit committee. If so, the external auditor can rely on IA's work without further work"
  },
  "answer": [
    "A",
    "C"
  ],
  "explanation": "To rely on IA's work, the external auditor should review IA's working papers and reperform a sample of tests. The presence of an audit committee does not automatically mean IA's work is reliable."
},
    {
  "number": 105,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nFor each of the controls given below, select the type of control activity described. (The internal audit department agrees the physical assets to the asset register to ensure completeness)",
  "type": "mcq",
  "choices": {
    "A": "Physical or logical control",
    "B": "Verification",
    "C": "Reconciliation"
  },
  "answer": "C",
  "explanation": "Agreeing physical assets to the asset register is a reconciliation control activity."
},
    {
  "number": 106,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nWhich THREE of the following documents together provide persuasive evidence that assets purchased during the year have been authorised?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3 (Requisition, Order, GRN)",
    "B": "2,3 and 4 (Order, GRN, Register)",
    "C": "3,4 and 5 (GRN, Register, Minutes)",
    "D": "1,2 and 5 (Requisition, Order, Minutes)"
  },
  "answer": "D",
  "explanation": "The requisition is approved by the asset expenditure committee. The purchase order is authorised by the purchasing director. The meeting minutes also contain evidence of approval."
},
    {
  "number": 107,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nWhich of the following is NOT a test of control the external auditor of Shroom Co may perform in relation to non-current assets?",
  "type": "mcq",
  "choices": {
    "A": "Inspect a sample of assets purchased for a serial number and trace this to the non-current asset register",
    "B": "Review a sample of goods received notes for evidence of the check against purchase order and condition",
    "C": "Compare actual asset expenditure with budgeted asset expenditure and investigate any variances greater than 5%",
    "D": "Review the internal audit working papers documenting the reconciliation of physical assets with the register"
  },
  "answer": "C",
  "explanation": "Comparing actual to budget is a substantive analytical procedure, not a test of control."
},
    {
  "number": 108,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nThe external auditor has this year expressed an interest in using some individuals from Shroom Co's internal audit department to provide direct assistance with external audit procedures. For which of the following areas would it be appropriate for internal audit to provide direct assistance?",
  "type": "mcq",
  "choices": {
    "A": "Assessing controls over non-current assets",
    "B": "Revenue recognition",
    "C": "Valuation of inventory",
    "D": "Performing cash counts"
  },
  "answer": "D",
  "explanation": "According to ISA 610, the external auditor must not assign work involving significant judgement, high risk of material misstatement, or with which the internal auditor has been involved. Cash counts are most appropriate."
},
    {
  "number": 109,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following would correctly explain why the payables payment period has increased from 45 days in 20X4 to 66 days in 20X5?",
  "type": "mcq",
  "choices": {
    "A": "Chester Co received a prompt payment discount from one of its suppliers for the first time",
    "B": "Chester Co obtained a trade discount which has reduced the amount owed",
    "C": "Chester Co purchased an unusually high level of goods in March and had not paid for them by year end",
    "D": "Chester Co took advantage of extended credit terms offered by a new supplier which it had fully settled by year end"
  },
  "answer": "C",
  "explanation": "A purchase of a large volume of goods close to the year end would increase the payables payment period."
},
    {
  "number": 110,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following is an appropriate action in respect of the inconsistency in the balance with Oxford Co?",
  "type": "mcq",
  "choices": {
    "A": "The auditor should take no further action as this is a timing difference",
    "B": "The auditor should request that the supplier's balance is amended",
    "C": "The auditor should contact the supplier and request a supplier statement as at the current date",
    "D": "The auditor should request that an accrual is created in respect of the goods received but not yet invoiced"
  },
  "answer": "D",
  "explanation": "The difference relates to goods received prior to year end but not recorded. An accrual should be created for goods received not yet invoiced."
},
    {
  "number": 111,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following would be a valid explanation for the difference in respect of Poole Co?",
  "type": "mcq",
  "choices": {
    "A": "1 only (Invoice paid twice)",
    "B": "1 and 2 only (Paid twice OR posted as debit note)",
    "C": "2 and 3 only",
    "D": "1,2 and 3"
  },
  "answer": "A",
  "explanation": "The difference may have arisen if the invoice had been paid twice in error as an additional $156,403 will have been debited to the supplier account."
},
    {
  "number": 112,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following would NOT provide sufficient and appropriate audit evidence over the COMPLETENESS of the trade payables balance in respect of Bath Co?",
  "type": "mcq",
  "choices": {
    "A": "Obtain the journal and confirm invoices dated 29-31 March have been manually adjusted",
    "B": "Review the accruals listing to ensure goods received post year end for which an invoice has not been received have been recorded",
    "C": "For post-year-end cash payments, confirm date of matching invoice and if pre year end, agree to liability",
    "D": "Review a sample of invoices received post year end and match to GRN to determine if they should have been recorded at year end"
  },
  "answer": "B",
  "explanation": "Reviewing the accruals listing would not help confirm the trade payables balance as accruals are recorded separately from trade payables."
},
    {
  "number": 113,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nWhich of the following statements explains the CUT-OFF assertion for wages and salaries?",
  "type": "mcq",
  "choices": {
    "A": "Wages and salaries have been fairly allocated within the statement of profit or loss",
    "B": "Wages and salaries have been appropriately calculated taking into account all relevant taxation costs",
    "C": "Wages and salaries which have been incurred have been accounted for in respect of all personnel",
    "D": "Wages and salaries accounted for relate to the current year ended 31 March 20X5"
  },
  "answer": "D",
  "explanation": "The cut-off assertion relates to transactions being recorded in the correct accounting period. In this case, payroll costs reflect payroll transactions for the period to 31 March 20X5."
},
    {
  "number": 114,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nThe following audit evidence has been gathered relating to the accuracy of wages and salaries. Rank the evidence from most reliable to least reliable. (1 Proof-in-total calculation by audit team, 2 Written representation from directors, 3 Verbal confirmation from finance director, 4 Recalculation by internal audit team member)",
  "type": "mcq",
  "choices": {
    "A": "1,2,3,4",
    "B": "1,4,2,3",
    "C": "4,1,2,3",
    "D": "4,1,3,2"
  },
  "answer": "A",
  "explanation": "Auditor generated evidence (proof-in-total) is most reliable. Internal audit work is next. Written representation is client generated. Verbal confirmation is least reliable."
},
    {
  "number": 115,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nThe prior year financial statements for Walker Co included $17 million for wages and salaries. What would be the estimated current year wages and salaries expense, ignoring redundancy costs?",
  "type": "mcq",
  "choices": {
    "A": "$16,740,000",
    "B": "$16,893,000",
    "C": "$16,815,000",
    "D": "$18,600,000"
  },
  "answer": "A",
  "explanation": "Prior year: $17m. Redundancies: 10% reduction = $15.3m. Pay rise 6% for 10/12 months = $0.765m. Bonus: 450 × $1,500 = $0.675m. Total = $16.74m."
},
    {
  "number": 116,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nSelect which TWO of the following are substantive ANALYTICAL PROCEDURES for wages and salaries.",
  "type": "multi-select",
  "choices": {
    "A": "Trace total wages expense per payroll system to draft financial statements",
    "B": "Recalculate gross/net pay for a sample of employees",
    "C": "Compare current year total payroll expense to prior year and investigate differences",
    "D": "Perform a proof-in-total calculation and compare expected expense to actual expense"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "Analytical procedures evaluate trends and relationships. Comparison to prior year and proof-in-total are both substantive analytical procedures. The other options are tests of detail."
},
    {
  "number": 117,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nIn respect of the revenue procedures included in the audit plan, select the assertion being tested. (1 Review treatment of post-year-end returns)",
  "type": "mcq",
  "choices": {
    "A": "Accuracy",
    "B": "Completeness",
    "C": "Occurrence"
  },
  "answer": "C",
  "explanation": "Post-year-end returns would mean the transaction had not really occurred and should be removed from sales, testing the occurrence assertion."
},
    {
  "number": 118,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nWhich of the following audit procedures should be performed in relation to the balance with Lily Co to determine if the payables balance is understated?",
  "type": "mcq",
  "choices": {
    "A": "Inspect the goods received note to determine when the goods were received",
    "B": "Inspect the purchase order to confirm it is dated before the year end",
    "C": "Review the post-year-end bank ledger account for evidence of payment",
    "D": "Send a confirmation request to Lily Co to confirm the outstanding balance"
  },
  "answer": "A",
  "explanation": "To determine if the balance is understated, the auditor should determine if the goods should be included in payables at year end by inspecting the goods received note."
},
    {
  "number": 119,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nWhich of the following audit procedures be carried out to confirm the balance owing to Carnation Co?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3",
    "B": "1 and 3 only",
    "C": "1 and 2 only",
    "D": "2 and 3 only"
  },
  "answer": "C",
  "explanation": "To confirm the balance, the auditor must determine if the liability exists by reviewing pre-year-end goods returned notes and post-year-end credit notes to verify that goods have been returned."
},
    {
  "number": 120,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nWhat would be an appropriate course of action on the basis of these results? (4,000 error in sample from control weakness, plus one-off error of 25,000)",
  "type": "mcq",
  "choices": {
    "A": "The error is immaterial and therefore no further work is required",
    "B": "The effect of the control error should be projected to the population",
    "C": "Poppy Co should be asked to adjust the payables figure by $45,000",
    "D": "A different sample should be selected as these results are not reflective of the population"
  },
  "answer": "B",
  "explanation": "The effect of the error must be considered in relation to the whole population. It is not appropriate to project a one-off error across the population."
},
    {
  "number": 121,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nSelect whether the following are examples of using test data or audit software for payables testing. (Selecting a sample of supplier balances for testing using monetary unit sampling)",
  "type": "mcq",
  "choices": {
    "A": "Test data",
    "B": "Audit software"
  },
  "answer": "B",
  "explanation": "Monetary unit sampling is a function of audit software. Test data involves inputting dummy transactions."
},
    {
  "number": 122,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich of the following substantive procedures will provide the MOST reliable evidence as to the recoverability of the outstanding balance from Albatross Co?",
  "type": "mcq",
  "choices": {
    "A": "Obtain a direct confirmation letter from Albatross Co",
    "B": "Review the payment history of Albatross Co",
    "C": "Review correspondence between Albatross Co and Eagle",
    "D": "Review post-year-end cash receipts from Albatross Co"
  },
  "answer": "D",
  "explanation": "Reviewing post-year-end receipts will confirm actual recoverability of the outstanding balance, providing the most reliable evidence."
},
    {
  "number": 123,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich TWO of the following substantive procedures will provide evidence over the EXISTENCE of Eagle's trade receivables other than the balance owing from Albatross Co?",
  "type": "multi-select",
  "choices": {
    "A": "Calculate the receivables collection period and compare with prior year",
    "B": "Perform a receivables circularisation",
    "C": "Review post-year-end cash receipts from customers",
    "D": "Recalculate the allowance for irrecoverable receivables"
  },
  "answer": [
    "B",
    "C"
  ],
  "explanation": "Receivables circularisation and after-date cash receipts testing provide evidence over existence. The other options relate to valuation."
},
    {
  "number": 124,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich TWO of the following factors may indicate overvaluation of inventory at Eagle?",
  "type": "multi-select",
  "choices": {
    "A": "Increased competition resulting in a decrease in selling price",
    "B": "Increased inventory levels",
    "C": "Increased inventory turnover ratio",
    "D": "Inventory consists of heating and plumbing equipment",
    "E": "Inclusion of third-party inventory within Eagle's inventory balance"
  },
  "answer": [
    "A",
    "B"
  ],
  "explanation": "Decrease in selling price may result in NRV being below cost. Increased inventory levels for a company experiencing reduced sales may result in NRV being lower than cost."
},
    {
  "number": 125,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nSelect whether the following are tests of control or substantive procedures in relation to Eagle's inventory balance. (Observe the client's staff to ensure following the inventory count instructions)",
  "type": "mcq",
  "choices": {
    "A": "Test of control",
    "B": "Substantive procedure"
  },
  "answer": "A",
  "explanation": "Observing the count to ensure the count instructions are followed provides evidence that controls over the inventory count are operating effectively."
},
    {
  "number": 126,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich of the following are appropriate audit responses to the lawsuit?",
  "type": "mcq",
  "choices": {
    "A": "2 and 3 only (Inspect correspondence with legal advisers / Review board minutes)",
    "B": "2,3 and 4",
    "C": "1,3 and 4",
    "D": "1 and 4 only"
  },
  "answer": "A",
  "explanation": "The auditor should inspect correspondence with legal advisers and review board minutes. Contacting the customer directly is not appropriate."
},
    {
  "number": 127,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nWhich of the following assertions are tested by the procedures included in the audit programme for additions?",
  "type": "mcq",
  "choices": {
    "A": "1 and 3 only (Completeness and Existence)",
    "B": "2 and 4 only (Classification and Accuracy)",
    "C": "1,3 and 4 only (Completeness, Existence, Accuracy)",
    "D": "1,2,3 and 4"
  },
  "answer": "C",
  "explanation": "Tracing additions to bank and invoice tests existence and accuracy. The analytical procedure tests completeness. Classification is not tested by these procedures."
},
    {
  "number": 128,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nWhich TWO of the following are substantive audit procedures for testing depreciation?",
  "type": "mcq",
  "choices": {
    "A": "Review the non-current asset register to ensure assets are assigned a useful life",
    "B": "Perform a proof in total for the depreciation charge and investigate significant differences",
    "C": "Review the board minutes for evidence of approval of useful lives",
    "D": "Discuss with management the reasons for the $300,000 difference in current year depreciation compared to prior year"
  },
  "answer": [],
  "explanation": "Proof-in-total and comparison with prior year are analytical procedures and are substantive procedures. The other options are tests of controls."
},
    {
  "number": 129,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nRecalculate the expected loss on disposal of Property A. (Property cost $6m, sold for 40% of original cost after 7 years, depreciated 5% per annum straight line)",
  "type": "mcq",
  "choices": {
    "A": "$1.5 million",
    "B": "$2.1 million",
    "C": "$2.4 million",
    "D": "$3.9 million"
  },
  "answer": "A",
  "explanation": "Accumulated depreciation: $6m × 0.05 × 7 = $2.1m. Carrying amount: $6m - $2.1m = $3.9m. Proceeds: $6m × 40% = $2.4m. Loss: $3.9m - $2.4m = $1.5m."
},
    {
  "number": 130,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nIn respect of the revaluation, which TWO of the following statements regarding reliance on the external expert are TRUE?",
  "type": "multi-select",
  "choices": {
    "A": "Reliance can only be placed on an expert appointed by York & Co",
    "B": "Obtaining the valuation report would constitute sufficient and appropriate evidence",
    "C": "Reference to the work of the external expert should not be included in the auditor's report",
    "D": "The objectivity of the valuer must be assessed before placing reliance"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "The auditor takes sole responsibility for the audit opinion, so no reference to the expert should be made. The auditor must evaluate the objectivity of a management's expert."
},
    {
  "number": 131,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nWhich THREE of the following should be considered when deciding whether to use sampling?",
  "type": "multi-select",
  "choices": {
    "A": "The time the auditor has available to perform the procedures",
    "B": "Appropriateness of the population",
    "C": "The size of the population",
    "D": "Completeness of the population",
    "E": "The ease with which the information is expected to be available"
  },
  "answer": [
    "B",
    "C",
    "D"
  ],
  "explanation": "The population must be complete, accurate, and appropriate. If the population size is small, sampling may not be efficient. Time and ease should not influence audit procedures."
},
    {
  "number": 132,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nIdentify whether the selection methods described represent sampling. (1 Test every 100th item from a random start point)",
  "type": "mcq",
  "choices": {
    "A": "Sampling",
    "B": "Not sampling"
  },
  "answer": "A",
  "explanation": "Procedure 1 describes systematic sampling, which is a sampling method given in ISA 530 Audit Sampling."
},
    {
  "number": 133,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nIn respect of procedure 1, if the method stated to test every 100th item, which method would be described?",
  "type": "mcq",
  "choices": {
    "A": "Monetary unit selection",
    "B": "Random selection",
    "C": "Systematic selection",
    "D": "Block selection"
  },
  "answer": "C",
  "explanation": "Systematic sampling is where a sample is chosen with a constant interval, with a random starting point."
},
    {
  "number": 134,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nIn relation to the procedures described, which of the following statements are TRUE?",
  "type": "mcq",
  "choices": {
    "A": "1,2,3 and 4",
    "B": "2 and 3 only",
    "C": "1 only",
    "D": "2,3 and 4"
  },
  "answer": "A",
  "explanation": "Procedure 1 tests accuracy, not occurrence. Procedures 2 and 3 address completeness. Procedure 2 uses client-generated evidence (least reliable). If supplier statements not retained, auditor should contact supplier directly."
},
    {
  "number": 135,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nDuring the testing of Hemsworth Co's payables balance, several misstatements were found. Which of the following is the most appropriate initial response your audit firm should take?",
  "type": "mcq",
  "choices": {
    "A": "Report the matter to the client",
    "B": "Increase the amount of testing",
    "C": "Suggest the audit opinion is modified",
    "D": "Discuss the issue with the audit manager"
  },
  "answer": "B",
  "explanation": "The amount of testing should be increased before any further action is taken. The issue should then be discussed with the audit manager before discussing with the client."
},
    {
  "number": 136,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nSelect whether the following explanations provide a valid explanation why audit risk increases when auditing 'around the computer'. (The actual computer files and programs are not tested therefore the auditor has no direct evidence that the programs are working as expected)",
  "type": "mcq",
  "choices": {
    "A": "Valid",
    "B": "Not valid"
  },
  "answer": "A",
  "explanation": "As the system within the computer is not audited, direct evidence that the programs are working as expected cannot be obtained."
},
    {
  "number": 137,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nWhich of the following is NOT a limitation of using audit software at Delphic Co?",
  "type": "mcq",
  "choices": {
    "A": "There may be substantial setup costs, especially where systems have not been fully documented",
    "B": "The computer audit department cannot confirm that all system documentation is available",
    "C": "There are over 600 customers on the system making the use of audit software inappropriate",
    "D": "The auditor will be provided with copy files and not be allowed any direct access"
  },
  "answer": "C",
  "explanation": "Having 600 customers makes the use of audit software much more beneficial, not inappropriate."
},
    {
  "number": 138,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nAssuming that audit software can be developed for use on Delphic Co's systems, which of the following procedures could be carried out on the receivables balance?",
  "type": "mcq",
  "choices": {
    "A": "1 and 2 only",
    "B": "1,3 and 4 only",
    "C": "2,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "B",
  "explanation": "All four procedures (casting, comparing to credit limits, stratifying balances, producing aged analysis) could be performed using audit software."
},
    {
  "number": 139,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nWhich THREE of the following statements are TRUE in relation to audit software?",
  "type": "multi-select",
  "choices": {
    "A": "As the systems are old the audit software may slow Delphic Co's system down",
    "B": "The audit software will test the programmed controls of Delphic Co",
    "C": "The use of audit software may save time resulting in greater efficiency",
    "D": "Audit staff may need to be trained to use the audit software",
    "E": "The audit will be more expensive each year audit software is used"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "Audit software may slow old systems. It saves time resulting in efficiency. Staff may need training. The audit will only be more costly in the year of set up."
},
    {
  "number": 140,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nDelphic Co has informed you that they plan to implement a new computerised accounting system within the next year. Which of the following would represent an appropriate audit response?",
  "type": "mcq",
  "choices": {
    "A": "2 and 3 only",
    "B": "1 and 3 only",
    "C": "1 only",
    "D": "1,2 and 3"
  },
  "answer": "C",
  "explanation": "To save unnecessary time and expense, the audit firm should delay the use of audit software to ensure it is designed to work effectively with the new system."
},
    {
  "number": 141,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nWhich of the following statements is FALSE in respect of the notification regarding the cut in funding for Hightown?",
  "type": "mcq",
  "choices": {
    "A": "Audit risk will increase due to the threat to the going concern status",
    "B": "The auditor will need to review plans and forecasts to assess how the organisation will continue",
    "C": "The auditor's report for Hightown will not need to refer to going concern uncertainties as it is a local government authority",
    "D": "The auditor should review any plans Hightown has to reduce costs to assess whether this could realistically be achieved"
  },
  "answer": "C",
  "explanation": "An auditor's report for a local government authority will need to refer to going concern uncertainties in the same way as for a company."
},
    {
  "number": 142,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nCompleteness of income has been identified as a significant audit risk for the audit of Stargazers. Select THREE procedures which will help identify if income is understated.",
  "type": "mcq",
  "choices": {
    "A": "Compare income by shop and category to the prior year",
    "B": "Inspect credit notes issued post year end",
    "C": "Agree totals on till receipts to the detailed sales listing, bank statements and bank ledger account",
    "D": "Obtain the detailed sales listing and cast to confirm accuracy"
  },
  "answer": "A",
  "explanation": "These procedures help identify understatement. Inspection of credit notes would identify possible overstatement."
},
    {
  "number": 143,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nWhich of the following risks require specific consideration for the audit of Stargazers?",
  "type": "mcq",
  "choices": {
    "A": "1 and 4 only",
    "B": "1,3 and 4 only",
    "C": "1,2 and 3 only",
    "D": "1,2,3 and 4"
  },
  "answer": "B",
  "explanation": "All four risks (less segregation of duties, uncertainty over future funding, complexity of taxation rules, competence of volunteer staff) require specific consideration."
},
    {
  "number": 144,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nSelect whether the following statements are ALWAYS true, NEVER true or MAY be true in respect of the audit of a charity such as Stargazers. (Management will have no financial qualifications therefore there is a greater risk of material misstatement)",
  "type": "mcq",
  "choices": {
    "A": "Always true",
    "B": "May be true",
    "C": "Never true"
  },
  "answer": "B",
  "explanation": "Some charities, particularly larger ones, may have qualified, paid staff responsible for the financial statements. Smaller charities may rely heavily on volunteers."
},
    {
  "number": 145,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nWhich of the following provides the MOST reliable evidence in respect of the bonus issue of ordinary share capital?",
  "type": "mcq",
  "choices": {
    "A": "Bank statements",
    "B": "Share register",
    "C": "Companies House information",
    "D": "Notes of discussion with directors"
  },
  "answer": "C",
  "explanation": "Companies House (or equivalent) information provides independent third-party evidence of the number of shares in issue."
},
    {
  "number": 146,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nA dividend of $4 million was approved and paid in September 20X4. A dividend of $6 million has been proposed. How should each of the dividends be reflected?",
  "type": "mcq",
  "choices": {
    "A": "$4 million: Recognise in retained earnings, $6 million: Disclose in the notes",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Dividends paid during the year are recognised. Proposed dividends not approved by year end cannot be recognised and should be disclosed."
},
    {
  "number": 147,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nIn respect of the revaluation of property, select the assertion tested by the following procedures. (Inspect the independent expert's report)",
  "type": "mcq",
  "choices": {
    "A": "Completeness",
    "B": "Cut-off",
    "C": "Valuation"
  },
  "answer": "C",
  "explanation": "The independent expert's report shows up-to-date values of the properties, testing the valuation assertion."
},
    {
  "number": 148,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nWhich TWO of the following statements are TRUE in relation to equity?",
  "type": "multi-select",
  "choices": {
    "A": "Equity is material by nature",
    "B": "The auditor must check that total equity is the same as total assets on the statement of financial position",
    "C": "The auditor will rely mainly on substantive analytical procedures when auditing equity",
    "D": "Movements in equity must be shown in the statement of changes in equity"
  },
  "answer": [
    "A",
    "D"
  ],
  "explanation": "Equity is material by nature. Movements in equity are shown in the statement of changes in equity. Total assets should equal total equity and liabilities, not just equity."
},
    {
  "number": 149,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nWhich of the following procedures should be performed to test COMPLETENESS of directors' emoluments?",
  "type": "mcq",
  "choices": {
    "A": "1,2,3 and 4",
    "B": "1 and 4 only",
    "C": "1,2 and 3 only",
    "D": "1,3 and 4 only"
  },
  "answer": "D",
  "explanation": "Procedure 2 (tracing from financial statements to bank) tests occurrence, not completeness. To test completeness, procedures must start from outside the accounting records."
},
    {
  "number": 150,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nWhich of the following is a valid explanation for the INCONSISTENCY between the results of the analytical procedures on trade receivables and the directors' statement regarding debt collection problems?",
  "type": "mcq",
  "choices": {
    "A": "A change in sales mix towards high value products",
    "B": "An increase in the proportion of cash sales since February 20X5",
    "C": "An increase in the rate of sales tax in March 20X5",
    "D": "Sales growth of 1% per month over the year"
  },
  "answer": "B",
  "explanation": "An increase in cash sales would increase sales but not trade receivables, resulting in a decreased receivables collection period."
},
    {
  "number": 151,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nWhich of the following details should be disclosed in respect of the revaluation of the head office if the auditor is to conclude that the disclosures are adequate?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3 only",
    "B": "1,3 and 4 only",
    "C": "2,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "B",
  "explanation": "The effective date, amount of revaluation increase, and carrying amount under the cost model are required by IAS 16. The name of the valuer is not required."
},
    {
  "number": 152,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nWhich of the uncorrected misstatements numbered (1), (2) and (3) by the audit team MUST be adjusted for if the auditor is to issue an unmodified audit opinion?",
  "type": "mcq",
  "choices": {
    "A": "Misstatements 2 and 3 only",
    "B": "Misstatements 1 and 3 only",
    "C": "Misstatements 1,2 and 3",
    "D": "Misstatement 2 only"
  },
  "answer": "A",
  "explanation": "Misstatements (2) and (3) are individually material and would require adjustment. Misstatement (1) is immaterial."
},
    {
  "number": 153,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nAll adjustments required by the auditors have been made with the exception of adjustment (4) relating to the faulty goods. Which of the following correctly describes the effect of this matter on the auditor's report?",
  "type": "mcq",
  "choices": {
    "A": "Unmodified opinion with no further disclosure",
    "B": "Unmodified opinion with disclosure in an emphasis of matter paragraph",
    "C": "Qualified opinion due to material misstatement",
    "D": "Qualified opinion due to inability to obtain sufficient appropriate audit evidence"
  },
  "answer": "A",
  "explanation": "Misstatement (4) is immaterial at 2.2% of profit before income taxes ($2.9m/$131.4m) and would not require further disclosure. An unmodified opinion can be issued."
},
    {
  "number": 154,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nWhich of the following statements are true in respect of the reduction in samples sizes?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3 only",
    "B": "2 and 4 only",
    "C": "1,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "A",
  "explanation": "The audit plan has not been followed. Sufficient appropriate evidence may not have been obtained. Material misstatements may go undetected. Conclusions cannot be deferred to the manager."
},
    {
  "number": 155,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nSelect whether the following statements are true or false in respect of the subsequent events review of Autumn Co. (Enquiry does not provide sufficient appropriate evidence on its own)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "A",
  "explanation": "Enquiry alone is not sufficient. Choosing to rely only on enquiry demonstrates a lack of professional scepticism."
},
    {
  "number": 156,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nAs a result of the quality issues encountered during the audit of Autumn Co, which of the following actions should now be taken?",
  "type": "mcq",
  "choices": {
    "A": "2 and 4 only",
    "B": "1 and 3 only",
    "C": "2,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "C",
  "explanation": "More frequent quality reviews, further training, and review of policies should be taken. The firm would not report staff to ACCA; this will be dealt with internally."
},
    {
  "number": 157,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nWhich of the following statements is FALSE in respect of engagement quality reviews?",
  "type": "mcq",
  "choices": {
    "A": "An engagement quality review should be documented in the audit file",
    "B": "An engagement quality review involves a discussion of the significant judgements",
    "C": "An engagement quality review can be performed after the auditor's report has been signed",
    "D": "Frequent communication between the EQR and audit team enhances effectiveness"
  },
  "answer": "C",
  "explanation": "Engagement quality reviews are performed on or before the date of the auditor's report, not after."
},
    {
  "number": 158,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nSelect whether the following statements are true or false in respect of review of audit working papers. (The audit engagement partner will review all working papers on the audit file before issuing an opinion)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "B",
  "explanation": "The partner will not review all working papers; they are reviewed by team members of appropriate seniority."
},
    {
  "number": 31,
  "text": "The board of directors of Sistar Co are concerned that they are not currently applying best practice...\n\nThe board is in the final stages of establishing the IA department. Select one option from each column which provides appropriate recommendations to improve the effectiveness and independence of the IA department. (Reports to: Finance director/Audit committee/Chief executive) (Head of IA: Maria Marquez/Paul Belling) (Remaining staff members: Appoint more senior staff with audit experience/No changes needed/All staff should be new to the company)",
  "type": "mcq",
  "choices": {
    "A": "Audit committee, Maria Marquez, Appoint more senior staff with audit experience",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "To ensure effectiveness of the internal audit function, it should report into the audit committee. Maria Marquez should be appointed as she has audit experience and is independent. More staff should be appointed with audit experience."
},
    {
  "number": 32,
  "text": "The board of directors of Sistar Co are concerned that they are not currently applying best practice...\n\nThe board has started to compile a list of tasks for the IA department. It has been agreed that the first assignment will be for IA to review Sistar Co's processes over asset expenditure to verify if the right items are purchased at an appropriate time and competitive price. What type of internal audit assignment does this represent?",
  "type": "mcq",
  "choices": {
    "A": "A value for money audit",
    "B": "A management audit",
    "C": "A financial audit",
    "D": "An IT audit"
  },
  "answer": "A",
  "explanation": "The assignment focuses on assessing the economy, efficiency and effectiveness of asset expenditure, which represents a value for money audit."
},
    {
  "number": 33,
  "text": "The board of directors of Sistar Co are concerned that they are not currently applying best practice...\n\nWhen deciding on the role of the IA department in undertaking operational audits, which TWO of the following should the team NOT be involved in?",
  "type": "multi-select",
  "choices": {
    "A": "Observing procedures carried out by Sistar Co's staff",
    "B": "Reperforming procedures documented in procedures manuals",
    "C": "Designing and implementing internal control procedures to address deficiencies",
    "D": "Reporting findings directly to the board of directors",
    "E": "Authorising transactions and performing reconciliations"
  },
  "answer": [
    "C",
    "E"
  ],
  "explanation": "Authorising transactions and performing reconciliations are control procedures. Internal audit should not design and implement internal control procedures as this creates a self-review threat."
},
    {
  "number": 34,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nWhich of the following is the LEAST appropriate response in relation to fee income received by Bark & Co from Foliage Co?",
  "type": "mcq",
  "choices": {
    "A": "Bark & Co should assess whether audit and non-audit fees would represent more than 15% of gross practice income for two consecutive years",
    "B": "If the recurring fees are likely to exceed 15% of annual practice income this year Bark will need to resign as auditors of Foliage Co",
    "C": "If the recurring fees are likely to exceed 15% of annual practice income this year, additional consideration should be given as to whether the taxation and audit-related services should be undertaken by the firm",
    "D": "If the fees do exceed 15% this should be disclosed to those charged with governance at Foliage Co"
  },
  "answer": "B",
  "explanation": "Resigning as auditor would only be required if all other options do not reduce the threat to an acceptable level."
},
    {
  "number": 35,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nWhat action should Kim Baum have taken when the possibility of employment with Foliage Co arose?",
  "type": "mcq",
  "choices": {
    "A": "Kim should have notified Bark & Co of the potential employment so he could be removed from the audit team",
    "B": "Kim should have declined the offer of employment",
    "C": "Kim should not have applied for employment with an audit client while employed by Bark & Co",
    "D": "Kim should have asked for permission from Bark & Co before applying for a job with Foliage Co"
  },
  "answer": "A",
  "explanation": "The ACCA Code of Ethics and Conduct requires individuals to notify the firm of the possibility of employment with an audit client so they can be removed from the audit team."
},
    {
  "number": 36,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nWhich ethical threat will be created when Kim Baum commences employment with the client and what action should be taken to manage the threat?",
  "type": "mcq",
  "choices": {
    "A": "Option A (Intimidation - The manager should not be allowed to take the role)",
    "B": "Option B (Familiarity - The composition of the audit team must be reviewed and changed)",
    "C": "Option C (Confidentiality - The manager should not be allowed to take the role)",
    "D": "Option D (Self-review - The composition of the audit team must be reviewed and changed)"
  },
  "answer": "B",
  "explanation": "There will be a familiarity threat because of Kim Baum's relationship with the audit team. The audit team composition must be reviewed and changed as appropriate."
},
    {
  "number": 37,
  "text": "You are an audit manager in Bark & Co and have been assigned to the audit of Foliage Co...\n\nSelect whether the following statements describe a rulebook approach or a conceptual framework approach to ethics. (Clearly defined laws for the auditor to follow)",
  "type": "mcq",
  "choices": {
    "A": "Rule book approach",
    "B": "Conceptual framework approach"
  },
  "answer": "A",
  "explanation": "Laws clearly outline what is acceptable and not acceptable in specific circumstances, which is a rulebook approach."
},
    {
  "number": 38,
  "text": "You are an audit manager in Miranda & Co and you are planning the audit of Milberry Co...\n\nWhich is the MOST appropriate response to the outstanding fees from Milberry Co?",
  "type": "mcq",
  "choices": {
    "A": "The auditor should resign from the client",
    "B": "The auditor should report the client to the ACCA",
    "C": "The auditor can continue working for the client but should ensure that the audit firm's credit control department are informed of the outstanding fees",
    "D": "The auditor's report for this year should not be issued until the fees have been paid"
  },
  "answer": "D",
  "explanation": "The audit firm must request that the fees are paid and must not issue this year's auditor's report until the fees have been paid."
},
    {
  "number": 39,
  "text": "You are an audit manager in Miranda & Co and you are planning the audit of Milberry Co...\n\nWhich of the following statements in respect of the relationship between the new financial controller and the audit firm are TRUE?",
  "type": "mcq",
  "choices": {
    "A": "The audit approach should be revised to ensure procedures and items to be tested are not predictable",
    "B": "The audit team should comprise people who know the audit senior as this will make the audit run more smoothly and increase efficiency",
    "C": "The firm must resign as auditor as the threat to objectivity is too significant to safeguard",
    "D": "The audit senior should not be allowed to be the financial controller and should resign"
  },
  "answer": "A",
  "explanation": "The audit will need to be planned carefully to ensure that the work is not predictable, especially as the new financial controller is an ex-employee of the firm and will know the firm's procedures."
},
    {
  "number": 40,
  "text": "You are an audit manager in Miranda & Co and you are planning the audit of Milberry Co...\n\nSelect the option which correctly identifies whether or not a self-review threat is likely to arise in relation to the tax services requested. (Tax return: Yes/No, Tax advice: Yes/No)",
  "type": "mcq",
  "choices": {
    "A": "Option A (Yes, Yes)",
    "B": "Option B (No, No)",
    "C": "Option C (Yes, No)",
    "D": "Option D (No, Yes)"
  },
  "answer": "D",
  "explanation": "Preparation of tax returns does not generally create a self-review threat as it is mechanical. Provision of tax advice could create a significant self-review threat."
},
    {
  "number": 41,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nWhich TWO of the following statements are TRUE in respect of the conflict of interest between Winnie Co and Piglet Co?",
  "type": "multi-select",
  "choices": {
    "A": "Tigger & Co must decline the audit engagement of Piglet Co",
    "B": "Winnie Co and Piglet Co may be concerned that commercially sensitive information may be disclosed by Tigger & Co to their competitor",
    "C": "Tigger & Co must ask permission of ACCA before accepting the audit of Piglet Co",
    "D": "Tigger & Co must obtain consent of both clients before continuing with the engagements"
  },
  "answer": [
    "B",
    "D"
  ],
  "explanation": "The audit firm must obtain consent from both firms. If consent is not given, the firm must decide which client to keep."
},
    {
  "number": 42,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nWhich of the following is NOT an action that your firm should take to manage the conflict of interest between Winnie Co and Piglet Co?",
  "type": "mcq",
  "choices": {
    "A": "Monitoring of safeguards by an engagement quality reviewer",
    "B": "Require every employee of Tigger & Co to sign a confidentiality agreement",
    "C": "Use separate engagement teams and engagement partners for each client",
    "D": "Operate secure data filing of all audit information"
  },
  "answer": "B",
  "explanation": "The audit teams of each client would sign a confidentiality agreement but it would not be necessary to have all employees of the firm sign confidentiality agreements."
},
    {
  "number": 43,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nIn relation to the proposal that 20% of the audit fee is based on the profit for the year of the company, which of the following statements is TRUE?",
  "type": "mcq",
  "choices": {
    "A": "This will lead to fee-dependency which is a self-interest threat. The proposal should be rejected.",
    "B": "This is a contingent fee arrangement which creates an advocacy threat. The proposal should only be accepted if no more than 15% of the audit fee is based on profit.",
    "C": "This is a contingent fee arrangement which creates a self-interest threat. The proposal should be rejected.",
    "D": "This will lead to fee-dependency which is a self-interest threat. The proposal should only be accepted if no more than 15% of the audit fee is based on profit."
  },
  "answer": "C",
  "explanation": "A contingent fee arrangement creates a self-interest threat. The proposal must be rejected as the ACCA Code does not allow contingent fee arrangements for assurance work."
},
    {
  "number": 44,
  "text": "You are an audit manager in Tigger & Co, a large audit firm which specialises in the car manufacturing industry...\n\nSelect whether the following statements are true or false in respect of the issue with Eeyore Co. (Senior management is correct that reporting the company will constitute a breach of confidentiality)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "B",
  "explanation": "In accordance with ISA 250, the auditor has increased responsibility when non-compliance is identified. If the client refuses to report and the breach is in the public interest, the auditor must report to the appropriate authority."
},
    {
  "number": 45,
  "text": "Cameron Co has recently become a listed company...\n\nWhich of the following can be a member of the audit committee once established?",
  "type": "mcq",
  "choices": {
    "A": "Ola Osbourne",
    "B": "Lindsay Lewis",
    "C": "Jules Jardine",
    "D": "Taylor Tahir"
  },
  "answer": "D",
  "explanation": "The audit committee must comprise independent NEDs. Taylor Tahir is the only independent NED listed."
},
    {
  "number": 46,
  "text": "Cameron Co has recently become a listed company...\n\nMatch the two issues given to the most appropriate response. (Issue 1: The board is not balanced / Issue 2: Executive directors are paid a fixed salary which increases annually in line with inflation)",
  "type": "mcq",
  "choices": {
    "A": "Issue 1: D (Appoint three more independent NEDs), Issue 2: C (Introduce share options)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "At least half the board should be independent NEDs. Executive directors' remuneration should include performance related pay linked with long-term success, such as share options."
},
    {
  "number": 47,
  "text": "Cameron Co has recently become a listed company...\n\nWhich of the following would NOT ensure Cameron Co is compliant with corporate governance principles?",
  "type": "mcq",
  "choices": {
    "A": "Jules Jardine should replace Ola Osbourne as chair",
    "B": "All directors should be subject to re-election this year",
    "C": "A Nomination Committee should be established",
    "D": "Directors contracts should be reviewed to ensure notice periods are one year or less"
  },
  "answer": "A",
  "explanation": "The chair must be independent on appointment. Jules Jardine has been a member of the board for ten years and independence is deemed compromised after more than nine years."
},
    {
  "number": 48,
  "text": "Cameron Co has recently become a listed company...\n\nSelect whether the following statements in relation to directors' remuneration are true or false. (Remuneration of directors should be set by the Nomination Committee)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "B",
  "explanation": "Remuneration should be set by the remuneration committee to ensure a fair and transparent process."
},
    {
  "number": 49,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nIn relation to the composition of the current audit team, select which of the fundamental principles is at risk and select an appropriate safeguard. (Fundamental principle options: 1 Integrity, 2 Professional competence and due care, 3 Confidentiality, 4 Objectivity) (Safeguard options: A Reinstate previous partner, B Resign from engagement, C Assign completely new audit team, D Provide industry training)",
  "type": "mcq",
  "choices": {
    "A": "2 (Professional competence and due care), D (Provide industry training)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Professional competence and due care is at risk as the audit team lacks relevant experience. The firm should offer appropriate training."
},
    {
  "number": 50,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nSelect the type of threat which could arise as a result of the finance director's relationship with the audit manager and select an appropriate safeguard. (Threat options: 1 Self-review, 2 Familiarity, 3 Advocacy) (Safeguard options: A Finance director must not have contact, B Firm should resign, C Different audit manager should be appointed)",
  "type": "mcq",
  "choices": {
    "A": "2 (Familiarity), C (Different audit manager should be appointed)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "There is a familiarity threat due to the ongoing relationship. A new audit manager should be appointed."
},
    {
  "number": 51,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nIdentify the threat created by each of the following non-audit services. (Routine maintenance of payroll records / Assistance with selection of new non-executive director / Tax services liaising with tax authority)",
  "type": "mcq",
  "choices": {
    "A": "Payroll: Self-review, Recruitment: Self-interest, Tax: Advocacy",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Payroll creates self-review as the auditor audits wages. Recruitment creates self-interest as the auditor selects an officer. Tax creates advocacy as the auditor represents the client's interest."
},
    {
  "number": 52,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nWhich of the following actions should the firm take to reduce the threat caused by the level of fees from Fir Co?",
  "type": "multi-select",
  "choices": {
    "A": "Use separate teams for audit and non-audit work",
    "B": "Obtain a pre-issuance review by an external accountant",
    "C": "Discuss the fee level with those charged with governance of Fir Co",
    "D": "Use separate teams, obtain a pre-issuance review, and discuss with those charged with governance"
  },
  "answer": [
    "A",
    "B",
    "D"
  ],
  "explanation": "All three actions should be taken to address the self-interest threat from fee levels."
},
    {
  "number": 53,
  "text": "Sycamore & Co is the auditor of Fir Co, a listed company operating in the computer software industry...\n\nWhich of the following is an appropriate action in relation to the requirement to provide tax services?",
  "type": "mcq",
  "choices": {
    "A": "The firm should not provide tax services as it will always create an advocacy threat",
    "B": "The firm should resign from the engagement to avoid the advocacy threat",
    "C": "The firm may provide tax services but an engagement quality review must be performed",
    "D": "The firm may provide tax services as long as it does not involve making management decisions"
  },
  "answer": "D",
  "explanation": "Tax services may be provided to an audit client if appropriate safeguards are applied and management decisions are not made."
},
    {
  "number": 54,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nTaking into account the concern of the ethics partner, which of the partners identified as potential replacements should take over the audit of Bush Co for the year ended 31 March 20X5?",
  "type": "mcq",
  "choices": {
    "A": "Brian Smith",
    "B": "Monty Nod",
    "C": "Cassie Dixon",
    "D": "Pete Russo"
  },
  "answer": "C",
  "explanation": "Cassie Dixon has no ongoing relationship with Bush Co and would be the most appropriate replacement to maintain independence."
},
    {
  "number": 55,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nWhich of the following correctly identifies the threats to Horti & Co's independence and proposes an appropriate course of action for the firm if Alan Marshlow accepts appointment as a non-executive director of Plant Co?",
  "type": "mcq",
  "choices": {
    "A": "Self-interest and familiarity - Can continue with appropriate safeguards",
    "B": "Self-interest and self-review - Must resign as auditor",
    "C": "Self-review and familiarity - Must resign as auditor",
    "D": "Familiarity only - Can continue with appropriate safeguards"
  },
  "answer": "B",
  "explanation": "Self-interest and self-review threats are created which are so significant that no safeguards can be implemented. Horti & Co would need to resign as auditor."
},
    {
  "number": 56,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nYou are separately considering Plant Co's request to provide internal audit services. Which of the following would result in Horti & Co assuming a management responsibility?",
  "type": "mcq",
  "choices": {
    "A": "1 and 3 (Designing internal controls / Determining reliance on IA for external audit)",
    "B": "2, 3 and 4 (Determining recommendations priority / Determining reliance on IA / Setting scope)",
    "C": "1, 2 and 4 (Designing controls / Determining priorities / Setting scope)",
    "D": "3 and 4 only (Determining reliance / Setting scope)"
  },
  "answer": "C",
  "explanation": "Designing internal controls, determining which recommendations to implement, and setting scope are decisions which should be taken by management, thus assuming management responsibility."
},
    {
  "number": 57,
  "text": "It is 1 July 20X5. You are an audit manager at Horti & Co and you are considering a number of ethical issues...\n\nWhich of the following actions should Horti & Co take to maintain its objectivity in relation to the level of fee income from Weed Co?",
  "type": "mcq",
  "choices": {
    "A": "1 and 4 only (Communicate to governance / Pre-issuance review)",
    "B": "3 and 4 only (Request advance payment / Pre-issuance review)",
    "C": "2 and 3 only (Separate teams / Advance payment)",
    "D": "1, 2, 3 and 4"
  },
  "answer": "A",
  "explanation": "Matters affecting independence must be disclosed to those charged with governance and a pre-issuance review should be carried out."
},
    {
  "number": 58,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following correctly identifies the threats to independence and proposes an appropriate course of action for the firm if any of the audit team takes advantage of the discount?",
  "type": "mcq",
  "choices": {
    "A": "Self-interest - Decline the offer",
    "B": "Advocacy - The offer can be accepted",
    "C": "Familiarity - Consider whether discount is given to employees",
    "D": "Intimidation - Continue with appropriate safeguards"
  },
  "answer": "A",
  "explanation": "The offer of gifts from an audit client can create threats of self-interest and familiarity. As the finance director commented that the offer is intended to influence behaviour, the offer is an inducement and must be declined."
},
    {
  "number": 59,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following actions should CL & Co take to maintain its objectivity in relation to the level of fee income from LV Fones Co?",
  "type": "mcq",
  "choices": {
    "A": "1 and 2 only (Ensure partner compensation not influenced by fees / Increase client base)",
    "B": "1, 2 and 3 (Plus pre or post-issuance review if fees exceed 30% for 5 years)",
    "C": "2 and 3 only",
    "D": "1 and 3 only"
  },
  "answer": "B",
  "explanation": "When fees from a non-listed client represent 30% of total fees for five consecutive years, the firm must take all three actions stated."
},
    {
  "number": 60,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following correctly identifies the threats to independence and proposes an appropriate course of action for the firm in respect of the audit senior's secondment to LV Fones Co?",
  "type": "mcq",
  "choices": {
    "A": "Self-interest and self-review - The audit senior should not have been seconded",
    "B": "Self-interest only - Assign audit senior to audit team to increase efficiency",
    "C": "Self-review only - Perform engagement quality review",
    "D": "Familiarity and self-review - Audit senior must not be assigned to the audit"
  },
  "answer": "D",
  "explanation": "A self-review threat will be created as the audit senior may audit areas they were responsible for. A familiarity threat may also be created from friendships developed during secondment."
},
    {
  "number": 61,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nWhich of the following actions should CL & Co take to maintain its objectivity in relation to the outstanding fees from LV Fones Co?",
  "type": "mcq",
  "choices": {
    "A": "1 and 3 only (Ask client to pay / Do not issue auditor's report)",
    "B": "2 and 3 only (Independent review / Do not issue report)",
    "C": "1, 2 and 3",
    "D": "1 only"
  },
  "answer": "B",
  "explanation": "All three actions should be taken by the audit firm if fees remain outstanding."
},
    {
  "number": 62,
  "text": "You are an audit manager in CL & Co... You are planning the audit of LV Fones Co...\n\nSelect one option from each column which identifies the type of ethical threat arising from the engagement partner's friendship with the finance director, and identifies an appropriate course of action.",
  "type": "mcq",
  "choices": {
    "A": "Familiarity, Remove audit partner from audit",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Friendships create a familiarity threat. The audit engagement partner has the most influence, so the only way to reduce the impact is to remove the partner from the audit."
},
    {
  "number": 63,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co... Mickey Co has approached NAB & Co to become its auditor...\n\nMatch the acceptance considerations with the MOST appropriate reason. (1. Previous audit firm resigned without notice / 2. Audit must be completed before 30 Sep / 3. Mickey Co is main competitor of Goofy Co)",
  "type": "mcq",
  "choices": {
    "A": "1: E (Management may lack integrity), 2: D (Firm may not have enough resource), 3: A (Threats to objectivity/confidentiality)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Difficulties retaining auditors may indicate lack of integrity. Tight deadline requires sufficient resources. Main competitor creates conflict of interest."
},
    {
  "number": 64,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co...\n\nWhat is the correct order of the steps that NAB & Co should take in respect of the conflict of interest arising? (1. Perform engagement quality review / 2. Obtain consent to act / 3. Implement safeguards / 4. Inform both clients)",
  "type": "mcq",
  "choices": {
    "A": "a) 3,1,4,2",
    "B": "b) 4,2,3,1",
    "C": "c) 2,4,3,1",
    "D": "d) 4,2,1,3"
  },
  "answer": "A",
  "explanation": "To manage the conflict: 1. Inform both clients, 2. Obtain consent, 3. Implement safeguards, 4. Perform engagement quality review."
},
    {
  "number": 65,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co...\n\nSelect one option which identifies the SIGNIFICANT ethical threat arising from the audit engagement partner's son working for Goofy Co, and identifies an appropriate course of action.",
  "type": "mcq",
  "choices": {
    "A": "Intimidation - Remove audit engagement partner from the audit",
    "B": "Familiarity - Structure partner's responsibilities",
    "C": "Self-interest - Inform Goofy Co it should not employ the partner's son"
  },
  "answer": "C",
  "explanation": "A significant self-interest threat is created by the son receiving shares. The partner will need to be removed from the audit."
},
    {
  "number": 66,
  "text": "It is 1 July 20X5. You are an audit manager in NAB & Co...\n\nWhich of the following statements is TRUE in respect of the request for assistance with recruitment of independent non-executive directors for Goofy Co?",
  "type": "mcq",
  "choices": {
    "A": "No threat arises and no safeguards are required",
    "B": "The audit engagement partner cannot provide assistance and another partner must provide assistance",
    "C": "The audit firm cannot provide assistance and the request must be declined",
    "D": "The audit engagement partner can provide the assistance but an engagement quality review must be performed"
  },
  "answer": "A",
  "explanation": "Reviewing qualifications and assessing competence does not generally create a threat to objectivity as the auditor is not making management decisions."
},
    {
  "number": 67,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhich of the following statements about the non-audit services that the directors of Kamari Co have asked Thira & Co to provide is TRUE?",
  "type": "mcq",
  "choices": {
    "A": "Thira & Co cannot accept both engagements for ethical reasons",
    "B": "Limited assurance will be provided by the review of the financial forecasts",
    "C": "The intended users in the engagement to review the financial forecasts will be Kamari Co's shareholders",
    "D": "Both engagements will be conducted under International Standards on Auditing"
  },
  "answer": "B",
  "explanation": "The projections are looking into the future, so only moderate (limited) assurance can be given."
},
    {
  "number": 68,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhich TWO of the following are potential DISADVANTAGES of Kamari Co outsourcing internal audit to Thira & Co?",
  "type": "multi-select",
  "choices": {
    "A": "A greater range of experience would be brought to the internal audit team",
    "B": "It could create a self-review threat during the external audit",
    "C": "It could create a conflict of interest with the financial forecast review",
    "D": "The internal audit function would have less understanding of the business"
  },
  "answer": [
    "B",
    "D"
  ],
  "explanation": "Outsourcing to the external audit provider creates a self-review threat. External staff visit periodically and would not understand the business as well."
},
    {
  "number": 69,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhich TWO of the following procedures would Thira & Co carry out if it was to accept the engagement to review the financial forecasts of Kamari Co?",
  "type": "multi-select",
  "choices": {
    "A": "Enquire with Kamari Co's bank as to the format of financial forecasts needed",
    "B": "Perform analytical review on previous year financial statements",
    "C": "Obtain a written representation from management",
    "D": "Enquire of Kamari Co's directors as to any assumptions made"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "The review of forecasts requires discussions with management to understand assumptions and obtaining written representations."
},
    {
  "number": 70,
  "text": "Kamari Co, a manufacturing company, has just reached the size at which local legislation requires it to have an external audit...\n\nWhat type of internal audit assignment does the review of procedures around sales orders and the processing of sales invoices represent?",
  "type": "mcq",
  "choices": {
    "A": "An operational audit",
    "B": "A financial audit",
    "C": "A value for money audit",
    "D": "An IT audit"
  },
  "answer": "B",
  "explanation": "Sales orders and sales invoice processing are part of the financial reporting process, therefore this is a financial audit."
},
    {
  "number": 71,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nWhich TWO of the following are appropriate responses to address the increased detection risk due to Veryan Co being a new audit client?",
  "type": "multi-select",
  "choices": {
    "A": "Extended controls testing should be performed",
    "B": "Obtain an understanding of Veryan Co",
    "C": "Consideration should be given to relying on the work of an independent expert",
    "D": "Reduce reliance on tests of controls",
    "E": "Contact the previous auditor to request working papers"
  },
  "answer": [
    "B",
    "E"
  ],
  "explanation": "To address increased detection risk, the auditor must spend time obtaining an understanding of the client and can request working papers from the previous auditor."
},
    {
  "number": 72,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nWhich of the following is the LEAST appropriate materiality level to be used in the audit of Veryan Co?",
  "type": "mcq",
  "choices": {
    "A": "$1.5 million",
    "B": "$1.0 million",
    "C": "$750,000",
    "D": "$475,000"
  },
  "answer": "A",
  "explanation": "Materiality ranges: Revenue (0.5-1% = $620k-$1,240k), Profit (5-10% = $475k-$950k). $1.5m is 16% of profit and 1.2% of revenue, too high."
},
    {
  "number": 73,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nSelect whether the following statements are consistent or not consistent with the movement in revenue. (Cut-off of revenue is an audit risk)",
  "type": "mcq",
  "choices": {
    "A": "Consistent",
    "B": "Not consistent"
  },
  "answer": "A",
  "explanation": "Revenue has increased by 24% compared with 12% previously. Revenue may be overstated due to cut-off errors where sales relating to next year are included in this year."
},
    {
  "number": 74,
  "text": "It is 1 July 20X5. You are planning the audit of Veryan Co for the year ending 31 July 20X5...\n\nMatch the audit risks given in the scenario with the MOST appropriate response. (1 Receivables / 2 Non-current assets / 3 Intangible assets (licences))",
  "type": "mcq",
  "choices": {
    "A": "Receivables: E (Review correspondence with customers), Non-current assets: G (Review management's impairment test), Intangible assets: F (Calculate expected amortisation)",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Receivables recoverability is assessed by reviewing correspondence. Non-current asset damage requires reviewing impairment test results. Intangible asset amortisation can be checked by calculating expected amortisation."
},
    {
  "number": 75,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nWhich of the following is an appropriate explanation of the audit risk relating to the bonus for Flute Co's sales team?",
  "type": "mcq",
  "choices": {
    "A": "There is an increased risk of a reduction in profit as a result of irrecoverable debts",
    "B": "There is an increased risk of inappropriate cut-off of revenue",
    "C": "There is an increased risk of understatement of revenue",
    "D": "There is an increased risk of non-response from customers following direct confirmation testing"
  },
  "answer": "B",
  "explanation": "The risk of revenue cut-off errors increases with employees aiming to maximise their current year bonus."
},
    {
  "number": 76,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nUsing the financial information provided, calculate the receivables collection period for 20X5. (Revenue $1,267,000, Receivables $121,000)",
  "type": "mcq",
  "choices": {
    "A": "35 days",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Receivables collection period = receivables/revenue × 365 = 121/1267 × 365 = 35 days."
},
    {
  "number": 77,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nWhich of the following is NOT an appropriate audit response to the significant risks relating to inventory and receivables?",
  "type": "mcq",
  "choices": {
    "A": "Inventory: Extend cut-off testing, Receivables: Extend cut-off testing",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Cut-off testing would not provide relevant evidence to the potential valuation issues."
},
    {
  "number": 78,
  "text": "It is 1 July 20X5. You are an audit manager in Woodwind & Co and you are planning the audit of Flute Co...\n\nWhich TWO of the following statements BEST describe the purpose of using analytical procedures during the planning stage of Flute Co's audit?",
  "type": "multi-select",
  "choices": {
    "A": "To help form an overall conclusion on the financial statements",
    "B": "To obtain relevant and reliable audit evidence",
    "C": "To assist with identification of risks of material misstatement",
    "D": "To assist in identifying unusual transactions and events"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "Analytical procedures at the planning stage help identify areas of potential risk and unusual transactions. Forming conclusions is for the completion stage, and obtaining evidence is for fieldwork."
},
    {
  "number": 79,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nIn relation to the movement in the payables payment period, which of the following statements is most relevant to the auditor's consideration of audit risk?",
  "type": "mcq",
  "choices": {
    "A": "The payables payment period has decreased which could indicate understatement of payables",
    "B": "The payables payment period has decreased which could indicate Epica Co is taking advantage of early payment discounts",
    "C": "The payables payment period has increased which could indicate Epica Co has cash flow problems",
    "D": "The payables payment period has increased which could indicate Epica Co is managing its working capital cycle"
  },
  "answer": "C",
  "explanation": "The payables payment period has increased by 28 days (from 55 to 83 days). This could indicate cash flow problems which the auditor will need to consider as part of its going concern assessment."
},
    {
  "number": 80,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich THREE of the following describe audit risks that should be addressed during the audit of Epica Co?",
  "type": "multi-select",
  "choices": {
    "A": "Inventory may be overstated if sales prices have fallen below cost",
    "B": "Provisions for the return of goods may be understated",
    "C": "Epica Co has experienced difficult trading conditions causing revenue to fall",
    "D": "Sales prices have been reduced which will impact profitability",
    "E": "Lower quality goods have been purchased resulting in complaints from customers",
    "F": "Inventory may be misstated if returned goods have not been recorded back into inventory"
  },
  "answer": [
    "A",
    "B",
    "F"
  ],
  "explanation": "These three describe how the financial statements may be materially misstated. The other options are business risks."
},
    {
  "number": 81,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich TWO of the following describe appropriate auditor responses to the audit risk related to the increase in the useful life of tangible non-current assets of Epica Co?",
  "type": "multi-select",
  "choices": {
    "A": "Calculate whether the change in depreciation charge is material. If not material, no further action is necessary",
    "B": "Discuss with the directors the reason for the change in useful life",
    "C": "Compare the actual useful life of tangible non-current assets recently disposed of to the new depreciation policy",
    "D": "Compare the fixtures and fittings depreciation rate this year to last year"
  },
  "answer": [
    "B",
    "C"
  ],
  "explanation": "These procedures will allow the auditor to assess the appropriateness of the change. Option 4 is of no audit value as the policy has changed. Option 1 ignores the need to assess appropriateness."
},
    {
  "number": 82,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich of the following correctly describes the term performance materiality?",
  "type": "mcq",
  "choices": {
    "A": "An amount which would affect the economic decisions of the users",
    "B": "The maximum amount of misstatement the auditor is willing to accept",
    "C": "An amount which reduces the probability that the aggregate of uncorrected and undetected misstatements exceeds materiality",
    "D": "An amount below which misstatements would be clearly trivial"
  },
  "answer": "C",
  "explanation": "Option 1 describes materiality. Option 2 describes tolerable misstatement. Option 4 describes a clearly trivial threshold."
},
    {
  "number": 83,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich of the following is the most appropriate action in respect of the financial controller being on long-term sick leave?",
  "type": "mcq",
  "choices": {
    "A": "Resign from the audit",
    "B": "Increase the use of management experts",
    "C": "Brief the audit team to exercise professional scepticism and request the finance director's assistance",
    "D": "Contact the previous auditor to request their working papers"
  },
  "answer": "C",
  "explanation": "There is no suggestion of any issue that would cause resignation. The team should be vigilant and request the finance director's assistance."
},
    {
  "number": 84,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich THREE of the following statements are TRUE in relation to the lack of supplier statement reconciliations?",
  "type": "multi-select",
  "choices": {
    "A": "The auditor should perform the supplier statement reconciliations for Hawk Co",
    "B": "There is an increased risk of misstatement of trade payables",
    "C": "Misstatements in the purchase accrual balance may go undetected",
    "D": "The auditor will need to send requests for confirmation of balances to suppliers",
    "E": "Increased substantive testing will need to be performed over purchases and payables"
  },
  "answer": [
    "B",
    "C",
    "E"
  ],
  "explanation": "Lack of reconciliations means misstatements may go undetected. Increased substantive testing is required. The auditor should not perform reconciliations as this is management's responsibility."
},
    {
  "number": 85,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nIn respect of the unfair dismissal claim, which of the following audit procedures is NOT appropriate?",
  "type": "mcq",
  "choices": {
    "A": "Review correspondence between the financial controller and the company",
    "B": "Review board meeting minutes",
    "C": "Review correspondence between the company and its lawyer",
    "D": "Discuss the claim with the financial controller"
  },
  "answer": "D",
  "explanation": "It would not be appropriate or professional for the auditor to discuss the claim with the financial controller, especially when legal proceedings are ongoing."
},
    {
  "number": 86,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich audit risks can be identified from the preliminary analytical procedures performed? (Gross profit margin decreased from 26% to 17%, Payables payment period decreased from 75 to 40 days, Receivables collection period increased from 29 to 38 days)",
  "type": "mcq",
  "choices": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "D",
  "explanation": "Gross margin decrease indicates website sales may not be completely recorded. Payables payment period decrease indicates understatement of payables. Receivables collection period increase indicates receivables may be overvalued."
},
    {
  "number": 87,
  "text": "It is 1 July 20X5. You are an audit supervisor with Teal & Co and you are planning the audit of Hawk Co...\n\nWhich of the following are reasons why analytical procedures will be performed during the planning of Hawk Co?",
  "type": "mcq",
  "choices": {
    "A": "1 only (Help identify areas of potential risk)",
    "B": "1 and 2 only (Help identify risks + Help obtain understanding)",
    "C": "1,2 and 3 (Plus detect material misstatements)",
    "D": "2 and 3 only"
  },
  "answer": "B",
  "explanation": "Analytical procedures at the planning stage are performed to help identify areas of potential risk and to obtain an understanding of the client. Detecting material misstatements is for substantive analytical procedures during fieldwork."
},
    {
  "number": 88,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nSelect which section of the audit strategy of Swandive Co the following matters would appear. (1 Risk of material misstatement including fraud / 2 Use of professional scepticism / 3 Selection of audit team / 4 Use of automated tools)",
  "type": "mcq",
  "choices": {
    "A": "1: C, 2: C, 3: D, 4: A",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Risk and scepticism are significant factors. Team selection relates to resources. Use of automated tools relates to characteristics of the engagement."
},
    {
  "number": 89,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nWith respect to the fraud at Swandive Co, which of the following statements is TRUE?",
  "type": "mcq",
  "choices": {
    "A": "This fraud is an example of fraudulent financial reporting",
    "B": "The auditor will need to reduce control risk",
    "C": "Detection risk will need to increase as a result of the fraud",
    "D": "The audit team should discuss the susceptibility of Swandive Co to fraud"
  },
  "answer": "D",
  "explanation": "The risk of fraud must always be discussed with the audit team in accordance with ISA 240. The fraud is misappropriation of assets, not financial reporting. Control risk is assessed, not reduced by auditor. Detection risk should decrease, not increase."
},
    {
  "number": 90,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nWhich of the following additional controls is most effective at preventing fraud of this type occurring again?",
  "type": "mcq",
  "choices": {
    "A": "An exception report should be generated when standing data is changed, reviewed by payroll manager",
    "B": "On a regular basis, department managers should be given a list of employees to check",
    "C": "The people working in the payroll department should not be related",
    "D": "The finance director should compare total payroll cost each month to prior month"
  },
  "answer": "C",
  "explanation": "If employees working together are related, there is an increased risk of collusion which would circumvent segregation of duties. This would help prevent frauds occurring."
},
    {
  "number": 91,
  "text": "It is 1 July 20X5. You are the audit manager responsible for the audit of Swandive Co...\n\nWhich THREE of the following procedures would assist in the detection of further frauds of this type at Swandive Co?",
  "type": "mcq",
  "choices": {
    "A": "Discuss with management whether they are aware of further frauds",
    "B": "Report the fraud to the police to deter other employees",
    "C": "Trace the amounts per payroll records to bank statements to identify anomalies",
    "D": "Analyse the bank details of all employees to identify duplicate bank accounts",
    "E": "Review HR records for names of employees and reconcile to bank transfer lists"
  },
  "answer": "A",
  "explanation": "Discussion with management may identify other suspected frauds. Searching for duplicate bank accounts and reconciling HR records to bank transfer lists would identify fictitious employees."
},
    {
  "number": 92,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nSelect whether the following advantages and disadvantages relate to narrative notes, internal control questionnaires or both. (Advantages: Can be prepared in advance / Easy to understand) (Disadvantages: May overstate the controls / Some controls may be missed)",
  "type": "mcq",
  "choices": {
    "A": "Can be prepared in advance: Internal control questionnaires, Easy to understand: Narrative notes, May overstate controls: Internal control questionnaires, Some controls may be missed: Narrative notes",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "ICQs are prepared in advance. Narrative notes are simple and easy to understand. ICQs may lead to overstatement of controls as management states they have listed controls. Narrative notes may miss unusual controls."
},
    {
  "number": 93,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nSelect whether the features of the purchases and payroll systems described are a strength or deficiency of the internal control system of Coastal Co. (1 Goods counted and agreed to supplier's delivery note before signing)",
  "type": "mcq",
  "choices": {
    "A": "Strength",
    "B": "Deficiency"
  },
  "answer": "B",
  "explanation": "The goods received should be agreed to the authorised purchase order before signing the delivery note to ensure only goods actually ordered are accepted. The supplier's delivery note records what has been sent, not what was ordered."
},
    {
  "number": 94,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nYou have reviewed the work of the audit junior and concluded that reliance can be placed on the internal controls. What impact will this have on the nature and extent of substantive audit procedures to be performed at the final audit?",
  "type": "mcq",
  "choices": {
    "A": "Less importance can be placed on written representations from management",
    "B": "Greater use of tests of detail and less use of analytical procedures",
    "C": "Decreased sample sizes when performing substantive testing",
    "D": "Increased use of evidence from outside the entity"
  },
  "answer": "C",
  "explanation": "If reliance can be placed on internal controls, reduced substantive testing can be performed, including decreased sample sizes."
},
    {
  "number": 95,
  "text": "It is 1 July 20X5. You are an audit manager in Sandy & Co and you are responsible for the audit of Coastal Co...\n\nThe payroll section includes the following procedures. For each procedure select whether it is a test of control or a substantive procedure. (Recalculate the total of the bank transfer list)",
  "type": "mcq",
  "choices": {
    "A": "Test of control",
    "B": "Substantive procedure"
  },
  "answer": "B",
  "explanation": "Recalculating the total tests the payroll figure in the financial statements, therefore it is a substantive procedure."
},
    {
  "number": 96,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nMatch the control deficiencies to an appropriate explanation of the issue. (i Availability of inventory not checked at time of ordering)",
  "type": "mcq",
  "choices": {
    "A": "i: C, ii: A, iii: D, iv: B",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Not checking availability risks unfulfilled orders. Orders not recorded immediately risks incorrect despatch. No sequential numbering risks missing orders. Exceeding credit limits risks irrecoverable debts."
},
    {
  "number": 97,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nWhich TWO of the following are appropriate recommendations to address the credit limit system deficiency?",
  "type": "mcq",
  "choices": {
    "A": "Credit limits should be reviewed by a responsible official on a regular basis and amended as appropriate",
    "B": "Sales order clerks should be allowed to use discretion to raise credit limits to avoid losing revenue",
    "C": "The online ordering system should be programmed to allow orders up to a maximum of 5% in excess of credit limit",
    "D": "Orders which would cause a customer to exceed their credit limit should be sent to a responsible official for approval"
  },
  "answer": [],
  "explanation": "The system should not allow credit limits to be exceeded by any amount. Changes to credit limits should only be performed by a responsible senior official."
},
    {
  "number": 98,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nWhich of the following recommendations should be made to address deficiencies (ii) and (iii)? (Telephone orders not recorded immediately, Order forms not sequentially numbered)",
  "type": "mcq",
  "choices": {
    "A": "1 and 2",
    "B": "2 and 3 only",
    "C": "2,3 and 4",
    "D": "1,3 and 4"
  },
  "answer": "B",
  "explanation": "Orders should be sequentially pre-numbered with regular sequence checks, and orders should be entered directly into the system as the customer is placing the order."
},
    {
  "number": 99,
  "text": "It is 1 July 20X5. You are an audit supervisor with Izzy & Co, reviewing extracts from the sales and despatch systems documentation...\n\nWhich of the following statements is TRUE in respect of the review findings?",
  "type": "mcq",
  "choices": {
    "A": "The findings will be communicated to the shareholders at the annual general meeting",
    "B": "The recommendations will need to be actioned before the external audit commences",
    "C": "The findings should be reported directly to the board of directors rather than the finance director",
    "D": "The findings should be discussed with the external auditor before being communicated to the finance director"
  },
  "answer": "C",
  "explanation": "To increase independence, findings should be communicated to those charged with governance. Reporting to the finance director risks him perceiving deficiencies as criticism and not reporting to the board."
},
    {
  "number": 100,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich of the following is NOT a test of control in respect of Primrose Co's system?",
  "type": "mcq",
  "choices": {
    "A": "Trace a sample of purchase orders through to the approved supplier list",
    "B": "Trace a sales order through to the system and into the detailed sales listing to ensure it is recorded",
    "C": "Review a sample of purchases orders in the system to ensure they are authorised",
    "D": "Inspect copies of the back-ups taken to ensure these are taken on a daily basis"
  },
  "answer": "B",
  "explanation": "Tracing a transaction through the system to ensure it is recorded in the detailed sales listing is a substantive procedure testing completeness."
},
    {
  "number": 101,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nSelect whether the following controls identified in Primrose Co's systems are general or information processing controls. (Daily backups of the system)",
  "type": "mcq",
  "choices": {
    "A": "General",
    "B": "Information processing"
  },
  "answer": "A",
  "explanation": "Backups relate to the whole computer system, therefore they are general controls."
},
    {
  "number": 102,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich of the following procedures provides the MOST reliable evidence that the inventory system updates automatically once an order has been received?",
  "type": "multi-select",
  "choices": {
    "A": "Review inventory level, enter a sales order, and review inventory level again after the order has been placed",
    "B": "Count a sample of items of inventory and agree the quantities to the inventory system",
    "C": "Review the inventory report to identify unusually high or low quantities",
    "D": "Contact a sample of customers to enquire whether they have experienced delays"
  },
  "answer": [
    "A",
    "A",
    "A"
  ],
  "explanation": "Reviewing inventory levels immediately before and after a sales order has been processed enables the auditor to ensure the inventory level is updated automatically."
},
    {
  "number": 103,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich can be tested by placing a dummy sales order for a large quantity of goods into the system? Select all that apply.",
  "type": "mcq",
  "choices": {
    "A": "The inventory system is automatically updated to reflect inventory allocation",
    "B": "The system will flag if there is insufficient inventory to fulfil the order",
    "C": "When inventory falls to a minimum level a purchase order is automatically created",
    "D": "The purchase order is automatically sent electronically to the approved supplier"
  },
  "answer": "A",
  "explanation": "As all of the controls stated are computerised controls, a dummy order can be used to test them."
},
    {
  "number": 104,
  "text": "It is 1 July 20X5. You are an audit supervisor with Marigold & Co, reviewing extracts from documentation describing Primrose Co's systems...\n\nWhich TWO of the following procedures should be performed by Marigold & Co to identify whether the work of Primrose Co's internal audit department can be relied upon?",
  "type": "multi-select",
  "choices": {
    "A": "Review the internal auditor's working papers to ensure sufficient appropriate evidence has been obtained",
    "B": "Engage an independent expert to assess the new system and validate the reliability of IA's work",
    "C": "Reperform a sample of procedures performed by the internal auditor to ensure the same conclusion is reached",
    "D": "Assess whether Primrose Co has an audit committee. If so, the external auditor can rely on IA's work without further work"
  },
  "answer": [
    "A",
    "C"
  ],
  "explanation": "To rely on IA's work, the external auditor should review IA's working papers and reperform a sample of tests. The presence of an audit committee does not automatically mean IA's work is reliable."
},
    {
  "number": 105,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nFor each of the controls given below, select the type of control activity described. (The internal audit department agrees the physical assets to the asset register to ensure completeness)",
  "type": "mcq",
  "choices": {
    "A": "Physical or logical control",
    "B": "Verification",
    "C": "Reconciliation"
  },
  "answer": "C",
  "explanation": "Agreeing physical assets to the asset register is a reconciliation control activity."
},
    {
  "number": 106,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nWhich THREE of the following documents together provide persuasive evidence that assets purchased during the year have been authorised?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3 (Requisition, Order, GRN)",
    "B": "2,3 and 4 (Order, GRN, Register)",
    "C": "3,4 and 5 (GRN, Register, Minutes)",
    "D": "1,2 and 5 (Requisition, Order, Minutes)"
  },
  "answer": "D",
  "explanation": "The requisition is approved by the asset expenditure committee. The purchase order is authorised by the purchasing director. The meeting minutes also contain evidence of approval."
},
    {
  "number": 107,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nWhich of the following is NOT a test of control the external auditor of Shroom Co may perform in relation to non-current assets?",
  "type": "mcq",
  "choices": {
    "A": "Inspect a sample of assets purchased for a serial number and trace this to the non-current asset register",
    "B": "Review a sample of goods received notes for evidence of the check against purchase order and condition",
    "C": "Compare actual asset expenditure with budgeted asset expenditure and investigate any variances greater than 5%",
    "D": "Review the internal audit working papers documenting the reconciliation of physical assets with the register"
  },
  "answer": "C",
  "explanation": "Comparing actual to budget is a substantive analytical procedure, not a test of control."
},
    {
  "number": 108,
  "text": "It is 1 July 20X5. Shroom Co is a manufacturer of vegetarian food...\n\nThe external auditor has this year expressed an interest in using some individuals from Shroom Co's internal audit department to provide direct assistance with external audit procedures. For which of the following areas would it be appropriate for internal audit to provide direct assistance?",
  "type": "mcq",
  "choices": {
    "A": "Assessing controls over non-current assets",
    "B": "Revenue recognition",
    "C": "Valuation of inventory",
    "D": "Performing cash counts"
  },
  "answer": "D",
  "explanation": "According to ISA 610, the external auditor must not assign work involving significant judgement, high risk of material misstatement, or with which the internal auditor has been involved. Cash counts are most appropriate."
},
    {
  "number": 109,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following would correctly explain why the payables payment period has increased from 45 days in 20X4 to 66 days in 20X5?",
  "type": "mcq",
  "choices": {
    "A": "Chester Co received a prompt payment discount from one of its suppliers for the first time",
    "B": "Chester Co obtained a trade discount which has reduced the amount owed",
    "C": "Chester Co purchased an unusually high level of goods in March and had not paid for them by year end",
    "D": "Chester Co took advantage of extended credit terms offered by a new supplier which it had fully settled by year end"
  },
  "answer": "C",
  "explanation": "A purchase of a large volume of goods close to the year end would increase the payables payment period."
},
    {
  "number": 110,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following is an appropriate action in respect of the inconsistency in the balance with Oxford Co?",
  "type": "mcq",
  "choices": {
    "A": "The auditor should take no further action as this is a timing difference",
    "B": "The auditor should request that the supplier's balance is amended",
    "C": "The auditor should contact the supplier and request a supplier statement as at the current date",
    "D": "The auditor should request that an accrual is created in respect of the goods received but not yet invoiced"
  },
  "answer": "D",
  "explanation": "The difference relates to goods received prior to year end but not recorded. An accrual should be created for goods received not yet invoiced."
},
    {
  "number": 111,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following would be a valid explanation for the difference in respect of Poole Co?",
  "type": "mcq",
  "choices": {
    "A": "1 only (Invoice paid twice)",
    "B": "1 and 2 only (Paid twice OR posted as debit note)",
    "C": "2 and 3 only",
    "D": "1,2 and 3"
  },
  "answer": "A",
  "explanation": "The difference may have arisen if the invoice had been paid twice in error as an additional $156,403 will have been debited to the supplier account."
},
    {
  "number": 112,
  "text": "It is 1 July 20X5. Chester Co manufactures and sells pet toys...\n\nWhich of the following would NOT provide sufficient and appropriate audit evidence over the COMPLETENESS of the trade payables balance in respect of Bath Co?",
  "type": "mcq",
  "choices": {
    "A": "Obtain the journal and confirm invoices dated 29-31 March have been manually adjusted",
    "B": "Review the accruals listing to ensure goods received post year end for which an invoice has not been received have been recorded",
    "C": "For post-year-end cash payments, confirm date of matching invoice and if pre year end, agree to liability",
    "D": "Review a sample of invoices received post year end and match to GRN to determine if they should have been recorded at year end"
  },
  "answer": "B",
  "explanation": "Reviewing the accruals listing would not help confirm the trade payables balance as accruals are recorded separately from trade payables."
},
    {
  "number": 113,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nWhich of the following statements explains the CUT-OFF assertion for wages and salaries?",
  "type": "mcq",
  "choices": {
    "A": "Wages and salaries have been fairly allocated within the statement of profit or loss",
    "B": "Wages and salaries have been appropriately calculated taking into account all relevant taxation costs",
    "C": "Wages and salaries which have been incurred have been accounted for in respect of all personnel",
    "D": "Wages and salaries accounted for relate to the current year ended 31 March 20X5"
  },
  "answer": "D",
  "explanation": "The cut-off assertion relates to transactions being recorded in the correct accounting period. In this case, payroll costs reflect payroll transactions for the period to 31 March 20X5."
},
    {
  "number": 114,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nThe following audit evidence has been gathered relating to the accuracy of wages and salaries. Rank the evidence from most reliable to least reliable. (1 Proof-in-total calculation by audit team, 2 Written representation from directors, 3 Verbal confirmation from finance director, 4 Recalculation by internal audit team member)",
  "type": "mcq",
  "choices": {
    "A": "1,2,3,4",
    "B": "1,4,2,3",
    "C": "4,1,2,3",
    "D": "4,1,3,2"
  },
  "answer": "A",
  "explanation": "Auditor generated evidence (proof-in-total) is most reliable. Internal audit work is next. Written representation is client generated. Verbal confirmation is least reliable."
},
    {
  "number": 115,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nThe prior year financial statements for Walker Co included $17 million for wages and salaries. What would be the estimated current year wages and salaries expense, ignoring redundancy costs?",
  "type": "mcq",
  "choices": {
    "A": "$16,740,000",
    "B": "$16,893,000",
    "C": "$16,815,000",
    "D": "$18,600,000"
  },
  "answer": "A",
  "explanation": "Prior year: $17m. Redundancies: 10% reduction = $15.3m. Pay rise 6% for 10/12 months = $0.765m. Bonus: 450 × $1,500 = $0.675m. Total = $16.74m."
},
    {
  "number": 116,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nSelect which TWO of the following are substantive ANALYTICAL PROCEDURES for wages and salaries.",
  "type": "multi-select",
  "choices": {
    "A": "Trace total wages expense per payroll system to draft financial statements",
    "B": "Recalculate gross/net pay for a sample of employees",
    "C": "Compare current year total payroll expense to prior year and investigate differences",
    "D": "Perform a proof-in-total calculation and compare expected expense to actual expense"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "Analytical procedures evaluate trends and relationships. Comparison to prior year and proof-in-total are both substantive analytical procedures. The other options are tests of detail."
},
    {
  "number": 117,
  "text": "It is 1 July 20X5. You are an audit senior in Jones & Co and are currently performing the final audit of Walker Co...\n\nIn respect of the revenue procedures included in the audit plan, select the assertion being tested. (1 Review treatment of post-year-end returns)",
  "type": "mcq",
  "choices": {
    "A": "Accuracy",
    "B": "Completeness",
    "C": "Occurrence"
  },
  "answer": "C",
  "explanation": "Post-year-end returns would mean the transaction had not really occurred and should be removed from sales, testing the occurrence assertion."
},
    {
  "number": 118,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nWhich of the following audit procedures should be performed in relation to the balance with Lily Co to determine if the payables balance is understated?",
  "type": "mcq",
  "choices": {
    "A": "Inspect the goods received note to determine when the goods were received",
    "B": "Inspect the purchase order to confirm it is dated before the year end",
    "C": "Review the post-year-end bank ledger account for evidence of payment",
    "D": "Send a confirmation request to Lily Co to confirm the outstanding balance"
  },
  "answer": "A",
  "explanation": "To determine if the balance is understated, the auditor should determine if the goods should be included in payables at year end by inspecting the goods received note."
},
    {
  "number": 119,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nWhich of the following audit procedures be carried out to confirm the balance owing to Carnation Co?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3",
    "B": "1 and 3 only",
    "C": "1 and 2 only",
    "D": "2 and 3 only"
  },
  "answer": "C",
  "explanation": "To confirm the balance, the auditor must determine if the liability exists by reviewing pre-year-end goods returned notes and post-year-end credit notes to verify that goods have been returned."
},
    {
  "number": 120,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nWhat would be an appropriate course of action on the basis of these results? (4,000 error in sample from control weakness, plus one-off error of 25,000)",
  "type": "mcq",
  "choices": {
    "A": "The error is immaterial and therefore no further work is required",
    "B": "The effect of the control error should be projected to the population",
    "C": "Poppy Co should be asked to adjust the payables figure by $45,000",
    "D": "A different sample should be selected as these results are not reflective of the population"
  },
  "answer": "B",
  "explanation": "The effect of the error must be considered in relation to the whole population. It is not appropriate to project a one-off error across the population."
},
    {
  "number": 121,
  "text": "You are an audit senior of Viola & Co and are currently conducting the audit of Poppy Co...\n\nSelect whether the following are examples of using test data or audit software for payables testing. (Selecting a sample of supplier balances for testing using monetary unit sampling)",
  "type": "mcq",
  "choices": {
    "A": "Test data",
    "B": "Audit software"
  },
  "answer": "B",
  "explanation": "Monetary unit sampling is a function of audit software. Test data involves inputting dummy transactions."
},
    {
  "number": 122,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich of the following substantive procedures will provide the MOST reliable evidence as to the recoverability of the outstanding balance from Albatross Co?",
  "type": "mcq",
  "choices": {
    "A": "Obtain a direct confirmation letter from Albatross Co",
    "B": "Review the payment history of Albatross Co",
    "C": "Review correspondence between Albatross Co and Eagle",
    "D": "Review post-year-end cash receipts from Albatross Co"
  },
  "answer": "D",
  "explanation": "Reviewing post-year-end receipts will confirm actual recoverability of the outstanding balance, providing the most reliable evidence."
},
    {
  "number": 123,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich TWO of the following substantive procedures will provide evidence over the EXISTENCE of Eagle's trade receivables other than the balance owing from Albatross Co?",
  "type": "multi-select",
  "choices": {
    "A": "Calculate the receivables collection period and compare with prior year",
    "B": "Perform a receivables circularisation",
    "C": "Review post-year-end cash receipts from customers",
    "D": "Recalculate the allowance for irrecoverable receivables"
  },
  "answer": [
    "B",
    "C"
  ],
  "explanation": "Receivables circularisation and after-date cash receipts testing provide evidence over existence. The other options relate to valuation."
},
    {
  "number": 124,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich TWO of the following factors may indicate overvaluation of inventory at Eagle?",
  "type": "multi-select",
  "choices": {
    "A": "Increased competition resulting in a decrease in selling price",
    "B": "Increased inventory levels",
    "C": "Increased inventory turnover ratio",
    "D": "Inventory consists of heating and plumbing equipment",
    "E": "Inclusion of third-party inventory within Eagle's inventory balance"
  },
  "answer": [
    "A",
    "B"
  ],
  "explanation": "Decrease in selling price may result in NRV being below cost. Increased inventory levels for a company experiencing reduced sales may result in NRV being lower than cost."
},
    {
  "number": 125,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nSelect whether the following are tests of control or substantive procedures in relation to Eagle's inventory balance. (Observe the client's staff to ensure following the inventory count instructions)",
  "type": "mcq",
  "choices": {
    "A": "Test of control",
    "B": "Substantive procedure"
  },
  "answer": "A",
  "explanation": "Observing the count to ensure the count instructions are followed provides evidence that controls over the inventory count are operating effectively."
},
    {
  "number": 126,
  "text": "It is 1 July 20X5. You are an audit supervisor in Seagull & Co and you are currently performing the audit of Eagle Heating Co...\n\nWhich of the following are appropriate audit responses to the lawsuit?",
  "type": "mcq",
  "choices": {
    "A": "2 and 3 only (Inspect correspondence with legal advisers / Review board minutes)",
    "B": "2,3 and 4",
    "C": "1,3 and 4",
    "D": "1 and 4 only"
  },
  "answer": "A",
  "explanation": "The auditor should inspect correspondence with legal advisers and review board minutes. Contacting the customer directly is not appropriate."
},
    {
  "number": 127,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nWhich of the following assertions are tested by the procedures included in the audit programme for additions?",
  "type": "mcq",
  "choices": {
    "A": "1 and 3 only (Completeness and Existence)",
    "B": "2 and 4 only (Classification and Accuracy)",
    "C": "1,3 and 4 only (Completeness, Existence, Accuracy)",
    "D": "1,2,3 and 4"
  },
  "answer": "C",
  "explanation": "Tracing additions to bank and invoice tests existence and accuracy. The analytical procedure tests completeness. Classification is not tested by these procedures."
},
    {
  "number": 128,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nWhich TWO of the following are substantive audit procedures for testing depreciation?",
  "type": "mcq",
  "choices": {
    "A": "Review the non-current asset register to ensure assets are assigned a useful life",
    "B": "Perform a proof in total for the depreciation charge and investigate significant differences",
    "C": "Review the board minutes for evidence of approval of useful lives",
    "D": "Discuss with management the reasons for the $300,000 difference in current year depreciation compared to prior year"
  },
  "answer": [],
  "explanation": "Proof-in-total and comparison with prior year are analytical procedures and are substantive procedures. The other options are tests of controls."
},
    {
  "number": 129,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nRecalculate the expected loss on disposal of Property A. (Property cost $6m, sold for 40% of original cost after 7 years, depreciated 5% per annum straight line)",
  "type": "mcq",
  "choices": {
    "A": "$1.5 million",
    "B": "$2.1 million",
    "C": "$2.4 million",
    "D": "$3.9 million"
  },
  "answer": "A",
  "explanation": "Accumulated depreciation: $6m × 0.05 × 7 = $2.1m. Carrying amount: $6m - $2.1m = $3.9m. Proceeds: $6m × 40% = $2.4m. Loss: $3.9m - $2.4m = $1.5m."
},
    {
  "number": 130,
  "text": "It is 1 July 20X5. You are an audit supervisor at York & Co, and you are involved in the audit of Lancaster Co...\n\nIn respect of the revaluation, which TWO of the following statements regarding reliance on the external expert are TRUE?",
  "type": "multi-select",
  "choices": {
    "A": "Reliance can only be placed on an expert appointed by York & Co",
    "B": "Obtaining the valuation report would constitute sufficient and appropriate evidence",
    "C": "Reference to the work of the external expert should not be included in the auditor's report",
    "D": "The objectivity of the valuer must be assessed before placing reliance"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "The auditor takes sole responsibility for the audit opinion, so no reference to the expert should be made. The auditor must evaluate the objectivity of a management's expert."
},
    {
  "number": 131,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nWhich THREE of the following should be considered when deciding whether to use sampling?",
  "type": "multi-select",
  "choices": {
    "A": "The time the auditor has available to perform the procedures",
    "B": "Appropriateness of the population",
    "C": "The size of the population",
    "D": "Completeness of the population",
    "E": "The ease with which the information is expected to be available"
  },
  "answer": [
    "B",
    "C",
    "D"
  ],
  "explanation": "The population must be complete, accurate, and appropriate. If the population size is small, sampling may not be efficient. Time and ease should not influence audit procedures."
},
    {
  "number": 132,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nIdentify whether the selection methods described represent sampling. (1 Test every 100th item from a random start point)",
  "type": "mcq",
  "choices": {
    "A": "Sampling",
    "B": "Not sampling"
  },
  "answer": "A",
  "explanation": "Procedure 1 describes systematic sampling, which is a sampling method given in ISA 530 Audit Sampling."
},
    {
  "number": 133,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nIn respect of procedure 1, if the method stated to test every 100th item, which method would be described?",
  "type": "mcq",
  "choices": {
    "A": "Monetary unit selection",
    "B": "Random selection",
    "C": "Systematic selection",
    "D": "Block selection"
  },
  "answer": "C",
  "explanation": "Systematic sampling is where a sample is chosen with a constant interval, with a random starting point."
},
    {
  "number": 134,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nIn relation to the procedures described, which of the following statements are TRUE?",
  "type": "mcq",
  "choices": {
    "A": "1,2,3 and 4",
    "B": "2 and 3 only",
    "C": "1 only",
    "D": "2,3 and 4"
  },
  "answer": "A",
  "explanation": "Procedure 1 tests accuracy, not occurrence. Procedures 2 and 3 address completeness. Procedure 2 uses client-generated evidence (least reliable). If supplier statements not retained, auditor should contact supplier directly."
},
    {
  "number": 135,
  "text": "It is 1 July 20X5. You are an audit senior in Thor & Co and you have been assigned to the audit of Hemsworth Co...\n\nDuring the testing of Hemsworth Co's payables balance, several misstatements were found. Which of the following is the most appropriate initial response your audit firm should take?",
  "type": "mcq",
  "choices": {
    "A": "Report the matter to the client",
    "B": "Increase the amount of testing",
    "C": "Suggest the audit opinion is modified",
    "D": "Discuss the issue with the audit manager"
  },
  "answer": "B",
  "explanation": "The amount of testing should be increased before any further action is taken. The issue should then be discussed with the audit manager before discussing with the client."
},
    {
  "number": 136,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nSelect whether the following explanations provide a valid explanation why audit risk increases when auditing 'around the computer'. (The actual computer files and programs are not tested therefore the auditor has no direct evidence that the programs are working as expected)",
  "type": "mcq",
  "choices": {
    "A": "Valid",
    "B": "Not valid"
  },
  "answer": "A",
  "explanation": "As the system within the computer is not audited, direct evidence that the programs are working as expected cannot be obtained."
},
    {
  "number": 137,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nWhich of the following is NOT a limitation of using audit software at Delphic Co?",
  "type": "mcq",
  "choices": {
    "A": "There may be substantial setup costs, especially where systems have not been fully documented",
    "B": "The computer audit department cannot confirm that all system documentation is available",
    "C": "There are over 600 customers on the system making the use of audit software inappropriate",
    "D": "The auditor will be provided with copy files and not be allowed any direct access"
  },
  "answer": "C",
  "explanation": "Having 600 customers makes the use of audit software much more beneficial, not inappropriate."
},
    {
  "number": 138,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nAssuming that audit software can be developed for use on Delphic Co's systems, which of the following procedures could be carried out on the receivables balance?",
  "type": "mcq",
  "choices": {
    "A": "1 and 2 only",
    "B": "1,3 and 4 only",
    "C": "2,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "B",
  "explanation": "All four procedures (casting, comparing to credit limits, stratifying balances, producing aged analysis) could be performed using audit software."
},
    {
  "number": 139,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nWhich THREE of the following statements are TRUE in relation to audit software?",
  "type": "multi-select",
  "choices": {
    "A": "As the systems are old the audit software may slow Delphic Co's system down",
    "B": "The audit software will test the programmed controls of Delphic Co",
    "C": "The use of audit software may save time resulting in greater efficiency",
    "D": "Audit staff may need to be trained to use the audit software",
    "E": "The audit will be more expensive each year audit software is used"
  },
  "answer": [
    "C",
    "D"
  ],
  "explanation": "Audit software may slow old systems. It saves time resulting in efficiency. Staff may need training. The audit will only be more costly in the year of set up."
},
    {
  "number": 140,
  "text": "It is 1 July 20X5. You are an audit senior in Apollo & Co assigned to the audit of Delphic Co...\n\nDelphic Co has informed you that they plan to implement a new computerised accounting system within the next year. Which of the following would represent an appropriate audit response?",
  "type": "mcq",
  "choices": {
    "A": "2 and 3 only",
    "B": "1 and 3 only",
    "C": "1 only",
    "D": "1,2 and 3"
  },
  "answer": "C",
  "explanation": "To save unnecessary time and expense, the audit firm should delay the use of audit software to ensure it is designed to work effectively with the new system."
},
    {
  "number": 141,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nWhich of the following statements is FALSE in respect of the notification regarding the cut in funding for Hightown?",
  "type": "mcq",
  "choices": {
    "A": "Audit risk will increase due to the threat to the going concern status",
    "B": "The auditor will need to review plans and forecasts to assess how the organisation will continue",
    "C": "The auditor's report for Hightown will not need to refer to going concern uncertainties as it is a local government authority",
    "D": "The auditor should review any plans Hightown has to reduce costs to assess whether this could realistically be achieved"
  },
  "answer": "C",
  "explanation": "An auditor's report for a local government authority will need to refer to going concern uncertainties in the same way as for a company."
},
    {
  "number": 142,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nCompleteness of income has been identified as a significant audit risk for the audit of Stargazers. Select THREE procedures which will help identify if income is understated.",
  "type": "mcq",
  "choices": {
    "A": "Compare income by shop and category to the prior year",
    "B": "Inspect credit notes issued post year end",
    "C": "Agree totals on till receipts to the detailed sales listing, bank statements and bank ledger account",
    "D": "Obtain the detailed sales listing and cast to confirm accuracy"
  },
  "answer": "A",
  "explanation": "These procedures help identify understatement. Inspection of credit notes would identify possible overstatement."
},
    {
  "number": 143,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nWhich of the following risks require specific consideration for the audit of Stargazers?",
  "type": "mcq",
  "choices": {
    "A": "1 and 4 only",
    "B": "1,3 and 4 only",
    "C": "1,2 and 3 only",
    "D": "1,2,3 and 4"
  },
  "answer": "B",
  "explanation": "All four risks (less segregation of duties, uncertainty over future funding, complexity of taxation rules, competence of volunteer staff) require specific consideration."
},
    {
  "number": 144,
  "text": "It is 1 July 20X5. You are an audit manager who specialises in the audit of not-for-profit (NFP) organisations...\n\nSelect whether the following statements are ALWAYS true, NEVER true or MAY be true in respect of the audit of a charity such as Stargazers. (Management will have no financial qualifications therefore there is a greater risk of material misstatement)",
  "type": "mcq",
  "choices": {
    "A": "Always true",
    "B": "May be true",
    "C": "Never true"
  },
  "answer": "B",
  "explanation": "Some charities, particularly larger ones, may have qualified, paid staff responsible for the financial statements. Smaller charities may rely heavily on volunteers."
},
    {
  "number": 145,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nWhich of the following provides the MOST reliable evidence in respect of the bonus issue of ordinary share capital?",
  "type": "mcq",
  "choices": {
    "A": "Bank statements",
    "B": "Share register",
    "C": "Companies House information",
    "D": "Notes of discussion with directors"
  },
  "answer": "C",
  "explanation": "Companies House (or equivalent) information provides independent third-party evidence of the number of shares in issue."
},
    {
  "number": 146,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nA dividend of $4 million was approved and paid in September 20X4. A dividend of $6 million has been proposed. How should each of the dividends be reflected?",
  "type": "mcq",
  "choices": {
    "A": "$4 million: Recognise in retained earnings, $6 million: Disclose in the notes",
    "B": "N/A",
    "C": "N/A",
    "D": "N/A"
  },
  "answer": "A",
  "explanation": "Dividends paid during the year are recognised. Proposed dividends not approved by year end cannot be recognised and should be disclosed."
},
    {
  "number": 147,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nIn respect of the revaluation of property, select the assertion tested by the following procedures. (Inspect the independent expert's report)",
  "type": "mcq",
  "choices": {
    "A": "Completeness",
    "B": "Cut-off",
    "C": "Valuation"
  },
  "answer": "C",
  "explanation": "The independent expert's report shows up-to-date values of the properties, testing the valuation assertion."
},
    {
  "number": 148,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nWhich TWO of the following statements are TRUE in relation to equity?",
  "type": "multi-select",
  "choices": {
    "A": "Equity is material by nature",
    "B": "The auditor must check that total equity is the same as total assets on the statement of financial position",
    "C": "The auditor will rely mainly on substantive analytical procedures when auditing equity",
    "D": "Movements in equity must be shown in the statement of changes in equity"
  },
  "answer": [
    "A",
    "D"
  ],
  "explanation": "Equity is material by nature. Movements in equity are shown in the statement of changes in equity. Total assets should equal total equity and liabilities, not just equity."
},
    {
  "number": 149,
  "text": "It is 1 July 20X5. You are an audit senior in Cork & Co and are currently performing the final audit of Bamboo Co...\n\nWhich of the following procedures should be performed to test COMPLETENESS of directors' emoluments?",
  "type": "mcq",
  "choices": {
    "A": "1,2,3 and 4",
    "B": "1 and 4 only",
    "C": "1,2 and 3 only",
    "D": "1,3 and 4 only"
  },
  "answer": "D",
  "explanation": "Procedure 2 (tracing from financial statements to bank) tests occurrence, not completeness. To test completeness, procedures must start from outside the accounting records."
},
    {
  "number": 150,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nWhich of the following is a valid explanation for the INCONSISTENCY between the results of the analytical procedures on trade receivables and the directors' statement regarding debt collection problems?",
  "type": "mcq",
  "choices": {
    "A": "A change in sales mix towards high value products",
    "B": "An increase in the proportion of cash sales since February 20X5",
    "C": "An increase in the rate of sales tax in March 20X5",
    "D": "Sales growth of 1% per month over the year"
  },
  "answer": "B",
  "explanation": "An increase in cash sales would increase sales but not trade receivables, resulting in a decreased receivables collection period."
},
    {
  "number": 151,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nWhich of the following details should be disclosed in respect of the revaluation of the head office if the auditor is to conclude that the disclosures are adequate?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3 only",
    "B": "1,3 and 4 only",
    "C": "2,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "B",
  "explanation": "The effective date, amount of revaluation increase, and carrying amount under the cost model are required by IAS 16. The name of the valuer is not required."
},
    {
  "number": 152,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nWhich of the uncorrected misstatements numbered (1), (2) and (3) by the audit team MUST be adjusted for if the auditor is to issue an unmodified audit opinion?",
  "type": "mcq",
  "choices": {
    "A": "Misstatements 2 and 3 only",
    "B": "Misstatements 1 and 3 only",
    "C": "Misstatements 1,2 and 3",
    "D": "Misstatement 2 only"
  },
  "answer": "A",
  "explanation": "Misstatements (2) and (3) are individually material and would require adjustment. Misstatement (1) is immaterial."
},
    {
  "number": 153,
  "text": "It is 1 July 20X5. Viola Co is a manufacturer of shoes. You are an audit manager in Cello & Co...\n\nAll adjustments required by the auditors have been made with the exception of adjustment (4) relating to the faulty goods. Which of the following correctly describes the effect of this matter on the auditor's report?",
  "type": "mcq",
  "choices": {
    "A": "Unmodified opinion with no further disclosure",
    "B": "Unmodified opinion with disclosure in an emphasis of matter paragraph",
    "C": "Qualified opinion due to material misstatement",
    "D": "Qualified opinion due to inability to obtain sufficient appropriate audit evidence"
  },
  "answer": "A",
  "explanation": "Misstatement (4) is immaterial at 2.2% of profit before income taxes ($2.9m/$131.4m) and would not require further disclosure. An unmodified opinion can be issued."
},
    {
  "number": 154,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nWhich of the following statements are true in respect of the reduction in samples sizes?",
  "type": "mcq",
  "choices": {
    "A": "1,2 and 3 only",
    "B": "2 and 4 only",
    "C": "1,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "A",
  "explanation": "The audit plan has not been followed. Sufficient appropriate evidence may not have been obtained. Material misstatements may go undetected. Conclusions cannot be deferred to the manager."
},
    {
  "number": 155,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nSelect whether the following statements are true or false in respect of the subsequent events review of Autumn Co. (Enquiry does not provide sufficient appropriate evidence on its own)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "A",
  "explanation": "Enquiry alone is not sufficient. Choosing to rely only on enquiry demonstrates a lack of professional scepticism."
},
    {
  "number": 156,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nAs a result of the quality issues encountered during the audit of Autumn Co, which of the following actions should now be taken?",
  "type": "mcq",
  "choices": {
    "A": "2 and 4 only",
    "B": "1 and 3 only",
    "C": "2,3 and 4 only",
    "D": "1,2,3 and 4"
  },
  "answer": "C",
  "explanation": "More frequent quality reviews, further training, and review of policies should be taken. The firm would not report staff to ACCA; this will be dealt with internally."
},
    {
  "number": 157,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nWhich of the following statements is FALSE in respect of engagement quality reviews?",
  "type": "mcq",
  "choices": {
    "A": "An engagement quality review should be documented in the audit file",
    "B": "An engagement quality review involves a discussion of the significant judgements",
    "C": "An engagement quality review can be performed after the auditor's report has been signed",
    "D": "Frequent communication between the EQR and audit team enhances effectiveness"
  },
  "answer": "C",
  "explanation": "Engagement quality reviews are performed on or before the date of the auditor's report, not after."
},
    {
  "number": 158,
  "text": "It is 1 July 20X5. You are an audit manager in Spring & Co responsible for the audit of Autumn Co...\n\nSelect whether the following statements are true or false in respect of review of audit working papers. (The audit engagement partner will review all working papers on the audit file before issuing an opinion)",
  "type": "mcq",
  "choices": {
    "A": "True",
    "B": "False"
  },
  "answer": "B",
  "explanation": "The partner will not review all working papers; they are reviewed by team members of appropriate seniority."
}
  ],
  FR: [
  {
    "number": 1,
    "text": "EW used its own staff, assisted by contractors when required, to construct a new warehouse for its own use. Identify whether the costs listed below should be capitalised or expensed. (Clearance of the site prior to commencement of construction / Professional surveyor fees for managing the construction work / EW's own staff wages for time spent working on construction / A proportion of EW's administration costs, based on staff time spent)",
    "type": "mcq",
    "choices": {
      "A": "All four should be capitalised",
      "B": "All four should be expensed",
      "C": "Clearance and surveyor fees capitalised; staff wages and administration costs expensed",
      "D": "Clearance, surveyor fees, and staff wages capitalised; administration costs expensed"
    },
    "answer": "D"
  },
  {
    "number": 2,
    "text": "On 1 July 20X4, Experimenter opened a chemical reprocessing plant. The plant was due to be active for five years until 30 June 20X9, when it would be decommissioned. At 1 July 20X4, the costs of decommissioning the plant were estimated to be $4 million in 5 years' time. Experimenter considers that a discount rate of 12% is appropriate for the calculation of a present value, and the discount factor at 12% for five years is 0.567. What is the total charge to the statement of profit or loss in respect of the decommissioning for the year ended 30 June 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$453,600",
      "B": "$725,760",
      "C": "$800,000",
      "D": "$2,268,000"
    },
    "answer": "B"
  },
  {
    "number": 3,
    "text": "An entity purchased property for $6 million on 1 July 20X3. The land element of the purchase was $1 million. The expected life of the building was 50 years and its residual value nil. On 30 June 20X5 the property was revalued to $7 million, of which the land element was $1.24 million and the buildings $5.76 million. On 30 June 20X7, the property was sold for $6.8 million. What is the gain on disposal of the property that would be reported in the statement of profit or loss for the year to 30 June 20X7?",
    "type": "mcq",
    "choices": {
      "A": "Gain $40,000",
      "B": "Loss $200,000",
      "C": "Gain $1,000,000",
      "D": "Gain $1,240,000"
    },
    "answer": "A"
  },
  {
    "number": 4,
    "text": "A manufacturing entity receives a grant of $1m towards the purchase of a machine on 1 January 20X3. The grant will be repayable if the entity sells the asset within 4 years, which it does not intend to do. The asset has a useful life of 5 years. What is the deferred income liability balance at 30 June 20X3?",
    "type": "mcq",
    "choices": {
      "A": "$0",
      "B": "$800,000",
      "C": "$900,000",
      "D": "$1,000,000"
    },
    "answer": "C"
  },
  {
    "number": 5,
    "text": "On 1 January 20X1 Stry received $1m from the local government on the condition that they employ at least 100 staff each year for the next 4 years. Due to an economic downturn and reduced consumer demand on 1 January 20X2, Stry no longer needed to employ any more staff and the conditions of the grant required full repayment. What should be recorded in the financial statements on 1 January 20X2?",
    "type": "mcq",
    "choices": {
      "A": "Reduce deferred income balance by $750,000",
      "B": "Reduce deferred income by $750,000 and recognise a loss of $250,000",
      "C": "Reduce deferred income by $1,000,000",
      "D": "Reduce deferred income by $1,000,000 and recognise a gain of $250,000"
    },
    "answer": "B"
  },
  {
    "number": 6,
    "text": "Which of the following properties owned by Scoop would be classified as an investment property?",
    "type": "mcq",
    "choices": {
      "A": "A property that had been leased to a tenant but which is no longer required and is now being held for resale",
      "B": "Land purchased for its investment potential. Planning permission has not been obtained for building construction of any kind",
      "C": "A new office building used as Scoop's head office, purchased specifically in order to exploit its capital gains potential",
      "D": "A stately home used for executive training"
    },
    "answer": "B"
  },
  {
    "number": 7,
    "text": "During the current year an entity had in place $1 million of 6% loan finance and $2 million of 9% loan finance. It constructed a new factory which cost $600,000 and this was funded out of the existing loan finance. The factory took 8 months to complete. To the nearest thousand, what borrowing costs should be capitalised?",
    "type": "mcq",
    "choices": {
      "A": "$32,000",
      "B": "$36,000",
      "C": "$48,000",
      "D": "$72,000"
    },
    "answer": "A"
  },
  {
    "number": 8,
    "text": "Which of the following statements is correct? Statement 1: If the revaluation model is used for property, plant and equipment, revaluations must subsequently be made with sufficient regularity to ensure that the carrying amount does not differ materially from the fair value at each reporting date. Statement 2: When an item of property, plant and equipment is revalued, there is no requirement that the entire class of assets to which the item belongs must be revalued.",
    "type": "mcq",
    "choices": {
      "A": "Statement 1 true, Statement 2 true",
      "B": "Statement 1 true, Statement 2 false",
      "C": "Statement 1 false, Statement 2 true",
      "D": "Statement 1 false, Statement 2 false"
    },
    "answer": "B"
  },
  {
    "number": 9,
    "text": "Pootle Co received a government grant of $60,000 on 1 September 20X4. The conditions of the grant state that Pootle Co must employ a local worker on a full-time contract over a five-year period. Pootle Co expects to meet the conditions of the grant. The full grant has been recorded as other income for the year ended 31 December 20X4. What is the adjustment required to account correctly for the grant as at 31 December 20X4?",
    "type": "mcq",
    "choices": {
      "A": "Debit Other income $56,000; Credit Total deferred income $56,000",
      "B": "Debit Other income $60,000; Credit Total deferred income $60,000",
      "C": "Debit Bank $56,000; Credit Other income $56,000",
      "D": "Debit Total deferred income $56,000; Credit Other income $56,000"
    },
    "answer": "A"
  },
  {
    "number": 10,
    "text": "Tibet acquired a new office building on 1 October 20X4. Its initial carrying amount consisted of: Land $2,000,000, Building structure $10,000,000, Air conditioning system $4,000,000. The estimated lives of the building structure and air conditioning system are 25 years and 10 years respectively. When the air conditioning system is due for replacement, it is estimated that the old system will be dismantled and sold for $500,000. Depreciation is time-apportioned where appropriate. At what amount will the office building be shown in Tibet's statement of financial position as at 31 March 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$15,625,000",
      "B": "$15,250,000",
      "C": "$15,585,000",
      "D": "$15,600,000"
    },
    "answer": "A"
  },
  {
    "number": 11,
    "text": "The following trial balance extract relates to a property which is owned by Veeton as at 1 April 20X4. Property at cost (20-year original life) $12,000,000 Dr; Accumulated depreciation as at 1 April 20X4 $3,600,000 Cr. On 1 October 20X4, following a sustained increase in property prices, Veeton revalued its property to $10.8 million. What will be the depreciation charge in Veeton's statement of profit or loss for the year ended 31 March 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$300,000",
      "B": "$400,000",
      "C": "$600,000",
      "D": "$700,000"
    },
    "answer": "D"
  },
  {
    "number": 12,
    "text": "Which TWO of the following statements about IAS 20 Accounting for Government Grants and Disclosure of Government Assistance are true?",
    "type": "multi-select",
    "choices": {
      "A": "A government grant related to the purchase of an asset must be deducted from the carrying amount of the asset in the statement of financial position.",
      "B": "A government grant related to the purchase of an asset should be recognised in profit or loss over the life of the asset.",
      "C": "Free marketing advice provided by a government department is excluded from the definition of government grants.",
      "D": "Any required repayment of a government grant received in an earlier reporting period is treated as prior period adjustment."
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "number": 13,
    "text": "Smithson Co purchased a new building with a 50-year life for $10 million on 1 January 20X3. On 30 June 20X5, Smithson Co moved out of the building and rented it out to third parties on a short-term lease. Smithson Co uses the fair value model for investment properties. At 30 June 20X5 the fair value of the property was $11 million and at 31 December 20X5 it was $11.5 million. What is the total net amount to be recorded in the statement of profit or loss in respect of the office for the year ended 31 December 20X5?",
    "type": "mcq",
    "choices": {
      "A": "Net income $400,000",
      "B": "Net income $500,000",
      "C": "Net income $1,900,000",
      "D": "Net income $2,000,000"
    },
    "answer": "A"
  },
  {
    "number": 14,
    "text": "Gilbert took out a $7.5 million 10% loan on 1 January 20X6 to build a new warehouse during the year. Construction of the warehouse began on 1 February 20X6 and was completed on 30 November 20X6. As not all the funds were needed immediately, Gilbert invested $2 million in 4.5% bonds from 1 January to 1 May 20X6. What are the total borrowing costs to be capitalised in respect of the warehouse?",
    "type": "mcq",
    "choices": {
      "A": "$602,500",
      "B": "$625,000",
      "C": "$647,500",
      "D": "$750,000"
    },
    "answer": "A"
  },
  {
    "number": 15,
    "text": "Croft acquired a building with a 40-year life for its investment potential for $8 million on 1 January 20X3. At 31 December 20X3, the fair value of the property was estimated at $9 million with costs to sell estimated at $200,000. If Croft Co uses the fair value model for investment properties, what gain should be recorded in the statement of profit or loss for the year ended 31 December 20X3?",
    "type": "mcq",
    "choices": {
      "A": "$800,000",
      "B": "$900,000",
      "C": "$1,000,000",
      "D": "$1,200,000"
    },
    "answer": "C"
  },
  {
    "number": 16,
    "text": "Which of the following CANNOT be recognised as an intangible non-current asset in GHK's consolidated statement of financial position at 30 September 20X1?",
    "type": "mcq",
    "choices": {
      "A": "GHK spent $132,000 developing a new type of product. In June 20X1 management worried that it would be too expensive to fund. The finances to complete the project came from a cash injection from a benefactor received in November 20X1.",
      "B": "GHK purchased a subsidiary during the year. During the fair value exercise, it was found that the subsidiary had a brand name with an estimated value of $50,000, but had not been recognised by the subsidiary as it was internally generated.",
      "C": "GHK purchased a brand name from a competitor on 1 November 20X0, for $65,000.",
      "D": "GHK spent $21,000 during the year on the development of a new product, after management concluded it would be viable in November 20X0. The product is being launched on the market on 1 December 20X1 and is expected to be profitable."
    },
    "answer": "A"
  },
  {
    "number": 17,
    "text": "Which of the following could be classified as development expenditure in M's statement of financial position as at 31 March 20Y0 according to IAS 38 Intangible Assets?",
    "type": "mcq",
    "choices": {
      "A": "$120,000 spent on developing a prototype and testing a new type of propulsion system. The project needs further work on it as the system is currently not viable.",
      "B": "A payment of $50,000 to a local university's engineering faculty to research new environmentally friendly building techniques.",
      "C": "$35,000 developing an electric bicycle. This is near completion and the product will be launched soon. As this project is first of its kind it is expected to make a loss.",
      "D": "$65,000 developing a special type of new packaging for a new energy-efficient light bulb. The packaging is expected to reduce M's distribution costs by $35,000 a year."
    },
    "answer": "D"
  },
  {
    "number": 18,
    "text": "Which TWO of the following factors are reasons why key staff cannot be capitalised as an intangible asset by an entity?",
    "type": "multi-select",
    "choices": {
      "A": "They do not provide expected future economic benefits",
      "B": "They cannot be controlled by an entity",
      "C": "Their value cannot be measured reliably",
      "D": "They are not separable from the business as a whole"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "number": 19,
    "text": "Amco Co carries out research and development. In the year ended 30 June 20X5 Amco Co incurred total costs in relation to project x of $750,000 spending the same amount each month up to 30 April 20X5, when the project was completed. The product produced by the project went on sale from 31 May 20X5. The project had been confirmed as feasible on 1 January 20X5, and the product produced by the project was expected to have a useful life of five years. What is the carrying amount of the development expenditure asset as at 30 June 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$295,000",
      "B": "$725,000",
      "C": "$300,000",
      "D": "$0"
    },
    "answer": "A"
  },
  {
    "number": 20,
    "text": "Sybil has acquired a subsidiary Basil in the current year. Basil has a brand which has been reliably valued by Sybil at $500,000 and a customer list which Sybil has been unable to value. Which of these describes how Sybil should treat these intangible assets of Basil in their consolidated Financial Statements?",
    "type": "mcq",
    "choices": {
      "A": "They should be included in goodwill.",
      "B": "The brand should be capitalised as a separate intangible asset, whereas the customer list should be included within goodwill.",
      "C": "Both the brand and the customer list should be capitalised as separate intangible assets.",
      "D": "The customer list should be capitalised as a separate intangible asset, whereas the brand should be included within goodwill."
    },
    "answer": "B"
  },
  {
    "number": 21,
    "text": "Dempsey Co owns a pharmaceutical business with a year-end of 30 September 20X4. Dempsey Co commenced the development stage of a new drug on 1 January 20X4. $40,000 per month was incurred until the project was completed on 30 June 20X4, when the drug went into immediate production. The directors became confident of the project's success on 1 March 20X4. The drug has an estimated life span of five years and time-apportionment is used by Dempsey where applicable. What amount will Dempsey charge to profit or loss for development costs, including any amortisation, for the year ended 30 September 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$12,000",
      "B": "$98,667",
      "C": "$48,000",
      "D": "$88,000"
    },
    "answer": "D"
  },
  {
    "number": 22,
    "text": "Which of the following statements relating to intangible assets is/are true? Statement 1: All intangible assets must be carried at amortised cost or at an impaired amount, they cannot be revalued upwards. Statement 2: The development of a new process which is not expected to increase sales revenues may still be recognised as an intangible asset.",
    "type": "mcq",
    "choices": {
      "A": "Statement 1 true, Statement 2 true",
      "B": "Statement 1 true, Statement 2 false",
      "C": "Statement 1 false, Statement 2 true",
      "D": "Statement 1 false, Statement 2 false"
    },
    "answer": "C"
  },
  {
    "number": 23,
    "text": "A division of an entity has the following balances in its financial statements: Goodwill $700,000, Plant $950,000, Building $2,300,000, Intangibles $800,000, Other net assets $430,000. Following a period of losses, the recoverable amount of the division is deemed to be $4 million. A recent valuation of the building showed that the building has a market value of $2.5 million. The other net assets are at their recoverable amount. The entity uses the cost model for valuing building and plant. To the nearest thousand, what is the balance on the building following the impairment review?",
    "type": "mcq",
    "choices": {
      "A": "$2,300,000",
      "B": "$2,500,000",
      "C": "$2,027,000",
      "D": "$1,776,000"
    },
    "answer": "A"
  },
  {
    "number": 24,
    "text": "A division of an entity has the following balances in its financial statements: Goodwill $700,000, Plant $950,000, Building $2,300,000, Intangibles $800,000, Other net assets $430,000. Following a period of losses, the recoverable amount of the division is deemed to be $4 million. A recent valuation of the building showed that the building has a market value of $2.5 million. The other net assets are at their recoverable amount. The entity uses the cost model for valuing building and plant. To the nearest thousand, what is the balance on plant following the impairment review?",
    "type": "mcq",
    "choices": {
      "A": "$689,000",
      "B": "$700,000",
      "C": "$750,000",
      "D": "$800,000"
    },
    "answer": "A"
  },
  {
    "number": 25,
    "text": "A vehicle was involved in an accident exactly halfway through the year. The vehicle cost $10,000 and had a remaining life of 10 years at the start of the year. Following the accident, the expected present value of cash flows associated with the vehicle was $3,400 and the fair value less costs to sell was $6,500. What is the recoverable amount of the vehicle following the accident?",
    "type": "mcq",
    "choices": {
      "A": "$3,400",
      "B": "$6,500",
      "C": "$9,900",
      "D": "$10,000"
    },
    "answer": "B"
  },
  {
    "number": 26,
    "text": "The net assets of Fyngle, a cash generating unit (CGU), are: Property, plant and equipment $200,000, Allocated goodwill $50,000, Product patent $20,000, Net current assets (at net realisable value) $30,000. As a result of adverse publicity, Fyngle has a recoverable amount of only $200,000. What would be the value of Fyngle's property, plant and equipment after the allocation of the impairment loss?",
    "type": "mcq",
    "choices": {
      "A": "$154,545",
      "B": "$170,000",
      "C": "$160,000",
      "D": "$133,333"
    },
    "answer": "A"
  },
  {
    "number": 27,
    "text": "Which of the following is NOT an indicator of impairment?",
    "type": "mcq",
    "choices": {
      "A": "Advances in the technological environment in which an asset is employed have an adverse impact on its future use.",
      "B": "An increase in interest rates which increases the discount rate an entity uses.",
      "C": "The carrying amount of an entity's net assets is higher than the entity's number of shares in issue multiplied by its share price.",
      "D": "The estimated net realisable value of inventory has been reduced due to fire damage although this value is greater than its carrying amount."
    },
    "answer": "D"
  },
  {
    "number": 28,
    "text": "Riley acquired a non-current asset on 1 October 20X9 at a cost of $100,000 which had a useful life of ten years and a nil residual value. The asset had been correctly depreciated up to 30 September 20Y4. At that date the asset was damaged and an impairment review was performed. On 30 September 20Y4, the fair value of the asset less costs to sell was $30,000 and the expected future cash flows were $8,500 per annum for the next five years. The current cost of capital is 10% and a five-year annuity of $1 per annum at 10% would have a present value of $3.79. What amount would be charged to profit or loss for the impairment of this asset for the year ended 30 September 20Y4?",
    "type": "mcq",
    "choices": {
      "A": "$17,785",
      "B": "$20,000",
      "C": "$25,000",
      "D": "$30,000"
    },
    "answer": "A"
  },
  {
    "number": 29,
    "text": "Metric owns an item of plant which has a carrying amount of $248,000 as at 1 April 20X3. It is being depreciated at 12.5% per annum on a reducing balance basis. The plant is used to manufacture a specific product which has been suffering a slow decline in sales. Metric has estimated that the plant will be retired from use on 31 March 20X7. The estimated net cash flows from the use of the plant and their present values are: Year to 31 March 20X5: $120,000 ($109,200 present value), Year to 31 March 20X6: $80,000 ($66,400 present value), Year to 31 March 20X7: $52,000 ($39,000 present value). What is the impairment loss to be recorded in the financial statements for the year ended 31 March 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$2,400",
      "B": "$31,000",
      "C": "$33,400",
      "D": "$214,600"
    },
    "answer": "A"
  },
  {
    "number": 30,
    "text": "On 1 April 20X4, a company classified a non-current asset as held for sale. At that date, the asset's carrying amount was $37.5 million, its fair value was estimated at $42 million and costs to sell at $1 million. On 30 September 20X4, the asset's fair value was $38 million and costs to sell were still $1 million. What amount should be reported for the asset in the statement of financial position at 30 September 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$36.8 million",
      "B": "$37.0 million",
      "C": "$37.5 million",
      "D": "$38.0 million"
    },
    "answer": "A"
  },
  {
    "number": 31,
    "text": "An asset which is classified as held for sale on 1 October 20X4 had a carrying amount of $800 and a fair value less costs to sell of $750 at that date. At 31 December 20X4, the fair value less costs to sell is $780. What is the correct carrying amount of the asset at 31 December 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$750",
      "B": "$780",
      "C": "$790",
      "D": "$800"
    },
    "answer": "A"
  },
  {
    "number": 32,
    "text": "According to IFRS 5 Non-current Assets Held for Sale and Discontinued Operations, which of the following is NOT a criterion for an asset to be classified as held for sale?",
    "type": "mcq",
    "choices": {
      "A": "The asset must be available for immediate sale in its present condition",
      "B": "The sale must be highly probable",
      "C": "The sale must be expected to be completed within one month of classification",
      "D": "Management must be committed to a plan to sell the asset"
    },
    "answer": "C"
  },
  {
    "number": 33,
    "text": "Identify which of the following items should be shown on the face of the statement of profit or loss rather than in the notes when accounting for discontinued operations.",
    "type": "mcq",
    "choices": {
      "A": "Revenue only",
      "B": "Gross profit only",
      "C": "Profit after tax only",
      "D": "Revenue, gross profit, and profit after tax"
    },
    "answer": "C"
  },
  {
    "number": 34,
    "text": "Rural has two sectors: Sector X (canned fruit) and Sector Y (fruit juice). During the year, Rural sold Sector Y. Sector Y contributed 30% of Rural's revenue. Rural also closed Sector X in Country A, which contributed 0.5% of Rural's revenue. Which of the following would be reported as discontinued operations?",
    "type": "mcq",
    "choices": {
      "A": "Sector X only",
      "B": "Sector Y only",
      "C": "Both Sector X and Sector Y",
      "D": "Neither Sector X nor Sector Y"
    },
    "answer": "B"
  },
  {
    "number": 35,
    "text": "What is the primary reason why discontinued operations are presented separately within financial statements?",
    "type": "mcq",
    "choices": {
      "A": "To show an accurate valuation of the business",
      "B": "To enhance the predictive nature of financial statements",
      "C": "To make the financial statements easier to understand",
      "D": "So the financial statements are verifiable"
    },
    "answer": "B"
  },
  {
    "number": 36,
    "text": "At 1 April 20X4, Tilly owned a property with a carrying amount of $800,000 which had a remaining estimated life of 16 years, and was carried under the cost model. On 1 October 20X4, Tilly decided to sell the property and correctly classified it as being 'held-for-sale'. A property agent reported that the property's fair value less costs to sell at 1 October 20X4 was expected to be $790,500 which had not changed at 31 March 20X5. What should be the carrying amount of the property in Tilly's statement of financial position as at 31 March 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$775,000",
      "B": "$790,500",
      "C": "$765,000",
      "D": "$750,000"
    },
    "answer": "A"
  },
  {
    "number": 37,
    "text": "Which of the following gives the best description of the objective of financial statements as set out by the International Accounting Standards Board's (The Board's) Conceptual Framework for Financial Reporting?",
    "type": "mcq",
    "choices": {
      "A": "To provide all information about the reporting entity that users need.",
      "B": "To fairly present the financial position, performance and changes in financial position of an enterprise.",
      "C": "To provide information about the value of the reporting entity to the users.",
      "D": "To provide financial information about the reporting entity that is useful to users in making decisions relating to providing resources to the entity."
    },
    "answer": "D"
  },
  {
    "number": 38,
    "text": "Which of the following statements relating to regulatory frameworks is/are true? Statement 1: Accounting standards on their own provide a complete regulatory framework. Statement 2: A regulatory framework is required to ensure that financial reporting meets the needs of primary users.",
    "type": "mcq",
    "choices": {
      "A": "Statement 1 true, Statement 2 true",
      "B": "Statement 1 true, Statement 2 false",
      "C": "Statement 1 false, Statement 2 true",
      "D": "Statement 1 false, Statement 2 false"
    },
    "answer": "C"
  },
  {
    "number": 39,
    "text": "The International Accounting Standards Board's Conceptual Framework for Financial Reporting lists two fundamental qualitative characteristics of financial statements, relevance and faithful representation. Which qualities listed alongside the appropriate qualitative characteristic? (Completeness / Predictive value / Neutrality)",
    "type": "mcq",
    "choices": {
      "A": "Faithful representation: Completeness and Neutrality; Relevance: Predictive value",
      "B": "Faithful representation: Predictive value; Relevance: Completeness and Neutrality",
      "C": "Faithful representation: Completeness; Relevance: Predictive value and Neutrality",
      "D": "Faithful representation: Neutrality; Relevance: Completeness and Predictive value"
    },
    "answer": "A"
  },
  {
    "number": 40,
    "text": "The International Accounting Standards Board's Conceptual Framework for Financial Reporting identifies qualitative characteristics of financial statements. Which TWO of the following characteristics are NOT fundamental qualitative characteristics according to the IASB's The Conceptual Framework for Financial Reporting?",
    "type": "multi-select",
    "choices": {
      "A": "Relevance",
      "B": "Reliability",
      "C": "Faithful representation",
      "D": "Comparability"
    },
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "number": 41,
    "text": "Match the element to the correct definition according to the International Accounting Standards Board's Conceptual Framework for Financial Reporting. (Expense / Liability / Asset / Equity)",
    "type": "mcq",
    "choices": {
      "A": "Expense: A present economic resource controlled by the entity as a result of past events; Liability: The residual interest in the assets of the entity after deducting all its liabilities; Asset: A present obligation of the entity to transfer an economic resource as a result of past events; Equity: Decreases in assets or increases in liabilities that result in decreases in equity",
      "B": "Expense: Decreases in assets or increases in liabilities that result in decreases in equity; Liability: A present obligation of the entity to transfer an economic resource as a result of past events; Asset: A present economic resource controlled by the entity as a result of past events; Equity: The residual interest in the assets of the entity after deducting all its liabilities",
      "C": "Expense: The residual interest in the assets of the entity; Liability: Decreases in assets; Asset: Increases in equity; Equity: A present obligation",
      "D": "Expense: A present obligation; Liability: A present economic resource; Asset: The residual interest; Equity: Decreases in assets"
    },
    "answer": "B"
  },
  {
    "number": 42,
    "text": "Which of the following criteria need to be satisfied in order for an element to be recognised within the financial statements? (i) It meets the definition of an element of the financial statements. (ii) Recognition provides relevant information. (iii) Recognition provides a reliable measure. (iv) The element has fair value. (v) Recognition provides faithful representation of the element.",
    "type": "mcq",
    "choices": {
      "A": "(i), (ii) and (v)",
      "B": "(i), (iii) and (v)",
      "C": "(i), (ii) and (iv)",
      "D": "(i), (iii) and (iv)"
    },
    "answer": "A"
  },
  {
    "number": 43,
    "text": "Which description defines information that is relevant to users of financial information?",
    "type": "mcq",
    "choices": {
      "A": "Information that is free from error, bias and is a faithful representation of events",
      "B": "Information that has been prudently prepared",
      "C": "Information that is comparable from one period to the next",
      "D": "Information that influences the decisions of users"
    },
    "answer": "D"
  },
  {
    "number": 44,
    "text": "Which description is most representative of the accounting framework used under IFRS Standards?",
    "type": "mcq",
    "choices": {
      "A": "It is a principles-based framework",
      "B": "It is a legal obligation",
      "C": "It is a rules-based framework",
      "D": "It is a voluntary framework with no enforcement"
    },
    "answer": "A"
  },
  {
    "number": 45,
    "text": "Which of the advantages below is/are the likely advantage(s) of the global harmonisation of accounting standards? (Greater comparability between different firms / Greater compatibility with legal systems / Easier for large international accounting firms)",
    "type": "mcq",
    "choices": {
      "A": "Greater comparability between different firms only",
      "B": "Greater comparability and easier for large international accounting firms",
      "C": "All three are advantages",
      "D": "Greater compatibility with legal systems only"
    },
    "answer": "B"
  },
  {
    "number": 46,
    "text": "Which THREE of the following are advantages of applying a principles-based framework of accounting rather than a rules-based framework?",
    "type": "multi-select",
    "choices": {
      "A": "It avoids 'fire-fighting', where standards are developed in responses to specific problems as they arise",
      "B": "It allows preparers and auditors to deal with complex transactions which may not be specifically covered by an accounting standard",
      "C": "Principles-based standards are thought to be harder to circumvent",
      "D": "A set of rules is given which attempts to cover every eventuality",
      "E": "It is easier to prove non-compliance"
    },
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "number": 47,
    "text": "Faithful representation is a fundamental characteristic of useful information within the International Accounting Standards Board's Conceptual Framework for financial reporting. Which of the following treatments applies the principle of faithful representation?",
    "type": "mcq",
    "choices": {
      "A": "Reporting a transaction based on its legal status rather than its economic substance.",
      "B": "Excluding a subsidiary from consolidation because its activities are not compatible with those of the rest of the group.",
      "C": "Recording the whole of the net proceeds from the issue of a loan note which is potentially convertible to equity shares as a liability.",
      "D": "Allocating part of the sales proceeds of a motor vehicle to interest received even though it was sold with interest-free finance."
    },
    "answer": "D"
  },
  {
    "number": 48,
    "text": "The International Accounting Standards Board's Conceptual Framework for Financial Reporting defines recognition as the process of incorporating within the financial statements an item which meets the definition of an element and satisfies certain criteria. Which of the following elements should be recognised in the financial statements of an entity in the manner described?",
    "type": "mcq",
    "choices": {
      "A": "As a non-current liability: a provision for possible hurricane damage to property for an entity located in an area which experiences a high incidence of hurricanes.",
      "B": "In equity: irredeemable preference shares.",
      "C": "As a trade receivable: an amount of $10,000 due from a customer which has been sold (factored) to a finance company with no recourse to the seller.",
      "D": "In revenue: the whole of the proceeds from the sale of an item of manufactured plant which has to be maintained by the seller for three years as part of the sale agreement."
    },
    "answer": "B"
  },
  {
    "number": 49,
    "text": "Which of the following is NOT included in the International Accounting Standards Board's (IASB) definition of an asset in the Conceptual Framework for Financial Reporting?",
    "type": "mcq",
    "choices": {
      "A": "The asset is controlled by the entity",
      "B": "The asset is a present economic resource",
      "C": "The economic resource can be reliably measured",
      "D": "The asset exists as a result of past events"
    },
    "answer": "C"
  },
  {
    "number": 50,
    "text": "Drexler acquired an item of plant on 1 October 20X2 at a cost of $500,000. It is being depreciated over five years, using straight-line depreciation and an estimated residual value of 10% of its historical cost or current cost as appropriate. As at 30 September 20X4, the manufacturer of the plant still makes the same item of plant and its current price is $600,000. What is the correct carrying amount to be shown in the statement of financial position of Drexler as at 30 September 20X4 under historical cost and current cost?",
    "type": "mcq",
    "choices": {
      "A": "Historical cost: $300,000; Current cost: $384,000",
      "B": "Historical cost: $320,000; Current cost: $384,000",
      "C": "Historical cost: $300,000; Current cost: $600,000",
      "D": "Historical cost: $320,000; Current cost: $600,000"
    },
    "answer": "B"
  },
  {
    "number": 51,
    "text": "Tynan's year end is 30 September 20X4 and a number of potential liabilities have been identified. Which TWO of the following should Tynan recognise as liabilities as at 30 September 20X4?",
    "type": "multi-select",
    "choices": {
      "A": "The signing of a non-cancellable contract in September 20X4 to supply goods in the following year on which, due to a pricing error, a loss will be made.",
      "B": "The cost of a reorganisation which was approved by the board in August 20X4 but has not yet been implemented, communicated to interested parties or announced publicly.",
      "C": "An amount of deferred tax relating to the gain on the revaluation of a property during the current year. Tynan has no intention of selling the property in the foreseeable future.",
      "D": "The balance on the warranty provision which relates to products for which there are no outstanding claims and whose warranties had expired by 30 September 20X4."
    },
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "number": 52,
    "text": "Which of the following items should be recognised as an asset in the statement of financial position of an entity?",
    "type": "mcq",
    "choices": {
      "A": "A skilled and efficient workforce which has been very expensive to train. Some of these staff are still employed by the entity.",
      "B": "A highly lucrative contract signed during the year which is due to commence shortly after the year-end.",
      "C": "A government grant relating to the purchase of an item of plant several years ago which has a remaining life of four years.",
      "D": "A receivable from a customer which has been sold (factored) to a finance company. The finance company has full recourse to the entity for any losses."
    },
    "answer": "D"
  },
  {
    "number": 53,
    "text": "Comparability is identified as an enhancing qualitative characteristic in the International Accounting Standards Board's Conceptual Framework for Financial Reporting. Which of the following does NOT improve comparability?",
    "type": "mcq",
    "choices": {
      "A": "Restating the financial statements of previous years when there has been a change of accounting policy.",
      "B": "Prohibiting changes of accounting policy unless required by an IFRS Standard or to give more relevant and reliable information.",
      "C": "Disclosing discontinued operations separately in financial statements.",
      "D": "Applying an entity's current accounting policy to a transaction which an entity has not engaged in before."
    },
    "answer": "D"
  },
  {
    "number": 54,
    "text": "Which of the following criticisms does NOT apply to historical cost financial statements during a period of rising prices?",
    "type": "mcq",
    "choices": {
      "A": "They contain mixed values, some items are at current values, some at out-of-date values",
      "B": "They are difficult to verify as transactions could have happened many years ago",
      "C": "They understate assets",
      "D": "They overstate profits"
    },
    "answer": "B"
  },
  {
    "number": 55,
    "text": "According to IAS 8 Accounting Policies, Changes in Accounting Estimates and Errors, how should a material error in the previous financial reporting period be accounted for in the current period?",
    "type": "mcq",
    "choices": {
      "A": "By making an adjustment in the financial statements of the current period through the statement of profit or loss, and disclosing the nature of the error in a note.",
      "B": "By making an adjustment in the financial statements of the current period as a movement on reserves, and disclosing the nature of the error in a note.",
      "C": "By restating the comparative amounts for the previous period at their correct value, and disclosing the nature of the error in a note.",
      "D": "By restating the comparative amounts for the previous period at their correct value, but without the requirement for a disclosure of the nature of the error in a note."
    },
    "answer": "C"
  },
  {
    "number": 56,
    "text": "Which of the following statements regarding IFRS 13 Fair Value Measurement is not true?",
    "type": "mcq",
    "choices": {
      "A": "Level 1 inputs are likely to be used without adjustment.",
      "B": "Level 3 inputs are based on the best information available to market participants and are therefore regarded as providing the most reliable evidence of fair value.",
      "C": "Level 2 inputs may include quoted prices for similar (but not identical) assets and liabilities in active markets.",
      "D": "Level 1 inputs comprise quoted prices in active markets for identical assets and liabilities at the reporting date."
    },
    "answer": "B"
  },
  {
    "number": 57,
    "text": "Which of these changes would be classified as 'a change in accounting policy' as determined by IAS 8 Accounting Policies, Changes in Accounting Estimates and Errors?",
    "type": "mcq",
    "choices": {
      "A": "Increased the allowance for irrecoverable receivables from 5% to 10% of outstanding debts",
      "B": "Changed the method of valuing inventory from FIFO to average cost",
      "C": "Changed the depreciation of plant and equipment from straight line depreciation to reducing balance depreciation",
      "D": "Changed the useful life of motor vehicles from six years to four years"
    },
    "answer": "B"
  },
  {
    "number": 58,
    "text": "In which TWO of the following situations can a change in accounting policy be made by an entity?",
    "type": "multi-select",
    "choices": {
      "A": "If the change is required by an IFRS Standard",
      "B": "If the entity thinks that a new accounting policy would be easier to report",
      "C": "If a new accounting policy would show more favourable results",
      "D": "If a new accounting policy results in more reliable and relevant presentation of events or transactions"
    },
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "number": 59,
    "text": "Which of the following is a change in accounting policy and which a change in accounting estimate in accordance with IAS 8? (Classifying commission earned as revenue in the statement of profit or loss, having previously classified it as other operating income / Revising the remaining useful life of a depreciable asset)",
    "type": "mcq",
    "choices": {
      "A": "Both are changes in accounting policy",
      "B": "Both are changes in accounting estimate",
      "C": "Classifying commission earned as revenue is a change in accounting policy; Revising useful life is a change in accounting estimate",
      "D": "Classifying commission earned as revenue is a change in accounting estimate; Revising useful life is a change in accounting policy"
    },
    "answer": "C"
  },
  {
    "number": 60,
    "text": "Which of the following would be a change in accounting policy in accordance with IAS 8 Accounting Policies, Changes in Accounting Estimates and Errors?",
    "type": "mcq",
    "choices": {
      "A": "Adjusting the financial statements of a subsidiary prior to consolidation as its accounting policies differ from those of its parent.",
      "B": "A change to reporting depreciation charges as cost of sales rather than as administrative expenses.",
      "C": "Depreciation method changed to reducing balance method rather than straight line.",
      "D": "Reducing the value of inventory from cost to net realisable value due to a valid adjusting event after the reporting period."
    },
    "answer": "B"
  },
  {
    "number": 61,
    "text": "Bouani Co manufactures cycling equipment. It has a number of specialised frames in inventory which cost $20,000 to manufacture. These frames were manufactured following an order from a customer at an agreed selling price of $30,000. Due to recent technological advances, the current cost of manufacturing such frames is estimated to be $15,000. Bouani Co also has inventory of 3,000 pedals with a cost of $20 each. These have become damaged. If Bouani Co spends $5,000 to repair all of them, these could be sold for $21 each. Which TWO of the following statements regarding Bouani Co's inventory are true?",
    "type": "multi-select",
    "choices": {
      "A": "The frames should be valued at $15,000",
      "B": "The frames should be valued at $20,000",
      "C": "The frames should be valued at $30,000",
      "D": "The pedals should be valued at $60,000",
      "E": "The pedals should be valued at $58,000",
      "F": "The pedals should be valued at $65,000"
    },
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "number": 62,
    "text": "To which of the following items does IAS 41 Agriculture apply? (i) A change in fair value of a herd of animals relating to the unit price of the animals. (ii) Logs held in a wood yard. (iii) Farm land which is used for growing vegetables. (iv) The cost of developing a new type of crop seed which is resistant to tropical diseases.",
    "type": "mcq",
    "choices": {
      "A": "All four",
      "B": "(i) only",
      "C": "(i) and (ii) only",
      "D": "(ii) and (iii) only"
    },
    "answer": "B"
  },
  {
    "number": 63,
    "text": "IAS 2 Inventories specifies expenses that should be included in year-end inventory values. Which THREE of the expenses below are allowable by IAS 2 as expenses that should be included in the cost of finished goods inventories?",
    "type": "multi-select",
    "choices": {
      "A": "Marketing and selling overhead",
      "B": "Variable production overhead",
      "C": "General management overhead",
      "D": "Factory management overhead allocated to production",
      "E": "Cost of delivering raw materials to the factory",
      "F": "Abnormal increase in overhead charges caused by unusually low production levels due to the exceptionally hot weather"
    },
    "answer": [
      "B",
      "D",
      "E"
    ]
  },
  {
    "number": 64,
    "text": "Neville has only two items of inventory on hand at its reporting date. Item 1 - Materials costing $24,000 bought for processing and assembly for a customer under a 'one off' order which is expected to produce a high profit margin. Since buying this material, the cost price has fallen to $20,000. Item 2 - A machine constructed for another customer for a contracted price of $36,000. This has recently been completed at a cost of $33,600. It has now been discovered that in order to meet certain health and safety regulations modifications at an extra cost of $8,400 will be required. The customer has agreed to meet half of the extra cost. What should be the total value of these two items of inventory in the statement of financial position?",
    "type": "mcq",
    "choices": {
      "A": "$55,800",
      "B": "$57,600",
      "C": "$58,200",
      "D": "$60,000"
    },
    "answer": "A"
  },
  {
    "number": 65,
    "text": "Mario has incurred the following costs in relation to a unit of inventory: Raw materials cost $1.50, Import duties $0.40, Direct labour $0.50, Subcontracted labour costs $0.80, Recoverable sales tax $0.20, Storage costs $0.05, Production overheads (per unit) $0.25. There was a problem with the first batch of items produced, so abnormal wastage costs of $0.10 per unit have also been incurred by Mario. At what cost should Mario value this inventory in its financial statements?",
    "type": "mcq",
    "choices": {
      "A": "$3.50",
      "B": "$3.45",
      "C": "$3.80",
      "D": "$3.70"
    },
    "answer": "B"
  },
  {
    "number": 66,
    "text": "On 30 September 20X4 Razor's closing inventory was counted and valued at its cost of $1 million. This included some items of inventory which had cost $210,000 and had been damaged in a flood on 15 September 20X4. These are not expected to achieve their normal selling price which is calculated to achieve a gross profit margin of 30%. The sale of these goods will be handled by an agent who sells them at 80% of the normal selling price and charges Razor a commission of 25%. At what value will the closing inventory of Razor be reported in its statement of financial position as at 30 September 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$790,000",
      "B": "$850,000",
      "C": "$900,000",
      "D": "$970,000"
    },
    "answer": "D"
  },
  {
    "number": 67,
    "text": "Identify whether the following items would be accounted for under IAS 41 Agriculture or not. (Dairy cattle / Milk / Cheese)",
    "type": "mcq",
    "choices": {
      "A": "All three are accounted for under IAS 41",
      "B": "Dairy cattle and milk are accounted for under IAS 41; Cheese is not",
      "C": "Dairy cattle only is accounted for under IAS 41",
      "D": "Milk and cheese are accounted for under IAS 41; Dairy cattle is not"
    },
    "answer": "B"
  },
  {
    "number": 68,
    "text": "Magna owned cattle recorded in the financial statements at $10,500 on 1 January 20X4. At 31 December 20X4 the cattle have a fair value of $13,000. If Magna sold the cattle, commission of 2% would be payable. What is the correct accounting treatment for the cattle at 31 December 20X4 according to IAS 41 Agriculture?",
    "type": "mcq",
    "choices": {
      "A": "Hold at cost of $10,500",
      "B": "Revalue to $13,000 taking gain of $2,500 to the statement of profit or loss",
      "C": "Revalue to $13,000 taking gain of $2,500 to the revaluation surplus",
      "D": "Revalue to $12,740 taking gain of $2,240 to the statement of profit or loss"
    },
    "answer": "D"
  },
  {
    "number": 69,
    "text": "IAS 21 The Effects of Changes in Foreign Exchange Rates defines the term 'functional currency'. Which of the following is the correct definition of 'functional currency'?",
    "type": "mcq",
    "choices": {
      "A": "The currency in which the financial statements are presented",
      "B": "The currency of the country where the reporting entity is located",
      "C": "The currency that mainly influences sales prices and operating costs",
      "D": "The currency of the primary economic environment in which an entity operates"
    },
    "answer": "D"
  },
  {
    "number": 70,
    "text": "Sunshine is an entity with a reporting date of 31 December 20X1 and a functional currency of dollars ($). On 30 June 20X1, it purchased land from overseas at a cost of 30 million dinars. The land is an item of property, plant and equipment and is measured using the cost model. Exchange rates are: 30 June 20X1: 3 dinars/$; 31 December 20X1: 2 dinars/$; Average rate for year: 2.5 dinars/$. The fair value of the land at 31 December 20X1 was 32 million dinars. What is the carrying amount of the land as at 31 December 20X1?",
    "type": "mcq",
    "choices": {
      "A": "$10 million",
      "B": "$15 million",
      "C": "$12 million",
      "D": "$16 million"
    },
    "answer": "A"
  },
  {
    "number": 71,
    "text": "In relation to IAS 21 The Effects of Changes in Foreign Exchange Rates, which of the following statements are true? (i) Exchange gains and losses arising on the retranslation of monetary items are recognised in other comprehensive income in the period. (ii) Non-monetary items measured at historical cost in a foreign currency are not retranslated at the reporting date. (iii) An intangible asset is a non-monetary item.",
    "type": "mcq",
    "choices": {
      "A": "All of the above",
      "B": "(ii) and (iii) only",
      "C": "(i) and (iii) only",
      "D": "(i) and (ii) only"
    },
    "answer": "B"
  },
  {
    "number": 72,
    "text": "An entity took out a bank loan for 12 million dinars on 1 January 20X1. It repaid 3 million dinars to the bank on 30 November 20X1. The entity has a reporting date of 31 December 20X1 and a functional currency of dollars ($). Exchange rates are: 1 January 20X1: 6.0 dinars/$; 30 November 20X1: 5.0 dinars/$; 31 December 20X1: 5.6 dinars/$. What is the total loss arising (to the nearest $000) on the above transactions in the year ended 31 December 20X1?",
    "type": "mcq",
    "choices": {
      "A": "$107,000",
      "B": "$207,000",
      "C": "$307,000",
      "D": "$407,000"
    },
    "answer": "B"
  },
  {
    "number": 73,
    "text": "A manufacturing entity buys a machine (an item of property, plant and equipment) for 20 million dinars on 1 January 20X1. The machine is held under the cost model and has a useful life of 20 years. The entity has a reporting date of 31 December 20X1 and a functional currency of dollars ($). Exchange rates are: 1 January 20X1: 2.0 dinars/$; 31 December 20X1: 3.0 dinars/$; Average rate for year: 2.5 dinars/$. What is the carrying amount of the machine as at 31 December 20X1?",
    "type": "mcq",
    "choices": {
      "A": "$9.7 million",
      "B": "$9.6 million",
      "C": "$9.5 million",
      "D": "$6.3 million"
    },
    "answer": "C"
  },
  {
    "number": 74,
    "text": "Mango sold an item of maturing inventory to a bank on 1 January 20X3 for $500,000. At this date the inventory had cost $200,000 to produce but had a fair value of $900,000, which was expected to increase over the next 3 years. At the end of 3 years, Mango has the option to repurchase the inventory at $665,500, giving an effective interest rate of 10%. What items should be recorded in the statement of profit or loss for the year ended 31 December 20X3?",
    "type": "mcq",
    "choices": {
      "A": "Revenue $500,000, cost of sales $200,000",
      "B": "Profit on disposal $300,000",
      "C": "Deferred income $500,000",
      "D": "Finance cost $50,000"
    },
    "answer": "D"
  },
  {
    "number": 75,
    "text": "Repro has prepared its draft financial statements for the year ended 30 September 20X4. It has included the following transactions in revenue at the amounts stated below. Which of these has been correctly included in revenue according to IFRS 15 Revenue from Contracts with Customers?",
    "type": "mcq",
    "choices": {
      "A": "Agency sales of $250,000 on which Repro is entitled to a commission of 10%",
      "B": "Sale proceeds of $20,000 for motor vehicles which were no longer required by Repro",
      "C": "Sales of $150,000 on 30 September 20X4. The amount invoiced to and received from the customer was $180,000, which includes $30,000 for ongoing servicing work to be done by Repro over the next two years",
      "D": "Sales of $200,000 on 1 October 20X3 to an established customer who (with the agreement of Repro) will make full payment on 30 September 20X5. Repro has a cost of capital of 10%"
    },
    "answer": "C"
  },
  {
    "number": 76,
    "text": "Yling entered into a contract to construct an asset for a customer on 1 January 20X4 which is expected to last 24 months. The agreed price for the contract is $5 million. At 30 September 20X4, the costs incurred on the contract were $1.6 million and the estimated remaining costs to complete were $2.4 million. On 20 September 20X4, Yling received a payment from the customer of $1.8 million which was equal to the full amount billed. Yling calculates contract progress using the input method, on the basis of costs incurred compared to the estimated total costs. What amount would be reported as a contract asset in Yling's statement of financial position as at 30 September 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$0",
      "B": "$100,000",
      "C": "$200,000",
      "D": "$300,000"
    },
    "answer": "C"
  },
  {
    "number": 77,
    "text": "CN started a three-year contract to build a new university campus on 1 April 20X4. The contract had a fixed price of $90 million. CN will satisfy the performance obligation over time. CN incurred costs to 31 March 20X5 of $77 million and estimated that a further $33 million would need to be spent to complete the contract. CN measures the progress of contracts using work completed compared to contract price. At 31 March 20X5, a surveyor valued the work completed to date at $63 million. Select the correct amounts to be shown in revenue and cost of sales in the statement of profit or loss for the year ended 31 March 20X5.",
    "type": "mcq",
    "choices": {
      "A": "Revenue $63 million; Cost of sales $77 million",
      "B": "Revenue $63 million; Cost of sales $83 million",
      "C": "Revenue $57 million; Cost of sales $77 million",
      "D": "Revenue $57 million; Cost of sales $83 million"
    },
    "answer": "B"
  },
  {
    "number": 78,
    "text": "Locke sells machines, and also offers installation and technical support services. The individual selling prices of each product are shown below. Sale price of goods $75, installation $30, One year service $45. Locke sold a machine on 1 May 20X1, charging a reduced price of $100, including installation and one year's service. Locke only offers discounts when customers purchase the product. According to IFRS 15 Revenue from Contracts with Customers, how much should Locke record in revenue for the year ended 31 December 20X1? Workings should be rounded to the nearest $.",
    "type": "mcq",
    "choices": {
      "A": "$50",
      "B": "$70",
      "C": "$90",
      "D": "$100"
    },
    "answer": "C"
  },
  {
    "number": 79,
    "text": "Place the following steps for recognising revenue in order in accordance with IFRS 15 Revenue from Contracts with Customers. (Identify the separate performance obligations within a contract / Identify the contract / Determine the transaction price / Recognise revenue when (or as) a performance obligation is satisfied / Allocate the transaction price to the performance obligations in the contract)",
    "type": "mcq",
    "choices": {
      "A": "Identify the contract, Identify the separate performance obligations, Determine the transaction price, Allocate the transaction price, Recognise revenue",
      "B": "Identify the contract, Determine the transaction price, Identify the separate performance obligations, Allocate the transaction price, Recognise revenue",
      "C": "Identify the separate performance obligations, Identify the contract, Determine the transaction price, Allocate the transaction price, Recognise revenue",
      "D": "Determine the transaction price, Identify the contract, Identify the separate performance obligations, Allocate the transaction price, Recognise revenue"
    },
    "answer": "A"
  },
  {
    "number": 80,
    "text": "BL entered into a contract with a customer on 1 November 20X4. The contract was scheduled to run for two years and has a sales value of $40 million. BL will satisfy the performance obligations over time. At 31 October 20X5, the following details were obtained from BL's records: Costs incurred to date $16m, Estimated costs to completion $18m, Progress at 31 October 20X5 45%. Applying IFRS 15 Revenue from Contracts with Customers, how much revenue and cost of sales should BL recognise in its statement of profit or loss for the year ended 31 October 20X5?",
    "type": "mcq",
    "choices": {
      "A": "Revenue $40 million; Cost of sales $16 million",
      "B": "Revenue $40 million; Cost of sales $34 million",
      "C": "Revenue $18 million; Cost of sales $16 million",
      "D": "Revenue $18 million; Cost of sales $15.3 million"
    },
    "answer": "C"
  },
  {
    "number": 81,
    "text": "Malik is a construction business, recognising progress based on work certified as a proportion of total contract value. Malik will satisfy the performance obligation over time. The following information relates to one of its long-term contracts as at 31 May 20X4, Malik's year-end: Contract price $200,000, Costs incurred to date $135,000, Estimated cost to complete $15,000, Invoiced to customer $120,000, Work certified to date $180,000. In the year to 31 May 20X3 Malik had recognised revenue of $60,000 and profit of $15,000 in respect of this contract. What profit should appear in Malik's statement of profit or loss as at 31 May 20X4 in respect of this contract?",
    "type": "mcq",
    "choices": {
      "A": "$15,000",
      "B": "$30,000",
      "C": "$45,000",
      "D": "$60,000"
    },
    "answer": "B"
  },
  {
    "number": 82,
    "text": "Which of the following items has correctly been included in Hatton's revenue for the year to 31 December 20X1?",
    "type": "mcq",
    "choices": {
      "A": "$2 million in relation to a fee negotiated for an advertising contract for Rees, one of Hatton's clients. Hatton acted as an agent during the deal and is entitled to 10% commission.",
      "B": "$500,000 relating to a sale of specialised equipment on 31 December 20X1. The full sales value was $700,000 but $200,000 relates to servicing that Hatton will provide over the next 2 years, so Hatton has not included that in revenue this year.",
      "C": "$800,000 relating to a sale of some surplus land owned by Hatton.",
      "D": "$1 million in relation to a sale to a new customer on 31 December 20X1. Control passed to the customer on 31 December 20X1. The $1 million is payable on 31 December 20X3. Interest rates are 10%."
    },
    "answer": "B"
  },
  {
    "number": 83,
    "text": "Sugar has entered into a long-term contract to build an asset for a customer, Hewer. Sugar will satisfy the performance obligation over time and has measured the progress towards satisfying the performance obligation at 45% at the year-end. The price of the contract is $8 million. Sugar has spent $4.5 million to date, but the estimated costs to complete are $5.5 million. To date, Hewer has paid Sugar $3 million. What is the net liability that should be recorded in Sugar's statement of financial position?",
    "type": "mcq",
    "choices": {
      "A": "$0",
      "B": "$100,000",
      "C": "$500,000",
      "D": "$1,000,000"
    },
    "answer": "C"
  },
  {
    "number": 84,
    "text": "Ratten commenced a contract to build an asset for a customer in the year ended 30 September 20X4. The contract price was agreed at $1.5m and the total expected costs of the contract are $800,000. Ratten will satisfy the performance obligation over time. Ratten recognises progress on the basis of work certified compared to contract price. What should Ratten include in its statement of profit or loss for the year ended 30 September 20X5 for revenue in respect of the contract?",
    "type": "mcq",
    "choices": {
      "A": "$600,000",
      "B": "$1,050,000",
      "C": "$1,500,000",
      "D": "$450,000"
    },
    "answer": "A"
  },
  {
    "number": 85,
    "text": "Sawyer entered into a contract to construct an asset for a customer during the year, and identified the performance obligation as one which is satisfied over time. Sawyer recognises progress towards completion using an input method, based on costs to date compared to total costs. The following information is relevant: Contract price $1,000,000, Costs incurred to date $500,000, Estimated cost to complete $300,000, Work invoiced to date $600,000. What is the value of the contract asset to be recorded in Sawyer's statement of financial position?",
    "type": "mcq",
    "choices": {
      "A": "$25,000",
      "B": "$100,000",
      "C": "$375,000",
      "D": "$625,000"
    },
    "answer": "A"
  },
  {
    "number": 86,
    "text": "Hindberg is a car retailer. On 1 April 20X4, Hindberg sold a car to Latterly on the following terms: The selling price of the car was $25,300. Latterly paid $12,650 (half of the cost) on 1 April 20X4 and will pay the remaining $12,650 on 31 March 20X6 (two years after the sale). Latterly can obtain finance at 10% per annum. What is the total amount which Hindberg should credit to profit or loss in respect of this transaction in the year ended 31 March 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$23,105",
      "B": "$23,000",
      "C": "$20,909",
      "D": "$24,150"
    },
    "answer": "D"
  },
  {
    "number": 87,
    "text": "During the year ended 30 September 20X4 Hyper entered into two lease transactions. On 1 October 20X3, Hyper made a payment of $90,000 being the first of five equal annual payments under a lease for an item of plant. The lease has an implicit interest rate of 10% and the present value of the total lease payments on 1 October 20X3 was $340,000. On 1 January 20X4, Hyper made a payment of $18,000 for a one-year lease of an item of equipment. What amount in total would be charged to Hyper's statement of profit or loss for the year ended 30 September 20X4 in respect of the above transactions?",
    "type": "mcq",
    "choices": {
      "A": "$108,000",
      "B": "$111,000",
      "C": "$106,500",
      "D": "$115,500"
    },
    "answer": "C"
  },
  {
    "number": 88,
    "text": "Z entered into a five-year lease agreement on 1 November 20X2, paying $10,975 per annum, commencing on 31 October 20X3. The present value of the lease payments was $45,000 and the interest rate implicit in the lease was 7%. What is the amount to be shown within non-current liabilities at 31 October 20X3?",
    "type": "mcq",
    "choices": {
      "A": "$26,200",
      "B": "$28,802",
      "C": "$37,175",
      "D": "$36,407"
    },
    "answer": "B"
  },
  {
    "number": 89,
    "text": "IFRS 16 Leases permits certain assets to be exempt from the recognition treatment for right-of-use assets. Which of the following assets leased to an entity would be permitted to be exempt?",
    "type": "mcq",
    "choices": {
      "A": "A used motor vehicle with an original cost of $15,000 and a current fair value of $700 leased for 24 months",
      "B": "A new motor vehicle with a cost of $15,000, leased for 24 months",
      "C": "A new motor vehicle with a cost of $15,000, leased for 24 months, to be rented to customers on a daily rental basis",
      "D": "A new motor vehicle with a cost of $15,000, leased for 12 months"
    },
    "answer": "D"
  },
  {
    "number": 90,
    "text": "On 1 January 20X3 Rabbit acquires a new machine with an estimated useful life of 6 years under the following agreement: An initial payment of $13,760 will be payable immediately; 5 further annual payments of $20,000 will be due, commencing 1 January 20X3; The interest rate implicit in the lease is 8%; The present value of the lease payments, excluding the initial payment, is $86,240. What will be recorded in Rabbit's financial statements at 31 December 20X4 in respect of the lease liability?",
    "type": "mcq",
    "choices": {
      "A": "Finance cost $4,123; Non-current liability $35,662; Current liability $20,000",
      "B": "Finance cost $5,299; Non-current liability $51,539; Current liability $20,000",
      "C": "Finance cost $5,312; Non-current liability $51,712; Current liability $20,000",
      "D": "Finance cost $5,851; Non-current liability $43,709; Current liability $15,281"
    },
    "answer": "A"
  },
  {
    "number": 91,
    "text": "On 1 April 20X7 Pigeon entered into a five-year lease agreement for a machine with an estimated life of 7 years. Which of the following conditions would require the machine to be depreciated over 7 years?",
    "type": "mcq",
    "choices": {
      "A": "Pigeon has the option to extend the lease for two years at a market-rate rental",
      "B": "Pigeon has the option to purchase the asset at market value at the end of the lease",
      "C": "Ownership of the asset passes to Pigeon at the end of the lease period",
      "D": "Pigeon's policy for purchased assets is to depreciate over 7 years"
    },
    "answer": "C"
  },
  {
    "number": 92,
    "text": "On 1 January 20X4 Badger entered into a lease agreement to lease an item of machinery for 4 years with rentals of $210,000 payable annually in arrears. The asset has a useful life of 5 years and at the end of the lease term legal ownership will pass to Badger. The present value of the lease payments at the inception of the lease was $635,000 and the interest rate implicit in the lease is 12.2%. For the year ended 31 December 20X4 Badger accounted for this lease by recording the payment of $210,000 as an operating expense. This treatment was discovered during 20X5, after the financial statements for 20X4 had been finalised. In the statement of changes in equity for the year ended 31 December 20X5 what adjustment will be necessary to retained earnings brought forward?",
    "type": "mcq",
    "choices": {
      "A": "$5,530 credit",
      "B": "$132,530 credit",
      "C": "$210,000 debit",
      "D": "$Nil"
    },
    "answer": "A"
  },
  {
    "number": 93,
    "text": "Owl leases an asset with an estimated useful life of 6 years for an initial period of 5 years, and an optional secondary period of 2 years during which a nominal rental will be payable. The present value of the initial period lease payments is $87,000. What will be the carrying amount of the right-of-use asset in Owl's statement of financial position at the end of the second year of the lease?",
    "type": "mcq",
    "choices": {
      "A": "$58,000",
      "B": "$62,000",
      "C": "$65,000",
      "D": "$72,500"
    },
    "answer": "A"
  },
  {
    "number": 94,
    "text": "On 1 January 20X6, Sidehow sold a property for its fair value of $2 million, transferring title to the property on that date. Sidehow then leased it back under a 5-year lease, paying $150,000 per annum on 31 December each year. The present value of rentals payable was $599,000 and the interest rate implicit in the lease was 8%. The carrying amount of the property on 1 January 20X6 was $1.6 million and it had a remaining useful life of 20 years. What entries would be made in Sidehow's statement of profit or loss for the year ended 31 December 20X6?",
    "type": "mcq",
    "choices": {
      "A": "Profit on disposal of $280,200, depreciation of $95,840, finance cost of $47,920",
      "B": "Profit on disposal of $400,000, rental expense of $150,000",
      "C": "Profit on disposal of $400,000, depreciation expense of $95,840, finance cost of $47,920",
      "D": "Profit on disposal of $280,200, depreciation of $119,800, finance cost of $47,920"
    },
    "answer": "A"
  },
  {
    "number": 95,
    "text": "On 1 October 20X3, Fresco acquired an item of plant under a five-year lease agreement. The agreement had an implicit interest rate of 10% and required annual rentals of $6 million to be paid on 30 September each year for five years. The present value of the annual rental payments was $23 million. What would be the current lease liability in Fresco's statement of financial position as at 30 September 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$19,300,000",
      "B": "$4,070,000",
      "C": "$5,000,000",
      "D": "$3,850,000"
    },
    "answer": "B"
  },
  {
    "number": 96,
    "text": "Which of the following would not be included within the initial cost of a right-of-use asset?",
    "type": "mcq",
    "choices": {
      "A": "Installation cost of the asset",
      "B": "Estimated cost of dismantling the asset at the end of the lease period",
      "C": "Payments made to the lessor before commencement of the lease",
      "D": "Total lease rentals payable under the lease agreement"
    },
    "answer": "D"
  },
  {
    "number": 97,
    "text": "On 1 January 20X4, Stark entered into a sale and leaseback of its property. When it was sold, the asset had a carrying amount of $6 million and a remaining life of 10 years. Stark sold the asset for $7 million and leased it back on a 10-year lease, paying $1 million on 31 December each year. The lease carried an implicit interest rate of 7%. What is the total expense that should be recorded in the statement of profit or loss for the year ended 31 December 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$490,000",
      "B": "$600,000",
      "C": "$1,000,000",
      "D": "$1,090,000"
    },
    "answer": "D"
  },
  {
    "number": 98,
    "text": "Viking issues $100,000 5% loan notes on 1 January 20X4, incurring issue costs of $3,000. These loan notes are redeemable at a premium, meaning that the effective rate of interest is 8% per annum. What is the finance cost to be shown in the statement of profit or loss for the year ended 31 December 20X5?",
    "type": "mcq",
    "choices": {
      "A": "$8,240",
      "B": "$7,981",
      "C": "$7,760",
      "D": "$8,000"
    },
    "answer": "B"
  },
  {
    "number": 99,
    "text": "An entity issues 3,000 convertible bonds at the start of year 1 at par. They have a three-year term and a face value of $1,000 per bond. Interest is payable annually in arrears at 7% per annum. Each bond is convertible at any time up to maturity into 250 common shares. When the bonds are issued the prevailing market interest rate for similar debt without conversion options is 9%. How is this initially recorded between the debt and equity elements?",
    "type": "mcq",
    "choices": {
      "A": "Debt element $2,988,570; Equity element $11,430",
      "B": "Debt element $2,826,570; Equity element $173,430",
      "C": "Debt element $2,826,570; Equity element $528,570",
      "D": "Debt element $3,000,000; Equity element $0"
    },
    "answer": "B"
  },
  {
    "number": 100,
    "text": "For a debt investment to be held under amortised cost, it must pass two tests. One of these is the contractual cash flow characteristics test. What is the other test which must be passed?",
    "type": "mcq",
    "choices": {
      "A": "The business model test",
      "B": "The amortised cost test",
      "C": "The fair value test",
      "D": "The purchase agreement test"
    },
    "answer": "A"
  },
  {
    "number": 101,
    "text": "On 1 July 20X7, an entity purchased a five-year loan note investment with a par value of $7m. The investment was purchased at a 12% discount. The loan note has a coupon rate of 5% and an effective interest rate of 8%. Interest is receivable annually in arrears. The entity has the intention of holding the loan note to receive the contractual cash flows. How much finance income should be reported in the statement of profit or loss of the entity for the year ended 30 June 20X9 (to the nearest $000)?",
    "type": "mcq",
    "choices": {
      "A": "$493,000",
      "B": "$504,000",
      "C": "$560,000",
      "D": "$616,000"
    },
    "answer": "B"
  },
  {
    "number": 102,
    "text": "ABC purchased 10,000 shares on 1 September 20X4, making the election to use the alternative treatment under IFRS 9 Financial Instruments. The shares cost $3.50 each. Transaction costs associated with the purchase were $500. At 31 December 20X4, the shares are trading at $4.50 each. What is the gain to be recognised on these shares for the year ended 31 December 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$9,500",
      "B": "$10,000",
      "C": "$9,000",
      "D": "$10,500"
    },
    "answer": "A"
  },
  {
    "number": 103,
    "text": "DEF purchased 15,000 shares in KMH Co on 1 August 20X6 at a cost of $6.50 each. Transaction costs on the purchase amounted to $1,500. At the year-end 30 September 20X6, these shares are now worth $7.75 each. Select the correct gain and the place it will be recorded.",
    "type": "mcq",
    "choices": {
      "A": "Gain $17,250 recorded in Other comprehensive income",
      "B": "Gain $17,250 recorded in Statement of profit or loss",
      "C": "Gain $18,750 recorded in Other comprehensive income",
      "D": "Gain $18,750 recorded in Statement of profit or loss"
    },
    "answer": "D"
  },
  {
    "number": 104,
    "text": "For which category of financial instruments are transaction costs excluded from the initial value, and instead expensed to profit or loss?",
    "type": "mcq",
    "choices": {
      "A": "Financial liabilities at amortised cost",
      "B": "Financial assets at fair value through profit or loss",
      "C": "Financial assets at fair value through other comprehensive income",
      "D": "Financial assets at amortised cost"
    },
    "answer": "B"
  },
  {
    "number": 105,
    "text": "On 1 January 20X3, Bertrand issued $20 million convertible loan notes that carry a coupon rate of 6% per annum. The loan notes are redeemable on 31 December 20X6 at par for cash or can be exchanged for equity shares. A similar loan note, without the conversion option, would have required Bertrand to pay an interest rate of 9%. How much would be recorded in equity in relation to the loan notes?",
    "type": "mcq",
    "choices": {
      "A": "$1,564,000",
      "B": "$1,800,000",
      "C": "$2,000,000",
      "D": "$18,436,000"
    },
    "answer": "A"
  },
  {
    "number": 106,
    "text": "Wonder issued $20 million 5% loan notes on 1 January 20X9, incurring issue costs of $600,000. The loan notes are redeemable at a premium, giving them an effective interest rate of 7%. What expense should be recorded in relation to the loan notes for the year ended 31 December 20X9?",
    "type": "mcq",
    "choices": {
      "A": "$1,000,000",
      "B": "$1,358,000",
      "C": "$1,400,000",
      "D": "$1,500,000"
    },
    "answer": "B"
  },
  {
    "number": 107,
    "text": "For each of the financial instruments below, match them to the appropriate accounting treatment. (Convertible loan notes / Equity investments where the entity has an intention to hold long-term and has chosen to apply the alternative treatment / Financial liability, not held for trading / Equity investments (default position))",
    "type": "mcq",
    "choices": {
      "A": "Convertible loan notes: Split accounting; Equity investments (long-term alternative): Fair value through other comprehensive income; Financial liability not held for trading: Amortised cost; Equity investments (default): Fair value through profit or loss",
      "B": "Convertible loan notes: Amortised cost; Equity investments (long-term alternative): Fair value through profit or loss; Financial liability not held for trading: Split accounting; Equity investments (default): Fair value through other comprehensive income",
      "C": "Convertible loan notes: Fair value through profit or loss; Equity investments (long-term alternative): Split accounting; Financial liability not held for trading: Fair value through other comprehensive income; Equity investments (default): Amortised cost",
      "D": "Convertible loan notes: Fair value through other comprehensive income; Equity investments (long-term alternative): Amortised cost; Financial liability not held for trading: Fair value through profit or loss; Equity investments (default): Split accounting"
    },
    "answer": "A"
  },
  {
    "number": 108,
    "text": "Tamsin Co's accounting records shown the following: Income tax payable for the year $60,000, Over provision in relation to the previous year $4,500, Opening provision for deferred tax $5,000, Closing provision for deferred tax $5,600. What is the income tax expense that will be shown in the statement of profit or loss for the year?",
    "type": "mcq",
    "choices": {
      "A": "$54,900",
      "B": "$67,700",
      "C": "$65,100",
      "D": "$56,100"
    },
    "answer": "D"
  },
  {
    "number": 109,
    "text": "The following information has been extracted from the accounting records of Clara Co: Estimated income tax for the year ended 30 September 20X0 $75,000; Income tax paid for the year ended 30 September 20X0 $80,000; Estimated income tax for the year ended 30 September 20X1 $83,000. What figures will be shown in the statement of profit or loss for the year ended 30 September 20X1 and the statement of financial position as at that date in respect of income tax?",
    "type": "mcq",
    "choices": {
      "A": "Statement of profit or loss $75,000; Statement of financial position $80,000",
      "B": "Statement of profit or loss $80,000; Statement of financial position $83,000",
      "C": "Statement of profit or loss $83,000; Statement of financial position $83,000",
      "D": "Statement of profit or loss $88,000; Statement of financial position $83,000"
    },
    "answer": "D"
  },
  {
    "number": 110,
    "text": "Hudson has the following balances included on its trial balance at 30 June 20X4: Taxation $4,000 (Dr), Deferred taxation $12,000 (Cr). The taxation balance relates to an overprovision from 30 June 20X3. At 30 June 20X4, the directors estimate that the provision necessary for taxation on current year profits is $15,000. The carrying amount of Hudson's non-current assets exceeds the tax written-down value by $30,000. The rate of tax is 30%. What is the charge for taxation that will appear in the statement of profit or loss for the year to 30 June 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$23,000",
      "B": "$28,000",
      "C": "$8,000",
      "D": "$12,000"
    },
    "answer": "C"
  },
  {
    "number": 111,
    "text": "The information below relates to the financial statements of an entity as at 30 September 20X7. Carrying amount: Plant $110,000, Land $280,000. Tax base: Plant $90,000, Land $200,000. Tax rate 20%. Deferred tax liability $20,000. Revaluation surplus $64,000. The amount of the deferred tax liability is: CORRECT/INCORRECT. The amount of the revaluation surplus is: CORRECT/INCORRECT.",
    "type": "mcq",
    "choices": {
      "A": "Both are CORRECT",
      "B": "Deferred tax liability is CORRECT; Revaluation surplus is INCORRECT",
      "C": "Deferred tax liability is INCORRECT; Revaluation surplus is CORRECT",
      "D": "Both are INCORRECT"
    },
    "answer": "A"
  },
  {
    "number": 112,
    "text": "Holmes has the following balances included on its trial balance at 30 June 20X4: Taxation $7,000 Credit, Deferred taxation $16,000 Credit. The taxation balance relates to an overprovision from 30 June 20X3. At 30 June 20X4, the directors estimate that the provision necessary for taxation on current year profits is $12,000. The balance on the deferred tax account needs to be increased to $23,000, which includes the impact of the increase in property valuation below. During the year Holmes revalued its property for the first time, resulting in a gain of $10,000. The rate of tax is 30%. What is the charge for taxation that will appear in the statement of profit or loss for the year to 30 June 20X4?",
    "type": "mcq",
    "choices": {
      "A": "$9,000",
      "B": "$12,000",
      "C": "$23,000",
      "D": "$1,000"
    },
    "answer": "A"
  },
  {
    "number": 113,
    "text": "Garfish had profits after tax of $3 million in the year ended 31 December 20X7. On 1 January 20X7, Garfish had 2.4 million ordinary shares in issue. On 1 April 20X7 Garfish made a one for two rights issue at a price of $1.40 when the market price of Garfish's shares was $2.00. What is the basic earnings per share (to one decimal place) for the year ended 31 December 20X7, according to IAS 33 Earnings Per Share?",
    "type": "mcq",
    "choices": {
      "A": "75.0 cents",
      "B": "83.3 cents",
      "C": "89.1 cents",
      "D": "100.0 cents"
    },
    "answer": "C"
  },
  {
    "number": 114,
    "text": "On 1 January 20X4, Sam Co had 3 million ordinary shares in issue. On 1 June 20X4, Sam Co made a 1 for 3 bonus issue. On 30 September 20X4, Sam Co issued a further 1 million shares at full market price. Sam Co had profits attributable to ordinary equity holders of $2 million for the year ended 31 December 20X4. What is the basic earnings per share figure for the year ended 31 December 20X4, according to IAS 33 Earnings Per Share?",
    "type": "mcq",
    "choices": {
      "A": "47.1c",
      "B": "52.2c",
      "C": "56.8c",
      "D": "50.0c"
    },
    "answer": "A"
  },
  {
    "number": 115,
    "text": "During the year, Mac made a 1 for 3 rights issue at $1.60 when the market price was $2.20. Last year's EPS was 81 cents. There were no other issues of shares during the year. What is the restated earnings per share figure for comparative purposes?",
    "type": "mcq",
    "choices": {
      "A": "75 cents",
      "B": "81 cents",
      "C": "87 cents",
      "D": "93 cents"
    },
    "answer": "A"
  },
  {
    "number": 116,
    "text": "Coral Co has net profit for the year ended 30 September 20X5 of $10,500,000. Coral has had 6 million shares in issue for many years. On 1 October 20X4 Coral issued a convertible bond. It had an initial liability element of $2,500,000, and the market interest rate for non-convertible instruments is 8%. The bond is convertible in five years, with 50 shares issued for every $100 nominal of convertible bond held. Coral Co pays tax at a rate of 28%. What is the Diluted Earnings per Share figure?",
    "type": "mcq",
    "choices": {
      "A": "177.4c",
      "B": "175.0c",
      "C": "147.6c",
      "D": "146.8c"
    },
    "answer": "D"
  },
  {
    "number": 117,
    "text": "Isco's financial statements show a profit for the year to 31 December 20X5 of $2 million. On 1 January 20X5 Isco had 4 million shares in issue and made no further issues of shares during the year. At 31 December 20X5 there were 1 million outstanding options to buy shares at $3 each. For the year to 31 December 20X5, the average market value of Isco's shares was $5. What is Isco's diluted earnings per share for the year ended 31 December 20X5?",
    "type": "mcq",
    "choices": {
      "A": "50.0c",
      "B": "28.6c",
      "C": "45.5c",
      "D": "43.4c"
    },
    "answer": "C"
  },
  {
    "number": 118,
    "text": "Gromit Co has the following extract from its consolidated profit or loss account: Profit for the period $2,800,000; Other comprehensive income: revaluation gain $500,000; Total comprehensive income $3,300,000; Profit for the period attributable to: Parent $2,250,000, Non-controlling Interest $550,000; Total comprehensive income attributable to: Parent $2,600,000, Non-controlling interest $700,000. What figure should be used as earnings by Gromit in its earnings per share (EPS) calculation?",
    "type": "mcq",
    "choices": {
      "A": "$2,250,000",
      "B": "$2,600,000",
      "C": "$2,800,000",
      "D": "$3,300,000"
    },
    "answer": "A"
  },
  {
    "number": 119,
    "text": "Which TWO of the following do NOT need to be removed from an entity's net profit in a statement of profit or loss in order to calculate the earnings figure to be used in the earnings per share calculation?",
    "type": "multi-select",
    "choices": {
      "A": "Redeemable preference share dividends",
      "B": "Irredeemable preference share dividends",
      "C": "Profit attributable to the non-controlling interest",
      "D": "An error in expenses discovered after the financial statements have been authorised for issue",
      "E": "Ordinary dividends"
    },
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "number": 120,
    "text": "Aqua has correctly calculated its basic earnings per share (EPS) for the current year. Allocate the items to the appropriate category. (A 1 for 5 rights issue of equity shares during the year at $1.20 when the market price of the equity shares was $2.00 / The issue during the year of a loan note, convertible into ordinary shares / The granting of directors' share options during the year, exercisable in three years' time / Equity shares issued during the year as the purchase consideration for the acquisition of a new subsidiary)",
    "type": "mcq",
    "choices": {
      "A": "Rights issue: Basic EPS; Convertible loan note: Diluted EPS; Share options: Diluted EPS; Shares issued for acquisition: Basic EPS",
      "B": "Rights issue: Diluted EPS; Convertible loan note: Basic EPS; Share options: Basic EPS; Shares issued for acquisition: Diluted EPS",
      "C": "All items are included in Basic EPS only",
      "D": "All items are included in Diluted EPS only"
    },
    "answer": "A"
  },
  {
    "number": 121,
    "text": "Many commentators believe that the trend of earnings per share (EPS) is a more reliable indicator of underlying performance than the trend of the net profit for the year. Which of the following statements supports this view?",
    "type": "mcq",
    "choices": {
      "A": "Net profit can be manipulated by the choice of accounting policies but EPS cannot be manipulated in this way.",
      "B": "EPS takes into account the additional resources made available to earn profit when new shares are issued for cash, whereas net profit does not.",
      "C": "The disclosure of a diluted EPS figure is a forecast of the trend of profit for future periods.",
      "D": "The comparative EPS is restated where a change in accounting policy affects the previous year's profits."
    },
    "answer": "B"
  },
  {
    "number": 122,
    "text": "On 1 October 20X3, Hoy had $2.5 million of equity shares of 50 cents each in issue. No new shares were issued during the year ended 30 September 20X4, but on that date there were outstanding share options to purchase 2 million equity shares at $1.20 each. The average market value of Hoy's equity shares during the year was $3 per share. Hoy's profit after tax for the year ended 30 September 20X4 was $1,550,000. What is Hoy's diluted earnings per share for the year ended 30 September 20X4?",
    "type": "mcq",
    "choices": {
      "A": "25.0c",
      "B": "31.0c",
      "C": "26.7c",
      "D": "22.1c"
    },
    "answer": "A"
  },
  {
    "number": 123,
    "text": "AP has the following two legal claims outstanding: A legal action claiming compensation of $500,000 filed against AP in March 20X4. A legal action taken by AP against a third party, claiming damages of $200,000, which was started in January 20X3 and is nearing completion. In both cases, it is more likely than not that the amount claimed will have to be paid. How should AP report these legal actions in its financial statements for the year ended 31 March 20X5?",
    "type": "mcq",
    "choices": {
      "A": "Legal action against AP: Contingent Liability; Legal action by AP: Contingent Asset",
      "B": "Legal action against AP: Provision; Legal action by AP: Contingent Asset",
      "C": "Legal action against AP: Provision; Legal action by AP: Asset",
      "D": "Legal action against AP: Contingent Liability; Legal action by AP: Provision"
    },
    "answer": "B"
  },
  {
    "number": 124,
    "text": "Which of the following would require a provision for a liability to be created by BW at its reporting date of 31 October 20X5?",
    "type": "mcq",
    "choices": {
      "A": "The government introduced new laws on data protection which come into force on 1 January 20X6. BW's directors have agreed that this will require a large number of staff to be retrained. At 31 October 20X5, the directors were waiting on a report they had commissioned that would identify the actual training requirements.",
      "B": "At the year-end BW is negotiating with its insurance provider about an outstanding insurance claim. On 20 November 20X5, the provider agreed to pay $200,000.",
      "C": "BW makes refunds to customers for any goods returned within 30 days of sale, and has done so for many years.",
      "D": "A customer is suing BW for damages alleged to have been caused by BW's product. BW is contesting the claim and at 31 October 20X5 the directors have been advised by BW's legal advisers that it is very unlikely to lose the case."
    },
    "answer": "C"
  },
  {
    "number": 125,
    "text": "Using the requirements set out in IAS 10 Events after the Reporting Period, which of the following would be classified as an adjusting event after the reporting period in financial statements ended 31 March 20X4 that were approved by the directors on 31 August 20X4?",
    "type": "mcq",
    "choices": {
      "A": "A reorganisation of the enterprise, proposed by a director on 31 January 20X4 and agreed by the Board on 10 July 20X4.",
      "B": "A strike by the workforce which started on 1 May 20X4 and stopped all production for 10 weeks before being settled.",
      "C": "The receipt of cash from a claim on an insurance policy for damage caused by a fire in a warehouse on 1 January 20X4. The claim was made in January 20X4 and the amount of the claim had not been recognised at 31 March 20X4 as it was uncertain that any money would be paid. The insurance enterprise settled with a payment of $1.5 million on 1 June 20X4.",
      "D": "The enterprise had made large export sales to the USA during the year. The year-end receivables included $2 million for amounts outstanding that were due to be paid in US dollars between 1 April 20X4 and 1 July 20X4. By the time these amounts were received, the exchange rate had moved in favour of the enterprise."
    },
    "answer": "C"
  },
  {
    "number": 126,
    "text": "Target is preparing its financial statements for the year ended 30 September 20X7. Target is facing a number of legal claims from its customers with regards to a faulty product sold. The total amount being claimed is $3.5 million. Target's lawyers say that the customers have an 80% chance of being successful. According to IAS 37 Provisions, Contingent Liabilities and Contingent Assets, what amount, if any, should be recognised in respect of the above in Target's statement of financial position as at 30 September 20X7?",
    "type": "mcq",
    "choices": {
      "A": "$0",
      "B": "$2,800,000",
      "C": "$3,500,000",
      "D": "$700,000"
    },
    "answer": "C"
  },
  {
    "number": 127,
    "text": "ABC has a year end of 31 December 20X4. On 15 December 20X4 the directors publicly announced their decision to close an operating unit and make a number of employees redundant. Some of the employees currently working in the unit will be transferred to other operating units within ABC. The estimated costs of the closure are as follows: Redundancy costs $800,000; Lease termination costs $200,000; Relocation of continuing employees to new locations $400,000; Retraining of continuing employees $300,000. What is the closure provision that should be recognised?",
    "type": "mcq",
    "choices": {
      "A": "$800,000",
      "B": "$1,000,000",
      "C": "$1,400,000",
      "D": "$1,700,000"
    },
    "answer": "B"
  },
  {
    "number": 128,
    "text": "On 1 October 20X3, Xplorer commenced drilling for oil in an undersea oilfield. The extraction of oil causes damage to the seabed which has a restorative cost (ignore discounting) of $10,000 per million barrels of oil extracted. Xplorer extracted 250 million barrels of oil in the year ended 30 September 20X4. Xplorer is also required to dismantle the drilling equipment at the end of its five-year licence. This has an estimated cost of $30 million on 30 September 20X8. Xplorer's cost of capital is 8% per annum and $1 has a present value of 68 cents in five years' time. What is the total provision (extraction plus dismantling) which Xplorer would report in its statement of financial position as at 30 September 20X4 in respect of its oil operations?",
    "type": "mcq",
    "choices": {
      "A": "$34,900,000",
      "B": "$24,532,000",
      "C": "$22,900,000",
      "D": "$4,132,000"
    },
    "answer": "B"
  },
  {
    "number": 129,
    "text": "Which TWO of the following events which occur after the reporting date of an entity but before the financial statements are authorised for issue are classified as ADJUSTING events in accordance with IAS 10 Events after the Reporting Period?",
    "type": "multi-select",
    "choices": {
      "A": "A change in tax rate announced after the reporting date, but affecting the current tax liability",
      "B": "The discovery of a fraud which had occurred during the year",
      "C": "The determination of the sale proceeds of an item of plant sold before the year end",
      "D": "The destruction of a factory by fire"
    },
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "number": 130,
    "text": "Each of the following events occurred after the reporting date of 31 March 20X5, but before the financial statements were authorised for issue. Identify whether the events would represent adjusting or non-adjusting events. (A public announcement in April 20X5 of a formal plan to discontinue an operation which had been approved by the board in February 20X5 / The settlement of an insurance claim for a loss sustained in December 20X4)",
    "type": "mcq",
    "choices": {
      "A": "Both are adjusting events",
      "B": "Both are non-adjusting events",
      "C": "Public announcement: non-adjusting; Insurance settlement: adjusting",
      "D": "Public announcement: adjusting; Insurance settlement: non-adjusting"
    },
    "answer": "C"
  },
  {
    "number": 131,
    "text": "In a review of its provisions for the year ended 31 March 20X5, Cumla's assistant accountant has suggested the following accounting treatments: (i) A provision for one third of the cost of replacing an oven lining, which requires replacing every three years for technical reasons, and was last replaced on 1 April 20X4. (ii) The partial reversal (as a credit to the statement of profit or loss) of the accumulated depreciation provision on an item of plant because the estimate of its remaining useful life has been increased by three years. (iii) Providing $1 million for deferred tax at 25% relating to a $4 million revaluation of property during March 20X5 even though Cumla has no intention of selling the property in the near future. Which of the above suggested treatments of provisions is/are permitted by IFRS Standards?",
    "type": "mcq",
    "choices": {
      "A": "(i) only",
      "B": "(i) and (ii)",
      "C": "(ii) and (iii)",
      "D": "(iii) only"
    },
    "answer": "D"
  },
  {
    "number": 132,
    "text": "Identify whether the statements below are true or false: Statement 1: IAS 10 Events After the Reporting Period covers the period from the reporting date to the annual general meeting. Statement 2: According to IAS 10 Events After the Reporting Period, any non-adjusting event should be disclosed as a note in the financial statements.",
    "type": "mcq",
    "choices": {
      "A": "Statement 1 true, Statement 2 true",
      "B": "Statement 1 true, Statement 2 false",
      "C": "Statement 1 false, Statement 2 true",
      "D": "Statement 1 false, Statement 2 false"
    },
    "answer": "D"
  },
  {
    "number": 133,
    "text": "Fauberg owns a number of offices in country Y and is in the process of finishing its financial statements for the year ended 31 December 20X4. In December 20X4, country Y announced changes to health and safety regulations, meaning that Fauberg's air conditioning units will have to be replaced by 30 June 20X5. This is estimated to cost Fauberg $500,000. Fauberg has a history of compliance with regulations and intends to do the work by June 20X5. Which of the conditions for a provision will be met at 31 December 20X4? (There is a present obligation from a past event / A reliable estimate can be made / There is a probable outflow of economic benefits)",
    "type": "mcq",
    "choices": {
      "A": "All three conditions are met",
      "B": "Only 'A reliable estimate can be made' and 'There is a probable outflow of economic benefits' are met",
      "C": "Only 'There is a probable outflow of economic benefits' is met",
      "D": "None of the conditions are met"
    },
    "answer": "B"
  },
  {
    "number": 134,
    "text": "Which TWO of the following statements about provisions are true?",
    "type": "multi-select",
    "choices": {
      "A": "Future operating losses cannot be provided for",
      "B": "Changes in provisions should be applied retrospectively, adjusting the prior year financial statements",
      "C": "Provisions should be accounted for prudently, reflecting the maximum that could possibly be paid out",
      "D": "Provisions should be discounted to present value if the effect of the time value of money is material"
    },
    "answer": [
      "A",
      "D"
    ]
  }
]
};

questionPools.APM = questionPools.PM;
questionPools.AFM = questionPools.FM;
questionPools.SBR = questionPools.FR;
questionPools.AAA = questionPools.AA;
