// 746

function minCostClimbingStairs(cost) {
  for (let i = 2; i < cost.length; i++) {
    cost[i] = Math.min(cost[i - 1] , cost[i - 2]) + cost[i];
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}


// const check = [1,100,1,1,1,100,1,1,100,1];
const check = [10,15,20];

console.log(minCostClimbingStairs(check));
