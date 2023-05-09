export const numbersFractionCalculator = (numbers: number[]) => {
    let total: number = numbers.length;
    let pos: number = 0;
    let neg: number = 0;
    let zero: number = 0;
    for(let i = 0 ; i < total ; i ++){
        if(numbers[i] > 0) pos ++;
        if(numbers[i] < 0) neg ++;
        if(numbers[i] === 0) zero ++;
    }
    return {
        positives: (pos/total).toFixed(6),
        negative: (neg/total).toFixed(6),
        zeros: (zero/total).toFixed(6),
    }
};
