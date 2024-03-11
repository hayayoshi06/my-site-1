'use strict';

// 1
{
  const scores = [
    80,
    90,
    40,
    70,
  ]

  console.log(scores[0]);
  console.log(scores[1]);
  console.log(scores[2]);
  console.log(scores[3]);
}

// 2
{
  const scores = [
    80,
    90,
    40,
    70,
  ]

  scores.forEach((score, index) => {
    console.log(`${index}: ${score}`)
  });
}

// 3
{
  const prices = [180, 190, 200];

  const updateprices = prices.map((price) => {
    return price + 20;
  });

  console.log(updateprices);
}

// 4
{

}

// 5
{
  const numbers = [1, 4, 7, 8, 10];

  const evenNumber = numbers.filter((number) =>{
    if(number % 2 == 0) {
      console.log(true);
    } else {
      console.log(false)
    }
  });

  console.log(evenNumber);
}

// 6
{

}

// 7
{
  let str = 'Hello';

  console.log(str.length);
}

// 8
{
  let str = 'Hello';

  let result = str.slice(2, 4);

  console.log(result);
}

// 9
{
  let str = 'Hello';

  let result = str.charAt(1);

  console.log(result);
}

// 10
{
  const t = [2023, 7, 29];

  console.log(t.join('/'));
}

// 11
{
  const scores = [
    10,
    3,
    9,
  ];
  let sum = 0;

  scores.forEach((score) => {sum += score});
  console.log(sum);
}

// 12
{
  const scores = [
    10,
    3,
    9,
  ];
  let sum = 0;

  scores.forEach((score) => {sum += score});
  console.log(sum / scores.length);
}

// 13
{
  const scores = [
    10,
    3,
    9,
  ];
  let sum = 0;

  scores.forEach((score) => {sum += score});
  console.log(Math.floor(sum / scores.length));
}

// 14
{
  const scores = [
    10,
    3,
    9,
  ];
  let sum = 0;

  scores.forEach((score) => {sum += score});
  console.log(Math.ceil(sum / scores.length));
}

// 15
{
  const scores = [
    10,
    3,
    9,
  ];
  let sum = 0;

  scores.forEach((score) => {sum += score});
  console.log(Math.round(sum / scores.length));
}

// 16
{
  const scores = [
    10,
    3,
    9,
  ];
  let sum = 0;

  scores.forEach((score) => {sum += score});
  console.log(Math.floor(sum / scores.length * 1000) / 1000);
}

// 17
{
  let saikoro = Math.floor(Math.random() * 6 + 1);
  console.log(saikoro)
}