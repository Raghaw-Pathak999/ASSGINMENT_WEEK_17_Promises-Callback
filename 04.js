const books = [
  {
    title: "LIVE A LONG",
    Authour: "Vivek Pathak",
    Year: 2023,
  },
  {
    title: "Life is Auxary",
    Authour: "Ansul Pathak",
    Year: 2021,
  },
  {
    title: "Live Be like Strong ",
    Authour: "Manish Pathak",
    Year: 2001,
  },
  {
    title: "A littel Bitt",
    Authour: "RAGHAW Pathak",
    Year: 2015,
  },
  {
    title: "Brand id one",
    Authour: "Shreya Pathak",
    Year: 2019,
  },
]

function logTitle(titles) {
 console.log( titles.sort());
  console.log(titles.join(','));
}

function extratTitles(book, callback) {
  let VAULE =  book.map((book)=>book.title);
  callback(VAULE);
}

extratTitles(books, logTitle)