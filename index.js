const getMoves = ([x, y]) => 
  [[1,-2],[-1,-2],[2,-1],[-2,-1],[1,2],[-1,2],[2,1],[-2,1]]
    .map(([a, b]) => [a + x, b + y])
    .filter(([a, b]) => a >= 0 && a < 8 && b >= 0 && b < 8);

const getPath = (start, end, visited) => 
    start === end ? [end] : getPath(start, visited.get(end).toString(), visited).concat([end]);

const getNextUnvisitedMoves = (currentPos, visited) => 
  getMoves(currentPos).filter(m => !visited.has(m.toString()) && visited.set(m.toString(), currentPos));

const knightMoves = (start, end, queue = [start], visited = new Map()) => 
  !queue.length ? getPath(start.toString(), end.toString(), visited) :
    knightMoves(start, end, queue.slice(1).concat(getNextUnvisitedMoves(queue[0], visited)), visited)

console.log(knightMoves([0,0], [1,2]));
console.log(knightMoves([0,0], [3,3]));
console.log(knightMoves([3,3], [0,0]));