export const findLessCostPath = (board: number[][]): number => {
  let m = board.length;
  let n = board[0].length;
  let dx:number[] = [0,1,0,-1];
  let dy:number[] = [1,0,-1,0];
  let qu:number[] = [];
  let dis:number[][] = [];
  for(let i = 0 ; i < m ; i ++){
    dis[i] = [];
    for(let j = 0 ; j < n ; j ++){
      dis[i][j] = Infinity;
    }
  }
  dis[0][0] = board[0][0];
  qu.push(0);
  qu.push(0);
  while(qu.length > 0){
    let x= qu[0];
    let y = qu[1];
    qu.shift();
    qu.shift();
    if(x === m-1 && y === n-1) continue ;
    for(let i = 0 ;i < 4 ; i ++){
      let wx = x + dx[i];
      let wy = y + dy[i];
      if(wx < 0 || wy < 0 || wx >= m || wy >= n) continue ;
      if(dis[x][y] + board[wx][wy] >= dis[wx][wy]) continue ;
      dis[wx][wy] = dis[x][y] + board[wx][wy];
      qu.push(wx);
      qu.push(wy);
    }
  }
  return dis[m-1][n-1]-board[m-1][n-1];
};
//
