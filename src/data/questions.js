export const questions = [
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
    text: "Samuel is planning to leave the UK to live overseas, having always previously been resident in the UK. He will not automatically be treated as either resident in the UK or not resident in the UK. Samuel has several ties with the UK and will need to visit the UK for 60 days each tax year. However, he wants to be not resident after he leaves the UK. For the first two tax years after leaving the UK, what is the maximum number of ties which Samuel could keep with the UK without being treated as resident in the UK?",
    type: "mcq",
    choices: {
      A: "One",
      B: "Four",
      C: "Two",
      D: "Three"
    },
    answer: "C"
  },
  {
    number: 4,
    text: "Hana was UK resident in the tax year 2024/25. He worked full time in Egypt in the tax year 2025/26. What is the maximum number of days which Hana can spend in the UK and be treated as automatically not resident in the UK for the tax year 2025/26?",
    type: "mcq",
    choices: {
      A: "15",
      B: "45",
      C: "90",
      D: "182"
    },
    answer: "C"
  },
  {
    number: 5,
    text: "Ella arrived in the UK to work as a nanny on 1 February 2025. She has never previously visited the UK. Ella lived with a family... until 31 August 2025. On 1 September 2025 Ella left the UK. As a result of this visit to the UK, Ella stayed in the UK for 65 days during the tax year 2024/25 and 148 days during the tax year 2025/26. For these two tax years, Ella was neither automatically not resident in the UK nor automatically resident. What is Ella's UK residency status for each of the tax years 2024/25 and 2025/26?",
    type: "mcq",
    choices: {
      A: "Resident in both years",
      B: "Not resident in either year",
      C: "Resident in 2024/25 but not in 2025/26",
      D: "Resident in 2025/26 but not in 2024/25"
    },
    answer: "D"
  },
  {
    number: 6,
    text: "Which of the following will NOT cause Harper to be treated as automatically UK resident for the tax year 2025/26?",
    type: "mcq",
    choices: {
      A: "Harper spending 192 days in the UK during the tax year 2025/26",
      B: "Harper renting a house in the UK to live in and then occupying it (as her only home) throughout the tax year 2025/26",
      C: "Harper accepting a 15- month contract for a full- time job in the UK on 6 April 2025",
      D: "Harper's husband living in the UK throughout the tax year 2025/26 and Harper staying with him when she visits the UK"
    },
    answer: "D"
  },
  {
    number: 7,
    text: "Identify, by ticking the appropriate box, whether or not the following two individuals satisfy or do not satisfy the tests to be treated as automatically not resident in the UK for the tax year 2025/26.",
    type: "categorization",
    options: ["Satisfies", "Does not satisfy"],
    items: [
      { id: "Eric", text: "Eric, who has never previously been resident in the UK, was in the UK for 40 days during the tax year 2025/26.", answer: "Satisfies" },
      { id: "Fran", text: "Fran, who was resident in the UK for the two tax years prior to the tax year 2025/26. In the tax year 2025/26, she was in the UK for 18 days.", answer: "Does not satisfy" }
    ]
  },
  {
    number: 8,
    text: "Dane and Zara are a married couple. They jointly own a residential property... Zara earns employment income of 85,000 and Dane receives 2,252 of child benefit in the tax year 2025/26. Dane has no other income. Which TWO of the following statements are true in relation to Zara's income tax liability for the tax year 2025/26?",
    type: "multi-select",
    choices: {
      A: "Zara's taxable income is 82,430",
      B: "Zara can reduce her income tax liability by claiming the transferable personal allowance (the \"marriage allowance\")",
      C: "It would be beneficial to Zara if the couple were to make a joint election to HM Revenue & Customs (HMRC) specifying their actual ownership share in the residential property",
      D: "A child benefit charge of 2,252 will be added to Zara's income tax liability"
    },
    answer: ["A", "D"]
  },
  {
    number: 9,
    text: "Genna and Wayne are a married couple. In the tax year 2025/26 Genna had a salary of £5,000 and Wayne had property income of £40,650. They have made an election to transfer the fixed amount of personal allowance from Genna to Wayne. What is Wayne's income tax liability for the tax year 2025/26?",
    type: "mcq",
    choices: {
      A: "4,356",
      B: "4,102",
      C: "5,364",
      D: "5,868"
    },
    answer: "C"
  },
  {
    number: 10,
    text: "For the tax year 2025/26, Chi has a salary of £66,200. She received child benefit of £2,252 during this tax year. What is Chi's child benefit income tax charge for the tax year 2025/26?",
    type: "mcq",
    choices: {
      A: "2,252",
      B: "0",
      C: "1,554",
      D: "698"
    },
    answer: "D"
  },
  {
    number: 11,
    text: "Amber is in employment earning an annual salary of £73,000. Her only other income is bank interest of £3,000. She received child benefit of £2,252 during the tax year 2025/26. Select Amber's child benefit tax charge and method of collection for the tax year 2025/26.",
    type: "mcq",
    choices: {
      A: "Child benefit tax charge £1,801, Method of collection Self-assessment",
      B: "Child benefit tax charge £1,801, Method of collection PAYE",
      C: "Child benefit tax charge £1,463, Method of collection Self-assessment",
      D: "Child benefit tax charge £1,463, Method of collection PAYE"
    },
    answer: "A"
  },
  {
    number: 12,
    text: "Tick the appropriate box to show which of the following items of expenditure are deductible in the calculation of an individual's taxable income.",
    type: "categorization",
    options: ["Deductible", "Not Deductible"],
    items: [
      { id: "A", text: "A contribution into a personal pension scheme", answer: "Deductible" },
      { id: "B", text: "A charitable gift aid donation", answer: "Deductible" },
      { id: "C", text: "A contribution into an employer's occupational pension scheme", answer: "Deductible" },
      { id: "D", text: "A charitable donation made under the payroll deduction scheme", answer: "Deductible" }
    ]
  },
  {
    number: 13,
    text: "Ifram has recently become a partner. Identify whether his interest payments represent qualifying interest or not.",
    type: "categorization",
    options: ["Qualifying interest", "Not qualifying"],
    items: [
      { id: "A", text: "Interest on loan to purchase laptop for employment", answer: "Qualifying interest" },
      { id: "B", text: "Interest on mortgage for main private residence", answer: "Not qualifying" },
      { id: "C", text: "Interest on loan for acquisition of 2,000 shares in quoted company", answer: "Not qualifying" },
      { id: "D", text: "Interest on loan to invest capital in a partnership", answer: "Qualifying interest" }
    ]
  },
  {
    number: 14,
    text: "Ines is a sole trader. Trading income £106,800, dividend income £1,500, gift aid donation £2,000 (gross). What amount of personal allowance is Ines entitled to?",
    type: "input",
    answer: "9420"
  },
  {
    number: 15,
    text: "David: Property income £21,150, Gilt interest £2,400, Dividends £450. What is his total income tax liability?",
    type: "mcq",
    choices: {
      A: "1,996",
      B: "2,035",
      C: "2,196",
      D: "2,235"
    },
    answer: "A"
  },
  {
    number: 16,
    text: "Harrison's only income was dividend income of £56,950. What is his income tax liability?",
    type: "input",
    answer: "5510"
  },
  {
    number: 17,
    text: "Manon sold gilts for 213,000 (including accrued interest). How much as savings income?",
    type: "mcq",
    choices: {
      A: "833",
      B: "2,000",
      C: "1,000",
      D: "1,833"
    },
    answer: "D"
  },
  {
    number: 18,
    text: "Ahmed sold gilts for 11,400 (including accrued interest). How much as savings income?",
    type: "mcq",
    choices: {
      A: "150",
      B: "165",
      C: "100",
      D: "183"
    },
    answer: "A"
  },
  {
    number: 19,
    text: "Nicolas let out office. Premium of 82,000 for 15-year lease. How much taxable as property income?",
    type: "mcq",
    choices: {
      A: "59,040",
      B: "22,960",
      C: "82,000",
      D: "5,467"
    },
    answer: "A"
  },
  {
    number: 20,
    text: "Melinda rented room in her house for 750/month. Property income assuming beneficial elections?",
    type: "mcq",
    choices: {
      A: "1,500",
      B: "0",
      C: "3,300",
      D: "7,500"
    },
    answer: "A"
  },
  {
    number: 21,
    text: "Sou granted 25-year lease for premium of 20,000. Taxable property income?",
    type: "mcq",
    choices: {
      A: "10,400",
      B: "9,600",
      C: "5,200",
      D: "10,000"
    },
    answer: "A"
  },
  {
    number: 22,
    text: "Maisy lets cottage for 9,600 rent. Incurred expenditure. Property income?",
    type: "mcq",
    choices: {
      A: "8,190",
      B: "7,290",
      C: "7,320",
      D: "8,160"
    },
    answer: "B"
  },
  {
    number: 23,
    text: "Steffania's property income before adjusting. Payment to replace kitchen unit 500, Interest 12,000. Taxable property income?",
    type: "input",
    answer: "24500"
  },
  {
    number: 24,
    text: "Ewa salary 55,000. Travelled 14,500 business miles. Employer paid 43p/mile. Taxable employment income?",
    type: "mcq",
    choices: {
      A: "55,610",
      B: "54,390",
      C: "54,710",
      D: "55,290"
    },
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
];
