let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

// console.log("Expense Report", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Sending email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let average = Number(
    (
      movie.ratings.reduce((rating, curr) => rating + curr, 0) /
      movie.ratings.length
    ).toFixed(2)
  );
  const rating = {
    title: movie.title,
    averageRatings: average,
  };
  return rating;
});
console.log(averageRatings);
