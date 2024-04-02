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
})
