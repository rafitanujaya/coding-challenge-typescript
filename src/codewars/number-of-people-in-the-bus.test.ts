describe('Number of People in the Bus', () => {
  it('should barbar', async () => {
    function busStop (busStops: number[][]) : number {
        let peopleInBus: number = 0;
        for(let i= 0; i < busStops.length; i++) {
            peopleInBus += busStops[i][0];
            peopleInBus -= busStops[i][1];
        }

        return peopleInBus
    }

    expect(busStop([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17)
  });

  it('should one line', () => {
    function busStop(busStops: number[][]): number {
        return busStops.reduce((people: number, halte: number[]) => {
            const [inPeople, outPeople] = halte;
            return people + inPeople - outPeople;
        }, 0);
    }
    

    expect(busStop([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17);
  });
})
